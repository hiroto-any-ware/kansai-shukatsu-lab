"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { companies } from "@/data/companies";
import { STOCK_IMAGES } from "@/lib/images";

const FACE_SLUGS = ["yamagata-harness", "shoei-seiki", "nagata-reiki"];

/**
 * PC・タブレット幅でのみ、ヒーローを画面に固定しながらズーム＋
 * フェードアウトさせ、次のセクション（企業インタビューの3D空間）へ
 * 「入っていく」感覚を作る。スマートフォンや prefers-reduced-motion
 * では通常の静止セクションとして表示する（軽量・分かりやすさ優先）。
 */
function usePinEnabled() {
  const reduced = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop && !reduced;
}

export function Hero() {
  const faces = FACE_SLUGS.map((slug) => companies.find((c) => c.slug === slug)!);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinEnabled = usePinEnabled();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0.45, 1], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div ref={wrapRef} className={pinEnabled ? "lab-hero-scene" : undefined}>
      <motion.section
        className={pinEnabled ? "lab-hero lab-hero-future lab-hero-pin" : "lab-hero lab-hero-future"}
        style={pinEnabled ? { scale, opacity } : undefined}
      >
        <motion.div
          className="lab-hero-grid"
          style={pinEnabled ? { y: gridY } : undefined}
          aria-hidden="true"
        />
        <div className="lab-orbit lab-orbit-one" aria-hidden="true" />
        <div className="lab-orbit lab-orbit-two" aria-hidden="true" />
        <motion.span
          className="lab-future-word"
          style={pinEnabled ? { y: wordY } : undefined}
          aria-hidden="true"
        >
          FUTURE
        </motion.span>

        <div className="lab-hero-copy">
          <p className="lab-label">
            <span className="lab-label-rule" aria-hidden="true" /> KANSAI SHUKATSU LAB
          </p>
          <h1>
            まだ知らない、
            <br />
            自分の<span>未来へ。</span>
          </h1>
          <p className="lab-intro">
            企業の名前より、そこで働く人の話を。
            <br />
            関西の就活生へ届ける、仕事との出会い。
          </p>
          <a className="lab-button" href="#stories">
            企業の話を読む <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>

        <figure className="lab-hero-image">
          <Image
            src={STOCK_IMAGES.osakaStreetDay}
            alt="大阪の街並み"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
            className="object-cover"
          />
          <figcaption>
            <span>KANSAI, JAPAN</span>
            <span>YOUR NEXT STARTS HERE</span>
          </figcaption>
        </figure>

        <div className="lab-hero-people" aria-label="企業インタビュー">
          <div className="lab-hero-faces">
            {faces.map((c) => (
              <Link key={c.slug} aria-label={`${c.companyName}のインタビューを読む`} href={`/companies/${c.slug}`}>
                <Image
                  src={c.photo}
                  alt={c.photoAlt}
                  fill
                  sizes="72px"
                  className="object-cover"
                  style={{ objectPosition: `50% ${c.photoFocusY ?? 30}%` }}
                />
              </Link>
            ))}
          </div>
          <Link href="/interviews">
            働く人の、本音へ。 <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="lab-hero-bottom">
          <span>大手だけが、正解じゃない。</span>
          <Link href="/about">
            関西就活ラボについて <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
