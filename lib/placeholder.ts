// 制作段階のダミー画像を生成するユーティリティ。
// 実際の企業写真に差し替えるまでの仮画像を、テーマカラーの単色ブロックとして生成します。
// 「SAMPLE」であることは <SampleBadge /> によるUI側のバッジ表示で明示します
// （placehold.co の描画フォントが日本語グリフに対応していないため、画像自体には文字を焼き込みません）。

const PALETTE: { bg: string; fg: string }[] = [
  { bg: "0B1F3F", fg: "FFFFFF" }, // navy
  { bg: "2456E0", fg: "FFFFFF" }, // blue
  { bg: "DCE9FF", fg: "0B1F3F" }, // light blue
  { bg: "142B52", fg: "EAF1FF" }, // deep navy
  { bg: "3B6BF0", fg: "FFFFFF" }, // mid blue
  { bg: "0F284E", fg: "9DBBF5" }, // navy / soft blue text
];

export function sampleImage(
  width: number,
  height: number,
  _label: string,
  seed: number = 0
): string {
  const { bg } = PALETTE[Math.abs(seed) % PALETTE.length];
  return `https://placehold.co/${width}x${height}/${bg}/${bg}.png`;
}

function initialsFromSlug(slug: string): string {
  const parts = slug.split("-").filter(Boolean);
  const initials = parts.map((p) => p[0]?.toUpperCase() ?? "").join("");
  return initials.slice(0, 3) || "KS";
}

export function logoImage(slug: string, seed: number = 0): string {
  const { bg, fg } = PALETTE[Math.abs(seed) % PALETTE.length];
  const text = encodeURIComponent(initialsFromSlug(slug));
  return `https://placehold.co/240x240/${bg}/${fg}.png?text=${text}&font=roboto`;
}

// ------------------------------------------------------------------
// 背景装飾用のフリー素材写真（Lorem Picsum 経由でUnsplashの実写真を取得）。
// 余白が寂しく見えるセクションの背景テクスチャとして、
// ぼかし・グレースケール・低不透明度と組み合わせて使用する想定。
// 本番公開時は、ブランドに合わせた自社ライセンス画像への差し替えを推奨。
// ------------------------------------------------------------------

/** 関西就活ラボの世界観（オフィス・デスクワーク・人物・建築）に合う厳選ID */
export const STOCK_PHOTO_IDS = {
  deskLaptopCoffee: 6, // 木製デスクにノートPCとコーヒー
  deskNotebookGlasses: 180, // ノートPCと手帳、メモ
  deskGlassesMouse: 201, // シンプルなデスク周り
  deskFlatlay: 26, // 財布・時計・メガネのフラットレイ
  deskKeyboardHand: 366, // キーボードに手を添える様子（モノトーン）
  personPhoneLaptop: 3, // ノートPCとスマホを持つビジネスシーン
  personCameraBW: 91, // カメラを構える人物（モノクロ）
  cafeInterior: 42, // 木のテーブルがある落ち着いたカフェ
  buildingLookUp: 1076, // 見上げた近代建築
  hikerRidge: 177, // 尾根を歩く人物のシルエット（未来へ向かう比喩）
  deskLaptopNotes: 8, // ノートとノートPC、コーヒー
  productFlatlay: 60, // ガジェット類のデスクセットアップ
} as const;

export function stockPhoto(
  id: number,
  width: number,
  height: number,
  opts: { grayscale?: boolean; blur?: number } = {}
): string {
  const params = new URLSearchParams();
  if (opts.grayscale) params.set("grayscale", "");
  if (opts.blur) params.set("blur", String(opts.blur));
  const qs = params.toString();
  return `https://picsum.photos/id/${id}/${width}/${height}${qs ? `?${qs}` : ""}`;
}
