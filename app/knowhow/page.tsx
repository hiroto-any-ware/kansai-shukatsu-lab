import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/ui/icons";
import { articles } from "@/data/articles";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "就活ノウハウ",
  description:
    "ES対策、面接対策、ガクチカ、自己PR、企業研究など、関西の就活生に役立つ就活ノウハウをまとめています。Instagramでも随時発信中。",
};

export default function KnowhowPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <div className="bg-navy-50">
        <Container className="py-14 md:py-20">
          <Breadcrumb items={[{ label: "就活ノウハウ" }]} />
          <Eyebrow className="mt-6">KNOW-HOW</Eyebrow>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-navy-900 md:text-5xl">
            就活ノウハウ
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-navy-500">
            ES対策、面接対策、ガクチカ、自己PR、企業研究など、関西の就活生に役立つ情報をInstagramと連動してお届けします。
          </p>
        </Container>
      </div>

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
                    className="object-cover"
                  />
                  <span className="font-label absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-navy-900">
                    {a.category}
                  </span>
                </div>
                <p className="mt-3 text-xs text-navy-400">{a.publishedAt}</p>
                <h2 className="font-display mt-1.5 text-base font-bold leading-snug text-navy-900">
                  {a.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-xs leading-6 text-navy-500">
                  {a.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-navy-50 px-8 py-12 text-center">
          <InstagramIcon size={28} className="text-navy-900" />
          <p className="font-display text-lg font-bold text-navy-900">
            続きはInstagramでも発信しています。
          </p>
          <p className="max-w-md text-sm leading-6 text-navy-500">
            記事化していない最新の選考情報やちょっとしたコツは、Instagramで随時発信中です。
          </p>
          <Link
            href={siteConfig.instagramUrl}
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
