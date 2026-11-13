---
# gstack: design-md-format=spec
name: 関西就活ラボ
description: 工場・職人の仕事場にある検品タグと朱印の台帳をそのまま視覚言語にした、手触りのある就活メディア
colors:
  background: "#D9D3C1"    # コンクリートの床。ページ全体の地色
  primary: "#BE3D2B"        # 朱色の印。最優先アクション/状態にのみ使う
  on-primary: "#F2EDE0"
  surface: "#F2EDE0"        # タグ紙。カード・パネルなど一段上の面
  text: "#1F2A44"           # 藍色の墨。純粋な黒は使わない
  text-muted: "#6B6456"     # 古びた鉛筆色
  accent: "#3A5A78"         # 藍系の青。リンクなど控えめな強調
  success: "#4B6B4F"        # 検品OKタグの緑
  warning: "#B8863B"        # 注意タグの琥珀色
  error: "#9B2C20"          # 朱色よりやや深い赤褐色。primaryと混同しない
typography:
  display:
    fontFamily: "Dela Gothic One"
    fontWeight: 400
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    letterSpacing: "0em"
  body:
    fontFamily: "Zen Old Mincho"
    fontSize: "1rem"
    lineHeight: 1.9
  label:
    fontFamily: "DotGothic16"
    fontSize: "0.75rem"
    letterSpacing: "0.08em"
  mono:
    fontFamily: "Martian Mono"
    fontFeature: "tnum"
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-hover:
    backgroundColor: "#9B2C20"
  input:
    borderColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  nav-link:
    textColor: "{colors.text}"
---

# 関西就活ラボ — デザインシステム「現場台帳」

## Overview

**Creative North Star:** 工場・職人の仕事場にある検品タグ、納品伝票、反物の見本カード、朱印の台帳——取材先の多くを占める繊維・製造業の多世代企業が実際に使っている"記録物"そのものを、サイトの視覚言語にする。借り物の「読み物メディア風」や「手書きエッセイ風」ではなく、このブリーフの実コンテンツ（経営者への取材）に直接根ざした唯一の方向性。

**Product context:** 関西の就活生と、大手ではない優良企業（繊維・製造業中心の多世代ファミリー企業）をつなぐ就活メディア。核となるコンテンツは9社分の実インタビュー記事（経営者の生の言葉）。競合はONE CAREER（検索ツール然とした就活サイト）、Wantedly（自信に満ちたタイポグラフィのビジネスSNS）。

**Mode per surface:**
- TOP・about・for-companies: Persuade（ブランドの世界観を伝える）
- companies一覧・interviews一覧・events一覧: Read寄りのBrowse（タグが散らばった作業台のように眺めて選ぶ）
- 企業インタビュー詳細: Read（一段組の読み物として没入させる）
- 問い合わせフォーム: Operate（迷わせない）

**Reference sites:** ONE CAREER (onecareer.jp), Wantedly (wantedly.com), SUUMOタウン (suumo.jp/town), ほぼ日刊イトイ新聞 (1101.com) — いずれも「カテゴリの定番」「差別化のヒント」として参照し、どの意匠も直接模倣はしない。

**Key characteristics:**
- 色は「コンクリートの床」「タグ紙」「藍染の墨」「朱印」という4つの実在素材から導かれる
- 朱色は1画面に1箇所だけ使う印（使うほど意味が薄れる）
- 企業・イベントの一覧は均一グリッドではなく、タグが作業台に散らばったような非対称配置
- インタビュー本文はミンチョ体の一段組で、広告的な演出を足さずに読ませる

## Colors

**Strategy:** Restrained寄り——地色・面・墨の3つは無彩色に近いニュートラルで固定し、朱色（primary）だけが意味を持つ色として機能する。accentの藍系の青はリンクなど控えめな用途に限定し、朱色と競合させない。

**Light or dark:** 常にライト（紙とコンクリートの地色が前提）。ダークモードは想定しない——このサイトは「昼間の作業場」の比喩であり、画面の明暗を利用シーンで切り替える理由がない。

地色`background`（コンクリート）とカード面`surface`（タグ紙）は明度差の小さい2トーンの無彩色で、階層は背景からの「浮き」で示す（影ではなく面の質感差）。`primary`（朱色）はボタン・現在地・最重要CTAのみに使い、状態を示す`success`/`warning`/`error`は朱色より暗く沈んだトーンにして、朱色の特別感を侵さない。

