import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { sampleImage } from "@/lib/placeholder";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const posts = [
  { label: "ES対策", seed: 0 },
  { label: "面接対策", seed: 2 },
  { label: "選考情報", seed: 4 },
  { label: "企業研究", seed: 1 },
  { label: "OB訪問", seed: 3 },
  { label: "インターン", seed: 5 },
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
                  src={sampleImage(500, 500, p.label, p.seed)}
                  alt={`Instagram投稿例：${p.label}（掲載イメージ）`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-navy-950/0 p-3 transition-colors group-hover:bg-navy-950/40">
                  <span className="translate-y-2 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
