"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, factKeys } from "@/lib/data";
import { useLocale } from "@/lib/LocaleProvider";
import { MagneticButton } from "../MagneticButton";
import profilePhoto from "@/assets/profile.jpeg";

const socials = [
  {
    label: "GitHub",
    href: profile.github,
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.67.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM.5 8.98h4.96V23.5H.5V8.98ZM9 8.98h4.76v1.98h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.95 3.31 5.95 7.62v7.49h-4.96v-6.64c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5v6.76H9V8.98Z",
  },
  {
    label: "Telegram",
    href: profile.telegram,
    path: "M23.5 1.5 20 22.4c-.24 1.17-.92 1.46-1.87.91l-5.15-3.79-2.48 2.39c-.28.28-.5.5-1.03.5l.37-5.24L19.4 6.9c.5-.44-.11-.68-.77-.25L6.3 14.2 1.16 12.6c-1.12-.35-1.14-1.12.24-1.66L22.1.62c.93-.35 1.75.22 1.4 1.9Z",
  },
];

export function ProfileCard() {
  const { t } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="card flex h-full flex-col overflow-hidden p-5"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 flex-none overflow-hidden rounded-full ring-2 ring-[var(--border)] sm:h-24 sm:w-24">
          <Image
            src={profilePhoto}
            alt={profile.name}
            fill
            priority
            quality={85}
            placeholder="blur"
            sizes="96px"
            className="object-cover"
            style={{ objectPosition: "50% 18%" }}
          />
        </div>
        <div className="min-w-0">
          <div className="font-mono inline-flex items-center gap-1.5 rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[0.68rem] text-[var(--text-dim)]">
            <span className="relative flex h-1.5 w-1.5 flex-none">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ok)] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--ok)]" />
            </span>
            {t.hero.badge}
          </div>
          <h1 className="font-display mt-1.5 truncate text-xl font-medium sm:text-2xl">
            {profile.firstName} {profile.lastName} <span aria-hidden="true">👋</span>
          </h1>
          <p className="mt-1 text-sm font-medium text-[var(--accent)]">{t.hero.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-[var(--text-dim)]">{t.hero.bio}</p>

      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 border-y border-[var(--border)] py-4">
        {factKeys.slice(0, 4).map((key) => (
          <div key={key}>
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-[var(--text)] opacity-65">
              {t.about.factLabels[key]}
            </div>
            <div className="mt-1 text-[0.82rem] font-medium leading-snug">{t.about.factValues[key]}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <MagneticButton
          href={`mailto:${profile.email}`}
          className="font-medium inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm text-[var(--accent-ink)]"
        >
          {t.about.contactCta}
        </MagneticButton>
        <MagneticButton
          href={profile.resume}
          target="_blank"
          rel="noopener"
          className="font-medium inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--text)]"
        >
          {t.hero.downloadCV}
        </MagneticButton>
      </div>

      <div className="mt-5 flex gap-2.5">
        {socials.map((s) => (
          <a
            key={s.label}
            data-hover
            href={s.href}
            target="_blank"
            rel="noopener"
            aria-label={s.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-dim)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d={s.path} />
            </svg>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
