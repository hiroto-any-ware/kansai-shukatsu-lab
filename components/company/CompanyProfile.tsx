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
    <section
      className="py-12 md:py-16"
      style={{ background: "var(--color-tag-bg)" }}
    >
      <Container narrow>
        <Reveal>
          <div className="tag-card p-6 sm:p-8">
            <div
              className="flex items-center justify-between border-b border-dashed pb-4"
              style={{ borderColor: "color-mix(in srgb, var(--color-tag-ink) 20%, transparent)" }}
            >
              <p
                className="text-lg font-bold"
                style={{
                  fontFamily: "var(--font-stamp)",
                  color: "var(--color-tag-ink)",
                }}
              >
                {company.companyName}
              </p>
              <span
                className="text-[10px] tracking-widest"
                style={{
                  fontFamily: "var(--font-tag-label)",
                  color: "var(--color-tag-muted)",
                }}
              >
                取材先台帳
              </span>
            </div>

            <dl className="mt-6 grid flex-1 grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {infoRows.map((r) => (
                <div key={r.label}>
                  <dt
                    className="text-[10px] font-semibold tracking-widest"
                    style={{
                      fontFamily: "var(--font-tag-label)",
                      color: "var(--color-tag-muted)",
                    }}
                  >
                    {r.label}
                  </dt>
                  <dd
                    className="mt-1.5 text-sm leading-6"
                    style={{
                      fontFamily: "var(--font-tag-ui)",
                      color: "var(--color-tag-ink)",
                    }}
                  >
                    {r.value}
                  </dd>
                </div>
              ))}
              {company.website && (
                <div>
                  <dt
                    className="text-[10px] font-semibold tracking-widest"
                    style={{
                      fontFamily: "var(--font-tag-label)",
                      color: "var(--color-tag-muted)",
                    }}
                  >
                    WEBSITE
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                      style={{ color: "var(--color-tag-link)" }}
                    >
                      <Globe size={13} />
                      企業HPを見る
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </Reveal>
        {company.employeeCount && (
          <p
            className="mt-4 text-xs leading-6"
            style={{
              fontFamily: "var(--font-tag-ui)",
              color: "var(--color-tag-muted)",
            }}
          >
            ※ 従業員数は企業から提供された事実情報として掲載しており、企業の優劣や検索条件には使用していません。
          </p>
        )}
      </Container>
    </section>
  );
}
