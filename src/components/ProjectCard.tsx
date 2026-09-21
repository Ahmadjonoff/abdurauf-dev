"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { revealItem } from "./RevealSection";

export function ProjectCard({
  slug,
  title,
  desc,
  tags,
}: {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <motion.div variants={revealItem} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <Link
        href={`/projects/${slug}`}
        data-hover
        className="card group flex h-full flex-col p-6 transition-colors duration-200 hover:border-[var(--accent)]"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-medium">{title}</h3>
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 flex-none text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-2.5 text-sm text-[var(--text-dim)]">{desc}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono rounded border border-[var(--border)] px-2 py-1 text-[0.68rem] text-[var(--text-dim)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
