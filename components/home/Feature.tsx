import Image from "next/image";
import Link from "next/link";
import { companies } from "@/data/companies";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const features = [
  {
    no: "01",
    theme: "若手社員の挑戦を応援する企業",
    note: "入社数年目から新しい挑戦を任せてもらえる、若手の裁量を大切にする企業です。",
    company: companies.find((c) => c.slug === "hareno-koki")!,
  },
  {
    no: "02",
    theme: "関西発の企業",
    note: "関西の地から生まれ、関西に根ざしながら事業を広げている企業です。",
    company: companies.find((c) => c.slug === "root-signal")!,
  },
  {
    no: "03",
    theme: "独自の技術やサービスを持つ企業",
    note: "他にはない技術や商品開発力で、その分野を支えている企業です。",
    company: companies.find((c) => c.slug === "nara-food-lab")!,
  },
  {
    no: "04",
    theme: "学生にはまだあまり知られていない企業",
    note: "知名度こそ高くありませんが、確かな実績と考え方を持つ企業です。",
    company: companies.find((c) => c.slug === "wakayama-consulting")!,
  },
  {
    no: "05",
    theme: "インターンを実施している企業",
    note: "働く前に会社を知ることができる、インターンシップに力を入れている企業です。",
    company: companies.find((c) => c.slug === "hiraku-koukoku")!,
  },
];

export function Feature() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>FEATURE</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
            関西就活ラボ編集部おすすめ
          </h2>
          <p className="mt-5 text-sm leading-7 text-navy-500">
            順位やランキングではなく、それぞれの企業が持つ特徴や価値観を切り口に紹介する編集企画です。
          </p>
        </Reveal>
      </Container>

      <div className="mt-16 flex flex-col">
        {features.map((f, i) => {
          const reverse = i % 2 === 1;
          const tint = i % 3 === 2 ? "bg-sky-50" : "bg-white";
          return (
            <div key={f.no} className={cn("border-t border-navy-900/8", tint)}>
              <Container className="py-12 md:py-16">
                <div
                  className={cn(
                    "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",
                    reverse && "lg:[direction:rtl]"
                  )}
                >
                  <Reveal
                    className={cn(
                      "lg:col-span-6",
                      reverse && "lg:[direction:ltr]"
                    )}
                  >
                    <Link
                      href={`/companies/${f.company.slug}`}
                      className="group block"
                    >
                      <div
                        className={cn(
                          "relative w-full overflow-hidden rounded-2xl",
                          i % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                        )}
                      >
                        <Image
                          src={f.company.heroImage}
                          alt={f.company.heroImageAlt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </Reveal>

                  <Reveal
                    delay={0.1}
                    className={cn(
                      "lg:col-span-6",
                      reverse && "lg:[direction:ltr]"
                    )}
                  >
                    <span className="font-display text-5xl font-light text-navy-900/15 md:text-6xl">
                      {f.no}
                    </span>
                    <h3 className="font-display mt-2 text-2xl font-bold text-navy-900 md:text-[28px]">
                      {f.theme}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-navy-500">
                      {f.note}
                    </p>
                    <Link
                      href={`/companies/${f.company.slug}`}
                      className="mt-6 inline-flex items-center gap-3 rounded-xl border border-navy-900/10 p-3 pr-5 transition-colors hover:border-navy-900/30"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-navy-50">
                        <Image
                          src={f.company.companyLogo}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>
                        <span className="block text-sm font-semibold text-navy-900">
                          {f.company.companyName}
                        </span>
                        <span className="block text-xs text-navy-500">
                          {f.company.category} ／ {f.company.prefecture}
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