## Typography

- **display (Dela Gothic One):** クレートに刻印したような太い版画的ウェイト。単一ウェイトなので、サイズとトラッキングのみで強弱をつける。見出し・数字の強調に使い、6remを超える巨大表示は避ける。
- **body (Zen Old Mincho):** インタビュー本文・記事本文専用。文語的なミンチョ体で、広めの行間(1.9)によって長文のQ&Aを読ませる。
- **UIクロム（ナビ・ボタン・フォーム）:** 上記4ロールに加え、実装では操作系の文字にZen Kaku Gothic Newを使う（DotGothic16は装飾的すぎて長い文言には不向きなため、ラベル・日付・ステータスの短い語に限定）。
- **label (DotGothic16):** 日付・ステータス・タグの短い語のみ。工場の電光表示を思わせる打点字体。
- **mono (Martian Mono):** 住所・創業年・電話番号などラテン文字主体のデータ表示。

全フォントはGoogle Fonts上でOFL-1.1ライセンスにて確認済み（商用利用可）。

## Layout

- 最大幅: 本文コンテンツ 680px、ワイドセクション 1200px
- インタビュー詳細: 一段組。写真はヒーローで大きく、本文はその下に続く読み物構成（アプリ的なカードUIにしない）
- companies一覧・interviews一覧・events一覧: 均一グリッドを崩し、カードサイズを2〜3段階持たせ、わずかな回転（-2°〜2°）と重なりで「作業台にタグが置かれた」状態を作る。スマホでは回転を弱める（可読性優先）。
- モバイル優先。就活生は主にスマホで閲覧する前提でタップ領域・文字サイズを設計する。

## Elevation & Depth

影は使わない、または極めて控えめに留める（紙が紙の上に乗っている程度のオフセット+ぼかし、タグが浮いて見えるだけの最小限）。発光・グロー・放射状グラデーションは一切使わない。

## Shapes

角は基本シャープ（sm:2px〜lg:6px）。タグ・伝票は紙を裁断した角であり、丸めすぎない。唯一の完全な円（`rounded.full`）は朱印（ハンコ）のスタンプ自体にのみ使う——ボタンやアバターのピル形状には使わない。

## Components

- **button-primary:** 背景=朱色、文字=タグ紙色、角は最小限の丸み。hoverで朱色をやや暗く沈める（#9B2C20）。光るような変化はさせない。
- **card:** 背景=タグ紙色。影は最小限。一覧ページではカードごとにわずかな回転・サイズ差を持たせる。
- **pull-quote（引用）:** 経営者の発言を、整った組版の引用符ではなく、写真に朱色の手書き風マーキング（下線・丸囲み）を直接重ねて見せる。検品マークの比喩を文字通り実現する、このサイト固有の演出。
- **input:** 枠線=古びた鉛筆色、角は最小限。

## Do's and Don'ts

- Do: 朱色は1画面1箇所のルールを守る
- Do: インタビュー本文はミンチョ体・広い行間で、広告的な装飾を足さない
- Do: 一覧ページの非対称配置は、スマホでは回転を弱めて可読性を優先する
- Don't: 紫系グラデーション、均一な角丸、中央揃えの3カラムフィーチャーグリッドなど「AIっぽい」定型は使わない
- Don't: スクロールに過剰な演出（前回のような作り込みすぎたシーン型スクロール）を足さない
- Don't: 朱色をボタン以外の装飾（枠線・背景全面など）に多用しない

## Motion

- **Approach:** intentional（本文は控えめなフェード/浮き上がり程度）
- **Easing:** enter(ease-out) exit(ease-out) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms) long(400-700ms)
- **The one authored moment:** 見出し・引用が画面に入ったとき、朱の印影が一拍でスタンプされるように現れる演出。それ以外の場面で同種の演出を繰り返さない。

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-11-13 | 「現場台帳」方向性を採用 | /design-consultationによる調査（ONE CAREER/Wantedly/SUUMOタウン/ほぼ日の視覚リサーチ）と、独立デザイン案（別エージェント）との比較・統合により決定。取材先の多くが繊維・製造業の多世代企業であるという実コンテンツに最も根ざしていたため |
