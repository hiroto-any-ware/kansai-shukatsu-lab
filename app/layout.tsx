import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { siteConfig } from "@/lib/site";

// 「現場台帳」デザインシステム用フォント（DESIGN.md参照）。
// いずれも日本語グリフを含むが、next/font/google がセルフホスト用に
// 公開している subset には "latin" 系しかなく（CJKレンジが選べない）、
// それだと和文が全てフォールバック書体になってしまう。
// そのため Google Fonts の CSS2 を直接 <link> で読み込み、
// ブラウザ側で必要な unicode-range だけ取得させる（下の <head> 参照）。

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
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Zen+Old+Mincho:wght@400;500;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=DotGothic16&family=Martian+Mono:wght@400;500;700&display=swap"
        />
      </head>
      <body
        className="flex min-h-screen flex-col"
        style={{ background: "var(--color-tag-bg)", color: "var(--color-tag-ink)" }}
      >
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
