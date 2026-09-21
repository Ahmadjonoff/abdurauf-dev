"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleProvider";

export function SectionHead({
  title,
  actionHref,
  actionLabel,
}: {
  title: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  const { locale } = useLocale();
  return (
    <motion.div
      key={locale}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mb-9 flex items-baseline gap-4"
    >
      <h2 className="font-display text-3xl font-medium">{title}</h2>
      <span className="h-px flex-1 bg-[var(--border)]" />
      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          data-hover
          className="font-mono flex-none whitespace-nowrap text-xs text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
        >
          {actionLabel} →
        </Link>
      )}
    </motion.div>
  );
}
