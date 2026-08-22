import { useLanguage } from "@/hooks/useLanguage";
import { useSceneProgress, stageProgress } from "@/hooks/useSceneProgress";

const PIECES = Array.from({ length: 24 }, (_, i) => ({ id: i, chaos: { x: 40 + ((i * 97) % 520), y: 40 + ((i * 53) % 300), r: ((i * 37) % 90) - 45 }, cluster: i % 4 }));
const ACCENTS = ["var(--blue)", "var(--cyan)", "var(--purple)", "var(--orange)"];

export function Transformation() {
  const { t } = useLanguage();
  const { ref, progress } = useSceneProgress<HTMLElement>();
  const stageCount = t.transformation.stages.length;
  const stageIndex = Math.min(stageCount - 1, Math.floor(progress * stageCount));
  const design = stageProgress(progress, 0.16, 0.36);
  const build = stageProgress(progress, 0.34, 0.55);
  const integrate = stageProgress(progress, 0.52, 0.72);
  const ship = stageProgress(progress, 0.7, 0.88);
  const impact = stageProgress(progress, 0.85, 1);

  return (
    <section id="transformation" ref={ref} className="scene overflow-hidden daylight">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-xl"><p className="kicker">{t.transformation.kicker}</p><h2 className="mt-3 font-display text-3xl sm:text-4xl">{t.transformation.title}</h2><p className="mt-4 text-lg leading-relaxed text-ink-soft">{t.transformation.copy}</p></header>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative rounded-3xl p-2 panel">
            <svg viewBox="0 0 600 380" className="h-auto w-full" aria-hidden="true">
              <rect x={70} y={50} width={460} height={280} rx={18} fill="none" stroke="var(--line)" strokeOpacity={build} />
              {[0, 1, 2, 3].map((lane) => <rect key={lane} x={92 + lane * 108} y={80} width={92} height={220} rx={12} fill="white" fillOpacity={0.55 * build} stroke={ACCENTS[lane]} strokeOpacity={0.35 * build} />)}
              {[0, 1, 2].map((lane) => <path key={`conn-${lane}`} d={`M${184 + lane * 108} 190 H ${92 + (lane + 1) * 108}`} stroke={ACCENTS[lane]} strokeOpacity={integrate * 0.8} strokeWidth={2} className={integrate > 0.4 ? "lm-flow" : undefined} fill="none" />)}
              {PIECES.map((piece) => { const laneX = 138 + piece.cluster * 108; const row = Math.floor(piece.id / 4); const orderedY = 108 + row * 32; const move = design; const x = piece.chaos.x + (laneX - piece.chaos.x) * move; const y = piece.chaos.y + (orderedY - piece.chaos.y) * move; const rotation = piece.chaos.r * (1 - move); const color = ACCENTS[piece.cluster] as string; const w = 12 + build * 46; return <g key={piece.id} transform={`translate(${x} ${y}) rotate(${rotation})`} style={{ transition: "transform 120ms linear" }}><rect x={-w / 2} y={-6} width={w} height={12} rx={4} fill={color} fillOpacity={0.16 + build * 0.2} stroke={color} strokeOpacity={0.55} /><rect x={-w / 2 + 4} y={-2} width={Math.max(3, (w - 12) * integrate)} height={4} rx={2} fill={color} opacity={0.8} /></g>; })}
              <g opacity={ship}><rect x={70 + 460 * (1 - ship) * 0.5} y={332} width={460 * ship} height={6} rx={3} fill="url(#shipGrad)" /></g>
              <g opacity={impact}>{[0, 1, 2, 3, 4].map((i) => <circle key={i} cx={120 + i * 90} cy={352} r={4 + impact * 4} fill={ACCENTS[i % 4]} opacity={0.7} />)}</g>
              <defs><linearGradient id="shipGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="var(--blue)" /><stop offset="100%" stopColor="var(--teal)" /></linearGradient></defs>
            </svg>
            <p className="px-4 pb-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft">{t.transformation.hint}</p>
          </div>
          <ol className="grid gap-2 self-start">{t.transformation.stages.map((stage, index) => { const isActive = index === stageIndex; const isDone = index < stageIndex; return <li key={stage.name} className={`rounded-2xl border px-4 py-3 transition-all duration-500 ${isActive ? "border-transparent bg-card shadow-[var(--shadow-soft)]" : "border-line bg-transparent"}`} style={{ opacity: isActive ? 1 : isDone ? 0.85 : 0.5 }}><p className="flex items-baseline gap-2"><span className="font-mono text-[0.65rem] tabular-nums text-ink-soft">{String(index + 1).padStart(2, "0")}</span><span className="font-display text-sm font-semibold">{stage.name}</span></p><p className="mt-1 text-sm leading-snug text-ink-soft">{stage.note}</p></li>; })}</ol>
        </div>
      </div>
    </section>
  );
}
