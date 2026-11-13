import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/ui/icons";
import { articles } from "@/data/articles";
import { siteConfig } from "@/lib/site";
import { STOCK_IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "就活ノウハウ",
  description:
    "ES対策、面接対策、ガクチカ、自己PR、企業研究など、関西の就活生に役立つ就活ノウハウをまとめています。Instagramでも随時発信中。",
};

const ROTATIONS = ["tag-rotate--2", "tag-rotate-1", "tag-rotate--1", "tag-rotate-2"];

export default function KnowhowPage() {
  return (
    <div style={{ background: "var(--color-tag-bg)" }}>
      <PageHero
        breadcrumbLabel="就活ノウハウ"
        eyebrow="KNOW-HOW"
        title={["就活ノウハウ"]}
        description="ES対策、面接対策、ガクチカ、自己PR、企業研究など、関西の就活生に役立つ情報をInstagramと連動してお届けします。"
        photo={{ src: STOCK_IMAGES.deskNotebookLaptop, alt: "ノートとノートパソコン" }}
      />

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 0.06}>
              <div
                className={`tag-card ${ROTATIONS[i % ROTATIONS.length]} group block h-full p-2`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={a.thumbnail}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-2 top-2 border border-dashed px-2 py-1 text-[10px] tracking-wide"
                    style={{
                      fontFamily: "var(--font-tag-label)",
                      background: "var(--color-tag-surface)",
                      color: "var(--color-tag-muted)",
                      borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
                    }}
                  >
                    {a.category}
                  </span>
                </div>
                <div className="p-2 pt-3">
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-tag-data)", color: "var(--color-tag-muted)" }}
                  >
                    {a.publishedAt.replace(/-/g, ".")}
                  </p>
                  <h2
                    className="mt-1.5 text-base leading-snug"
                    style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
                  >
                    {a.title}
                  </h2>
                  <p
                    className="mt-2 line-clamp-2 text-xs leading-6"
                    style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
                  >
                    {a.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.2}
          className="tag-card mt-16 flex flex-col items-center gap-4 px-8 py-12 text-center"
        >
          <InstagramIcon size={28} className="text-[var(--color-stamp)]" />
          <p
            className="text-lg"
            style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
          >
            続きはInstagramでも発信しています。
          </p>
          <p
            className="max-w-md text-sm leading-6"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            記事化していない最新の選考情報やちょっとしたコツは、Instagramで随時発信中です。
          </p>
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--color-stamp)", fontFamily: "var(--font-tag-ui)" }}
          >
            <InstagramIcon size={15} />
            Instagramをフォローする
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}
