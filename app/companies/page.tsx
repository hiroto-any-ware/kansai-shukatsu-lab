import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { CompanyListClient } from "@/components/company/CompanyListClient";
import { PageHero } from "@/components/ui/PageHero";
import { STOCK_IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "企業を探す",
  description:
    "関西就活ラボがこれまで取材した企業インタビューの一覧です。関西の企業を中心に、地域を問わず学生に知ってほしい企業を掲載しています。企業規模やランキングでは絞り込まず、地域・業種から気になる企業に出会えます。",
};

export default async function CompaniesPage({
  searchParams,
}: {
  searchParams: Promise<{ pref?: string; cat?: string }>;
}) {
  const { pref, cat } = await searchParams;

  return (
    <div style={{ background: "var(--color-tag-bg)" }}>
      <PageHero
        breadcrumbLabel="企業を探す"
        eyebrow="COMPANY"
        title={["気になる場所、", "仕事から出会う。"]}
        description="関西就活ラボがこれまで取材した企業インタビューを、すべてご覧いただけます。関西の企業を中心に、地域を問わず学生に知ってほしい企業も掲載しています。企業規模やランキングでは絞り込まず、地域・業種からまだ知らない企業を探してみてください。"
        photo={{ src: STOCK_IMAGES.tsutenkakuTower, alt: "大阪・通天閣" }}
      />

      <Container className="py-16 md:py-24">
        <CompanyListClient companies={companies} initialPref={pref} initialCat={cat} />
      </Container>
    </div>
  );
}
