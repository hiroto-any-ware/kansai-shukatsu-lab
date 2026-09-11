import Link from "next/link";
import { PREFECTURES, CATEGORIES } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientPhoto } from "@/components/ui/AmbientPhoto";
import { STOCK_IMAGES } from "@/lib/images";
import { ArrowUpRight } from "lucide-react";

export function CompanyFinder() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white md:py-32">
      <AmbientPhoto
        src={STOCK_IMAGES.osakaStreetDay}
        imgClassName="opacity-[0.16] grayscale blur-[1px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-sky-200/10 blur-3xl"
      />

      <Container className="relative grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-10">
        <Reveal>
          <Eyebrow light>COMPANY</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight md:text-4xl">
            興味のある
            <br />
            地域・仕事から、
            <br />
            企業に出会う。
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
            企業規模やランキングでは絞り込みません。あなたが気になる「地域」と「仕事のジャンル」から、まだ知らない企業を探してみてください。
          </p>
          <Link
            href="/companies"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
          >
            企業を探す
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}>
            <p className="font-label mb-4 text-xs font-semibold tracking-[0.25em] text-white/40">
              PREFECTURE — 都道府県から探す
            </p>
            <div className="flex flex-wrap gap-2.5">
              {PREFECTURES.map((p) => (
                <Link
                  key={p}
                  href={`/companies?pref=${encodeURIComponent(p)}`}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85 transition-colors hover:border-white hover:bg-white hover:text-navy-900"
                >
                  {p}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-label mb-4 text-xs font-semibold tracking-[0.25em] text-white/40">
              CATEGORY — 業種から探す
            </p>
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  href={`/companies?cat=${encodeURIComponent(c)}`}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85 transition-colors hover:border-white hover:bg-white hover:text-navy-900"
                >
                  {c}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
