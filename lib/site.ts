export const siteConfig = {
  name: "関西就活ラボ",
  nameEn: "KANSAI SHUKATSU LAB",
  description:
    "大手だけが、正解じゃない。関西の就活生と優良企業を「想い」で繋ぐ就活メディア「関西就活ラボ」。企業インタビューや就活イベント、就活ノウハウを発信しています。",
  url: "https://example.com", // TODO: 独自ドメイン取得後に本番URLへ差し替え
  lineUrl: "https://line.me/R/ti/p/@381flauo",
  instagramUrl:
    "https://www.instagram.com/kansai_shukatsu_lab?stkn=MXZ5ZjNzcGZwNjA2bg==",
};

export const mainNav = [
  { label: "企業を探す", href: "/companies" },
  { label: "インタビュー", href: "/interviews" },
  { label: "就活イベント", href: "/events" },
  { label: "就活ノウハウ", href: "/knowhow" },
  { label: "関西就活ラボについて", href: "/about" },
  { label: "企業の方へ", href: "/for-companies" },
] as const;
