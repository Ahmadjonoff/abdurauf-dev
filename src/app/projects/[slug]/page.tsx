"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Topbar } from "@/components/Topbar";
import { projects } from "@/lib/data";
import { useLocale } from "@/lib/LocaleProvider";

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const { t, locale } = useLocale();
  const index = projects.findIndex((p) => p.slug === params.slug);
  const project = index >= 0 ? t.projects.items[index] : undefined;
  const tags = index >= 0 ? projects[index].tags : [];

  useEffect(() => {
    document.title = project ? `${project.title} — ${t.meta.title}` : t.meta.title;
  }, [project, t.meta.title]);

  return (
    <>
      <Topbar />
      <div className="px-4 sm:px-6">
        <main className="mx-auto max-w-[1080px] pb-20">
          <article className="mx-auto max-w-[720px] pt-10 md:pt-16">
            <Link
              href="/projects"
              data-hover
              className="font-mono inline-flex items-center gap-1.5 text-sm text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.projects.heading}
            </Link>

            {project ? (
              <motion.div
                key={`${locale}-${params.slug}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-display mt-6 text-3xl font-medium sm:text-4xl">{project.title}</h1>
                <p className="mt-4 text-lg text-[var(--text-dim)]">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono rounded border border-[var(--border)] px-2 py-1 text-[0.68rem] text-[var(--text-dim)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 space-y-8 border-t border-[var(--border)] pt-8">
                  <div>
                    <h2 className="font-mono text-xs uppercase tracking-[0.05em] text-[var(--accent)]">
                      {t.projects.labels.problem}
                    </h2>
                    <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--text)]">{project.problem}</p>
                  </div>
                  <div>
                    <h2 className="font-mono text-xs uppercase tracking-[0.05em] text-[var(--accent)]">
                      {t.projects.labels.approach}
                    </h2>
                    <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--text)]">{project.approach}</p>
                  </div>
                  <div>
                    <h2 className="font-mono text-xs uppercase tracking-[0.05em] text-[var(--accent)]">
                      {t.projects.labels.result}
                    </h2>
                    <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--text)]">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="mt-10 card p-8 text-center">
                <p className="text-[var(--text-dim)]">
                  {locale === "uz"
                    ? "Loyiha topilmadi."
                    : locale === "ru"
                      ? "Проект не найден."
                      : "Project not found."}
                </p>
              </div>
            )}
          </article>
        </main>
      </div>
    </>
  );
}
