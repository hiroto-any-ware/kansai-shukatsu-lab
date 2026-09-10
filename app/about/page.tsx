import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sampleImage } from "@/lib/placeholder";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SampleBadge } from "@/components/ui/SampleBadge";

export const metadata: Metadata = {
  title: "関西就活ラボについて",
  description:
    "関西就活ラボは、関西の就活生に本当に役立つリアルな情報を届けたいという想いから立ち上げたプロジェクトです。大手だけが正解ではない、新しい選択肢を届けます。",
};

const values = [
  {
    no: "01",
    title: "知名度ではなく、想いで届ける",
    text: "求人票や知名度だけでは伝わらない企業の考え方や熱量を、取材を通じて言葉にします。",
  },
  {
    no: "02",
    title: "学生目線の取材にこだわる",
    text: "就活生が本当に知りたいことを、経営者・人事・若手社員にストレートに聞いています。",
  },
  {
    no: "03",
    title: "企業に優劣をつけない",
    text: "ランキングや格付けではなく、それぞれの企業が持つ個性や価値観を紹介します。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-600/20 blur-3xl"
        />
        <Container className="relative">
          <div className="mb-8 [&_a]:text-white/50 [&_span]:text-white/80">
            <Breadcrumb items={[{ label: "関西就活ラボについて" }]} />
          </div>
          <Eyebrow light>ABOUT US</Eyebrow>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            大手だけが、
            <br />
            正解じゃない。
          </h1>
          <p className="font-display mt-6 max-w-xl text-lg text-sky-100 md:text-xl">
            関西の就活生と優良企業を、&ldquo;想い&rdquo;で繋ぐ架け橋に。
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container narrow>
          <Reveal className="space-y-6 text-[15px] leading-8 text-navy-700">
            <p>
              関西就活ラボは、「関西の就活生に、本当に役立つリアルな情報を届けたい」という想いから立ち上げたプロジェクトです。
            </p>
            <p>
              就職活動では、知名度の高い企業に情報が集中する一方で、魅力的な仕事や人、理念を持っていても、学生に十分知られていない企業が数多くあります。
            </p>
            <p>
              私たちは、「大手だけが正解ではない」という新しい選択肢を学生へ届けたいと考えています。知名度や条件だけでは分からない企業の「本当の魅力」を取材し、学生が、「この会社で働いてみたい」「この人たちと働いてみたい」と思える企業との出会いをつくります。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src={sampleImage(2000, 900, "取材の様子", 3)}
            alt="関西就活ラボの取材風景（掲載イメージ）"
            fill
            className="object-cover"
          />
          <SampleBadge className="bottom-4 right-4" />
        </div>
      </section>

      <section className="bg-sky-50 py-20 md:py-28">
        <Container>
          <Reveal className="max-w-xl">
            <Eyebrow>OUR VALUES</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
              大切にしていること
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {values.map((v) => (
              <Reveal key={v.no} delay={Number(v.no) * 0.05}>
                <span className="font-display text-5xl font-light text-navy-900/15">
                  {v.no}
                </span>
                <h3 className="font-display mt-4 text-xl font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-navy-500">
                  {v.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <Eyebrow>MEDIA × INSTAGRAM</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-3xl">
              Instagramとウェブサイトの役割
            </h2>
            <p className="mt-5 text-sm leading-7 text-navy-500">
              Instagramでは、ES対策・面接対策・企業研究・インターン情報など、就活のノウハウや選考情報を発信しています。Webサイトでは、Instagramで出会った企業をより深く知っていただけるよう、経営者・社員への取材を通じた企業インタビューや就活イベント、ノウハウ記事を蓄積しています。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-center text-white md:py-24">
        <Container narrow>
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              関西就活ラボを、はじめてみませんか。
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
              >
                企業を探す
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href={siteConfig.lineUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                LINEで就活情報を受け取る
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
