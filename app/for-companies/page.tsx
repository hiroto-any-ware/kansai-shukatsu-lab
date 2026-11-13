import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { STOCK_IMAGES } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { ConsultationForm } from "@/components/for-companies/ConsultationForm";

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

function TagLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 border border-dashed px-2.5 py-1 text-[11px] tracking-wider"
      style={{
        fontFamily: "var(--font-tag-label)",
        color: "var(--color-tag-muted)",
        borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
      }}
    >
      {children}
    </span>
  );
}

export default function ForCompaniesPage() {
  return (
    <div style={{ background: "var(--color-tag-bg)" }}>
      <PageHero
        breadcrumbLabel="企業の方へ"
        eyebrow="FOR COMPANIES"
        title={["自社の本当の魅力を、", "次の世代へ。"]}
        description="自社の本当の魅力を、熱意ある若い世代に届けたい。自社の社風や理念に、心から共感してくれる学生と出会いたい。関西就活ラボでは、企業への取材を通して、御社が大切にされている想いや、職場の「本当の姿」を丁寧に紐解き、学生へ届けます。仕事内容や条件だけではなく、「なぜ、この事業をしているのか」「どんな人たちが働いているのか」「どんな未来を目指しているのか」というストーリーまで伝えることで、企業の価値観に共感する学生との新しい接点をつくっていきます。"
        photo={{ src: STOCK_IMAGES.naraParkDeer, alt: "奈良公園の鹿" }}
      />

      <section className="py-20 md:py-28" style={{ background: "var(--color-tag-surface)" }}>
        <Container>
          <Reveal className="max-w-xl">
            <TagLabel>WHY KANSAI SHUKATSU LAB</TagLabel>
            <h2
              className="mt-4 text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              関西就活ラボでできること
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v}
                variant={i % 2 === 0 ? "left" : "right"}
                delay={(i % 2) * 0.06}
                className="tag-card flex items-start gap-3 p-5"
              >
                <Check size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-stamp)" }} />
                <p
                  className="text-sm leading-6"
                  style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
                >
                  {v}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="max-w-xl">
            <TagLabel>FLOW</TagLabel>
            <h2
              className="mt-4 text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              取材・掲載までの流れ
            </h2>
          </Reveal>

          <div className="tag-card mt-10">
            {flow.map((f, i) => (
              <Reveal key={f.step} delay={i * 0.06}>
                <div
                  className="flex gap-6 border-dashed py-6 px-6 first:border-t-0 md:gap-10 md:px-10"
                  style={{
                    borderTopWidth: i === 0 ? 0 : 1,
                    borderColor: "color-mix(in srgb, var(--color-tag-ink) 18%, transparent)",
                  }}
                >
                  <span
                    className="w-10 shrink-0 text-sm md:w-12 md:text-base"
                    style={{ fontFamily: "var(--font-tag-data)", color: "var(--color-stamp)" }}
                  >
                    {f.step}
                  </span>
                  <div>
                    <h3
                      className="text-lg"
                      style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="mt-2 max-w-xl text-sm leading-6"
                      style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
                    >
                      {f.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" style={{ background: "var(--color-tag-surface)" }}>
        <Container narrow>
          <Reveal className="text-center">
            <div className="flex justify-center">
              <TagLabel>CONTACT</TagLabel>
            </div>
            <h2
              className="mt-4 text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              まずはお気軽にご相談ください。
            </h2>
            <p
              className="mx-auto mt-4 max-w-xl text-sm leading-7"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              営業目的のご案内ではなく、まずは企業様のお話をお伺いするところから始めます。取材について相談する、イベントについて相談するなど、以下のフォームからお気軽にご連絡ください。
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <ConsultationForm />
          </Reveal>

          <Reveal delay={0.15} className="mt-6 text-center">
            <p
              className="text-xs"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              お急ぎの場合は、
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: "var(--color-tag-ink)" }}
              >
                公式LINE
                <ArrowUpRight size={11} className="inline-block" />
              </Link>
              からもご相談いただけます。
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
