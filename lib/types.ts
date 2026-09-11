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
}

export interface Representative {
  name: string;
  role: string;
  profile: string;
  qa: QA[];
}

/** 若手社員の声（写真は用意できないためテキストのみ） */
export interface EmployeeVoice {
  name: string;
  joinedYear: string;
  jobType: string;
  qa: QA[];
}

export interface RecruitmentInfo {
  positions: string[];
  locations: string[];
  selectionProcess: string;
  internshipInfo?: string;
  newGraduateInfo: string;
  website: string;
}

export interface CompanyInterview {
  companyName: string;
  slug: string;
  companyLogo: string;
  /** 企業を表す一言（一覧カード用のキャッチコピー） */
  oneLiner: string;
  title: string;
  description: string;
  /** 用意できる企業写真は代表者写真1枚のみ。一覧・記事内で異なるトリミングで使い回す。 */
  representativePhoto: string;
  representativePhotoAlt: string;
  category: Category;
  prefecture: Prefecture;
  location: string;
  employeeCount: string;
  foundedYear: string;
  businessType: string;
  jobTypes: string;
  website: string;
  publishedAt: string;
  tags: string[];
  internshipAvailable: boolean;

  // --- 記事本文構成 ---
  businessSummary: {
    lead: string;
    body: string[];
  };
  representative: Representative;
  /** インタビュー中でも特に印象的な発言（引用セクションに大きく表示） */
  featuredQuote: string;
  studentQuestions: QA[];
  employeeVoices: EmployeeVoice[];
  editorialComment: {
    heading: string;
    body: string[];
  };
  recruitmentInfo: RecruitmentInfo;
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
