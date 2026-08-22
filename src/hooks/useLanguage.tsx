import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { en, type Dictionary } from "@/locales/en";
import { es } from "@/locales/es";

export type Lang = "en" | "es";
const STORAGE_KEY = "lm.lang";
const dictionaries: Record<Lang, Dictionary> = { en, es };
type LanguageContextValue = { lang: Lang; t: Dictionary; setLang: (lang: Lang) => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch { /* storage may be unavailable */ }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

function setMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);
  useEffect(() => {
    const { meta } = dictionaries[lang];
    document.documentElement.lang = lang;
    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
  }, [lang]);
  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* noop */ }
  }, []);
  const value = useMemo(() => ({ lang, t: dictionaries[lang], setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
