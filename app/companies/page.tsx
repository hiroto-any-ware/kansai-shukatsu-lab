import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { CompanyListClient } from "@/components/company/CompanyListClient";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

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
    <div className="bg-white pt-16 md:pt-20">
      <div className="bg-navy-50">
        <Container className="py-14 md:py-20">
          <Breadcrumb items={[{ label: "企業を探す" }]} />
          <Eyebrow className="mt-6">COMPANY</Eyebrow>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-navy-900 md:text-5xl">
            企業を探す
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-navy-500">
            関西就活ラボがこれまで取材した企業インタビューを、すべてご覧いただけます。関西の企業を中心に、地域を問わず学生に知ってほしい企業も掲載しています。企業規模やランキングでは絞り込まず、地域・業種からまだ知らない企業を探してみてください。
          </p>
        </Container>
      </div>

      <Container className="py-14 md:py-20">
        <CompanyListClient
          companies={companies}
          initialPref={pref}
          initialCat={cat}
        />
      </Container>
    </div>
  );
}
