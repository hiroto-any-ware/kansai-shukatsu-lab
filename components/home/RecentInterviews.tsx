import Image from "next/image";
import Link from "next/link";
import { companies } from "@/data/companies";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientPhoto } from "@/components/ui/AmbientPhoto";
import { PhotoPlaceholderMark } from "@/components/ui/PhotoPlaceholderMark";
import { STOCK_IMAGES } from "@/lib/images";
import { cn } from "@/lib/cn";

// ランキングやおすすめではなく、公開日の新しい順に公平に紹介するセクション。
const recent = [...companies]
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  .slice(0, 5);

export function RecentInterviews() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <AmbientPhoto
        src={STOCK_IMAGES.dotonboriStreet}
        className="opacity-[0.3]"
        imgClassName="grayscale blur-[1px]"
      />
      <Container className="relative">
        <Reveal className="max-w-2xl">
          <Eyebrow>LATEST INTERVIEWS</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
            最近取材させていただいた企業
          </h2>
          <p className="mt-5 text-sm leading-7 text-navy-500">
            順位や評価ではなく、関西就活ラボが最近お話を伺った企業を公開日順にご紹介しています。
          </p>
        </Reveal>
      </Container>

      <div className="mt-16 flex flex-col">
        {recent.map((c, i) => {
          const reverse = i % 2 === 1;
          const tint = i % 3 === 2 ? "bg-sky-50/80" : "bg-white/85";
          return (
            <div key={c.slug} className={cn("relative border-t border-navy-900/8", tint)}>
              <Container className="py-10 md:py-14">
                <div
                  className={cn(
                    "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",
                    reverse && "lg:[direction:rtl]"
                  )}
                >
                  <Reveal
                    className={cn(
                      "lg:col-span-5",
                      reverse && "lg:[direction:ltr]"
                    )}
                  >
                    <Link
                      href={`/companies/${c.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl sm:max-w-sm">
                        <Image
                          src={c.representativePhoto}
                          alt={c.representativePhotoAlt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <PhotoPlaceholderMark iconSize={56} />
                      </div>
                    </Link>
                  </Reveal>

                  <Reveal
                    delay={0.1}
                    className={cn(
                      "lg:col-span-7",
                      reverse && "lg:[direction:ltr]"
                    )}
                  >
                    <span className="font-display text-5xl font-light text-navy-900/15 md:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-navy-400">
                      <span className="font-label rounded-full bg-navy-900/5 px-2.5 py-1 font-semibold tracking-wide text-navy-700">
                        {c.category}
                      </span>
                      <span>{c.location}</span>
                      <span>{c.publishedAt}</span>
                    </div>
                    <Link href={`/companies/${c.slug}`} className="group">
                      <h3 className="font-display mt-3 text-2xl font-bold text-navy-900 transition-colors group-hover:text-accent-600 md:text-[28px]">
                        {c.title}
                      </h3>
                    </Link>
                    <p className="mt-4 text-sm leading-7 text-navy-500">
                      {c.description}
                    </p>
                    <Link
                      href={`/companies/${c.slug}`}
                      className="mt-6 inline-flex items-center gap-3 rounded-xl border border-navy-900/10 p-3 pr-5 transition-colors hover:border-navy-900/30"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-navy-50">
                        <Image
                          src={c.companyLogo}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>
                        <span className="block text-sm font-semibold text-navy-900">
                          {c.companyName}
                        </span>
                        <span className="block text-xs text-navy-500">
                          {c.category} ／ {c.prefecture}
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                </div>
              </Container>
            </div>
          );
        })}
      </div>
    </section>
  );
}
