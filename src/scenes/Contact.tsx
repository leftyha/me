import { availableLinks, profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
  const { t } = useLanguage();
  const primary = availableLinks.find((link) => link.id === "email") ?? availableLinks[0];
  const secondary = availableLinks.filter((link) => link.id !== primary?.id);

  return (
    <section id="contact" className="contact-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="contact-panel panel relative overflow-hidden p-7 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="contact-glow" />
          <div className="relative max-w-4xl">
            <p className="kicker">{t.contact.kicker}</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl">{t.contact.title}<br /><span className="ink-gradient-text">{t.contact.titleAccent}</span></h2>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {primary && <a href={primary.href} target="_blank" rel="noreferrer noopener" className="primary-action">{t.contact.cta}</a>}
              {secondary.map((link) => <a key={link.id} href={link.href} target="_blank" rel="noreferrer noopener" className="secondary-action">{link.label}</a>)}
            </div>
            <p className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-teal">{t.contact.availability}</p>
          </div>
          <footer className="relative mt-14 border-t border-line pt-6 text-sm text-ink-soft">
            <p>© {new Date().getFullYear()} {profile.name} — {profile.jobTitle}</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
