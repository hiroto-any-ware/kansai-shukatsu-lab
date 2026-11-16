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
    <header className="relative flex min-h-[88vh] items-end overflow-hidden md:min-h-[94vh]">
      <PhotoReveal className="absolute inset-0">
        <Image
          src={company.photo}
          alt={company.photoAlt}
          fill
          priority
          sizes="100vw"
          className="cine-photo ken-burns object-cover"
          style={{ objectPosition: `50% ${company.photoFocusY ?? 30}%` }}
        />
      </PhotoReveal>
      <div className="photo-scrim" />

      <Container className="relative z-10 pt-28 pb-14 md:pb-20">
        <StaggerReveal gap={0.13} className="max-w-3xl">
          <Breadcrumb
            items={[
              { label: "企業を探す", href: "/companies" },
              { label: company.companyName },
            ]}
          />

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Tag>{company.category}</Tag>
            <Tag>{company.prefecture}</Tag>
            <Tag>
              <span style={{ fontFamily: "var(--font-tag-data)" }}>
                {company.publishedAt.replace(/-/g, ".")}
              </span>
            </Tag>
          </div>

          {company.featuredQuote && (
            <p
              className="photo-heading mt-6 text-balance text-[30px] leading-[1.4] font-normal sm:text-[40px] md:text-[50px]"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              <StampMark>{company.featuredQuote}</StampMark>
            </p>
          )}

          <h1
            className="photo-heading mt-6 text-balance text-[20px] leading-[1.5] font-normal sm:text-2xl md:text-[26px]"
            style={{
              fontFamily: "var(--font-stamp)",
              color: company.featuredQuote ? "var(--color-tag-muted)" : "var(--color-tag-ink)",
            }}
          >
            <LineReveal lines={[company.title]} />
          </h1>

          <p className="mt-4 text-sm font-bold" style={{ color: "var(--color-tag-ink)" }}>
            {company.interviewee.name} / {company.interviewee.role}・{company.companyName}
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
      </Container>
    </header>
  );
}
