"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/LocaleProvider";

type Status = "idle" | "sending" | "success" | "error" | "unavailable";

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      if (res.status === 503) {
        setStatus("unavailable");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]";

  return (
    <div id="contact-form" className="card mt-4 scroll-mt-28 p-6 sm:p-8">
      <h3 className="font-display text-lg font-medium">{t.contact.form.heading}</h3>
      <form onSubmit={handleSubmit} className="mt-4 grid gap-3.5">
        {/* Honeypot — hidden from real visitors, bots tend to fill every input */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div className="grid gap-3.5 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            maxLength={200}
            placeholder={t.contact.form.name}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            required
            maxLength={320}
            placeholder={t.contact.form.email}
            className={inputClass}
          />
        </div>
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={4}
          placeholder={t.contact.form.message}
          className={`${inputClass} resize-none`}
        />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            data-hover
            disabled={status === "sending"}
            className="font-medium inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm text-[var(--accent-ink)] transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? t.contact.form.sending : t.contact.form.send}
          </button>
          {status === "success" && (
            <span className="text-sm text-[var(--ok)]">{t.contact.form.success}</span>
          )}
          {status === "error" && (
            <span className="text-sm text-[var(--text-dim)]">{t.contact.form.error}</span>
          )}
          {status === "unavailable" && (
            <span className="text-sm text-[var(--text-dim)]">{t.contact.form.unavailable}</span>
          )}
        </div>
      </form>
    </div>
  );
}
