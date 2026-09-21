export const profile = {
  name: "Abdurauf Ahmadjonov",
  firstName: "Abdurauf",
  lastName: "Ahmadjonov",
  email: "ahmadjonovabdurauf7@gmail.com",
  phone: "+998773047102",
  phoneDisplay: "+998 77 304 71 02",
  github: "https://github.com/Ahmadjonoff",
  githubUsername: "Ahmadjonoff",
  githubHandle: "@Ahmadjonoff",
  linkedin: "https://www.linkedin.com/in/abdurauf-ahmadjonov/",
  telegram: "https://t.me/Abdurauf_Ahmadjonov",
  telegramHandle: "@Abdurauf_Ahmadjonov",
  resume: "/resume.pdf",
};

export type Stat = {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Static text shown instead of counting up (e.g. a range like "2–3×"). */
  display?: string;
};

export const stats: Stat[] = [
  { target: 85, suffix: "%" },
  { target: 3, display: "2–3×" },
  { target: 10000, suffix: "+" },
  { target: 99.9, decimals: 1, suffix: "%" },
];

export const factKeys = ["location", "experience", "focus", "currently", "languages", "stack"] as const;

export const services = [
  { icon: "api", tags: ["Django", "DRF", "FastAPI"] },
  { icon: "pulse", tags: ["Django Channels", "Redis", "AsyncIO"] },
  { icon: "db", tags: ["PostgreSQL", "MongoDB", "Indexing"] },
  { icon: "web", tags: ["React", "Next.js", "TypeScript"] },
  { icon: "bot", tags: ["Selenium", "Playwright", "Scripting"] },
  { icon: "spark", tags: ["Google Gemini", "LLM pipelines", "Data quality"] },
];

export const projects = [
  { slug: "online-invitations-platform", tags: ["Django", "React", "PostgreSQL"] },
  { slug: "khanate", tags: ["Next.js", "TypeScript", "Landing page"] },
];
