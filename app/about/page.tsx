import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { STOCK_IMAGES } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/LineReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { GrowLine } from "@/components/ui/GrowLine";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
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

export default function AboutPage() {
  return (
    <div className="lab-home">
      {/* HERO */}
      <section className="lab-about-hero">
        <div className="lab-about-hero-grid">
          <Reveal className="lab-about-hero-copy">
            <div className="mb-6">
              <Breadcrumb items={[{ label: "関西就活ラボについて" }]} />
            </div>
            <p className="lab-label">
              <span className="lab-label-rule" aria-hidden="true" /> ABOUT US
            </p>
            <h1>
              大手だけが、
              <br />
              正解じゃない。
            </h1>
            <p>関西の就活生と企業を、&ldquo;想い&rdquo;で繋ぐ架け橋に。</p>
          </Reveal>
          <Reveal delay={0.1} as="div">
            <figure className="lab-about-hero-photo">
              <Image
                src={STOCK_IMAGES.arashiyamaBamboo}
                alt="京都・嵐山の竹林"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                className="object-cover"
              />
              <figcaption>KYOTO, JAPAN</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* なぜ・何を目指すのか */}
      <section className="lab-section lab-about-intro">
        <Reveal>
          <p className="lab-label">
            <span className="lab-label-rule" aria-hidden="true" /> WHY WE STARTED
          </p>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">なぜ、始めたのか。</h2>
          <div className="mt-8">
            <p>
              関西就活ラボは、大手企業での選考・人事経験を持つメンバーが、「関西の就活生に、本当に役立つリアルな情報を届けたい」という想いから立ち上げたプロジェクトです。
            </p>
            <p>
              私たち自身が就職活動を経験する中で感じたのは、世の中にある就活情報の偏りと、「本当に魅力的な企業の姿が、学生に十分届いていない」という現実でした。
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lab-label">
            <span className="lab-label-rule" aria-hidden="true" /> WHAT WE AIM FOR
          </p>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">何を、目指しているのか。</h2>
          <div className="mt-8">
            <p>学生が知っている企業は、世の中にある企業のほんの一部です。</p>
            <p>
              有名企業だけではなく、地域に根ざした会社、独自の技術を持つ会社、新しいことに挑戦している会社、強い想いを持つ経営者がいる会社など、世の中にはまだ多くの選択肢があります。
            </p>
          </div>
        </Reveal>
      </section>

      {/* 中間ステートメント */}
      <div className="lab-about-statement">
        <LineReveal
          lines={["大手だけが、正解じゃない。"]}
          triggerOn="scroll"
          className="lab-about-statement-text"
        />
      </div>

      <section className="lab-section">
        <Reveal className="lab-about-body">
          <p>
            関西を拠点に、学生がこれまで知らなかった企業や仕事と出会えるきっかけをつくり、企業名や知名度だけでは分からない「本当の魅力」を届けていきます。
          </p>
          <p>
            関西企業を中心にしながらも、地域に関係なく、学生に知ってほしい企業や、実際に私たちが取材した企業のストーリーも発信していきます。
          </p>
          <p>
            目指しているのは、学生が、「こんな会社があったんだ」「こんな仕事があるんだ」「この人たちと働いてみたい」と思える企業と出会える世界です。
          </p>
        </Reveal>
      </section>

      <section className="relative">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src={STOCK_IMAGES.kobePortTower}
            alt="神戸ポートタワー"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080f1d]/55 via-[#080f1d]/0 to-[#080f1d]/10" />
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="lab-section relative overflow-hidden">
        <AmbientPhoto src={STOCK_IMAGES.dotonboriStreet} className="opacity-[0.06]" imgClassName="grayscale" />
        <Reveal className="relative max-w-xl">
          <p className="lab-label">
            <span className="lab-label-rule" aria-hidden="true" /> OUR VALUES
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">私たちが大切にしていること</h2>
        </Reveal>
        <div className="lab-values relative">
          {values.map((v) => (
            <StaggerReveal key={v.no} gap={0.14}>
              <p className="lab-label">{v.en}</p>
              <h3>
                {v.no} {v.title}
              </h3>
              <p className="!mt-1 text-sm font-semibold text-[#515966]">{v.lead}</p>
              <div>
                <p>{v.text}</p>
                <GrowLine className="mt-5 max-w-[64px] text-navy-900/15" />
              </div>
            </StaggerReveal>
          ))}
        </div>
      </section>

      {/* これからの関西就活ラボ */}
      <section className="lab-section lab-about-next">
        <AmbientPhoto src={STOCK_IMAGES.naraParkDeer} className="opacity-[0.12]" imgClassName="grayscale" />
        <Reveal className="relative max-w-2xl">
          <p className="lab-label">
            <span className="lab-label-rule" aria-hidden="true" /> WHAT&apos;S NEXT
          </p>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">これからの関西就活ラボ</h2>
        </Reveal>
        <div className="lab-next-grid relative">
          {nextSteps.map((s, i) => (
            <Reveal key={s.en} delay={i * 0.08}>
              <div>
                <span>{s.en}</span>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="lab-about-next-statement relative">
          <p>
            目指しているのは、「関西の就活生と企業にとって、
            <span>最も信頼される架け橋</span>」であり続けることです。
          </p>
        </Reveal>
      </section>

      {/* 企業の皆様へ */}
      <section className="lab-section">
        <Reveal className="lab-join-card mx-auto max-w-3xl">
          <p className="lab-label">
            <span className="lab-label-rule" aria-hidden="true" /> FOR COMPANIES
          </p>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">
            自社の本当の魅力を、
            <br className="sm:hidden" />
            次の世代へ。
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#515966]">
            関西就活ラボでは、経営者・人事・社員への取材を通して、仕事内容だけでは伝わらない企業の考え方、事業への想い、働く人、職場の雰囲気を学生へ届けます。ご希望に応じて、学生との交流イベントやインターン企画についてもご相談いただけます。
          </p>
          <Link
            href="/for-companies"
            className="lab-text-link mt-6 inline-flex items-center gap-2"
          >
            企業の方へ 詳しく見る
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* JOIN US */}
      <section className="lab-section">
        <Reveal className="max-w-2xl">
          <p className="lab-label">
            <span className="lab-label-rule" aria-hidden="true" /> JOIN US
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            一緒に、関西の就活を
            <br />
            もっと面白く。
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#515966]">
            関西就活ラボでは、関西の就活文化をより良くし、学生と企業の未来を一緒につくっていただける企業・学生の皆様を募集しています。
          </p>
        </Reveal>

        <div className="lab-join-grid">
          <Reveal className="lab-join-card">
            <p className="lab-label">FOR COMPANIES</p>
            <h3>企業の皆様へ</h3>
            <ul>
              {forCompanyList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lab-join-card">
            <p className="lab-label">FOR STUDENTS</p>
            <h3>学生の皆様へ</h3>
            <ul>
              {forStudentList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-16 text-center">
          <p className="text-xl leading-relaxed font-bold md:text-2xl">
            「この企業に出会えてよかった。」
            <br />
            「この学生に出会えてよかった。」
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#515966]">
            そんな出会いを、関西から少しずつ増やしていきたいと考えています。企業と学生が、お互いのことをきちんと知った上で出会える場所を、私たちと一緒につくりませんか？
          </p>
        </Reveal>
      </section>

      {/* 最終CTA */}
      <section className="lab-about-cta">
        <AmbientPhoto src={STOCK_IMAGES.osakaStreetDay} className="opacity-[0.1]" imgClassName="grayscale" />
        <Reveal className="relative">
          <h2>関西就活ラボを、はじめてみませんか。</h2>
          <div className="lab-about-cta-actions">
            <Link href="/companies" className="lab-button">
              企業を探す
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <div className="lab-social-links">
              <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer">
                LINE <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
