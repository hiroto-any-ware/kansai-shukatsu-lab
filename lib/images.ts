// サイト全体の背景・装飾に使うフリー素材写真（商用利用可のPexels素材）。
// /public/images 配下にダウンロード済みで、外部URLに依存しません。
//
// 重要：ここにある写真は「サイト全体の世界観・一般的な就活/ビジネスイメージ」
// としてのみ使用してください。特定企業の社員・社長・オフィス・仕事風景で
// あるかのように企業インタビュー記事内で使うことは禁止です。
// 企業インタビュー記事の写真は data/companies.ts の representativePhoto
// （社長・代表者写真）のみを使用します。

export const STOCK_IMAGES = {
  // 関西・日本の街並み
  kyotoRiverBusinessmen: "/images/kansai/kyoto-river-businessmen.jpg",
  osakaStreetDay: "/images/kansai/osaka-street-day.jpg",
  osakaCastleFerris: "/images/kansai/osaka-castle-ferris.jpg",
  dotonboriStreet: "/images/kansai/dotonbori-street.jpg",

  // ビジネスシーン・対話
  businessLoungeTalk: "/images/business/business-lounge-talk.jpg",
  businessCoffeeChat: "/images/business/business-coffee-chat.jpg",
  businessDiscussion: "/images/business/business-discussion.jpg",

  // 学生
  tokyoClassroomStudy: "/images/students/tokyo-classroom-study.jpg",

  // 就活ノウハウ（ノート・PC・勉強）
  deskNotebookLaptop: "/images/knowhow/desk-notebook-laptop.jpg",
  deskOverheadTea: "/images/knowhow/desk-overhead-tea.jpg",
  deskGlassesNotebook: "/images/knowhow/desk-glasses-notebook.jpg",
  womanWritingNotes: "/images/knowhow/woman-writing-notes.jpg",

  // イベント（座談会・交流会）
  roundtableTalk: "/images/events/roundtable-talk.jpg",
  groupSession: "/images/events/group-session.jpg",
} as const;
