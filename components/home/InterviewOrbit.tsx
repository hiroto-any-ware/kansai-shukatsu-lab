import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
          <Link
            href="/interviews"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold hover:underline sm:inline-flex"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            すべての記事
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>

      <div className="no-scrollbar mt-10 flex gap-5 overflow-x-auto px-6 pb-2 md:px-10 lg:px-16">
        {ordered.map((c, i) => (
          <div key={c.slug} className="w-[78%] shrink-0 sm:w-[42%] lg:w-[26%]">
            <StoryCard company={c} index={i} />
          </div>
        ))}
      </div>

      <Container className="mt-8 sm:hidden">
        <Link
          href="/interviews"
          className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
          style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
        >
          すべての記事
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
