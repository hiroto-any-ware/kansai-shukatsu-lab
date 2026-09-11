import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { companies } from "@/data/companies";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "企業インタビュー",
  description:
    "関西就活ラボが取材した企業インタビューの一覧。経営者・人事・若手社員への取材を通して、企業の理念や仕事、人、社風を届けます。",
};

const sorted = [...companies].sort((a, b) =>
  a.publishedAt < b.publishedAt ? 1 : -1
);

export default function InterviewsPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <div className="bg-navy-50">
        <Container className="py-14 md:py-20">
          <Breadcrumb items={[{ label: "インタビュー" }]} />
          <Eyebrow className="mt-6">INTERVIEW</Eyebrow>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-navy-900 md:text-5xl">
            企業インタビュー
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-navy-500">
            経営者・人事・若手社員への取材を通して、求人票だけでは伝わらない企業の理念や仕事、人、社風を届けます。
          </p>
        </Container>
      </div>

      <Container className="py-14 md:py-20">
        <div className="flex flex-col divide-y divide-navy-900/8">
          {sorted.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 5) * 0.05}>
              <Link
                href={`/companies/${c.slug}`}
                className="group grid grid-cols-1 gap-5 py-8 sm:grid-cols-[220px_1fr] sm:gap-8 md:py-10"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image
                    src={c.photo}
                    alt={c.photoAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: `50% ${c.photoFocusY ?? 30}%` }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-navy-400">
                    <span className="font-label rounded-full bg-navy-50 px-2.5 py-1 font-semibold tracking-wide text-navy-700">
                      {c.category}
                    </span>
                    <span>{c.prefecture}</span>
                    <span>{c.publishedAt}</span>
                  </div>
                  <h2 className="font-display mt-3 text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-accent-600 md:text-xl">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-sm text-navy-500">
                    {c.companyName}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-navy-400">
                    {c.lead[0]}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
