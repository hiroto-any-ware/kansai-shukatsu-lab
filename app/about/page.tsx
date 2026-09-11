import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { STOCK_IMAGES } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { InstagramIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PullQuote } from "@/components/ui/PullQuote";
import { AmbientPhoto } from "@/components/ui/AmbientPhoto";

export const metadata: Metadata = {
  title: "関西就活ラボについて",
  description:
    "関西就活ラボは、大手企業での選考・人事経験を持つメンバーが「関西の就活生に、本当に役立つリアルな情報を届けたい」という想いから立ち上げたプロジェクトです。",
};

const values = [
  {
    no: "01",
    en: "PROFESSIONAL EYE",
    title: "プロの目線",
    lead: "人事の本音を伝える",
    text: "現場の視点から、「企業はどんな学生と出会いたいのか」「選考ではどんな部分を見ているのか」「面接やESでは何を大切にしているのか」など、学生が本当に知りたい企業側の視点をできる限りリアルに届けます。",
  },
  {
    no: "02",
    en: "ROOTED IN KANSAI",
    title: "地域密着",
    lead: "関西を起点に、選択肢を広げる",
    text: "関西の学生にとって身近な企業や仕事を大切にしながら、地域や知名度だけにとらわれず、「こんな会社があったんだ」と思える新しい選択肢も届けていきます。関西を起点に、学生の企業選びの視野を広げること。それが関西就活ラボの役割です。",
  },
  {
    no: "03",
    en: "UNCOVER THE APPEAL",
    title: "魅力を紐解く",
    lead: "取材による“本当の姿”の可視化",
    text: "給与や福利厚生、会社概要だけでは分からない、企業理念・経営者の想い・事業へのこだわり・社風・仕事の面白さ・そこで働く人の熱量を、丁寧な取材を通して紐解きます。学生が、「この会社、なんかいいな。」と思える理由まで届けます。",
  },
  {
    no: "04",
    en: "CONNECTING FUTURES",
    title: "未来をつなぐ",
    lead: "温度感のある出会いの場をつくる",
    text: "画面越しの情報だけで終わらせません。企業と学生が本音で話し、お互いの考え方や想いを知ることのできるイベントや交流の機会もつくっていきます。「情報を知る場所」から、「実際に出会える場所」へ。",
  },
];

const forCompanyList = [
  "企業取材へのご協力",
  "イベントへのご参加",
  "イベント協賛",
  "学生との交流機会づくり",
  "インターンシップ機会の提供",
];

