"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { revealItem } from "./RevealSection";
import type { Translation } from "@/lib/i18n";

export function BlogPostCard({ post }: { post: Translation["blog"]["posts"][number] }) {
  return (
    <motion.div
      variants={revealItem}
      className="card overflow-hidden transition-colors duration-200 hover:border-[var(--accent)]"
    >
      <Link
        href={`/blog/${post.slug}`}
        data-hover
        className="group flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="font-mono mb-1.5 text-[0.7rem] text-[var(--text-dim)]">{post.meta}</div>
          <div className="font-display text-lg font-medium">{post.title}</div>
          <div className="mt-1.5 text-sm text-[var(--text-dim)]">{post.excerpt}</div>
        </div>
        <span className="font-mono flex-none text-xl text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1">
          ›
        </span>
      </Link>
    </motion.div>
  );
}
