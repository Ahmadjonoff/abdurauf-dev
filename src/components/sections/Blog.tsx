"use client";

import { SectionHead } from "./SectionHead";
import { RevealGroup } from "../RevealSection";
import { BlogPostCard } from "../BlogPostCard";
import { useLocale } from "@/lib/LocaleProvider";

export function Blog() {
  const { t } = useLocale();

  return (
    <section id="blog" className="scroll-mt-28 pt-16 md:pt-20">
      <SectionHead title={t.blog.heading} actionHref="/blog" actionLabel={t.blog.viewAll} />
      <RevealGroup className="grid gap-3.5" stagger={0.1}>
        {t.blog.posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </RevealGroup>
    </section>
  );
}
