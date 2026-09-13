import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { CompanyListClient } from "@/components/company/CompanyListClient";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/Reveal";

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
    <div className="lab-home">
      <section className="lab-section" style={{ paddingTop: "clamp(120px, 14vw, 168px)" }}>
        <Reveal>
          <div className="mb-6">
            <Breadcrumb items={[{ label: "企業を探す" }]} />
          </div>
          <p className="lab-label">
            <span className="lab-label-rule" aria-hidden="true" /> COMPANY
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl leading-tight font-bold tracking-tight md:text-6xl">
            気になる場所、
            <br />
            仕事から出会う。
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#515966]">
            関西就活ラボがこれまで取材した企業インタビューを、すべてご覧いただけます。関西の企業を中心に、地域を問わず学生に知ってほしい企業も掲載しています。企業規模やランキングでは絞り込まず、地域・業種からまだ知らない企業を探してみてください。
          </p>
        </Reveal>
      </section>

      <section className="lab-section pt-0">
        <CompanyListClient companies={companies} initialPref={pref} initialCat={cat} />
      </section>
    </div>
  );
}
