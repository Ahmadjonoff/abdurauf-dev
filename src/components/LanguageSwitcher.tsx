"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { locales, localeLabels } from "@/lib/i18n";
import { useLocale } from "@/lib/LocaleProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        data-hover
        onClick={() => setOpen((o) => !o)}
        aria-label="Til"
        aria-haspopup="menu"
        aria-expanded={open}
        className="font-mono flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
      >
        {localeLabels[locale]}
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Til"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="card absolute right-0 top-[calc(100%+8px)] flex min-w-[84px] flex-col gap-0.5 rounded-xl p-1"
          >
            {locales.map((l) => (
              <button
                key={l}
                type="button"
                role="menuitemradio"
                aria-checked={locale === l}
                data-hover
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`font-mono rounded-lg px-3 py-1.5 text-left text-xs transition-colors ${
                  locale === l
                    ? "bg-[var(--accent)] text-[var(--accent-ink)]"
                    : "text-[var(--text-dim)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
