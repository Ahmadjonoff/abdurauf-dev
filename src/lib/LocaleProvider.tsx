"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type Locale, type Translation, translations } from "./i18n";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translation;
} | null>(null);

const STORAGE_KEY = "locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === "en" || stored === "uz" || stored === "ru")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time restore of the viewer's saved language on mount
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    const { title, description } = translations[locale].meta;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
