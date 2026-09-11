import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { stockPhoto, STOCK_PHOTO_IDS } from "@/lib/placeholder";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const posts = [
  { label: "ES対策", id: STOCK_PHOTO_IDS.deskNotebookGlasses },
  { label: "面接対策", id: STOCK_PHOTO_IDS.cafeInterior },
  { label: "選考情報", id: STOCK_PHOTO_IDS.deskFlatlay },
  { label: "企業研究", id: STOCK_PHOTO_IDS.buildingLookUp },
  { label: "OB訪問", id: STOCK_PHOTO_IDS.personPhoneLaptop },
  { label: "インターン", id: STOCK_PHOTO_IDS.deskLaptopCoffee },
];

export function InstagramSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>@kansai_shukatsu_lab</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
              Instagramで就活情報を発信中。
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-navy-500">
              ES・面接対策から企業研究、OB訪問、インターン情報まで。関西の就活生に役立つ情報を毎日発信しています。
            </p>
          </div>
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] md:self-auto"
          >
            <InstagramIcon size={16} />
            Instagramをフォローする
          </Link>
        </Reveal>

        <div className="no-scrollbar mt-10 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
          {posts.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.05}>
              <Link
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={stockPhoto(p.id, 400, 400, { grayscale: true })}
                  alt={`Instagram投稿例：${p.label}（掲載イメージ）`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/30 to-accent-600/20 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="text-xs font-semibold text-white drop-shadow-sm">
                    {p.label}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 text-right">
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-accent-600"
          >
            もっと見る
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
