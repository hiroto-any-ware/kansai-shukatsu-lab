import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PREFECTURES, CATEGORIES, OTHER_REGION_LABEL } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

const REGION_OPTIONS = [...PREFECTURES, OTHER_REGION_LABEL];

function Chip({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="font-tag-label inline-flex items-center gap-1.5 border border-dashed px-3 py-1.5 text-[12px] tracking-wide transition-colors hover:border-solid"
      style={{
        fontFamily: "var(--font-tag-label)",
        color: "var(--color-tag-ink)",
        borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
      }}
    >
      {children}
    </Link>
  );
}

export function CompanyFinder() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-tag-bg)" }}>
      <Container>
        <Reveal variant="left" className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span
              className="text-[11px] tracking-widest"
              style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
            >
              FIND YOUR NEXT
            </span>
            <h2
              className="mt-3 text-2xl leading-snug md:text-[32px]"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              気になる場所、仕事から。
            </h2>
          </div>
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            企業一覧
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <div
          className="mt-10 grid grid-cols-1 gap-6 border-t border-dashed pt-8 sm:grid-cols-[100px_1fr]"
          style={{ borderColor: "color-mix(in srgb, var(--color-tag-ink) 20%, transparent)" }}
        >
          <h3
            className="text-sm font-bold"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
          >
            地域
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {REGION_OPTIONS.map((p) => (
              <Chip key={p} href={`/companies?pref=${encodeURIComponent(p)}`}>
                {p}
              </Chip>
            ))}
          </div>
        </div>

        <details
          className="mt-8 border-t border-dashed pt-6"
          style={{ borderColor: "color-mix(in srgb, var(--color-tag-ink) 20%, transparent)" }}
        >
          <summary
            className="cursor-pointer text-sm font-bold"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
          >
            業種から探す
          </summary>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => (
              <Chip key={c} href={`/companies?cat=${encodeURIComponent(c)}`}>
                {c}
              </Chip>
            ))}
          </div>
        </details>
      </Container>
    </section>
  );
}
