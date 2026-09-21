"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-mount flag to avoid SSR/theme hydration mismatch
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      data-hover
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-16 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)] text-xs"
        style={{ marginLeft: isDark ? "auto" : 0 }}
      >
        {mounted ? (isDark ? "☾" : "☀") : ""}
      </motion.span>
    </button>
  );
}
