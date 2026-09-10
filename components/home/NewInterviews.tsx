"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { companies } from "@/data/companies";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const newest = [...companies]
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  .slice(0, 6);

export function NewInterviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="bg-sky-50 py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>NEW INTERVIEW</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
              新着インタビュー
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/interviews"
              className="text-sm font-semibold text-navy-700 underline decoration-navy-300 underline-offset-4 hover:text-accent-600"
            >
              インタビュー一覧を見る
            </Link>
            <div className="hidden gap-2 md:flex">
              <button
                aria-label="前へ"
                onClick={() => scroll(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-700 transition-colors hover:border-navy-900 hover:text-navy-900"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                aria-label="次へ"
                onClick={() => scroll(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-700 transition-colors hover:border-navy-900 hover:text-navy-900"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-10 flex gap-5 overflow-x-auto px-6 pb-4 md:px-10 lg:px-16"
      >
        {newest.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.05} className="w-[78vw] shrink-0 sm:w-[340px]">
            <Link href={`/companies/${c.slug}`} className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src={c.thumbnail}
                  alt={c.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/0 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white ring-1 ring-white/50">
                    <Image src={c.companyLogo} alt="" fill className="object-cover" />
                  </div>
                  <span className="font-label rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-navy-900">
                    {c.category}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display line-clamp-2 text-lg font-bold leading-snug text-white">
                    {c.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-white/70">
                    <span>{c.location}</span>
                    <span>{c.publishedAt}</span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold text-navy-900">
                {c.companyName}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
