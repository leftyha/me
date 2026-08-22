import { useState } from "react";

import { useCenteredSelection } from "@/hooks/useCenteredSelection";
import { useLanguage } from "@/hooks/useLanguage";

const ACCENTS = ["var(--orange)", "var(--teal)", "var(--gold)", "var(--cyan)", "var(--blue)", "var(--coral)"];

function ServiceVisual({ id, accent }: { id: string; accent: string }) {
  const box = (x: number, y: number, width: number, label: string) => <g><rect x={x} y={y} width={width} height={54} rx={12} fill="var(--card)" stroke={accent} strokeOpacity={0.75} strokeWidth={2} /><text x={x + width / 2} y={y + 32} textAnchor="middle" fontSize={14} className="font-mono" fill="var(--ink)">{label}</text></g>;
  const link = (path: string) => <path d={path} fill="none" stroke={accent} strokeWidth={3} strokeDasharray="7 9" className="lm-flow" />;

  if (id === "backend-apis") return <svg viewBox="0 0 480 240" className="h-auto w-full" aria-hidden="true">{box(18, 92, 104, "CLIENTS")}{link("M122 119 H190")}{box(190, 70, 112, "API")}{link("M302 96 C350 96 340 42 382 42")}{link("M302 122 C350 122 340 178 382 178")}{box(382, 15, 82, "DATA")}{box(382, 151, 82, "QUEUE")}</svg>;
  if (id === "fullstack-products") return <svg viewBox="0 0 480 240" className="h-auto w-full" aria-hidden="true">{box(24, 28, 118, "INTERFACE")}{box(24, 158, 118, "USERS")}{link("M142 55 C210 55 188 105 240 105")}{link("M142 185 C210 185 188 132 240 132")}{box(240, 92, 104, "PRODUCT")}{link("M344 119 H390")}{box(390, 92, 74, "LIVE")}</svg>;
  if (id === "integrations-payments") return <svg viewBox="0 0 480 240" className="h-auto w-full" aria-hidden="true">{box(20, 92, 108, "SYSTEM A")}{link("M128 119 H190")}{box(190, 92, 102, "WEBHOOK")}{link("M292 119 H352")}{box(352, 92, 108, "PAYMENT")}<circle cx={241} cy={48} r={17} fill={accent} opacity={0.85} /><text x={241} y={53} textAnchor="middle" fontSize={12} fill="var(--surface)">OK</text></svg>;
  if (id === "automation-ai") return <svg viewBox="0 0 480 240" className="h-auto w-full" aria-hidden="true">{box(18, 92, 100, "INPUTS")}{link("M118 119 H180")}{box(180, 70, 120, "WORKFLOW")}{link("M300 96 C350 96 340 42 382 42")}{link("M300 122 C350 122 340 178 382 178")}{box(382, 15, 82, "AGENT")}{box(382, 151, 82, "ACTION")}</svg>;
  if (id === "cloud-delivery") return <svg viewBox="0 0 480 240" className="h-auto w-full" aria-hidden="true">{box(20, 92, 92, "CODE")}{link("M112 119 H178")}{box(178, 92, 112, "DOCKER")}{link("M290 119 H352")}{box(352, 92, 108, "CLOUD")}<path d="M387 78 C390 50 432 48 438 78" fill="none" stroke={accent} strokeWidth={3} /></svg>;
  return <svg viewBox="0 0 480 240" className="h-auto w-full" aria-hidden="true">{box(20, 92, 108, "LEGACY")}{link("M128 119 H184")}{box(184, 72, 112, "BRIDGE")}{link("M296 98 C340 98 340 52 380 52")}{link("M296 124 C340 124 340 174 380 174")}{box(380, 25, 84, "API")}{box(380, 147, 84, "UI")}</svg>;
}

export function Lab() {
  const { t } = useLanguage();
  const [selected, select] = useState(0);
  const navRef = useCenteredSelection<HTMLOListElement>(selected);
  const item = t.lab.items[selected]!;
  const accent = ACCENTS[selected % ACCENTS.length] as string;

  return (
    <section id="lab" className="flow-section flow-section-services">
        <div className="flow-content mx-auto w-full max-w-6xl px-4">
          <header className="story-header max-w-3xl">
            <p className="kicker">{t.lab.kicker}</p>
            <h2 className="story-title mt-3">{t.lab.title}</h2>
            <p className="story-copy mt-4">{t.lab.copy}</p>
          </header>

          <div className="story-body mt-7 grid gap-5 lg:grid-cols-[0.54fr_1.46fr]">
            <ol ref={navRef} className="service-nav">
              {t.lab.items.map((service, index) => <li key={service.id}><button type="button" onClick={() => select(index)} aria-pressed={index === selected} className={`service-nav-button ${index === selected ? "is-active" : ""}`}><span className="font-mono text-xs text-orange">{String(index + 1).padStart(2, "0")}</span><span>{service.name}</span></button></li>)}
            </ol>

            <article key={item.id} className="service-detail panel grid gap-5 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="kicker" style={{ color: accent }}>{t.lab.status}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{item.name}</h3>
                <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{item.line}</p>
                <ol className="mt-6 grid gap-2 sm:grid-cols-2">
                  {item.flow.map((step, index) => <li key={step} className="flex items-center gap-3 rounded-xl border border-line bg-secondary/70 px-3 py-2.5"><span className="font-mono text-xs" style={{ color: accent }}>{String(index + 1).padStart(2, "0")}</span><span className="text-sm text-ink">{step}</span></li>)}
                </ol>
              </div>
              <div className="rounded-2xl border border-line bg-surface/60 p-3"><ServiceVisual id={item.id} accent={accent} /></div>
            </article>
          </div>
          <p className="flow-hint mt-4 text-sm text-ink-soft">{t.lab.hint}</p>
        </div>
    </section>
  );
}
