"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { companies } from "@/data/companies";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { StoryCard } from "@/components/company/StoryCard";

const FEATURED_ORDER = [
  "yamagata-harness",
  "shoei-seiki",
  "nagata-reiki",
  "chuo-denko",
  "hatta-keiami",
  "s-pack",
];

export function InterviewOrbit() {
  const ordered = FEATURED_ORDER.map((slug) => companies.find((c) => c.slug === slug)!);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section id="stories" className="py-16 md:py-24" style={{ background: "var(--color-tag-surface)" }}>
      <Container>
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <span
              className="text-[11px] tracking-widest"
              style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
            >
              INTERVIEWS
            </span>
            <h2
              className="mt-3 text-2xl leading-snug md:text-[32px]"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              働く人から、知っていく。
            </h2>
          </div>
          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="前のインタビューへ"
                className="flex h-10 w-10 items-center justify-center border transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-solid"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
                  borderStyle: "dashed",
                  color: "var(--color-tag-ink)",
                }}
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="次のインタビューへ"
                className="flex h-10 w-10 items-center justify-center border transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-solid"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
                  borderStyle: "dashed",
                  color: "var(--color-tag-ink)",
                }}
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
            <Link
              href="/interviews"
              className="group inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              すべての記事
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </Container>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:px-10 lg:px-16"
      >
        {ordered.map((c, i) => (
          <div key={c.slug} data-card className="w-[78%] shrink-0 snap-start sm:w-[42%] lg:w-[26%]">
            <StoryCard company={c} index={i} />
          </div>
        ))}
      </div>

      <Container className="mt-8 sm:hidden">
        <Link
          href="/interviews"
          className="group inline-flex items-center gap-2 text-sm font-semibold hover:underline"
          style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
        >
          すべての記事
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Container>
    </section>
  );
}
