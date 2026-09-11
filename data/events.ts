import { JobEvent } from "@/lib/types";
import { STOCK_IMAGES } from "@/lib/images";

// ダミーのイベントデータ（掲載イメージ）。実在のイベントではありません。

export const events: JobEvent[] = [
  {
    slug: "honne-talk-vol1",
    title: "関西就活ラボ EVENT vol.1「本音トーク会」",
    concept:
      "説明会では聞けない、経営者・社員の本音を少人数で聞ける座談会形式のイベントです。",
    image: STOCK_IMAGES.nachiFalls,
    imageAlt: "那智の滝と青岸渡寺（掲載イメージ）",
    dateLabel: "2026年10月18日（日）13:00〜16:00",
    place: "大阪市内 コワーキングスペース（申込者に詳細案内）",
    participatingCompanies: [
      "株式会社ハレノヒ工業",
      "ルートシグナル株式会社",
      "株式会社ヒラク広告社",
    ],
    targetGrade: "大学1〜4年生・大学院生",
    capacity: "30名（先着）",
    deadline: "2026年10月14日（水）",
    fee: "無料",
    dressCode: "私服可",
    timetable: [
      { time: "13:00", content: "開会・オリエンテーション" },
      { time: "13:15", content: "参加企業ピッチ（各社10分）" },
      { time: "13:50", content: "少人数座談会（3社ローテーション）" },
      { time: "15:20", content: "フリートーク・懇親タイム" },
      { time: "16:00", content: "終了" },
    ],
    applyUrl: "#",
  },
  {
    slug: "kansai-work-fes-2026",
    title: "関西就活ラボ EVENT「関西の仕事を知るFES」",
    concept:
      "業界の異なる企業が集まり、仕事内容や働き方をブースごとに紹介する体験型イベントです。",
    image: STOCK_IMAGES.tsutenkakuTower,
    imageAlt: "通天閣（掲載イメージ）",
    dateLabel: "2026年11月8日（日）11:00〜17:00",
    place: "京都市内 イベントホール（申込者に詳細案内）",
    participatingCompanies: [
      "株式会社KANSAI BRIDGE",
      "奈良食品ラボ株式会社",
      "淡海ロジスティクス株式会社",
      "すみれ不動産株式会社",
    ],
    targetGrade: "大学3年生・大学院1年生 中心（他学年も参加可）",
    capacity: "80名（事前申込制）",
    deadline: "2026年11月4日（水）",
    fee: "無料",
    dressCode: "私服可（オフィスカジュアル推奨）",
    timetable: [
      { time: "11:00", content: "開場・ブース紹介" },
      { time: "12:00", content: "業界研究トークセッション" },
      { time: "13:30", content: "企業ブース自由見学" },
      { time: "16:00", content: "座談会コーナー" },
      { time: "17:00", content: "終了" },
    ],
    applyUrl: "#",
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}
