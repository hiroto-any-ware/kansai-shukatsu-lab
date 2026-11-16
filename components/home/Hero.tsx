"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      <section ref={sectionRef} className="relative flex min-h-[100svh] items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: photoY }}>
          <PhotoReveal className="absolute inset-0">
            <Image
              src={STOCK_IMAGES.kobePortTower}
              alt="神戸ポートタワー"
              fill
              priority
              sizes="100vw"
              className="cine-photo ken-burns object-cover"
            />
          </PhotoReveal>
        </motion.div>
        <div className="photo-wash" />
        <div className="photo-scrim" />

        <span
          className="photo-text absolute left-6 top-24 z-10 inline-flex items-center gap-1.5 border border-dashed px-2.5 py-1 text-[11px] tracking-wider md:left-10 md:top-28 lg:left-16"
          style={{
            fontFamily: "var(--font-tag-label)",
            color: "color-mix(in srgb, var(--color-tag-ink) 75%, transparent)",
            borderColor: "color-mix(in srgb, var(--color-tag-ink) 45%, transparent)",
          }}
        >
          [01] KANSAI SHUKATSU LAB
        </span>

        <div
          className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-3 sm:flex md:right-10 lg:right-16"
          style={{ color: "var(--color-tag-ink)" }}
        >
          <span
            className="photo-text text-[11px] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-tag-label)" }}
          >
            SCROLL
          </span>
          <span className="scroll-cue-line h-10 w-px opacity-70" aria-hidden="true" />
        </div>

        <Container className="relative z-10 pb-16 pt-32 md:pb-24">
          <h1
            className="photo-heading max-w-3xl text-balance text-[40px] leading-[1.25] font-normal sm:text-6xl md:text-[72px]"
            style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
          >
            <LineReveal lines={["まだ知らない、", "自分の未来へ。"]} lineClassName="" />
          </h1>

          <StaggerReveal gap={0.13} className="mt-6">
            <p
              className="photo-text max-w-md text-[15px] leading-8"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              企業の名前より、そこで働く人の話を。
              <br />
              関西の就活生へ届ける、仕事との出会い。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#stories"
                className="group inline-flex items-center gap-3 bg-[var(--color-stamp)] px-6 py-3.5 text-[15px] font-bold text-white transition-[transform,background-color] duration-300 hover:scale-[1.03] hover:bg-[#F05B3B] active:scale-[0.98]"
                style={{ fontFamily: "var(--font-tag-ui)" }}
              >
                企業の話を読む
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="flex items-center gap-4">
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
                  className="group inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
                >
                  働く人の、本音へ。
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </StaggerReveal>
        </Container>
      </section>

      <div
        className="border-b"
        style={{
          background: "var(--color-tag-surface)",
          borderColor: "color-mix(in srgb, var(--color-tag-ink) 10%, transparent)",
        }}
      >
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-sm sm:flex-row sm:items-center">
          <div
            className="contents"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            <span style={{ color: "var(--color-tag-ink)", fontWeight: 700 }}>
              大手だけが、正解じゃない。
            </span>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-semibold hover:underline"
              style={{ color: "var(--color-tag-ink)" }}
            >
              関西就活ラボについて
              <ArrowUpRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
