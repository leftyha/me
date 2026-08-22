import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { clusterAccent, techClusters, type ClusterId } from "@/data/tech";

export function TechUniverse() {
  const { t } = useLanguage();
  const [cluster, setCluster] = useState<ClusterId>("build");
  const [tool, setTool] = useState<string | null>(null);
  const tools = techClusters[cluster];
  const activeTool = tools.find((item) => item.name === tool) ?? tools[0]!;
  const accent = clusterAccent[cluster];
  return (
    <section id="technology" className="scene overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-xl"><p className="kicker">{t.tech.kicker}</p><h2 className="mt-3 font-display text-3xl sm:text-4xl">{t.tech.title}</h2><p className="mt-4 text-lg leading-relaxed text-ink-soft">{t.tech.copy}</p></header>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={t.tech.title}>{t.tech.clusters.map((item) => { const id = item.id as ClusterId; const isActive = id === cluster; return <button key={item.id} type="button" role="tab" aria-selected={isActive} onClick={() => { setCluster(id); setTool(null); }} className={`min-h-11 rounded-full border px-4 text-sm transition-all ${isActive ? "border-transparent bg-card font-semibold shadow-[var(--shadow-soft)]" : "border-line text-ink-soft hover:bg-secondary hover:text-ink"}`} style={isActive ? { boxShadow: `inset 0 -2px 0 ${clusterAccent[id]}` } : undefined}>{item.name}</button>; })}</div>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl p-6 panel grid-paper"><p className="kicker" style={{ color: accent }}>{t.tech.clusters.find((item) => item.id === cluster)?.note}</p><ul className="relative mt-6 flex flex-wrap gap-3">{tools.map((item, index) => { const isActive = item.name === activeTool.name; return <li key={`${item.name}-${index}`}><button type="button" onMouseEnter={() => setTool(item.name)} onFocus={() => setTool(item.name)} onClick={() => setTool(item.name)} aria-pressed={isActive} className={`min-h-11 rounded-2xl border px-4 py-2 text-left transition-all duration-300 ${isActive ? "-translate-y-0.5 bg-card shadow-[var(--shadow-soft)]" : "bg-card/60"}`} style={{ borderColor: isActive ? accent : "var(--line)" }}><span className="font-display text-sm font-semibold">{item.name}</span></button></li>; })}</ul>
            <svg viewBox="0 0 400 160" className="mt-8 h-auto w-full max-w-md" aria-hidden="true"><circle cx={60} cy={80} r={22} fill="white" stroke={accent} strokeWidth={3} /><text x={60} y={84} textAnchor="middle" fontSize={9} className="font-mono" fill="var(--ink)">{activeTool.name.slice(0, 6)}</text>{activeTool.relations.map((relation, index) => { const y = 24 + index * (112 / Math.max(1, activeTool.relations.length - 1 || 1)); return <g key={relation}><path d={`M82 80 C 150 80, 180 ${y}, 240 ${y}`} fill="none" stroke={accent} strokeOpacity={0.55} strokeWidth={1.6} className="lm-flow" /><circle cx={244} cy={y} r={4} fill={accent} /><text x={256} y={y + 4} fontSize={11} fill="var(--muted)">{relation}</text></g>; })}</svg>
          </div>
          <aside className="rounded-3xl p-6 glass"><p className="kicker">{t.tech.relationLabel}</p><h3 className="mt-2 font-display text-2xl">{activeTool.name}</h3><ul className="mt-4 space-y-2">{activeTool.relations.map((relation) => <li key={relation} className="flex items-center gap-2 text-sm text-ink-soft"><span aria-hidden="true" className="h-1.5 w-6 rounded-full" style={{ background: accent }} />{relation}</li>)}</ul><p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-soft">{t.tech.hint}</p></aside>
        </div>
      </div>
    </section>
  );
}
