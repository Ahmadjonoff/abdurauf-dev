"use client";

import { SectionHead } from "./SectionHead";
import { RevealGroup } from "../RevealSection";
import { ProjectCard } from "../ProjectCard";
import { GithubActivity } from "../GithubActivity";
import { projects } from "@/lib/data";
import { useLocale } from "@/lib/LocaleProvider";

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="scroll-mt-28 pt-16 md:pt-20">
      <SectionHead title={t.projects.heading} actionHref="/projects" actionLabel={t.projects.viewAll} />
      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
    </section>
  );
}
