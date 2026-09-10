import Image from "next/image";
import Link from "next/link";
import { companies } from "@/data/companies";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

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
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal className="flex items-end justify-between">
          <div>
            <Eyebrow>NEXT STORIES</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-[32px]">
              関連するインタビュー
            </h2>
          </div>
          <Link
            href="/companies"
            className="hidden text-sm font-semibold text-navy-700 hover:text-accent-600 sm:inline"
          >
            すべて見る
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link href={`/companies/${c.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={c.heroImage}
                    alt={c.heroImageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="font-label mt-3 block text-[10px] font-semibold tracking-widest text-accent-600">
                  {c.category} / {c.prefecture}
                </span>
                <h3 className="font-display mt-1.5 line-clamp-2 text-base font-bold leading-snug text-navy-900">
                  {c.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
