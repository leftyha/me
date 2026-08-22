import { useEffect, useRef, useState } from "react";

import { SolutionEngine } from "@/objects/SolutionEngine";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Arrival() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [entered, setEntered] = useState(false);
  const [engineProgress, setEngineProgress] = useState(reduced ? 1 : 0);

  useEffect(() => {
    const id = window.setTimeout(() => setEntered(true), 120);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (reduced) {
      setEngineProgress(1);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const raw = -rect.top / distance;
      setEngineProgress(Math.min(1, Math.max(0, raw)));
    };
    const onMove = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onMove, { passive: true });
    window.addEventListener("resize", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onMove);
      window.removeEventListener("resize", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <section id="arrival" ref={ref} className={`relative overflow-visible daylight ${reduced ? "min-h-[100svh]" : "h-[260svh]"}`}>
      <div className={`${reduced ? "relative min-h-[100svh]" : "sticky top-0 h-[100svh]"} flex items-center overflow-hidden pt-24`}>
        <div aria-hidden="true" className="absolute inset-0 opacity-40 grid-paper" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 lg:grid-cols-[1.02fr_1fr] lg:gap-6">
          <div className="max-w-xl transition-all duration-1000" style={{ opacity: entered ? 1 : 0, transform: entered ? "translateY(0)" : "translateY(18px)" }}>
            <p className="kicker">{t.arrival.roles}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{t.arrival.name}</h1>
            <p className="mt-5 text-balance text-xl font-medium leading-snug sm:text-2xl"><span className="ink-gradient-text">{t.arrival.headline}</span></p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">{t.arrival.support}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#thinking" className="inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5" style={{ background: "var(--gradient-ink)" }}>{t.arrival.ctaPrimary}</a>
              <a href="#contact" className="inline-flex min-h-12 items-center rounded-full border border-line bg-card px-6 text-sm font-semibold text-ink transition-colors hover:bg-secondary">{t.arrival.ctaSecondary}</a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/80">{t.arrival.scrollHint}</p>
              <span className="font-mono text-[0.65rem] tabular-nums text-ink-soft">{String(Math.round(engineProgress * 100)).padStart(3, "0")}%</span>
            </div>
          </div>
          <div className="transition-all duration-1000" style={{ opacity: entered ? 1 : 0, transform: entered ? "scale(1)" : "scale(0.94)" }}>
            <SolutionEngine progress={engineProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
