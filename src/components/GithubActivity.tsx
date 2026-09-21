"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RevealGroup, revealItem } from "./RevealSection";
import { profile } from "@/lib/data";
import { useLocale } from "@/lib/LocaleProvider";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

const relativeUnits: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 31536000],
  ["month", 2592000],
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
];

function relativeTime(iso: string, locale: string) {
  const seconds = (Date.now() - new Date(iso).getTime()) / 1000;
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  for (const [unit, secondsInUnit] of relativeUnits) {
    const value = Math.floor(seconds / secondsInUnit);
    if (value >= 1) return rtf.format(-value, unit);
  }
  return rtf.format(0, "second");
}

const localeMap: Record<string, string> = { en: "en", uz: "uz", ru: "ru" };

export function GithubActivity() {
  const { locale, t } = useLocale();
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=3`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Repo[]) => {
        if (!cancelled) setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (failed || repos?.length === 0) return null;

  return (
    <div className="mt-10">
      <div className="mb-4 flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[var(--text-dim)]">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.67.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
        <h3 className="font-mono text-xs uppercase tracking-[0.05em] text-[var(--text-dim)]">
          {t.projects.githubHeading}
        </h3>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-3" stagger={0.06}>
        {(repos ?? Array.from({ length: 3 })).map((repo, i) =>
          repo ? (
            <motion.a
              key={repo.id}
              variants={revealItem}
              data-hover
              href={repo.html_url}
              target="_blank"
              rel="noopener"
              className="card flex flex-col gap-2 p-4 transition-colors duration-200 hover:border-[var(--accent)]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display truncate text-sm font-medium">{repo.name}</span>
                <span className="font-mono flex flex-none items-center gap-1 text-xs text-[var(--text-dim)]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
                    <path d="M12 2.5l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.9 5.8 21.6l1.6-7-5.4-4.8 7.1-.7L12 2.5z" />
                  </svg>
                  {repo.stargazers_count}
                </span>
              </div>
              <p className="line-clamp-2 min-h-[2.5em] text-xs text-[var(--text-dim)]">
                {repo.description ?? "—"}
              </p>
              <div className="font-mono mt-auto flex items-center justify-between text-[0.65rem] text-[var(--text-dim)]">
                <span>{repo.language ?? ""}</span>
                <span>{relativeTime(repo.updated_at, localeMap[locale])}</span>
              </div>
            </motion.a>
          ) : (
            <div
              key={i}
              aria-hidden="true"
              className="card h-[104px] animate-pulse p-4"
              style={{ background: "var(--surface-2)" }}
            />
          )
        )}
      </RevealGroup>
    </div>
  );
}
