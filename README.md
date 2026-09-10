# 関西就活ラボ（Kansai Shukatsu Lab）

「大手だけが、正解じゃない。」関西の就活生と優良企業を"想い"で繋ぐ就活メディアのWebサイトです。

Next.js（App Router）/ TypeScript / Tailwind CSS で構築しています。

## 技術構成

- Next.js 16（App Router / Turbopack）
- React 19 / TypeScript
- Tailwind CSS v4
- framer-motion（アニメーション）
- lucide-react（アイコン）

## ローカルでの動かし方

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと確認できます。

```bash
npm run build   # 本番ビルド
npm run start   # 本番ビルドの起動
npm run lint    # ESLint
```

## ディレクトリ構成

```
app/                 各ページ（App Router）
  page.tsx             TOPページ
  companies/           企業一覧・企業インタビュー詳細
  interviews/          インタビュー一覧
  events/              就活イベント
  knowhow/             就活ノウハウ
  about/               関西就活ラボについて
  for-companies/       企業の方へ
components/
  layout/              ヘッダー・フッター
  home/                TOPページ用セクション
  company/             企業詳細ページ用セクション
  ui/                  共通UIパーツ
data/
  companies.ts         企業インタビューのダミーデータ
  events.ts            イベントのダミーデータ
  articles.ts          就活ノウハウ記事のダミーデータ
lib/
  types.ts             データ型定義（将来のCMS接続を想定した構造）
  site.ts              サイト共通設定（LINE/InstagramのURLなど）
  placeholder.ts        ダミー画像生成ユーティリティ
```

## 公開前に必ず差し替えてください

このサイトは**第1フェーズ（デザイン・フロントエンド実装）**の成果物です。公開前に以下を必ず本番用の情報に差し替えてください。

1. **LINE公式アカウントのURL**
   [lib/site.ts](lib/site.ts) の `lineUrl` を実際のURLに変更してください。
2. **InstagramアカウントのURL**
   [lib/site.ts](lib/site.ts) の `instagramUrl` を実際のURLに変更してください。
3. **本番ドメイン**
   [lib/site.ts](lib/site.ts) の `url`（`https://example.com`）を、取得した独自ドメインに変更してください。OGP画像やsitemap.xmlの生成に使われます。
4. **企業データ・写真**
   [data/companies.ts](data/companies.ts) に掲載されている企業名・写真・インタビュー内容は、すべて制作用のダミーデータ（架空の企業）です。実際に取材した企業の情報・写真に差し替えてください。写真は `placehold.co` で自動生成した単色のダミー画像を使用しています。
5. **イベント・記事データ**
   [data/events.ts](data/events.ts) ／ [data/articles.ts](data/articles.ts) も同様にダミーデータです。
6. **お問い合わせフォーム**
   「企業の方へ」ページの相談ボタンは、現状リンク先が未設定（`#`）です。フォームサービス（Googleフォーム、HubSpot等）を用意し、リンクを差し替えてください。

## 将来のCMS接続について

[lib/types.ts](lib/types.ts) の `CompanyInterview` 型は、microCMS / Sanity / Supabase / Headless WordPress などのHeadless CMSに接続しやすいよう設計しています。フェーズ2では、`data/companies.ts` の静的データをCMSからのフェッチ処理に置き換えることを想定しています。

## Vercelへのデプロイ手順

1. このプロジェクトをGitHubリポジトリにpushする
2. [vercel.com](https://vercel.com) にログインし、「Add New... → Project」からこのリポジトリをインポートする
3. フレームワークは自動的に「Next.js」と検出されます（設定変更は不要です）
4. 「Deploy」をクリックすると数分で公開されます
5. 独自ドメインを使う場合は、Vercelのプロジェクト設定 → 「Domains」から取得済みのドメインを追加し、案内される手順でDNSレコードを設定してください

## デザインについて

「Editorial × Modern × Youth × Kansai」をコンセプトに、上質なWebマガジン・カルチャーメディアのような世界観を目指しています。企業の格付け・ランキングに見える表現は避け、都道府県・業種からの検索のみを絞り込み条件としています。

掲載されている企業名・写真・インタビュー内容は制作段階のダミーデータです。実在の企業・人物とは一切関係ありません。
