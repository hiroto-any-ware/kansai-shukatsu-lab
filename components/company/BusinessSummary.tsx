import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GrowLine } from "@/components/ui/GrowLine";

export function BusinessSummary({ company }: { company: CompanyInterview }) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--color-tag-surface)" }}
    >
      <Container narrow>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-4">
            <span
              className="text-[11px] tracking-widest"
              style={{
                fontFamily: "var(--font-tag-label)",
                color: "var(--color-tag-muted)",
              }}
            >
              そもそも何をしている会社？
            </span>
            {company.businessType && (
              <h2
                className="mt-4 text-2xl leading-snug sm:text-3xl"
                style={{
                  fontFamily: "var(--font-stamp)",
                  color: "var(--color-tag-ink)",
                }}
              >
                {company.businessType}
              </h2>
            )}
          </Reveal>

          <Reveal variant="right" delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <GrowLine
              className="mb-8 max-w-[160px] text-[var(--color-stamp)]"
              delay={0.15}
            />
            <div className="space-y-5">
              {company.lead.map((p, i) => (
                <p
                  key={i}
                  className="max-w-xl text-[15px] leading-9"
                  style={{
                    fontFamily: "var(--font-read)",
                    color: "var(--color-tag-ink)",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
