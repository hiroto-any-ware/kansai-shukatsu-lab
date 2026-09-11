import Image from "next/image";
import Link from "next/link";
import { companies } from "@/data/companies";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const picks = [
  companies.find((c) => c.slug === "hatta-keiami")!,
  companies.find((c) => c.slug === "osaka-meiban")!,
  companies.find((c) => c.slug === "shoei-seiki")!,
  companies.find((c) => c.slug === "nagata-reiki")!,
];

// 4社を同じ形・同じ大きさの枠で並べる（優劣の印象を与えないため、
// 企業によって枠の大きさや比率を変えない）。
export function PickUp() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>PICK UP</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
              今、学生に知ってほしい企業
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-navy-500">
            知名度だけでは見えてこない企業の魅力を、取材を通してご紹介します。
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {picks.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link href={`/companies/${c.slug}`} className="group block h-full">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={c.photo}
                    alt={c.photoAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: `50% ${c.photoFocusY ?? 30}%` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
                    <span className="font-label inline-block text-[9px] font-semibold tracking-widest text-sky-200 md:text-[10px]">
                      {c.category} / {c.prefecture}
                    </span>
                    <h3 className="font-display mt-1.5 line-clamp-2 text-sm leading-snug font-bold text-white md:text-base">
                      {c.title}
                    </h3>
                    <p className="mt-1 truncate text-[11px] text-white/70 md:text-xs">
                      {c.companyName}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
