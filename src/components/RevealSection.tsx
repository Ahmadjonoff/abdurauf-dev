"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useLocale } from "@/lib/LocaleProvider";

const VIEWPORT = { once: true, amount: 0.15 } as const;

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { locale } = useLocale();
  return (
    <motion.div
      key={locale}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const { locale } = useLocale();
  return (
    <motion.div
      key={locale}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: Math.min(stagger, 0.08) } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};
