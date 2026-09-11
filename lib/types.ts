// 関西就活ラボ ― 共通データ型定義
// 将来的に microCMS / Sanity / Supabase 等の Headless CMS へ接続することを想定し、
// フロントエンドのデータ構造とCMSのフィールド構造が揃うように設計しています。
//
// 企業インタビューで実際に用意できる写真は「社長・代表者の写真1枚」のみという
// 制作方針のため、CompanyInterview は写真フィールドを representativePhoto の
// 1枚のみに絞っています（オフィス写真・社員写真・ギャラリー等は持たない）。

// 関西就活ラボは「関西にある企業だけを紹介するメディア」ではなく、
// 「関西の就活生を起点に、まだ知らない企業や仕事との出会いをつくるメディア」。
// そのため掲載企業の所在地は関西の6府県に限定しない。
// PREFECTURES は「関西の企業を探す」絞り込み機能で使う関西の府県一覧。
export const PREFECTURES = [
  "大阪府",
  "京都府",
  "兵庫県",
  "奈良県",
  "滋賀県",
  "和歌山県",
] as const;
export type KansaiPrefecture = (typeof PREFECTURES)[number];

/** 関西以外の企業も掲載できるよう、実際の所在地は自由な文字列として保持する。 */
export type Prefecture = string;

/** 関西の企業を探す絞り込みで使う「その他の地域」バケットのラベル */
export const OTHER_REGION_LABEL = "その他の地域" as const;

export function isKansaiPrefecture(
  prefecture: string
): prefecture is KansaiPrefecture {
  return (PREFECTURES as readonly string[]).includes(prefecture);
}

/** 一覧・絞り込み表示用に、関西の府県名かそれ以外かを判定してラベルを返す */
export function regionLabel(prefecture: string): string {
  return isKansaiPrefecture(prefecture) ? prefecture : OTHER_REGION_LABEL;
}

export const CATEGORIES = [
  "IT・SaaS",
  "メーカー",
  "商社",
  "広告・マーケティング",
  "金融",
  "不動産",
  "建設",
  "人材",
  "コンサル",
  "食品",
  "小売",
  "物流",
  "サービス",
  "その他",
] as const;
export type Category = (typeof CATEGORIES)[number];

export interface QA {
  q: string;
  a: string;
  /** 複数の話者が登場する記事で、回答者を明示する場合に使用（例: 総務担当） */
  speaker?: string;
}

/** インタビュー記事の取材対象者。実際の役職を正確に記載する（社長とは限らない） */
export interface Interviewee {
  name: string;
  role: string;
}

/**
 * 記事本文を構成するブロック。取材記事によって構成（Q&A形式／地の文形式／
 * 箇条書きレポート形式）が異なるため、元記事の構造をそのまま表現できるよう
 * ブロック単位の柔軟な構造にしている。
 */
export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraphs"; speaker?: string; paragraphs: string[] }
  | { type: "qa"; items: QA[] }
  | { type: "quote"; text: string }
  | { type: "bullets"; items: string[] };

export interface CompanyInterview {
  companyName: string;
  slug: string;
  /** 取材対象者（社長とは限らないため、実際の役職をそのまま保持する） */
  interviewee: Interviewee;
  title: string;
  /** 記事冒頭のリード文（要約しすぎず、元記事の導入部をそのまま使用） */
  lead: string[];
  /** 企業ごとに用意できる写真は代表者・取材対象者の写真1枚のみ */
  photo: string;
  photoAlt: string;
  category: Category;
  prefecture: Prefecture;
  /** 記事または公式サイトで確認できた住所。不明な場合は設定しない */
  address?: string;
  /** 企業公式サイトURL */
  website?: string;
  /** 記事内で確認できた場合のみ設定。不明な場合は表示しない */
  foundedYear?: string;
  employeeCount?: string;
  businessType?: string;
  /** インタビュー中でも特に印象的な、記事本文からそのまま引用した発言 */
  featuredQuote?: string;
  publishedAt: string;
  /** 記事本文（見出し・Q&A・地の文・引用・箇条書きを元の構成のまま格納） */
  blocks: ArticleBlock[];
}

export interface JobEvent {
  slug: string;
  title: string;
  concept: string;
  image: string;
  imageAlt: string;
  dateLabel: string;
  place: string;
  participatingCompanies: string[];
  targetGrade: string;
  capacity: string;
  deadline: string;
  fee: string;
  dressCode: string;
  timetable: { time: string; content: string }[];
  applyUrl: string;
}

export interface KnowhowArticle {
  slug: string;
  category:
    | "ES対策"
    | "面接対策"
    | "ガクチカ"
    | "自己PR"
    | "志望動機"
    | "企業研究"
    | "業界研究"
    | "インターン"
    | "OB訪問"
    | "就活スケジュール";
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}
