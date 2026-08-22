import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

type AutoRotationOptions = {
  interval?: number;
  manualPause?: number;
};

export function useAutoRotatingSelection<T extends HTMLElement>(
  count: number,
  { interval = 5200, manualPause = 9000 }: AutoRotationOptions = {},
): {
  selected: number;
  select: (index: number) => void;
  pause: () => void;
  isVisible: boolean;
  sectionRef: RefObject<T | null>;
} {
  const safeCount = Math.max(1, count);
  const sectionRef = useRef<T | null>(null);
  const pauseUntil = useRef(0);
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const pause = useCallback(() => {
    pauseUntil.current = Date.now() + manualPause;
  }, [manualPause]);

  const select = useCallback((index: number) => {
    pause();
    setSelected(Math.min(safeCount - 1, Math.max(0, index)));
  }, [pause, safeCount]);

  useEffect(() => {
    setSelected((current) => Math.min(current, safeCount - 1));
  }, [safeCount]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { rootMargin: "-18% 0px -18%", threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || safeCount < 2) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible" || Date.now() < pauseUntil.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const section = sectionRef.current;
      if (section?.querySelector(":focus-visible")) return;
      setSelected((current) => (current + 1) % safeCount);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, isVisible, safeCount]);

  return { selected, select, pause, isVisible, sectionRef };
}
