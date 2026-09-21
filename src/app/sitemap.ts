import type { MetadataRoute } from "next";
import { translations } from "@/lib/i18n";
import { projects } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = Array.from(new Set(translations.en.blog.posts.map((p) => p.slug)));

  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
