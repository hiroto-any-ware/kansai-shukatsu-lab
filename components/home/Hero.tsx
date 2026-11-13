import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companies } from "@/data/companies";
import { STOCK_IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { LineReveal } from "@/components/ui/LineReveal";
import { PhotoReveal } from "@/components/ui/PhotoReveal";

const FACE_SLUGS = ["yamagata-harness", "shoei-seiki", "nagata-reiki"];

export function Hero() {
  const faces = FACE_SLUGS.map((slug) => companies.find((c) => c.slug === slug)!);

  return (
    <section
      className="pt-28 pb-16 md:pt-40 md:pb-24"
      style={{ background: "var(--color-tag-bg)" }}
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <StaggerReveal className="order-2 lg:order-1 lg:col-span-7" gap={0.13}>
            <span
              className="font-tag-label inline-flex items-center gap-1.5 border border-dashed px-2.5 py-1 text-[11px] tracking-wider"
              style={{
                fontFamily: "var(--font-tag-label)",
                color: "var(--color-tag-muted)",
                borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
              }}
            >
              KANSAI SHUKATSU LAB
            </span>

            <h1
              className="mt-6 text-balance text-[36px] leading-[1.3] font-normal sm:text-5xl md:text-[58px]"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              <LineReveal
                lines={["まだ知らない、", "自分の未来へ。"]}
                lineClassName=""
              />
            </h1>

            <p
              className="mt-6 max-w-md text-[15px] leading-8"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              企業の名前より、そこで働く人の話を。
              <br />
              関西の就活生へ届ける、仕事との出会い。
            </p>

            <a
              href="#stories"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--color-stamp)", fontFamily: "var(--font-tag-ui)" }}
            >
              企業の話を読む
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex">
                {faces.map((c, i) => (
                  <Link
                    key={c.slug}
                    aria-label={`${c.companyName}のインタビューを読む`}
                    href={`/companies/${c.slug}`}
                    className="relative -ml-2.5 block h-14 w-12 overflow-hidden first:ml-0"
                    style={{
                      border: "2px solid var(--color-tag-bg)",
                      transform: `rotate(${i % 2 === 0 ? -6 : 5}deg)`,
                    }}
                  >
                    <Image
                      src={c.photo}
                      alt={c.photoAlt}
                      fill
                      sizes="64px"
                      className="object-cover"
                      style={{ objectPosition: `50% ${c.photoFocusY ?? 30}%` }}
                    />
                  </Link>
                ))}
              </div>
              <Link
                href="/interviews"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
              >
                働く人の、本音へ。
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </StaggerReveal>

          <PhotoReveal x={24} delay={0.15} className="order-1 lg:order-2 lg:col-span-5">
            <figure className="tag-card tag-rotate--1 relative aspect-[4/5] overflow-hidden p-2">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={STOCK_IMAGES.osakaStreetDay}
                  alt="大阪の街並み"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className="absolute bottom-4 left-4 px-2 py-1 text-[10px] tracking-wider"
                style={{
                  fontFamily: "var(--font-tag-label)",
                  background: "var(--color-tag-surface)",
                  color: "var(--color-tag-muted)",
                }}
              >
                KANSAI, JAPAN
              </figcaption>
            </figure>
          </PhotoReveal>
        </div>

        <div
          className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-dashed pt-6 text-sm sm:flex-row sm:items-center"
          style={{
            borderColor: "color-mix(in srgb, var(--color-tag-ink) 20%, transparent)",
            fontFamily: "var(--font-tag-ui)",
            color: "var(--color-tag-muted)",
          }}
        >
          <span style={{ color: "var(--color-tag-ink)", fontWeight: 700 }}>
            大手だけが、正解じゃない。
          </span>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-semibold hover:underline"
            style={{ color: "var(--color-tag-ink)" }}
          >
            関西就活ラボについて
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
