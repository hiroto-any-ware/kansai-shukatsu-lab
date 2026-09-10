// 関西就活ラボ ― 共通データ型定義
// 将来的に microCMS / Sanity / Supabase 等の Headless CMS へ接続することを想定し、
// フロントエンドのデータ構造とCMSのフィールド構造が揃うように設計しています。

export const PREFECTURES = [
  "大阪府",
  "京都府",
  "兵庫県",
  "奈良県",
  "滋賀県",
  "和歌山県",
] as const;
export type Prefecture = (typeof PREFECTURES)[number];

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

export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
  category:
    | "オフィス"
    | "会議室"
    | "社員"
    | "ミーティング"
    | "仕事風景"
    | "商品・サービス"
    | "集合写真";
  order: number;
  /** レイアウト上の見せ方のヒント */
  layout?: "large" | "normal" | "tall";
}

export interface QA {
  q: string;
  a: string;
}

export interface ExecutivePerson {
  photo: string;
  name: string;
  role: string;
  profile: string;
  qa: QA[];
}

export interface YoungEmployee {
  photo: string;
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
  thumbnail: string;
  heroImage: string;
  heroImageAlt: string;
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
    image: string;
    imageAlt: string;
  };
  executiveInterview: ExecutivePerson[];
  studentQuestions: QA[];
  gallery: GalleryImage[];
  youngEmployees: YoungEmployee[];
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
