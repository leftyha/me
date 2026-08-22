import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/useLanguage";

export const stationIds = ["arrival", "thinking", "transformation", "experience", "technology", "lab", "why", "profile", "contact"];

export function StationRail() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const targets = stationIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = stationIds.indexOf(visible.target.id);
      if (index >= 0) setCurrent(index);
    }, { threshold: [0.2, 0.5, 0.8], rootMargin: "-15% 0px -25% 0px" });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label={t.nav.journey} className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ol className="pointer-events-auto flex flex-col gap-1 rounded-full px-1.5 py-2 glass">
        {stationIds.map((id, index) => {
          const isActive = index === current;
          return (
            <li key={id}>
              <a href={`#${id}`} aria-current={isActive ? "true" : undefined} className="group flex min-h-9 items-center gap-2 rounded-full px-2">
                <span aria-hidden="true" className={`h-1.5 rounded-full transition-all duration-500 ${isActive ? "w-6" : "w-1.5 bg-line"}`} style={isActive ? { background: "var(--gradient-ink)" } : undefined} />
                <span className="sr-only">{t.stations[index]}</span>
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs text-ink-soft transition-all duration-300 group-hover:max-w-[9rem] group-focus-visible:max-w-[9rem]">{t.stations[index]}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
