import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { siteConfig } from "@/lib/site";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}｜大手だけが、正解じゃない。`,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "関西 就活",
    "大阪 就活",
    "関西 優良企業",
    "大阪 優良企業",
    "関西 インターン",
    "大阪 インターン",
    "関西 就活イベント",
    "関西 新卒",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    title: `${siteConfig.name}｜大手だけが、正解じゃない。`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}｜大手だけが、正解じゃない。`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
