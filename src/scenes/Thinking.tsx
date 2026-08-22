import { useLanguage } from "@/hooks/useLanguage";
import { usePinnedScrollProgress } from "@/hooks/usePinnedScrollProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollSteps } from "@/hooks/useScrollSteps";

const NODES = [
  { id: "Business", x: 300, y: 60, color: "var(--gold)" },
  { id: "Product", x: 470, y: 130, color: "var(--cyan)" },
  { id: "Code", x: 510, y: 300, color: "var(--blue)" },
  { id: "Data", x: 420, y: 440, color: "var(--purple)" },
  { id: "Systems", x: 230, y: 460, color: "var(--teal)" },
  { id: "Automation", x: 90, y: 340, color: "var(--orange)" },
  { id: "Users", x: 110, y: 160, color: "var(--coral)" },
  { id: "Constraints", x: 200, y: 40, color: "var(--muted)" },
];

const CENTER = { x: 300, y: 262 };

export function Thinking() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const { ref, progress } = usePinnedScrollProgress<HTMLElement>({ startHold: 0.06, endHold: 0.1 });
  const { index: pathIndex, select } = useScrollSteps(progress, t.thinking.paths.length);
  const path = t.thinking.paths[pathIndex]!;
  const activeIds = new Set(path.nodes);

  return (
    <section id="thinking" ref={ref} className="scroll-story scroll-story-thinking">
      <div className="scroll-story-stage">
        <div className="story-content mx-auto w-full max-w-6xl px-4">
          <header className="story-header max-w-3xl">
            <p className="kicker">{t.thinking.kicker}</p>
            <h2 className="story-title mt-3">{t.thinking.title}</h2>
            <p className="story-copy mt-4">{t.thinking.copy}</p>
          </header>

          <div className="story-body mt-7 grid items-center gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <ul className="thinking-nav grid gap-2" aria-label={t.thinking.hint}>
                {t.thinking.paths.map((item, index) => {
                  const isActive = index === pathIndex;
                  return (
                    <li key={item.id}>
                      <button type="button" onClick={() => select(index)} aria-pressed={isActive} className={`thinking-card w-full rounded-2xl border px-5 py-4 text-left ${isActive ? "is-active" : ""}`}>
                        <span className="flex items-center gap-3 font-display text-base font-semibold">
                          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: isActive ? "var(--orange)" : "var(--line-strong)" }} />
                          {item.name}
                        </span>
                        <span className="mt-2 block text-sm leading-relaxed text-ink-soft">{item.note}</span>
                        <span className="mt-3 flex flex-wrap gap-2">
                          {item.nodes.map((node) => <span key={node} className="tech-pill">{t.thinking.nodeLabels[node] ?? node}</span>)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-sm text-ink-soft">{t.thinking.hint}</p>
            </div>

            <div className="thinking-graph panel relative p-3 sm:p-5">
              <svg viewBox="0 0 600 520" className="h-auto w-full" aria-hidden="true">
                {NODES.map((node, index) => {
                  const isOn = activeIds.has(node.id);
                  return <line key={`link-${node.id}`} x1={CENTER.x} y1={CENTER.y} x2={node.x} y2={node.y} stroke={isOn ? node.color : "var(--line-strong)"} strokeWidth={isOn ? 3 : 1.4} strokeOpacity={isOn ? 0.9 : 0.45} className={isOn && !reduced ? "lm-flow" : undefined} style={{ transition: `stroke 650ms ease ${index * 35}ms, stroke-width 650ms ease ${index * 35}ms, stroke-opacity 650ms ease ${index * 35}ms` }} />;
                })}
                <g key={path.id} className="mind-route-layer">
                  {path.nodes.map((id, index) => {
                    const from = index === 0 ? null : NODES.find((node) => node.id === path.nodes[index - 1]);
                    const to = NODES.find((node) => node.id === id);
                    if (!from || !to) return null;
                    return <path key={`seq-${id}`} d={`M${from.x} ${from.y} Q ${CENTER.x} ${CENTER.y} ${to.x} ${to.y}`} fill="none" stroke={to.color} strokeOpacity={0.55} strokeWidth={2.2} strokeDasharray="5 9" style={{ animationDelay: `${index * 90}ms` }} />;
                  })}
                </g>
                <circle cx={CENTER.x} cy={CENTER.y} r={70} fill="var(--card)" stroke="var(--line-strong)" strokeWidth={2} />
                <circle cx={CENTER.x} cy={CENTER.y} r={48} fill="none" stroke="var(--orange)" strokeOpacity={0.58} strokeDasharray="7 11" className={reduced ? undefined : "lm-orbit"} style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }} />
                <circle cx={CENTER.x} cy={CENTER.y} r={25} fill="url(#thinkCore)" />
                <defs><linearGradient id="thinkCore" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--orange)" /><stop offset="100%" stopColor="var(--teal)" /></linearGradient></defs>
                {NODES.map((node, index) => {
                  const isOn = activeIds.has(node.id);
                  return <g key={node.id} transform={`translate(${node.x} ${node.y})`} style={{ transition: `opacity 500ms ease ${index * 35}ms` }}><circle r={isOn ? 17 : 11} fill="var(--card)" stroke={isOn ? node.color : "var(--line-strong)"} strokeWidth={isOn ? 3.5 : 1.5} style={{ transition: "r 500ms ease, stroke 500ms ease, stroke-width 500ms ease" }} /><circle r={isOn ? 6 : 3.5} fill={isOn ? node.color : "var(--line-strong)"} style={{ transition: "r 500ms ease, fill 500ms ease" }} /></g>;
                })}
              </svg>
              <ul className="pointer-events-none absolute inset-0">
                {NODES.map((node) => {
                  const isOn = activeIds.has(node.id);
                  return <li key={node.id} className="absolute -translate-x-1/2 whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.12em]" style={{ left: `${(node.x / 600) * 100}%`, top: `calc(${(node.y / 520) * 100}% + 1.45rem)`, color: isOn ? "var(--ink)" : "var(--muted)", opacity: isOn ? 1 : 0.6, transition: "color 500ms ease, opacity 500ms ease" }}>{t.thinking.nodeLabels[node.id] ?? node.id}</li>;
                })}
              </ul>
              <p key={path.id} className="mind-route-caption px-3 pb-2 pt-1 text-center font-mono text-xs uppercase tracking-[0.16em] text-gold">{t.thinking.core} — {path.name}</p>
            </div>
          </div>
        </div>
        <div className="story-meter" aria-hidden="true"><span style={{ width: `${progress * 100}%` }} /></div>
      </div>
    </section>
  );
}
