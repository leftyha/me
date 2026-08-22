import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/useLanguage";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const NODES = [
  { id: "Business", x: 300, y: 60, color: "var(--gold)" }, { id: "Product", x: 470, y: 130, color: "var(--cyan)" }, { id: "Code", x: 510, y: 300, color: "var(--blue)" }, { id: "Data", x: 420, y: 440, color: "var(--purple)" }, { id: "Systems", x: 230, y: 460, color: "var(--teal)" }, { id: "Automation", x: 90, y: 340, color: "var(--orange)" }, { id: "Users", x: 110, y: 160, color: "var(--coral)" }, { id: "Constraints", x: 200, y: 40, color: "var(--muted)" },
];
const CENTER = { x: 300, y: 262 };

export function Thinking() {
  const { t } = useLanguage();
  const { ref, active } = useSceneProgress<HTMLElement>();
  const reduced = useReducedMotion();
  const [pathIndex, setPathIndex] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (pinned || reduced || !active) return;
    const id = window.setInterval(() => setPathIndex((index) => (index + 1) % t.thinking.paths.length), 4200);
    return () => window.clearInterval(id);
  }, [pinned, reduced, active, t.thinking.paths.length]);

  const path = t.thinking.paths[pathIndex]!;
  const activeIds = new Set(path.nodes);

  return (
    <section id="thinking" ref={ref} className="scene">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="kicker">{t.thinking.kicker}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">{t.thinking.title}</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{t.thinking.copy}</p>
          <ul className="mt-8 space-y-2" aria-label={t.thinking.hint}>
            {t.thinking.paths.map((item, index) => {
              const isActive = index === pathIndex;
              return <li key={item.id}><button type="button" onClick={() => { setPathIndex(index); setPinned(true); }} aria-pressed={isActive} className={`w-full rounded-2xl border px-4 py-3 text-left transition-all ${isActive ? "border-transparent bg-card shadow-[var(--shadow-soft)]" : "border-line bg-transparent hover:bg-secondary"}`}><span className="flex items-center gap-2 font-display text-sm font-semibold"><span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ background: isActive ? "var(--gradient-ink)" : "var(--line)" }} />{item.name}</span><span className="mt-1 block text-sm text-ink-soft">{item.note}</span><span className="mt-2 flex flex-wrap gap-1.5">{item.nodes.map((node) => <span key={node} className="rounded-full border border-line px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft">{t.thinking.nodeLabels[node] ?? node}</span>)}</span></button></li>;
            })}
          </ul>
        </div>
        <div className="relative rounded-3xl p-3 panel">
          <svg viewBox="0 0 600 520" className="h-auto w-full" aria-hidden="true">
            {NODES.map((node) => { const isOn = activeIds.has(node.id); return <line key={`link-${node.id}`} x1={CENTER.x} y1={CENTER.y} x2={node.x} y2={node.y} stroke={isOn ? node.color : "var(--line)"} strokeWidth={isOn ? 2 : 1} strokeOpacity={isOn ? 0.8 : 0.5} className={isOn && !reduced ? "lm-flow" : undefined} style={{ transition: "stroke 600ms ease, stroke-opacity 600ms ease" }} />; })}
            {path.nodes.map((id, index) => { const from = index === 0 ? null : NODES.find((n) => n.id === path.nodes[index - 1]); const to = NODES.find((n) => n.id === id); if (!from || !to) return null; return <path key={`seq-${id}`} d={`M${from.x} ${from.y} Q ${CENTER.x} ${CENTER.y} ${to.x} ${to.y}`} fill="none" stroke={to.color} strokeOpacity={0.35} strokeWidth={1.4} strokeDasharray="4 8" />; })}
            <circle cx={CENTER.x} cy={CENTER.y} r={64} fill="white" stroke="var(--line)" />
            <circle cx={CENTER.x} cy={CENTER.y} r={44} fill="none" stroke="var(--blue)" strokeOpacity={0.4} strokeDasharray="6 10" className={reduced ? undefined : "lm-orbit"} style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }} />
            <circle cx={CENTER.x} cy={CENTER.y} r={22} fill="url(#thinkCore)" />
            <defs><linearGradient id="thinkCore" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--blue)" /><stop offset="100%" stopColor="var(--purple)" /></linearGradient></defs>
            {NODES.map((node) => { const isOn = activeIds.has(node.id); return <g key={node.id} transform={`translate(${node.x} ${node.y})`}><circle r={isOn ? 15 : 10} fill="white" stroke={isOn ? node.color : "var(--line)"} strokeWidth={isOn ? 3 : 1.5} style={{ transition: "all 500ms ease" }} /><circle r={isOn ? 5 : 3} fill={isOn ? node.color : "var(--line)"} /></g>; })}
          </svg>
          <ul className="pointer-events-none absolute inset-0">{NODES.map((node) => { const isOn = activeIds.has(node.id); return <li key={node.id} className="absolute -translate-x-1/2 whitespace-nowrap font-mono text-[0.62rem] uppercase tracking-[0.16em] transition-colors" style={{ left: `${(node.x / 600) * 100}%`, top: `calc(${(node.y / 520) * 100}% + 1.35rem)`, color: isOn ? "var(--ink)" : "var(--muted)", opacity: isOn ? 1 : 0.65 }}>{t.thinking.nodeLabels[node.id] ?? node.id}</li>; })}</ul>
          <p className="px-3 pb-2 pt-1 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft">{t.thinking.core} — {path.name}</p>
        </div>
      </div>
    </section>
  );
}
