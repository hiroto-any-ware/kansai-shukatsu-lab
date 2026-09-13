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

export default function KnowhowPage() {
  return (
    <div className="lab-home">
      <PageHero
        breadcrumbLabel="就活ノウハウ"
        eyebrow="KNOW-HOW"
        title={["就活ノウハウ"]}
        description="ES対策、面接対策、ガクチカ、自己PR、企業研究など、関西の就活生に役立つ情報をInstagramと連動してお届けします。"
        bgWord="LEARN"
        photo={{ src: STOCK_IMAGES.deskNotebookLaptop, alt: "ノートとノートパソコン" }}
      />

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 0.06}>
              <div className="group block h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={a.thumbnail}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="font-label absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-ink">
                    {a.category}
                  </span>
                </div>
                <p className="mt-3 text-xs text-[#515966]">{a.publishedAt}</p>
                <h2 className="font-display mt-1.5 inline text-base font-bold leading-snug text-ink decoration-electric underline-offset-4 transition-colors group-hover:text-electric group-hover:underline">
                  {a.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#515966]">
                  {a.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-[#eef0f3] px-8 py-12 text-center">
          <InstagramIcon size={28} className="text-ink" />
          <p className="font-display text-lg font-bold text-ink">
            続きはInstagramでも発信しています。
          </p>
          <p className="max-w-md text-sm leading-6 text-[#515966]">
            記事化していない最新の選考情報やちょっとしたコツは、Instagramで随時発信中です。
          </p>
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-6 py-3 text-sm font-semibold text-white"
          >
            <InstagramIcon size={15} />
            Instagramをフォローする
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}
