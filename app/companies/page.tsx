import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { CompanyListClient } from "@/components/company/CompanyListClient";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "企業を探す",
  description:
    "関西の優良企業を都道府県・業種から探せます。企業規模やランキングでは絞り込まず、興味のある地域・仕事から気になる企業に出会えます。",
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
            企業規模やランキングでは絞り込みません。都道府県・業種から、あなたがまだ知らない関西の企業を探してみてください。
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
