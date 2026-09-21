import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/lib/LocaleProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SITE_URL } from "@/lib/site";
import profilePhoto from "@/assets/profile.jpeg";

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
  openGraph: {
    title,
    description,
    images: [{ url: profilePhoto.src, width: profilePhoto.width, height: profilePhoto.height }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [profilePhoto.src],
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
        <div className="bg-wash" aria-hidden="true">
          <span className="bg-wash-blob" />
        </div>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
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
