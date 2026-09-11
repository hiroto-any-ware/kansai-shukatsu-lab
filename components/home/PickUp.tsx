import Image from "next/image";
import Link from "next/link";
import { companies } from "@/data/companies";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const picks = [
  companies.find((c) => c.slug === "osaka-meiban")!,
  companies.find((c) => c.slug === "maru-taka")!,
  companies.find((c) => c.slug === "s-pack")!,
  companies.find((c) => c.slug === "nagata-reiki")!,
];

export function PickUp() {
  const [feature, ...rest] = picks;

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

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <Link
              href={`/companies/${feature.slug}`}
              className="group block h-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-[16/11]">
                <Image
                  src={feature.photo}
                  alt={feature.photoAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                  <span className="font-label inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-widest text-white backdrop-blur-sm">
                    {feature.category} / {feature.prefecture}
                  </span>
                  <h3 className="font-display mt-4 max-w-lg text-2xl leading-snug font-bold text-white md:text-[28px]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {feature.companyName}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.slice(0, 2).map((c, i) => (
              <Reveal key={c.slug} delay={0.1 + i * 0.1}>
                <Link
                  href={`/companies/${c.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-navy-900/8 p-3 transition-colors hover:border-navy-900/20 md:gap-5 md:p-4"
                >
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl md:w-28">
                    <Image
                      src={c.photo}
                      alt={c.photoAlt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="font-label text-[10px] font-semibold tracking-widest text-accent-600">
                      {c.category}
                    </span>
                    <h3 className="font-display mt-1.5 line-clamp-2 text-base leading-snug font-bold text-navy-900 md:text-lg">
                      {c.title}
                    </h3>
                    <p className="mt-1 truncate text-xs text-navy-500">
                      {c.companyName} ／ {c.prefecture}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              {(() => {
                const c = rest[2];
                return (
                  <Link
                    href={`/companies/${c.slug}`}
                    className="group relative block overflow-hidden rounded-2xl"
                  >
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={c.photo}
                        alt={c.photoAlt}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="font-label text-[10px] font-semibold tracking-widest text-sky-200">
                        {c.category} / {c.prefecture}
                      </span>
                      <h3 className="font-display mt-1.5 line-clamp-2 text-lg font-bold text-white">
                        {c.title}
                      </h3>
                    </div>
                  </Link>
                );
              })()}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
