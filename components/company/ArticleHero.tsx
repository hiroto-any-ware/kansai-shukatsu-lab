import Image from "next/image";
import { CompanyInterview } from "@/lib/types";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { LineReveal } from "@/components/ui/LineReveal";
import { PhotoReveal } from "@/components/ui/PhotoReveal";
import { StampMark } from "@/components/ui/StampMark";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-tag-label inline-flex items-center gap-1.5 border border-dashed border-[var(--color-tag-ink)]/30 px-2.5 py-1 text-[11px] tracking-wider text-[var(--color-tag-muted)]"
      style={{ fontFamily: "var(--font-tag-label)" }}
    >
      {children}
    </span>
  );
}

export function ArticleHero({ company }: { company: CompanyInterview }) {
  return (
    <header
      className="pt-28 pb-16 md:pt-36 md:pb-20"
      style={{ background: "var(--color-tag-bg)" }}
    >
      <Container>
        <Breadcrumb
          items={[
            { label: "企業を探す", href: "/companies" },
            { label: company.companyName },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <StaggerReveal
            className="order-2 lg:order-1 lg:col-span-7"
            gap={0.13}
            x={-24}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Tag>{company.category}</Tag>
              <Tag>{company.prefecture}</Tag>
              <Tag>
                <span style={{ fontFamily: "var(--font-tag-data)" }}>
                  {company.publishedAt.replace(/-/g, ".")}
                </span>
              </Tag>
            </div>

            <h1
              className="mt-6 text-balance text-[28px] leading-[1.35] font-normal sm:text-4xl md:text-[42px]"
              style={{
                fontFamily: "var(--font-stamp)",
                color: "var(--color-tag-ink)",
              }}
            >
              <LineReveal lines={[company.title]} />
            </h1>

            <p
              className="mt-6 text-sm font-bold"
              style={{ color: "var(--color-tag-ink)" }}
            >
              {company.companyName}
            </p>
            <p
              className="mt-3 max-w-md text-[15px] leading-8"
              style={{
                fontFamily: "var(--font-tag-ui)",
                color: "var(--color-tag-muted)",
              }}
            >
              {company.lead[0]}
            </p>
          </StaggerReveal>

          <PhotoReveal
            delay={0.15}
            x={24}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <figure
              className="tag-card tag-rotate-1 relative aspect-[4/5] overflow-hidden p-2"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={company.photo}
                  alt={company.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 42vw"
                  className="object-cover"
                  style={{ objectPosition: `50% ${company.photoFocusY ?? 30}%` }}
                />
              </div>
            </figure>

            {company.featuredQuote && (
              <div className="tag-card tag-rotate--1 -mt-6 ml-6 max-w-[88%] p-4 sm:ml-10">
                <p
                  className="text-[13px] leading-7"
                  style={{
                    fontFamily: "var(--font-stamp)",
                    color: "var(--color-tag-ink)",
                  }}
                >
                  <StampMark>{company.featuredQuote}</StampMark>
                </p>
                <p
                  className="mt-2 font-tag-label text-[10px] tracking-wider"
                  style={{
                    fontFamily: "var(--font-tag-label)",
                    color: "var(--color-tag-muted)",
                  }}
                >
                  {company.interviewee.name} / {company.interviewee.role}
                </p>
              </div>
            )}
          </PhotoReveal>
        </div>
      </Container>
    </header>
  );
}
