import { useLanguage } from "@/hooks/useLanguage";
import { stageProgress, usePinnedScrollProgress } from "@/hooks/usePinnedScrollProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const PIECES = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  chaos: { x: 40 + ((index * 97) % 520), y: 40 + ((index * 53) % 300), r: ((index * 37) % 90) - 45 },
  cluster: index % 4,
}));

const ACCENTS = ["var(--orange)", "var(--teal)", "var(--gold)", "var(--blue)"];

export function Transformation() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const { ref, progress } = usePinnedScrollProgress<HTMLElement>({ startHold: 0.06, endHold: 0.1 });
  const visualProgress = reduced ? 1 : progress;
  const stageCount = t.transformation.stages.length;
  const stageIndex = Math.min(stageCount - 1, Math.floor(visualProgress * stageCount));
  const design = stageProgress(visualProgress, 0.12, 0.34);
  const build = stageProgress(visualProgress, 0.3, 0.54);
  const integrate = stageProgress(visualProgress, 0.48, 0.72);
  const ship = stageProgress(visualProgress, 0.66, 0.9);
  const impact = stageProgress(visualProgress, 0.84, 1);

  return (
    <section id="transformation" ref={ref} className="scroll-story scroll-story-transformation">
      <div className="scroll-story-stage">
        <div className="story-content mx-auto w-full max-w-6xl px-4">
          <header className="story-header max-w-3xl">
            <p className="kicker">{t.transformation.kicker}</p>
            <h2 className="story-title mt-3">{t.transformation.title}</h2>
          </header>

          <div className="story-body mt-7 grid items-center gap-6 lg:grid-cols-[1.24fr_0.76fr]">
            <div className="transformation-canvas panel relative p-3 sm:p-5">
              <svg viewBox="0 0 600 380" className="h-auto w-full" aria-hidden="true">
                <rect x={70} y={50} width={460} height={280} rx={18} fill="none" stroke="var(--line-strong)" strokeOpacity={0.3 + build * 0.7} strokeWidth={2} />
                {[0, 1, 2, 3].map((lane) => <rect key={lane} x={92 + lane * 108} y={80} width={92} height={220} rx={12} fill="var(--card)" fillOpacity={0.25 + build * 0.65} stroke={ACCENTS[lane]} strokeOpacity={0.25 + build * 0.5} strokeWidth={1.6} />)}
                {[0, 1, 2].map((lane) => <path key={`conn-${lane}`} d={`M${184 + lane * 108} 190 H ${92 + (lane + 1) * 108}`} stroke={ACCENTS[lane]} strokeOpacity={integrate * 0.9} strokeWidth={3} className={integrate > 0.35 ? "lm-flow" : undefined} fill="none" />)}
                {PIECES.map((piece) => {
                  const laneX = 138 + piece.cluster * 108;
                  const row = Math.floor(piece.id / 4);
                  const orderedY = 108 + row * 32;
                  const x = piece.chaos.x + (laneX - piece.chaos.x) * design;
                  const y = piece.chaos.y + (orderedY - piece.chaos.y) * design;
                  const rotation = piece.chaos.r * (1 - design);
                  const color = ACCENTS[piece.cluster] as string;
                  const width = 14 + build * 46;
                  return <g key={piece.id} transform={`translate(${x} ${y}) rotate(${rotation})`} style={{ transition: "transform 100ms linear" }}><rect x={-width / 2} y={-7} width={width} height={14} rx={4} fill={color} fillOpacity={0.16 + build * 0.22} stroke={color} strokeOpacity={0.75} /><rect x={-width / 2 + 4} y={-2} width={Math.max(3, (width - 12) * integrate)} height={4} rx={2} fill={color} opacity={0.95} /></g>;
                })}
                <g opacity={ship}><rect x={70 + 460 * (1 - ship) * 0.5} y={332} width={460 * ship} height={8} rx={4} fill="url(#shipGrad)" /></g>
                <g opacity={impact}>{[0, 1, 2, 3, 4].map((index) => <circle key={index} cx={120 + index * 90} cy={354} r={5 + impact * 5} fill={ACCENTS[index % 4]} opacity={0.85} />)}</g>
                <defs><linearGradient id="shipGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="var(--orange)" /><stop offset="100%" stopColor="var(--teal)" /></linearGradient></defs>
              </svg>
            </div>

            <ol className="grid gap-2 self-start">
              {t.transformation.stages.map((stage, index) => {
                const isActive = index === stageIndex;
                const isDone = index < stageIndex;
                return (
                  <li key={stage.name} className={`method-step rounded-2xl border px-4 py-3 ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}`}>
                    <p className="flex items-baseline gap-3"><span className="font-mono text-xs tabular-nums text-orange">{String(index + 1).padStart(2, "0")}</span><span className="font-display text-base font-semibold">{stage.name}</span></p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{stage.note}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="story-meter" aria-hidden="true"><span style={{ width: `${progress * 100}%` }} /></div>
      </div>
    </section>
  );
}
