import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { STOCK_IMAGES } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/LineReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { GrowLine } from "@/components/ui/GrowLine";
import { PageHero } from "@/components/ui/PageHero";

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

const nextSteps = [
  {
    en: "01 — INSTAGRAM",
    text: "Instagramでの情報発信を軸に、関西で働くという選択肢や、まだ学生に十分知られていない企業の魅力を、企業への取材記事を通して継続的に届けていきます。",
  },
  {
    en: "02 — INTERVIEW",
    text: "関西企業を中心にしながらも、地域に関係なく、学生に知ってほしい企業や魅力的な経営者への取材も行っていきます。",
  },
  {
    en: "03 — EVENT & CONNECT",
    text: "さらに、企業と学生が直接話せる就活イベント、企業との交流企画、インターンシップの機会づくり、学生と企業の新しい接点づくりなどにも活動を広げていきます。",
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

function Tag({ children }: { children: React.ReactNode }) {
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

export default function AboutPage() {
  return (
    <div style={{ background: "var(--color-tag-bg)" }}>
      <PageHero
        breadcrumbLabel="関西就活ラボについて"
        eyebrow="ABOUT US"
        title={["大手だけが、", "正解じゃない。"]}
        description="関西の就活生と企業を、“想い”で繋ぐ架け橋に。"
        photo={{ src: STOCK_IMAGES.lakeBiwaTorii, alt: "琵琶湖の鳥居", caption: "SHIGA, JAPAN" }}
      />

      {/* なぜ・何を目指すのか */}
      <section className="py-16 md:py-24">
        <Container className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <Reveal variant="left">
            <Tag>WHY WE STARTED</Tag>
            <h2
              className="mt-4 text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              なぜ、始めたのか。
            </h2>
            <div className="mt-6 space-y-4">
              <p
                className="text-[15px] leading-8"
                style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
              >
                関西就活ラボは、大手企業での選考・人事経験を持つメンバーが、「関西の就活生に、本当に役立つリアルな情報を届けたい」という想いから立ち上げたプロジェクトです。
              </p>
              <p
                className="text-[15px] leading-8"
                style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
              >
                私たち自身が就職活動を経験する中で感じたのは、世の中にある就活情報の偏りと、「本当に魅力的な企業の姿が、学生に十分届いていない」という現実でした。
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <Tag>WHAT WE AIM FOR</Tag>
            <h2
              className="mt-4 text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              何を、目指しているのか。
            </h2>
            <div className="mt-6 space-y-4">
              <p
                className="text-[15px] leading-8"
                style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
              >
                学生が知っている企業は、世の中にある企業のほんの一部です。
              </p>
              <p
                className="text-[15px] leading-8"
                style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
              >
                有名企業だけではなく、地域に根ざした会社、独自の技術を持つ会社、新しいことに挑戦している会社、強い想いを持つ経営者がいる会社など、世の中にはまだ多くの選択肢があります。
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 中間ステートメント */}
      <div
        className="py-20 text-center md:py-28"
        style={{ background: "var(--color-tag-ink)" }}
      >
        <LineReveal
          lines={["大手だけが、正解じゃない。"]}
          triggerOn="scroll"
          className="mx-auto max-w-[16em] text-balance text-[28px] leading-[1.5] text-white sm:text-4xl md:text-[3.25rem]"
          lineClassName=""
        />
      </div>

      <section className="py-16 md:py-24">
        <Container narrow>
          <Reveal className="mx-auto max-w-2xl">
            <p
              className="text-[15px] leading-9"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              関西を拠点に、学生がこれまで知らなかった企業や仕事と出会えるきっかけをつくり、企業名や知名度だけでは分からない「本当の魅力」を届けていきます。
            </p>
            <p
              className="mt-5 text-[15px] leading-9"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              関西企業を中心にしながらも、地域に関係なく、学生に知ってほしい企業や、実際に私たちが取材した企業のストーリーも発信していきます。
            </p>
            <p
              className="mt-5 text-[1.05rem] leading-9 font-bold"
              style={{ color: "var(--color-tag-ink)" }}
            >
              目指しているのは、学生が、「こんな会社があったんだ」「こんな仕事があるんだ」「この人たちと働いてみたい」と思える企業と出会える世界です。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src={STOCK_IMAGES.kobePortTower}
            alt="神戸ポートタワー"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, color-mix(in srgb, var(--color-tag-ink) 45%, transparent), transparent 55%)",
            }}
          />
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal className="max-w-xl">
            <Tag>OUR VALUES</Tag>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              私たちが大切にしていること
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
            {values.map((v, i) => (
              <StaggerReveal key={v.no} gap={0.14} x={i % 2 === 0 ? -32 : 32}>
                <span
                  className="text-[11px] tracking-widest"
                  style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-link)" }}
                >
                  {v.en}
                </span>
                <h3 className="mt-2 flex items-baseline gap-3">
                  <span
                    className="text-base"
                    style={{ fontFamily: "var(--font-tag-data)", color: "var(--color-tag-muted)" }}
                  >
                    {v.no}
                  </span>
                  <span
                    className="text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
                  >
                    {v.title}
                  </span>
                </h3>
                <p
                  className="mt-1 text-sm font-semibold"
                  style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
                >
                  {v.lead}
                </p>
                <div>
                  <p
                    className="mt-3 text-[15px] leading-8"
                    style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
                  >
                    {v.text}
                  </p>
                  <GrowLine className="mt-5 max-w-[64px] text-[var(--color-stamp)]" />
                </div>
              </StaggerReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* これからの関西就活ラボ */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-tag-surface)" }}>
        <Container>
          <Reveal className="max-w-2xl">
            <Tag>WHAT&apos;S NEXT</Tag>
            <h2
              className="mt-4 text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              これからの関西就活ラボ
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {nextSteps.map((s, i) => (
              <Reveal
                key={s.en}
                delay={i * 0.08}
                variant={i === 0 ? "left" : i === 2 ? "right" : "up"}
              >
                <div
                  className="border-t pt-5"
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-tag-ink) 18%, transparent)",
                  }}
                >
                  <span
                    className="text-[11px] tracking-widest"
                    style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-link)" }}
                  >
                    {s.en}
                  </span>
                  <p
                    className="mt-3 text-[15px] leading-8"
                    style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
                  >
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12">
            <div
              className="border-t pt-8"
              style={{ borderColor: "color-mix(in srgb, var(--color-tag-ink) 18%, transparent)" }}
            >
              <p
                className="max-w-2xl text-[1.15rem] leading-[1.9] font-bold"
                style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
              >
                目指しているのは、「関西の就活生と企業にとって、
                <span style={{ color: "var(--color-stamp)" }}>最も信頼される架け橋</span>」であり続けることです。
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 企業の皆様へ */}
      <section className="py-16 md:py-24">
        <Container narrow>
          <Reveal className="tag-card mx-auto max-w-3xl p-8 md:p-10">
            <Tag>FOR COMPANIES</Tag>
            <h2
              className="mt-4 text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              自社の本当の魅力を、
              <br className="sm:hidden" />
              次の世代へ。
            </h2>
            <p
              className="mt-5 max-w-2xl text-sm leading-7"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              関西就活ラボでは、経営者・人事・社員への取材を通して、仕事内容だけでは伝わらない企業の考え方、事業への想い、働く人、職場の雰囲気を学生へ届けます。ご希望に応じて、学生との交流イベントやインターン企画についてもご相談いただけます。
            </p>
            <Link
              href="/for-companies"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-link)" }}
            >
              企業の方へ 詳しく見る
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* JOIN US */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Tag>JOIN US</Tag>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              一緒に、関西の就活を
              <br />
              もっと面白く。
            </h2>
            <p
              className="mt-5 text-sm leading-7"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              関西就活ラボでは、関西の就活文化をより良くし、学生と企業の未来を一緒につくっていただける企業・学生の皆様を募集しています。
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <Reveal variant="left" className="tag-card tag-rotate--1 p-7">
              <span
                className="text-[11px] tracking-widest"
                style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
              >
                FOR COMPANIES
              </span>
              <h3
                className="mt-2 text-lg"
                style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
              >
                企業の皆様へ
              </h3>
              <ul className="mt-5 space-y-3">
                {forCompanyList.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-t pt-3 text-[15px]"
                    style={{
                      borderColor: "color-mix(in srgb, var(--color-tag-ink) 15%, transparent)",
                      fontFamily: "var(--font-tag-ui)",
                      color: "var(--color-tag-ink)",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--color-stamp)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="right" delay={0.1} className="tag-card tag-rotate-1 p-7">
              <span
                className="text-[11px] tracking-widest"
                style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
              >
                FOR STUDENTS
              </span>
              <h3
                className="mt-2 text-lg"
                style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
              >
                学生の皆様へ
              </h3>
              <ul className="mt-5 space-y-3">
                {forStudentList.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-t pt-3 text-[15px]"
                    style={{
                      borderColor: "color-mix(in srgb, var(--color-tag-ink) 15%, transparent)",
                      fontFamily: "var(--font-tag-ui)",
                      color: "var(--color-tag-ink)",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--color-stamp)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-16 text-center">
            <p
              className="text-xl leading-relaxed md:text-2xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              「この企業に出会えてよかった。」
              <br />
              「この学生に出会えてよかった。」
            </p>
            <p
              className="mx-auto mt-5 max-w-xl text-sm leading-7"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              そんな出会いを、関西から少しずつ増やしていきたいと考えています。企業と学生が、お互いのことをきちんと知った上で出会える場所を、私たちと一緒につくりませんか？
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 最終CTA */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-tag-surface)" }}>
        <Container narrow>
          <Reveal className="text-center">
            <h2
              className="mx-auto max-w-[18em] text-balance text-2xl leading-[1.5] md:text-4xl"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              関西就活ラボを、はじめてみませんか。
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--color-stamp)", fontFamily: "var(--font-tag-ui)" }}
              >
                企業を探す
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <div className="flex items-center gap-6">
                <Link
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b pb-0.5 text-sm font-semibold hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-tag-ui)",
                    color: "var(--color-tag-ink)",
                    borderColor: "var(--color-tag-ink)",
                  }}
                >
                  LINE <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b pb-0.5 text-sm font-semibold hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-tag-ui)",
                    color: "var(--color-tag-ink)",
                    borderColor: "var(--color-tag-ink)",
                  }}
                >
                  Instagram <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
