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
