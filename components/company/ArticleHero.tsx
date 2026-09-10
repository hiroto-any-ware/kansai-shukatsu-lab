import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { Container } from "@/components/ui/Container";

export function ArticleHero({ company }: { company: CompanyInterview }) {
  return (
    <header className="relative pt-16 md:pt-20">
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/9]">
        <Image
          src={company.heroImage}
          alt={company.heroImageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-navy-950/10" />
        <SampleBadge className="right-4 top-4 md:right-6 md:top-6" />

        <div className="absolute inset-x-0 bottom-0">
          <Container className="pb-8 md:pb-12">
            <div className="mb-5 [&_a]:text-white/60 [&_span]:text-white">
              <Breadcrumb
                items={[
                  { label: "企業を探す", href: "/companies" },
                  { label: company.companyName },
                ]}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-label rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-widest text-white backdrop-blur-sm">
                {company.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/70">
                <MapPin size={13} />
                {company.location}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/70">
                <Calendar size={13} />
                {company.publishedAt}
              </span>
            </div>
            <h1 className="font-display mt-4 max-w-3xl text-2xl font-bold leading-snug text-white sm:text-3xl md:text-[42px]">
              {company.title}
            </h1>
            <p className="mt-4 text-sm font-semibold text-sky-100 md:text-base">
              {company.companyName}
            </p>
          </Container>
        </div>
      </div>
    </header>
  );
}
