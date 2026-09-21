"use client";

import { motion } from "framer-motion";
import { SectionHead } from "./SectionHead";
import { Reveal, RevealGroup, revealItem } from "../RevealSection";
import { ContactForm } from "../ContactForm";
import { profile } from "@/lib/data";
import { useLocale } from "@/lib/LocaleProvider";

const GITHUB_PATH =
  "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.67.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z";

export function Contact() {
  const { t } = useLocale();

  const items = [
    { label: t.contact.labels.email, value: profile.email, href: `mailto:${profile.email}`, path: "M3 6h18v12H3z M3 7l9 6 9-6" },
    {
      label: t.contact.labels.phone,
      value: profile.phoneDisplay,
      href: `tel:${profile.phone}`,
      path: "M6 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L17 13l4 2v4c0 1-1 2-2 2-8 0-15-7-15-15 0-1 1-2 2-2Z",
    },
    { label: t.contact.labels.telegram, value: profile.telegramHandle, href: profile.telegram, path: "M4 12l16-8-5 16-4-5-4 3z" },
    {
      label: t.contact.labels.github,
      value: profile.githubHandle,
      href: profile.github,
      path: GITHUB_PATH,
      fill: true,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-28 pt-16 pb-20 md:pt-20">
      <SectionHead title={t.contact.heading} />

      <Reveal
        className="rounded-[1.75rem] p-8 sm:p-12"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
          color: "var(--accent-ink)",
        }}
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="font-display text-2xl font-medium sm:text-3xl">{t.contact.title}</h3>
            <p className="mt-3.5 text-[0.98rem] opacity-80">{t.contact.desc}</p>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.06}>
            {items.map((it) => (
              <motion.a
                key={it.label}
                variants={revealItem}
                whileHover={{ x: 4 }}
                data-hover
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noopener" : undefined}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors duration-200"
                style={{ background: "color-mix(in srgb, var(--accent-ink) 12%, transparent)" }}
              >
                <span
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full"
                  style={{ background: "color-mix(in srgb, var(--accent-ink) 18%, transparent)" }}
                >
                  {it.fill ? (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="var(--accent-ink)">
                      <path d={it.path} />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="var(--accent-ink)" strokeWidth={1.7}>
                      <path d={it.path} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="font-mono block text-[0.65rem] uppercase tracking-[0.05em] opacity-70">
                    {it.label}
                  </span>
                  <span className="mt-0.5 block break-all text-sm font-medium">{it.value}</span>
                </span>
              </motion.a>
            ))}
          </RevealGroup>
        </div>
      </Reveal>

      <ContactForm />

      <div className="font-mono mt-10 text-center text-xs text-[var(--text-dim)]">
        © 2026 {profile.name} · {t.contact.footerTagline}
      </div>
    </section>
  );
}
