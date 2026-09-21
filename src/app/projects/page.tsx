"use client";

import { useEffect } from "react";
import { Topbar } from "@/components/Topbar";
import { RevealGroup } from "@/components/RevealSection";
import { ProjectCard } from "@/components/ProjectCard";
import { GithubActivity } from "@/components/GithubActivity";
import { projects } from "@/lib/data";
import { useLocale } from "@/lib/LocaleProvider";

export default function ProjectsListPage() {
  const { t } = useLocale();

  useEffect(() => {
    document.title = `${t.projects.heading} — ${t.meta.title}`;
  }, [t.projects.heading, t.meta.title]);

  return (
    <>
      <Topbar />
      <div className="px-4 sm:px-6">
        <main className="mx-auto max-w-[1080px] pb-20">
          <div className="pt-10 md:pt-16">
            <h1 className="font-display text-3xl font-medium sm:text-4xl">{t.projects.heading}</h1>
            <RevealGroup className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projects.map((p, i) => (
                <ProjectCard
                  key={p.slug}
                  slug={p.slug}
                  title={t.projects.items[i].title}
                  desc={t.projects.items[i].desc}
                  tags={p.tags}
                />
              ))}
            </RevealGroup>
            <GithubActivity />
          </div>
        </main>
      </div>
    </>
  );
}
