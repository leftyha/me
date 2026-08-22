import { useEffect, useRef, type RefObject } from "react";

export function useCenteredSelection<T extends HTMLElement>(index: number): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const container = ref.current;
    const active = container?.querySelector<HTMLElement>('[aria-selected="true"], [aria-pressed="true"]');
    if (!container || !active) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = window.requestAnimationFrame(() => {
      const containerRect = container.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      const left = container.scrollLeft
        + activeRect.left
        - containerRect.left
        - (container.clientWidth - activeRect.width) / 2;

      container.scrollTo({
        left: Math.max(0, left),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [index]);

  return ref;
}
