import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useSceneProgress } from "@/hooks/useSceneProgress";

const ACCENTS = ["var(--gold)", "var(--blue)", "var(--cyan)", "var(--teal)", "var(--purple)", "var(--coral)"];

export function ExperienceRoute() {
  const { t } = useLanguage();
  const { ref, progress } = useSceneProgress<HTMLElement>();
  const [selected, setSelected] = useState(t.experience.stops.length - 1);
  const stops = t.experience.stops;
  const drawn = Math.min(1, Math.max(0, (progress - 0.12) / 0.6));
  const current = stops[selected]!;
  const points = stops.map((_, index) => ({ x: 60 + index * ((640 - 60) / (stops.length - 1)), y: 210 - index * 26 + (index % 2 === 0 ? 18 : -12) }));
  const line = points.map((point, index) => index === 0 ? `M${point.x} ${point.y}` : `Q ${(points[index - 1]!.x + point.x) / 2} ${points[index - 1]!.y} ${point.x} ${point.y}`).join(" ");

  return (
    <section id="experience" ref={ref} className="scene">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-xl"><p className="kicker">{t.experience.kicker}</p><h2 className="mt-3 font-display text-3xl sm:text-4xl">{t.experience.title}</h2><p className="mt-4 text-lg leading-relaxed text-ink-soft">{t.experience.copy}</p></header>
        <div className="mt-10 rounded-3xl p-4 panel sm:p-6">
          <div className="relative hidden sm:block">
            <svg viewBox="0 0 700 260" className="h-auto w-full" aria-hidden="true">
              <path d={line} fill="none" stroke="var(--line)" strokeWidth={10} strokeLinecap="round" /><path d={line} fill="none" stroke="url(#routeGrad)" strokeWidth={4} strokeLinecap="round" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - drawn} />
              <defs><linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="var(--gold)" /><stop offset="50%" stopColor="var(--blue)" /><stop offset="100%" stopColor="var(--coral)" /></linearGradient></defs>
              {points.map((point, index) => <g key={index}><circle cx={point.x} cy={point.y} r={index === selected ? 13 : 8} fill="white" stroke={ACCENTS[index]} strokeWidth={index === selected ? 4 : 2} style={{ transition: "all 400ms ease" }} />{index === selected && <circle cx={point.x} cy={point.y} r={4} fill={ACCENTS[index]} />}</g>)}
            </svg>
            <ul className="absolute inset-0">{stops.map((stop, index) => <li key={stop.id} className="absolute -translate-x-1/2" style={{ left: `${(points[index]!.x / 700) * 100}%`, top: `calc(${(points[index]!.y / 260) * 100}% + 1.1rem)` }}><button type="button" onClick={() => setSelected(index)} aria-pressed={index === selected} className={`min-h-11 max-w-[9rem] rounded-xl px-2 py-1 text-center text-[0.72rem] leading-tight transition-colors ${index === selected ? "font-semibold text-ink" : "text-ink-soft hover:text-ink"}`}>{stop.station}</button></li>)}</ul>
          </div>
          <ol className="grid gap-2 sm:hidden" aria-label={t.experience.hint}>{stops.map((stop, index) => <li key={stop.id}><button type="button" onClick={() => setSelected(index)} aria-pressed={index === selected} className={`flex w-full min-h-11 items-center gap-3 rounded-2xl border px-3 py-3 text-left ${index === selected ? "border-transparent bg-secondary" : "border-line"}`}><span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full border-2" style={{ borderColor: ACCENTS[index] }} /><span className="font-display text-sm font-semibold">{stop.station}</span><span className="ml-auto font-mono text-[0.62rem] text-ink-soft">{stop.period}</span></button></li>)}</ol>
          <div className="mt-6 grid gap-4 rounded-2xl border border-line bg-card p-5 sm:grid-cols-[1fr_auto]"><div><p className="kicker" style={{ color: ACCENTS[selected] }}>{current.period}</p><h3 className="mt-2 font-display text-xl">{current.role}</h3><p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">{current.note}</p><ul className="mt-4 flex flex-wrap gap-1.5">{current.tags.map((tag) => <li key={tag} className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft">{tag}</li>)}</ul></div><p className="self-start font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-soft">{String(selected + 1).padStart(2, "0")} / {String(stops.length).padStart(2, "0")}</p></div>
        </div>
      </div>
    </section>
  );
}
