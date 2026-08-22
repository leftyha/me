import { useLanguage } from "@/hooks/useLanguage";
import { useAutoRotatingSelection } from "@/hooks/useAutoRotatingSelection";
import { useCenteredSelection } from "@/hooks/useCenteredSelection";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const NODES = [
  { id: "Business", x: 380, y: 48, color: "var(--gold)" },
  { id: "Product", x: 590, y: 92, color: "var(--cyan)" },
  { id: "Code", x: 670, y: 205, color: "var(--blue)" },
  { id: "Data", x: 560, y: 310, color: "var(--purple)" },
  { id: "Systems", x: 350, y: 326, color: "var(--teal)" },
  { id: "Automation", x: 145, y: 286, color: "var(--orange)" },
  { id: "Users", x: 92, y: 145, color: "var(--coral)" },
  { id: "Constraints", x: 225, y: 60, color: "var(--muted)" },
];

const CENTER = { x: 380, y: 190 };

export function Thinking() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const { selected: pathIndex, select, sectionRef } = useAutoRotatingSelection<HTMLElement>(t.thinking.paths.length, { interval: 5000 });
  const carouselRef = useCenteredSelection<HTMLUListElement>(pathIndex);
  const path = t.thinking.paths[pathIndex]!;
  const activeIds = new Set(path.nodes);

  return (
    <section id="thinking" ref={sectionRef} className="flow-section flow-section-thinking">
        <div className="flow-content mx-auto w-full max-w-6xl px-4">
          <header className="story-header max-w-3xl">
            <p className="kicker">{t.thinking.kicker}</p>
            <h2 className="story-title mt-3">{t.thinking.title}</h2>
            <p className="story-copy mt-4">{t.thinking.copy}</p>
          </header>

          <div className="story-body thinking-layout mt-7 grid items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="thinking-copy-column">
              <ul ref={carouselRef} className="thinking-nav grid gap-2" aria-label={t.thinking.pathsLabel}>
                {t.thinking.paths.map((item, index) => {
                  const isActive = index === pathIndex;
                  return (
                    <li key={item.id}>
                      <button type="button" onClick={() => select(index)} aria-pressed={isActive} className={`thinking-card w-full rounded-2xl border px-5 py-4 text-left ${isActive ? "is-active" : ""}`}>
                        <span className="flex items-center gap-3 font-display text-base font-semibold">
                          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: isActive ? "var(--orange)" : "var(--line-strong)" }} />
                          {item.name}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <article key={path.id} className="thinking-path-detail panel mt-4 p-5" aria-label={path.name}>
                <p className="kicker">{t.thinking.core}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{path.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{path.note}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {path.nodes.map((node) => <li key={node} className="tech-pill">{t.thinking.nodeLabels[node] ?? node}</li>)}
                </ul>
              </article>
            </div>

            <div className="thinking-graph panel relative p-3 sm:p-5">
              <div className="thinking-graph-frame">
                <svg viewBox="0 0 760 380" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
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
                <circle cx={CENTER.x} cy={CENTER.y} r={56} fill="var(--card)" stroke="var(--line-strong)" strokeWidth={2} />
                <circle cx={CENTER.x} cy={CENTER.y} r={39} fill="none" stroke="var(--orange)" strokeOpacity={0.58} strokeDasharray="7 11" className={reduced ? undefined : "lm-orbit"} style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }} />
                <circle cx={CENTER.x} cy={CENTER.y} r={21} fill="url(#thinkCore)" />
                <defs><linearGradient id="thinkCore" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--orange)" /><stop offset="100%" stopColor="var(--teal)" /></linearGradient></defs>
                {NODES.map((node, index) => {
                  const isOn = activeIds.has(node.id);
                  return (
                    <g key={node.id} style={{ transition: `opacity 500ms ease ${index * 35}ms` }}>
                      <g transform={`translate(${node.x} ${node.y})`}>
                        <circle r={isOn ? 17 : 11} fill="var(--card)" stroke={isOn ? node.color : "var(--line-strong)"} strokeWidth={isOn ? 3.5 : 1.5} style={{ transition: "r 500ms ease, stroke 500ms ease, stroke-width 500ms ease" }} />
                        <circle r={isOn ? 6 : 3.5} fill={isOn ? node.color : "var(--line-strong)"} style={{ transition: "r 500ms ease, fill 500ms ease" }} />
                      </g>
                      <text x={node.x} y={node.y + 31} textAnchor="middle" fill={isOn ? "var(--ink)" : "var(--muted)"} opacity={isOn ? 1 : 0.58} fontSize="14" fontFamily="var(--font-mono)" letterSpacing="1.1">{t.thinking.nodeLabels[node.id] ?? node.id}</text>
                    </g>
                  );
                })}
                </svg>
              </div>
              <p key={path.id} className="mind-route-caption px-3 pb-2 pt-1 text-center font-mono text-xs uppercase tracking-[0.16em] text-gold">{t.thinking.core} — {path.name}</p>
            </div>
          </div>
        </div>
    </section>
  );
}
