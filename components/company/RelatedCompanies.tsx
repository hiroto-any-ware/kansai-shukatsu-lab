import Image from "next/image";
import Link from "next/link";
import { companies } from "@/data/companies";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const ROTATIONS = ["tag-rotate--1", "tag-rotate-1", "tag-rotate--2"];

export function RelatedCompanies({ current }: { current: CompanyInterview }) {
  const related = companies
    .filter((c) => c.slug !== current.slug)
    .sort((a, b) => {
      const score = (c: CompanyInterview) =>
        (c.category === current.category ? 2 : 0) +
        (c.prefecture === current.prefecture ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, 3);

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--color-tag-bg)" }}
    >
      <Container>
        <Reveal className="flex items-end justify-between">
          <div>
            <span
              className="text-[11px] tracking-widest"
              style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
            >
              次に読む取材先
            </span>
            <h2
              className="mt-3 text-2xl md:text-[28px]"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              関連するインタビュー
            </h2>
          </div>
          <Link
            href="/companies"
            className="hidden text-sm font-semibold hover:underline sm:inline"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            すべて見る
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link
                href={`/companies/${c.slug}`}
                className={`tag-card ${ROTATIONS[i % ROTATIONS.length]} group relative block aspect-[4/5] w-full overflow-hidden`}
              >
                <Image
                  src={c.photo}
                  alt={c.photoAlt}
                  fill
                  sizes="(max-width: 760px) 92vw, 31vw"
                  className="cine-photo object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: `50% ${c.photoFocusY ?? 30}%` }}
                />
                <div className="photo-scrim" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span
                    className="block text-[10px] tracking-widest"
                    style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
                  >
                    {c.category} / {c.prefecture}
                  </span>
                  <h3
                    className="photo-heading mt-1.5 line-clamp-2 text-base leading-snug"
                    style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
                  >
                    {c.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
