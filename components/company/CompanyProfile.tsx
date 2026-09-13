import { Globe } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function rows(c: CompanyInterview) {
  return [
    { label: "所在地", value: c.address },
    { label: "設立", value: c.foundedYear },
    { label: "事業内容", value: c.businessType },
    { label: "従業員数", value: c.employeeCount },
  ].filter((r): r is { label: string; value: string } => Boolean(r.value));
}

export function CompanyProfile({ company }: { company: CompanyInterview }) {
  const infoRows = rows(company);
  return (
    <section className="border-b border-navy-900/8 bg-white py-14 md:py-20">
      <Container narrow>
        <Reveal className="flex flex-col gap-8 rounded-2xl border border-navy-900/8 p-6 sm:gap-10 md:p-10">
          <p className="font-display text-xl font-bold text-navy-900">
            {company.companyName}
          </p>

          <dl className="grid flex-1 grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {infoRows.map((r) => (
              <div key={r.label}>
                <dt className="font-label text-[10px] font-semibold tracking-widest text-navy-400">
                  {r.label.toUpperCase()}
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-navy-800">{r.value}</dd>
              </div>
            ))}
            {company.website && (
              <div>
                <dt className="font-label text-[10px] font-semibold tracking-widest text-navy-400">
                  WEBSITE
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700"
                  >
                    <Globe size={13} />
                    企業HPを見る
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
        {company.employeeCount && (
          <p className="mt-4 text-xs leading-6 text-navy-400">
            ※ 従業員数は企業から提供された事実情報として掲載しており、企業の優劣や検索条件には使用していません。
          </p>
        )}
      </Container>
    </section>
  );
}