const forStudentList = [
  "イベントへの参加",
  "企業インタビューの閲覧",
  "情報発信への協力",
  "SNSでの情報共有",
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      {/* FIRST VIEW */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <AmbientPhoto
          src={STOCK_IMAGES.kyotoRiverBusinessmen}
          imgClassName="opacity-[0.28] grayscale"
        />
        <div className="pointer-events-none absolute inset-0 bg-navy-950/50" />
        <span
          aria-hidden
          className="font-display pointer-events-none absolute -right-10 -top-10 select-none text-[11rem] leading-none text-white/[0.05] md:text-[18rem]"
        >
          ABOUT
        </span>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-600/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sky-200/10 blur-3xl"
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
            関西の就活生と企業を、&ldquo;想い&rdquo;で繋ぐ架け橋に。
          </p>
        </Container>
      </section>

      {/* なぜ始めたのか */}
      <section className="py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <Eyebrow>WHY WE STARTED</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-3xl">
              なぜ、始めたのか。
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-6 text-[15px] leading-8 text-navy-700">
            <p>
              関西就活ラボは、大手企業での選考・人事経験を持つメンバーが、「関西の就活生に、本当に役立つリアルな情報を届けたい」という想いから立ち上げたプロジェクトです。
            </p>
            <p>
              私たち自身が就職活動を経験する中で感じたのは、世の中にある就活情報の偏りと、「本当に魅力的な企業の姿が、学生に十分届いていない」という現実でした。
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 何を目指しているのか */}
      <section className="bg-sky-50 py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <Eyebrow>WHAT WE AIM FOR</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-3xl">
              何を、目指しているのか。
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-6 text-[15px] leading-8 text-navy-700">
            <p>
              学生が知っている企業は、世の中にある企業のほんの一部です。
            </p>
            <p>
              有名企業だけではなく、地域に根ざした会社、独自の技術を持つ会社、新しいことに挑戦している会社、強い想いを持つ経営者がいる会社など、世の中にはまだ多くの選択肢があります。
            </p>
          </Reveal>
        </Container>
      </section>

      <PullQuote quote="大手だけが、正解じゃない。" dark />

      <section className="py-16 md:py-20">
        <Container narrow>
          <Reveal className="space-y-6 text-[15px] leading-8 text-navy-700">
            <p>
              関西を拠点に、学生がこれまで知らなかった企業や仕事と出会えるきっかけをつくり、企業名や知名度だけでは分からない「本当の魅力」を届けていきます。
            </p>
            <p>
              関西企業を中心にしながらも、地域に関係なく、学生に知ってほしい企業や、実際に私たちが取材した企業のストーリーも発信していきます。
            </p>
            <p className="font-display text-base font-semibold text-navy-900 md:text-lg">
              目指しているのは、学生が、「こんな会社があったんだ」「こんな仕事があるんだ」「この人たちと働いてみたい」と思える企業と出会える世界です。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src={STOCK_IMAGES.businessLoungeTalk}
            alt="関西就活ラボの取材風景（掲載イメージ）"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/0 to-navy-950/10" />
        </div>
      </section>

      {/* 何を大切にしているのか */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <AmbientPhoto
          src={STOCK_IMAGES.dotonboriStreet}
          className="opacity-[0.07]"
          imgClassName="grayscale"
        />
        <Container className="relative">
          <Reveal className="max-w-xl">
            <Eyebrow>OUR VALUES</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
              私たちが大切にしていること
            </h2>
          </Reveal>

          <div className="mt-16 flex flex-col">
            {values.map((v, i) => {
              const reverse = i % 2 === 1;
              return (
                <div key={v.no} className="border-t border-navy-900/8 py-10 md:py-14">
                  <div
                    className={`grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 ${
                      reverse ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <Reveal
                      className={`lg:col-span-4 ${reverse ? "lg:[direction:ltr] lg:text-right" : ""}`}
                    >
                      <span className="font-display text-6xl font-light text-navy-900/10 md:text-7xl">
                        {v.no}
                      </span>
                      <p className="font-label mt-2 text-[11px] font-semibold tracking-[0.25em] text-accent-600">
                        {v.en}
                      </p>
                    </Reveal>
                    <Reveal
                      delay={0.1}
                      className={`lg:col-span-8 ${reverse ? "lg:[direction:ltr]" : ""}`}
                    >
                      <h3 className="font-display text-2xl font-bold text-navy-900 md:text-[28px]">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-navy-600">
                        {v.lead}
                      </p>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-navy-500">
                        {v.text}
                      </p>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* これからの関西就活ラボ */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
        <AmbientPhoto
          src={STOCK_IMAGES.osakaCastleFerris}
          className="opacity-[0.14]"
          imgClassName="grayscale"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <Container className="relative">
          <Reveal className="max-w-2xl">
            <Eyebrow light>WHAT&apos;S NEXT</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold md:text-3xl">
              これからの関西就活ラボ
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-white/70">
              Instagramでの情報発信を軸に、関西で働くという選択肢や、まだ学生に十分知られていない企業の魅力を、企業への取材記事を通して継続的に届けていきます。
            </p>
            <p className="mt-4 text-[15px] leading-8 text-white/70">
              関西企業を中心にしながらも、地域に関係なく、学生に知ってほしい企業や魅力的な経営者への取材も行っていきます。
            </p>
            <p className="mt-4 text-[15px] leading-8 text-white/70">
              さらに、企業と学生が直接話せる就活イベント、企業との交流企画、インターンシップの機会づくり、学生と企業の新しい接点づくりなどにも活動を広げていきます。
            </p>
            <p className="font-display mt-8 text-xl leading-relaxed text-sky-100 md:text-2xl">
              目指しているのは、「関西の就活生と企業にとって、最も信頼される架け橋」であり続けることです。
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 企業の皆様へ（要点＋誘導） */}
      <section className="py-20 md:py-28">
        <Container narrow>
          <Reveal className="rounded-2xl border border-navy-900/8 bg-sky-50/60 p-8 md:p-12">
            <Eyebrow>FOR COMPANIES</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-3xl">
              自社の本当の魅力を、
              <br className="sm:hidden" />
              次の世代へ。
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-navy-600">
              関西就活ラボでは、経営者・人事・社員への取材を通して、仕事内容だけでは伝わらない企業の考え方、事業への想い、働く人、職場の雰囲気を学生へ届けます。ご希望に応じて、学生との交流イベントやインターン企画についてもご相談いただけます。
            </p>
            <Link
              href="/for-companies"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 underline decoration-navy-300 underline-offset-4 hover:text-accent-600"
            >
              企業の方へ 詳しく見る
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* 一緒に活動しませんか？ */}
      <section className="bg-navy-50 py-20 md:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>JOIN US</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
              一緒に、関西の就活を
              <br />
              もっと面白く。
            </h2>
            <p className="mt-5 text-sm leading-7 text-navy-500">
              関西就活ラボでは、関西の就活文化をより良くし、学生と企業の未来を一緒につくっていただける企業・学生の皆様を募集しています。
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <Reveal className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(10,23,48,0.06)] md:p-10">
              <p className="font-label text-xs font-semibold tracking-[0.25em] text-accent-600">
                FOR COMPANIES
              </p>
              <p className="font-display mt-3 text-xl font-bold text-navy-900">
                企業の皆様へ
              </p>
              <ul className="mt-6 space-y-3">
                {forCompanyList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-navy-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(10,23,48,0.06)] md:p-10">
              <p className="font-label text-xs font-semibold tracking-[0.25em] text-accent-600">
                FOR STUDENTS
              </p>
              <p className="font-display mt-3 text-xl font-bold text-navy-900">
                学生の皆様へ
              </p>
              <ul className="mt-6 space-y-3">
                {forStudentList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-navy-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-14 text-center">
            <p className="font-display text-xl leading-relaxed text-navy-900 md:text-2xl">
              「この企業に出会えてよかった。」
              <br />
              「この学生に出会えてよかった。」
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-navy-500">
              そんな出会いを、関西から少しずつ増やしていきたいと考えています。企業と学生が、お互いのことをきちんと知った上で出会える場所を、私たちと一緒につくりませんか？
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 最終CTA */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-center text-white md:py-24">
        <AmbientPhoto
          src={STOCK_IMAGES.osakaStreetDay}
          className="opacity-[0.1]"
          imgClassName="grayscale"
        />
        <Container narrow className="relative">
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                LINEで就活情報を受け取る
              </Link>
              <Link
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <InstagramIcon size={15} />
                Instagramをフォローする
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
