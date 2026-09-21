"use client";

import { useEffect } from "react";
import { Topbar } from "@/components/Topbar";
import { RevealGroup } from "@/components/RevealSection";
import { BlogPostCard } from "@/components/BlogPostCard";
import { useLocale } from "@/lib/LocaleProvider";

export default function BlogListPage() {
  const { t } = useLocale();

  useEffect(() => {
    document.title = `${t.blog.heading} — ${t.meta.title}`;
  }, [t.blog.heading, t.meta.title]);

  return (
    <>
      <Topbar />
      <div className="px-4 sm:px-6">
        <main className="mx-auto max-w-[1080px] pb-20">
          <div className="pt-10 md:pt-16">
            <h1 className="font-display text-3xl font-medium sm:text-4xl">{t.blog.heading}</h1>
            <RevealGroup className="mt-9 grid gap-3.5" stagger={0.08}>
              {t.blog.posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </RevealGroup>
          </div>
        </main>
      </div>
    </>
  );
}
