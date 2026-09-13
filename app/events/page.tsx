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
    <div className="lab-home">
      <PageHero
        breadcrumbLabel="就活イベント"
        eyebrow="EVENT"
        title={["学生と企業が、", "本音で話せる場所。"]}
        description="大規模な合同企業説明会ではなく、企業と学生がお互いの考え方や想いを知ることのできる、少人数のイベントを企画しています。"
        bgWord="CONNECT"
      />

      <Container className="py-24 md:py-32">
        <Reveal className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef0f3]">
            <CalendarClock size={24} className="text-electric" />
          </div>
          <h2 className="font-display mt-6 text-2xl font-bold text-ink md:text-3xl">
            イベント情報は近日公開予定です
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#515966]">
            現在、企業様と内容を調整しながら準備を進めています。日程・詳細が決まり次第、公式LINEとInstagramでお知らせしますので、しばらくお待ちください。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              公式LINEで最新情報を受け取る
            </Link>
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-void hover:text-white"
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
