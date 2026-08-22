import { useLanguage } from "@/hooks/useLanguage";

type Props = { progress: number };
const inputSeeds = [{ x: 24, y: 68, r: -18 }, { x: 8, y: 152, r: 12 }, { x: 38, y: 236, r: -8 }, { x: 14, y: 318, r: 16 }, { x: 44, y: 398, r: -14 }, { x: 6, y: 452, r: 9 }, { x: 52, y: 512, r: -6 }];
const outputSeeds = [70, 140, 210, 280, 350, 420];
const ACCENTS = ["var(--blue)", "var(--cyan)", "var(--teal)", "var(--purple)", "var(--orange)", "var(--gold)", "var(--coral)"];

function glyph(index: number, color: string) {
  switch (index % 7) {
    case 0: return <rect x={-5} y={-5} width={10} height={10} rx={2} fill={color} />;
    case 1: return <circle r={5} fill="none" stroke={color} strokeWidth={2} />;
    case 2: return <path d="M-6 4 L0 -6 L6 4 Z" fill={color} />;
    case 3: return <g stroke={color} strokeWidth={2} strokeLinecap="round"><path d="M-6 0h12M0 -6v12" /></g>;
    case 4: return <rect x={-6} y={-3} width={12} height={6} rx={3} fill={color} opacity={0.85} />;
    case 5: return <g fill={color}><circle cx={-4} cy={0} r={2.4} /><circle cx={4} cy={-3} r={2.4} /><circle cx={3} cy={4} r={2.4} /></g>;
    default: return <path d="M-6 -4 L6 -4 L2 4 L-2 4 Z" fill={color} opacity={0.9} />;
  }
}

export function SolutionEngine({ progress }: Props) {
  const { t } = useLanguage();
  const p = Math.min(1, Math.max(0, progress));
  const intake = Math.min(1, p / 0.4);
  const process = Math.min(1, Math.max(0, (p - 0.3) / 0.4));
  const release = Math.min(1, Math.max(0, (p - 0.62) / 0.38));

  return (
    <figure className="relative mx-auto w-full max-w-[560px]">
      <svg viewBox="0 0 560 560" role="img" aria-label={`${t.arrival.engineTitle}: ${t.arrival.inputLabel} → ${t.arrival.processLabel} → ${t.arrival.outputLabel}`} className="h-auto w-full overflow-visible">
        <defs>
          <linearGradient id="engineCore" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--blue)" /><stop offset="100%" stopColor="var(--purple)" /></linearGradient>
          <linearGradient id="platePlate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="white" stopOpacity="0.95" /><stop offset="100%" stopColor="white" stopOpacity="0.6" /></linearGradient>
          <filter id="engineShadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dy="16" stdDeviation="16" floodColor="oklch(0.24 0.03 265)" floodOpacity="0.18" /></filter>
        </defs>
        <g opacity={0.55}>{inputSeeds.map((seed, i) => <path key={`rail-${i}`} d={`M${seed.x + 20} ${seed.y} C 140 ${seed.y}, 170 280, 236 280`} fill="none" stroke={ACCENTS[i % ACCENTS.length]} strokeWidth={1.2} strokeOpacity={0.35 + intake * 0.5} className={intake > 0.2 ? "lm-flow" : undefined} />)}</g>
        {inputSeeds.map((seed, i) => {
          const target = { x: 236, y: 280 };
          const travel = Math.min(1, Math.max(0, intake * 1.15 - i * 0.04));
          const x = seed.x + (target.x - seed.x) * travel;
          const y = seed.y + (target.y - seed.y) * travel;
          const color = ACCENTS[i % ACCENTS.length] as string;
          return <g key={`in-${i}`} transform={`translate(${x} ${y})`} opacity={1 - travel * 0.75}><g className={travel < 0.15 ? "lm-drift" : undefined} transform={`rotate(${seed.r * (1 - travel)}) scale(${1 - travel * 0.45})`}>{glyph(i, color)}</g><text x={14} y={4} className="font-mono" fontSize={10} fill="var(--muted)" opacity={Math.max(0, 1 - travel * 2.2)}>{t.arrival.inputs[i]}</text></g>;
        })}
        <g filter="url(#engineShadow)"><circle cx={300} cy={280} r={124} fill="url(#platePlate)" stroke="var(--line)" /></g>
        <g transform={`rotate(${process * 220} 300 280)`}><circle cx={300} cy={280} r={112} fill="none" stroke="var(--blue)" strokeOpacity={0.35} strokeWidth={1.5} strokeDasharray="34 16" /></g>
        <g transform={`rotate(${-process * 300} 300 280)`}><circle cx={300} cy={280} r={92} fill="none" stroke="var(--purple)" strokeOpacity={0.3} strokeWidth={1.5} strokeDasharray="8 14" /></g>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          const open = 18 + process * 26;
          const cx = 300 + Math.cos(angle) * (44 + open);
          const cy = 280 + Math.sin(angle) * (44 + open);
          const color = ACCENTS[i % ACCENTS.length] as string;
          return <g key={`mod-${i}`} transform={`translate(${cx} ${cy}) rotate(${(angle * 180) / Math.PI})`}><rect x={-20} y={-11} width={40} height={22} rx={6} fill="white" fillOpacity={0.92} stroke={color} strokeOpacity={0.55} /><rect x={-14} y={-4} width={12 + process * 12} height={3} rx={1.5} fill={color} opacity={0.75} /><rect x={-14} y={2} width={8} height={3} rx={1.5} fill="var(--line)" /></g>;
        })}
        <circle cx={300} cy={280} r={30 + process * 6} fill="url(#engineCore)" opacity={0.92} />
        <circle cx={300} cy={280} r={40 + process * 10} fill="none" stroke="url(#engineCore)" strokeOpacity={0.35} strokeWidth={2} />
        <text x={300} y={284} textAnchor="middle" className="font-mono" fontSize={10} letterSpacing="1.5" fill="white">{String(Math.round(p * 100)).padStart(3, "0")}</text>
        {outputSeeds.map((y, i) => {
          const appear = Math.min(1, Math.max(0, release * 1.3 - i * 0.12));
          const color = ACCENTS[(i + 2) % ACCENTS.length] as string;
          return <g key={`out-${i}`} opacity={appear}><path d={`M424 280 C 470 280, 470 ${y + 46}, 500 ${y + 46}`} fill="none" stroke={color} strokeWidth={1.4} strokeOpacity={0.5} /><g transform={`translate(${470 + (1 - appear) * 26} ${y + 46})`}><rect x={-4} y={-4} width={8} height={8} rx={2} fill={color} /></g></g>;
        })}
      </svg>
      <div className="mt-2 grid gap-3 sm:grid-cols-3">
        {[
          { label: t.arrival.inputLabel, value: t.arrival.inputs.slice(0, 3).join(" · "), tone: "var(--coral)" },
          { label: t.arrival.processLabel, value: `${Math.round(process * 100)}%`, tone: "var(--blue)" },
          { label: t.arrival.outputLabel, value: t.arrival.outputs.slice(0, 2).join(" · "), tone: "var(--teal)" },
        ].map((item) => <div key={item.label} className="rounded-xl px-3 py-2 glass"><p className="kicker" style={{ color: item.tone }}>{item.label}</p><p className="mt-1 text-xs leading-snug text-ink-soft">{item.value}</p></div>)}
      </div>
      <figcaption className="sr-only">{t.arrival.outputs.join(", ")}</figcaption>
    </figure>
  );
}
