import { useCallback, useEffect, useRef, useState } from "react";

import { clusterAccent, techClusters, type ClusterId } from "@/data/tech";
import { useAutoRotatingSelection } from "@/hooks/useAutoRotatingSelection";
import { useCenteredSelection } from "@/hooks/useCenteredSelection";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function TechUniverse() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const { selected: clusterIndex, select, pause, isVisible, sectionRef } = useAutoRotatingSelection<HTMLElement>(t.tech.clusters.length);
  const tabsRef = useCenteredSelection<HTMLDivElement>(clusterIndex);
  const cluster = t.tech.clusters[clusterIndex]!.id as ClusterId;
  const tools = techClusters[cluster];
  const [toolIndex, setToolIndex] = useState(0);
  const toolPauseUntil = useRef(0);
  const activeTool = tools[Math.min(toolIndex, tools.length - 1)]!;
  const accent = clusterAccent[cluster];

  const chooseTool = useCallback((index: number) => {
    toolPauseUntil.current = Date.now() + 6000;
    pause();
    setToolIndex(index);
  }, [pause]);

  useEffect(() => setToolIndex(0), [cluster]);

  useEffect(() => {
    if (!isVisible || reduced || tools.length < 2) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible" || Date.now() < toolPauseUntil.current) return;
      setToolIndex((current) => (current + 1) % tools.length);
    }, 1700);

    return () => window.clearInterval(timer);
  }, [isVisible, reduced, tools.length, cluster]);

  return (
    <section id="technology" ref={sectionRef} className="flow-section flow-section-technology">
        <div className="flow-content mx-auto w-full max-w-6xl px-4">
          <header className="story-header max-w-3xl">
            <p className="kicker">{t.tech.kicker}</p>
            <h2 className="story-title mt-3">{t.tech.title}</h2>
            <p className="story-copy mt-4">{t.tech.copy}</p>
          </header>

          <div ref={tabsRef} className="tech-tabs mt-6" role="group" aria-label={t.tech.title}>
            {t.tech.clusters.map((item, index) => {
              const id = item.id as ClusterId;
              const isActive = index === clusterIndex;
              return <button key={item.id} type="button" aria-pressed={isActive} onClick={() => select(index)} className={`tech-tab ${isActive ? "is-active" : ""}`} style={isActive ? { borderColor: clusterAccent[id], color: clusterAccent[id] } : undefined}>{item.name}</button>;
            })}
          </div>

          <div className="story-body mt-5 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="technology-canvas panel relative min-h-[22rem] overflow-hidden p-6 grid-paper">
              <p className="kicker" style={{ color: accent }}>{t.tech.clusters[clusterIndex]?.note}</p>
              <ul className="relative mt-5 flex flex-wrap gap-3">
                {tools.map((item, index) => {
                  const isActive = item.name === activeTool.name;
                  return <li key={`${item.name}-${index}`}><button type="button" onFocus={() => chooseTool(index)} onClick={() => chooseTool(index)} aria-pressed={isActive} className={`tool-button ${isActive ? "is-active" : ""}`} style={{ borderColor: isActive ? accent : "var(--line)" }}><span className="font-display text-base font-semibold">{item.name}</span></button></li>;
                })}
              </ul>

              <svg viewBox="0 0 440 170" className="mt-7 h-auto w-full max-w-xl" aria-hidden="true">
                <circle cx={70} cy={85} r={27} fill="var(--card)" stroke={accent} strokeWidth={3} />
                <text x={70} y={90} textAnchor="middle" fontSize={11} className="font-mono" fill="var(--ink)">{activeTool.name.slice(0, 7)}</text>
                {activeTool.relations.map((relation, index) => {
                  const y = 24 + index * (122 / Math.max(1, activeTool.relations.length - 1 || 1));
                  return <g key={relation}><path d={`M97 85 C 170 85, 190 ${y}, 268 ${y}`} fill="none" stroke={accent} strokeOpacity={0.72} strokeWidth={2.2} className="lm-flow" /><circle cx={274} cy={y} r={5} fill={accent} /><text x={288} y={y + 5} fontSize={13} fill="var(--muted)">{relation}</text></g>;
                })}
              </svg>
            </div>

            <aside key={activeTool.name} className="technology-detail panel p-7">
              <p className="kicker">{t.tech.relationLabel}</p>
              <h3 className="mt-3 font-display text-3xl">{activeTool.name}</h3>
              <ul className="mt-6 grid gap-3">
                {activeTool.relations.map((relation) => <li key={relation} className="flex items-center gap-3 text-base text-ink-soft"><span aria-hidden="true" className="h-1.5 w-8 rounded-full" style={{ background: accent }} />{relation}</li>)}
              </ul>
            </aside>
          </div>
        </div>
    </section>
  );
}
