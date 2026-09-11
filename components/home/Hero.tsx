"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { STOCK_IMAGES } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { AmbientPhoto } from "@/components/ui/AmbientPhoto";

const headline = ["大手だけが、", "正解じゃない。"];

const tickerWords = [
  "INTERVIEW",
  "COMPANY",
  "FEATURE",
  "EVENT",
  "ABOUT",
  "NEW STORIES",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-navy-950 pt-16 md:pt-20">
      <div className="absolute inset-0">
        <AmbientPhoto
          src={STOCK_IMAGES.osakaCastleFerris}
          imgClassName="scale-105 opacity-[0.25] grayscale blur-[2px]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 15% 15%, rgba(55,99,234,0.45), transparent 60%), radial-gradient(ellipse 70% 60% at 85% 25%, rgba(157,187,245,0.22), transparent 55%), radial-gradient(ellipse 90% 70% at 50% 100%, rgba(36,72,204,0.35), transparent 60%), rgba(6,15,33,0.88)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-4 top-24 w-[280px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 xl:w-[320px]"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={STOCK_IMAGES.businessDiscussion}
              alt="関西の企業を取材する様子（掲載イメージ）"
              fill
              priority
              className="object-cover"
            />
            <SampleBadge className="bottom-3 left-3" />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto flex w-full max-w-8xl flex-1 flex-col justify-end px-6 pb-16 md:px-10 lg:px-16 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-label mb-6 text-xs font-semibold tracking-[0.3em] text-sky-200 md:mb-8"
        >
          KANSAI SHUKATSU LAB — MEDIA FOR STUDENTS &amp; COMPANIES
        </motion.p>

        <h1 className="font-display text-balance text-[13vw] leading-[1.05] font-bold text-white sm:text-[9vw] md:text-[6.4vw] lg:text-[5.6vw]">
          {headline.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="font-display text-lg text-sky-100 md:text-xl">
              関西の就活生と企業を、&ldquo;想い&rdquo;で繋ぐ架け橋に。
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70 md:text-[15px]">
              知名度や求人票だけでは分からない企業の本当の魅力を、学生目線の取材で届ける就活メディア。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/interviews"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
            >
              企業インタビューを見る
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              LINEで就活情報を受け取る
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-t border-white/10 bg-navy-950/70 py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...tickerWords, ...tickerWords].map((w, i) => (
            <span
              key={i}
              className="font-label text-xs font-semibold tracking-[0.3em] text-white/35"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 text-white/50 md:right-10 lg:flex lg:right-16"
      >
        <span className="font-label text-[10px] tracking-[0.3em] [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
