"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Topbar } from "@/components/Topbar";
import { useLocale } from "@/lib/LocaleProvider";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const { t, locale } = useLocale();
  const post = t.blog.posts.find((p) => p.slug === params.slug);

  useEffect(() => {
    document.title = post ? `${post.title} — ${t.meta.title}` : t.meta.title;
  }, [post, t.meta.title]);

  return (
    <>
      <Topbar />
      <div className="px-4 sm:px-6">
        <main className="mx-auto max-w-[1080px] pb-20">
          <article className="mx-auto max-w-[720px] pt-10 md:pt-16">
            <Link
              href="/blog"
              data-hover
              className="font-mono inline-flex items-center gap-1.5 text-sm text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.blog.heading}
            </Link>

            {post ? (
              <motion.div
                key={`${locale}-${post.slug}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono mt-6 text-[0.72rem] uppercase tracking-[0.05em] text-[var(--text)] opacity-65">
                  {post.meta}
                </div>
                <h1 className="font-display mt-3 text-3xl font-medium sm:text-4xl">{post.title}</h1>
                <p className="mt-4 text-lg text-[var(--text-dim)]">{post.excerpt}</p>
                <div className="mt-8 space-y-4 border-t border-[var(--border)] pt-8 text-[0.98rem] leading-relaxed text-[var(--text)]">
                  {post.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="mt-10 card p-8 text-center">
                <p className="text-[var(--text-dim)]">
                  {locale === "uz"
                    ? "Post topilmadi."
                    : locale === "ru"
                      ? "Пост не найден."
                      : "Post not found."}
                </p>
              </div>
            )}
          </article>
        </main>
      </div>
    </>
  );
}
