import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/lib/LocaleProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SITE_URL } from "@/lib/site";
import { profile } from "@/lib/data";
import profilePhoto from "@/assets/profile.jpeg";
import ogImage from "@/assets/og-image.png";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const title = "Abdurauf Ahmadjonov — Full-Stack Developer";
const description =
  "Portfolio of Abdurauf Ahmadjonov — full-stack developer building async Python backends, real-time systems, React/Next.js frontends and AI-assisted tooling.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Abdurauf Ahmadjonov",
    "Abdurauf Ahmadjonov portfolio",
    "Full-Stack Developer",
    "Python Django Developer",
    "Next.js Developer Uzbekistan",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: title,
    images: [{ url: ogImage.src, width: ogImage.width, height: ogImage.height }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.src],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}${profilePhoto.src}`,
  jobTitle: "Full-Stack Developer",
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin, profile.telegram],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tashkent",
    addressCountry: "UZ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="bg-wash" aria-hidden="true">
          <span className="bg-wash-blob" />
        </div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LocaleProvider>
            {children}
            <ScrollToTop />
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
