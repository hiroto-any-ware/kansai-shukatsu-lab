import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companies } from "@/data/companies";
import { STOCK_IMAGES } from "@/lib/images";

const FACE_SLUGS = ["yamagata-harness", "shoei-seiki", "nagata-reiki"];

export function Hero() {
  const faces = FACE_SLUGS.map((slug) => companies.find((c) => c.slug === slug)!);

  return (
    <section className="lab-hero lab-hero-future">
      <div className="lab-hero-grid" aria-hidden="true" />
      <div className="lab-orbit lab-orbit-one" aria-hidden="true" />
      <div className="lab-orbit lab-orbit-two" aria-hidden="true" />
      <span className="lab-future-word" aria-hidden="true">
        FUTURE
      </span>

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
    </section>
  );
}
