import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { STOCK_IMAGES } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { AmbientPhoto } from "@/components/ui/AmbientPhoto";

export const metadata: Metadata = {
  title: "企業の方へ",
  description:
    "関西就活ラボでは、経営者・人事・社員への取材を通して、仕事内容だけでは伝わらない企業の考え方や想い、働く人、職場の雰囲気を学生へ届けます。取材・イベントに関するご相談はこちらから。",
};

const flow = [
  { step: "01", title: "取材のご相談", text: "まずは企業様のことを知るところから。取材の目的やご希望をお伺いします。" },
  { step: "02", title: "経営者・人事・社員への取材", text: "企業の理念・仕事・人・文化について、対話形式でじっくりお話をお聞きします。" },
  { step: "03", title: "関西就活ラボに記事掲載", text: "編集部が取材内容を記事にまとめ、Webサイトに掲載します。" },
  { step: "04", title: "Instagram等で学生へ発信", text: "SNSでも記事を紹介し、より多くの就活生に届けます。" },
  { step: "05", title: "イベント・インターンのご相談", text: "必要に応じて、学生と直接交流できるイベントや企画もご相談いただけます。" },
];

const values = [
  "知名度に頼らず、企業の考え方や魅力を学生に届けられる",
  "求人票だけでは伝わらない「人」や「文化」を発信できる",
  "経営者・人事・若手社員それぞれの視点で企業を語れる",
  "営業的な売り込みではなく、取材というかたちで向き合う",
];

export default function ForCompaniesPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <section className="relative overflow-hidden bg-navy-50 py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl"
        />
        <Container className="relative">
          <Breadcrumb items={[{ label: "企業の方へ" }]} />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
            <div className="lg:col-span-7">
              <Eyebrow>FOR COMPANIES</Eyebrow>
              <h1 className="font-display mt-5 text-3xl font-bold leading-snug text-navy-900 md:text-5xl">
                自社の本当の魅力を、
                <br />
                次の世代へ。
              </h1>
              <p className="font-display mt-6 max-w-lg text-lg leading-8 text-navy-700">
                自社の本当の魅力を、熱意ある若い世代に届けたい。
                <br />
                自社の社風や理念に、心から共感してくれる学生と出会いたい。
              </p>
              <p className="mt-5 max-w-lg text-sm leading-7 text-navy-500">
                関西就活ラボでは、企業への取材を通して、御社が大切にされている想いや、職場の「本当の姿」を丁寧に紐解き、学生へ届けます。仕事内容や条件だけではなく、「なぜ、この事業をしているのか」「どんな人たちが働いているのか」「どんな未来を目指しているのか」というストーリーまで伝えることで、企業の価値観に共感する学生との新しい接点をつくっていきます。
              </p>
            </div>
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={STOCK_IMAGES.businessCoffeeChat}
                  alt="企業への取材風景（掲載イメージ）"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/10" />
                <SampleBadge className="bottom-3 right-3" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <AmbientPhoto
          src={STOCK_IMAGES.deskNotebookLaptop}
          className="opacity-[0.07]"
          imgClassName="grayscale"
        />
        <Container className="relative">
          <Reveal className="max-w-xl">
            <Eyebrow>WHY KANSAI SHUKATSU LAB</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-3xl">
              関西就活ラボでできること
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <Reveal key={v} className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-white/70 p-5 backdrop-blur-sm">
                <Check size={16} className="mt-0.5 shrink-0 text-accent-600" />
                <p className="text-sm leading-6 text-navy-700">{v}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
        <AmbientPhoto
          src={STOCK_IMAGES.kyotoRiverBusinessmen}
          className="opacity-[0.14]"
          imgClassName="grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900" />
        <Container className="relative">
          <Reveal className="max-w-xl">
            <Eyebrow light>FLOW</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold md:text-3xl">
              取材・掲載までの流れ
            </h2>
          </Reveal>

          <div className="mt-14 space-y-0">
            {flow.map((f, i) => (
              <Reveal key={f.step} delay={i * 0.06}>
                <div className="flex gap-6 border-t border-white/10 py-6 first:border-t-0 md:gap-10">
                  <span className="font-display w-14 shrink-0 text-3xl font-light text-white/25 md:w-20 md:text-4xl">
                    {f.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold md:text-xl">
                      {f.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                      {f.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container narrow className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">CONTACT</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-3xl">
              まずはお気軽にご相談ください。
            </h2>
            <p className="mt-4 text-sm leading-7 text-navy-500">
              営業目的のご案内ではなく、まずは企業様のお話をお伺いするところから始めます。取材・イベント・インターン企画について、公式LINEからお気軽にご相談ください。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                取材について相談する
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy-900/25 px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
              >
                イベントについて相談する
              </Link>
            </div>
            <p className="mt-6 text-xs text-navy-400">
              ※ 現在は公式LINEにて企業様からのご相談を承っております。専用フォームは準備中です。
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
