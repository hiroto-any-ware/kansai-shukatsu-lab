// サイト全体の背景・装飾に使うフリー素材写真（商用利用可のPexels素材）。
// /public/images 配下にダウンロード済みで、外部URLに依存しません。
//
// 重要：ここにある写真は「サイト全体の世界観・関西という土地の雰囲気」を
// 伝えるための風景写真です。人物が写った汎用ビジネス素材ではなく、
// 関西各府県の観光名所・風景を使用しています。
// 特定企業の社員・社長・オフィス・仕事風景であるかのように企業インタビュー
// 記事内で使うことは禁止です。企業インタビュー記事の写真は
// data/companies.ts の photo（社長・代表者写真）のみを使用します。

export const STOCK_IMAGES = {
  // 関西・日本の街並み・観光名所（人物を主役にせず、風景そのものを見せる）
  osakaStreetDay: "/images/kansai/osaka-street-day.jpg",
  osakaCastleFerris: "/images/kansai/osaka-castle-ferris.jpg",
  dotonboriStreet: "/images/kansai/dotonbori-street.jpg",
  tsutenkakuTower: "/images/kansai/tsutenkaku-tower.jpg", // 大阪
  fushimiInariTorii: "/images/kansai/fushimi-inari-torii.jpg", // 京都
  arashiyamaBamboo: "/images/kansai/arashiyama-bamboo.jpg", // 京都
  himejiCastle: "/images/kansai/himeji-castle.jpg", // 兵庫
  kobePortTower: "/images/kansai/kobe-port-tower.jpg", // 兵庫
  naraParkDeer: "/images/kansai/nara-park-deer.jpg", // 奈良
  lakeBiwaTorii: "/images/kansai/lake-biwa-torii.jpg", // 滋賀
  nachiFalls: "/images/kansai/nachi-falls.jpg", // 和歌山

  // 就活ノウハウ（ノート・PC・勉強）
  deskNotebookLaptop: "/images/knowhow/desk-notebook-laptop.jpg",
  deskOverheadTea: "/images/knowhow/desk-overhead-tea.jpg",
  deskGlassesNotebook: "/images/knowhow/desk-glasses-notebook.jpg",
} as const;
