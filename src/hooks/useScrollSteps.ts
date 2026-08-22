import { useEffect, useRef, useState } from "react";

export function useScrollSteps(progress: number, count: number) {
  const safeCount = Math.max(1, count);
  const scrollIndex = Math.min(safeCount - 1, Math.floor(progress * safeCount));
  const lastScrollIndex = useRef(scrollIndex);
  const [index, setIndex] = useState(scrollIndex);

  useEffect(() => {
    if (scrollIndex === lastScrollIndex.current) return;
    lastScrollIndex.current = scrollIndex;
    setIndex(scrollIndex);
  }, [scrollIndex]);

  return { index, select: setIndex, scrollIndex };
}
