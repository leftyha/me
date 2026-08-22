import { useLayoutEffect, useRef, useState, type RefObject } from "react";

export function calculatePinnedProgress(
  scrollY: number,
  sectionTop: number,
  sectionHeight: number,
  viewportHeight: number,
) {
  const scrollDistance = Math.max(1, sectionHeight - viewportHeight);
  return Math.min(1, Math.max(0, (scrollY - sectionTop) / scrollDistance));
}

export function stageProgress(progress: number, start: number, end: number) {
  if (end <= start) return 0;
  return Math.min(1, Math.max(0, (progress - start) / (end - start)));
}

export function usePinnedScrollProgress<T extends HTMLElement>(options: {
  startHold?: number;
  endHold?: number;
} = {}): {
  ref: RefObject<T | null>;
  progress: number;
} {
  const startHold = Math.min(0.4, Math.max(0, options.startHold ?? 0));
  const endHold = Math.min(0.4, Math.max(0, options.endHold ?? 0));
  const ref = useRef<T | null>(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const section = ref.current;
    if (!section) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const rawProgress = calculatePinnedProgress(
        window.scrollY,
        sectionTop,
        section.offsetHeight,
        window.innerHeight,
      );
      const next = stageProgress(rawProgress, startHold, 1 - endHold);

      if (Math.abs(next - progressRef.current) < 0.0005) return;
      progressRef.current = next;
      setProgress(next);
    };

    const requestMeasure = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", requestMeasure, { passive: true });
    window.addEventListener("resize", requestMeasure, { passive: true });
    window.addEventListener("pageshow", requestMeasure);

    const resizeObserver = new ResizeObserver(requestMeasure);
    resizeObserver.observe(section);

    return () => {
      window.removeEventListener("scroll", requestMeasure);
      window.removeEventListener("resize", requestMeasure);
      window.removeEventListener("pageshow", requestMeasure);
      resizeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [endHold, startHold]);

  return { ref, progress };
}
