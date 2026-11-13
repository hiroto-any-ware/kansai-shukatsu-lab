import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "就活イベント",
  description:
    "関西就活ラボが開催する就活イベントについて。現在、開催内容を準備中です。詳細が決まり次第、公式LINE・Instagramでお知らせします。",
};

export default function EventsPage() {
  return (
    <div style={{ background: "var(--color-tag-bg)" }}>
      <PageHero
        breadcrumbLabel="就活イベント"
        eyebrow="EVENT"
        title={["学生と企業が、", "本音で話せる場所。"]}
        description="大規模な合同企業説明会ではなく、企業と学生がお互いの考え方や想いを知ることのできる、少人数のイベントを企画しています。"
      />

      <Container className="py-24 md:py-32">
        <Reveal
          className="tag-card tag-rotate--1 mx-auto max-w-lg p-8 text-center md:p-10"
        >
          <span
            className="inline-flex items-center gap-1.5 border border-dashed px-2.5 py-1 text-[11px] tracking-wider"
            style={{
              fontFamily: "var(--font-tag-label)",
              color: "var(--color-tag-muted)",
              borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
            }}
          >
            準備中
          </span>
          <div className="mt-5 flex justify-center">
            <CalendarClock size={28} style={{ color: "var(--color-stamp)" }} />
          </div>
          <h2
            className="mt-5 text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
          >
            イベント情報は近日公開予定です
          </h2>
          <p
            className="mt-4 text-sm leading-7"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            現在、企業様と内容を調整しながら準備を進めています。日程・詳細が決まり次第、公式LINEとInstagramでお知らせしますので、しばらくお待ちください。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--color-stamp)", fontFamily: "var(--font-tag-ui)" }}
            >
              公式LINEで最新情報を受け取る
            </Link>
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tag-card inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
            >
              <InstagramIcon size={15} />
              Instagramをフォローする
            </Link>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
