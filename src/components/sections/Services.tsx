"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { SectionHead } from "./SectionHead";
import { RevealGroup, revealItem } from "../RevealSection";
import { services } from "@/lib/data";
import { useLocale } from "@/lib/LocaleProvider";

const icons: Record<string, ReactElement> = {
  api: (
    <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
  ),
  pulse: <path d="M3 12h4l2-7 4 14 2-7h6" strokeLinecap="round" strokeLinejoin="round" />,
  db: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 20V9" strokeLinecap="round" />
    </>
  ),
  bot: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" strokeLinecap="round" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.4" />
    </>
  ),
};

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="scroll-mt-28 pt-16 md:pt-20">
      <SectionHead title={t.services.heading} />
      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.icon}
            variants={revealItem}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="card flex flex-col p-6 transition-colors duration-200 hover:border-[var(--accent)]"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)]">
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="var(--accent)"
                strokeWidth={1.6}
              >
                {icons[s.icon]}
              </svg>
            </div>
            <h3 className="font-display text-lg font-medium">{t.services.items[i].title}</h3>
            <p className="mt-2.5 text-sm text-[var(--text-dim)]">{t.services.items[i].desc}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono rounded border border-[var(--border)] px-2 py-1 text-[0.68rem] text-[var(--text-dim)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
