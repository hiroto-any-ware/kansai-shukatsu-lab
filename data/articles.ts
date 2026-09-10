import { KnowhowArticle } from "@/lib/types";
import { sampleImage } from "@/lib/placeholder";

// 就活ノウハウ記事のダミーデータ（掲載イメージ）。
// Instagramでの発信内容と連動させ、将来的にWeb記事として蓄積していく想定です。

export const articles: KnowhowArticle[] = [
  {
    slug: "gakuchika-how-to",
    category: "ガクチカ",
    title: "「ガクチカがない」と思っている人へ。エピソードの見つけ方",
    description:
      "特別な実績がなくても大丈夫。日常の経験を「ガクチカ」に変える考え方を紹介します。",
    thumbnail: sampleImage(900, 700, "ガクチカの見つけ方", 2),
    publishedAt: "2026-08-01",
  },
  {
    slug: "kansai-企業研究の始め方",
    category: "企業研究",
    title: "大手だけを見ていませんか？関西の優良企業の探し方",
    description:
      "知名度だけで企業を選ぶ前に知っておきたい、関西の企業研究の視点をまとめました。",
    thumbnail: sampleImage(900, 700, "企業研究の始め方", 3),
    publishedAt: "2026-07-22",
  },
  {
    slug: "mensetsu-gyakushitsumon",
    category: "面接対策",
    title: "逆質問で差がつく。面接官の印象に残る質問リスト",
    description:
      "「特にありません」はもったいない。関心の高さが伝わる逆質問の作り方を解説します。",
    thumbnail: sampleImage(900, 700, "逆質問の作り方", 5),
    publishedAt: "2026-07-10",
  },
  {
    slug: "ob-houmon-junbi",
    category: "OB訪問",
    title: "OB・OG訪問、何を聞けばいい？失敗しない質問の準備",
    description:
      "限られた時間を有効に使うための、OB・OG訪問の事前準備と質問例を紹介します。",
    thumbnail: sampleImage(900, 700, "OB訪問の準備", 1),
    publishedAt: "2026-06-25",
  },
];
