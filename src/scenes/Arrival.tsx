import { useEffect, useRef, useState } from "react";

import { SolutionEngine } from "@/objects/SolutionEngine";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Arrival() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [engineProgress, setEngineProgress] = useState(0);
  const [entered, setEntered] = useState(false);
  const introTimer = useRef<number | null>(null);

  useEffect(() => {
    introTimer.current = window.setTimeout(() => setEntered(true), 120);
    return () => {
      if (introTimer.current !== null) window.clearTimeout(introTimer.current);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setEngineProgress(1);
      return;
    }

    let frame = 0;
    const delay = 450;
    const duration = 7200;
    const startedAt = window.performance.now();
    let lastPaint = 0;

    const animate = (now: number) => {
      const raw = Math.min(1, Math.max(0, (now - startedAt - delay) / duration));
      if (now - lastPaint >= 32 || raw === 1) {
        const eased = raw * raw * (3 - 2 * raw);
        setEngineProgress(eased);
        lastPaint = now;
      }
      if (raw < 1) frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [reducedMotion]);

  const percentage = Math.round(engineProgress * 100);

  return (
    <section id="arrival" className="hero-scroll-scene daylight">
      <div className="hero-scroll-stage flex items-center pt-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 grid-paper"
          style={{ backgroundPosition: `center ${engineProgress * 48}px` }}
        />
        <div
          aria-hidden="true"
          className="hero-parallax-glow"
          style={{ transform: `translate3d(${engineProgress * 18}px, ${engineProgress * -24}px, 0)` }}
        />
        <div className="hero-stage-content relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 lg:grid-cols-[1.02fr_1fr] lg:gap-6">
          <div
            className="hero-copy max-w-xl transition-[opacity,transform] duration-1000"
            style={{
              opacity: entered ? 1 : 0,
              transform: `translate3d(0, ${entered ? 0 : 18}px, 0)`,
            }}
          >
            <p className="kicker">{t.arrival.roles}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{t.arrival.name}</h1>
            <p className="hero-headline mt-5 text-balance text-2xl font-medium leading-[1.12] sm:text-3xl lg:text-4xl"><span className="ink-gradient-text">{t.arrival.headline}</span></p>
            <p className="hero-support mt-4 max-w-lg text-base leading-relaxed text-ink-soft">{t.arrival.support}</p>
            <div className="hero-actions mt-8 flex flex-wrap items-center gap-3">
              <a href="#thinking" className="inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5" style={{ background: "var(--gradient-ink)" }}>{t.arrival.ctaPrimary}</a>
              <a href="#contact" className="inline-flex min-h-12 items-center rounded-full border border-line bg-card px-6 text-sm font-semibold text-ink transition-colors hover:bg-secondary">{t.arrival.ctaSecondary}</a>
            </div>
            <div className="hero-progress mt-8 flex items-center gap-3">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/80">{t.arrival.scrollHint}</p>
              <span className="font-mono text-[0.65rem] tabular-nums text-ink-soft">{String(percentage).padStart(3, "0")}%</span>
            </div>
          </div>
          <div
            className="hero-engine transition-[opacity,transform] duration-1000"
            style={{
              opacity: entered ? 1 : 0,
              transform: `translate3d(0, ${entered ? 0 : 18}px, 0) scale(${entered ? 1 : 0.94})`,
            }}
          >
            <SolutionEngine progress={engineProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
