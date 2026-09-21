"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { useLocale } from "@/lib/LocaleProvider";

const stack = [
  { name: "Python", Icon: SiPython, color: "#3776AB", darkColor: "#4B8BBE" },
  { name: "Django", Icon: SiDjango, color: "#0C4B33", darkColor: "#44B78B" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688", darkColor: "#2DD4BF" },
  { name: "React", Icon: SiReact, color: "#0891B2", darkColor: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "var(--text)", darkColor: "var(--text)" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", darkColor: "#5B9DE8" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791", darkColor: "#6FA8D8" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D", darkColor: "#F16A60" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", darkColor: "#5FB4F2" },
];

export function StackCard() {
  const { t } = useLocale();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-mount flag to avoid SSR/theme hydration mismatch
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card p-5"
    >
      <h2 className="font-display text-lg font-medium">{t.about.toolboxLabel}</h2>
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {stack.map(({ name, Icon, color, darkColor }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3.5 transition-colors duration-200 hover:border-[var(--accent)]"
          >
            <Icon size={22} color={isDark ? darkColor : color} />
            <span className="text-[0.7rem] font-medium">{name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
