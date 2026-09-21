"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export function CountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
  commas = false,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  commas?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  const formatted = commas
    ? Math.round(display).toLocaleString("en-US")
    : display.toFixed(decimals);

  const finalFormatted = commas
    ? Math.round(target).toLocaleString("en-US")
    : target.toFixed(decimals);
  const finalText = `${prefix}${finalFormatted}${suffix}`;

  return (
    <motion.span
      ref={ref}
      className="tnum inline-block"
      style={{ minWidth: `${finalText.length}ch` }}
    >
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}
