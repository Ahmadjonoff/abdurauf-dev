"use client";

import { motion } from "framer-motion";
import { RevealGroup, revealItem } from "../RevealSection";
import { CountUp } from "../CountUp";
import { stats } from "@/lib/data";
import { useLocale } from "@/lib/LocaleProvider";

export function StatsBar() {
  const { t } = useLocale();
  const labels = [t.stats.faster, t.stats.throughput, t.stats.users, t.stats.uptime];

  return (
    <div className="card p-5">
      <RevealGroup className="grid grid-cols-2 gap-3" stagger={0.07}>
        {stats.map((s, i) => (
          <motion.div key={i} variants={revealItem} className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3.5">
            <div className="font-mono text-xl font-semibold text-[var(--accent)]">
              {s.display ?? (
                <>
                  {s.prefix}
                  <CountUp target={s.target} decimals={s.decimals ?? 0} commas={s.target >= 1000} />
                  {s.suffix}
                </>
              )}
            </div>
            <div className="font-mono mt-1.5 text-[0.72rem] uppercase leading-snug tracking-[0.05em] text-[var(--text)] opacity-65">
              {labels[i]}
            </div>
          </motion.div>
        ))}
      </RevealGroup>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-3">
        <span className="relative flex h-2 w-2 flex-none">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ok)] opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ok)]" />
        </span>
        <div className="min-w-0">
          <div className="font-mono text-[0.72rem] uppercase tracking-[0.05em] text-[var(--text)] opacity-65">
            {t.about.factLabels.currently}
          </div>
          <div className="truncate text-[0.8rem] font-medium">{t.about.factValues.currently}</div>
        </div>
      </div>
    </div>
  );
}
