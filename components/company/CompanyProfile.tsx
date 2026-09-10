import Image from "next/image";
import { Globe } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";

const rows = (c: CompanyInterview) => [
  { label: "所在地", value: c.location },
  { label: "設立", value: c.foundedYear },
  { label: "事業内容", value: c.businessType },
  { label: "従業員数", value: c.employeeCount },
  { label: "採用職種", value: c.jobTypes },
];

export function CompanyProfile({ company }: { company: CompanyInterview }) {
  return (
    <section className="border-b border-navy-900/8 bg-white py-14 md:py-20">
      <Container narrow>
        <div className="flex flex-col gap-8 rounded-2xl border border-navy-900/8 p-6 sm:flex-row sm:items-start sm:gap-10 md:p-10">
          <div className="flex shrink-0 flex-col items-center gap-3 sm:items-start">
            <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-navy-50 md:h-24 md:w-24">
              <Image
                src={company.companyLogo}
                alt={`${company.companyName}のロゴ（掲載イメージ）`}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-display text-center text-base font-bold text-navy-900 sm:text-left">
              {company.companyName}
            </p>
          </div>

          <dl className="grid flex-1 grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {rows(company).map((r) => (
              <div key={r.label}>
                <dt className="font-label text-[10px] font-semibold tracking-widest text-navy-400">
                  {r.label.toUpperCase()}
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-navy-800">{r.value}</dd>
              </div>
            ))}
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
          </dl>
        </div>
        <p className="mt-4 text-xs leading-6 text-navy-400">
          ※ 従業員数は企業から提供された事実情報として掲載しており、企業の優劣や検索条件には使用していません。
        </p>
      </Container>
    </section>
  );
}
