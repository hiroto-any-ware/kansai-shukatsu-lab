import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ArticleHero({ company }: { company: CompanyInterview }) {
  return (
    <header className="relative overflow-hidden bg-white pt-16 md:pt-20">
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -right-6 top-10 select-none text-[9rem] leading-none text-navy-900/[0.035] sm:text-[13rem] md:top-16 md:text-[18rem]"
      >
        01
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(10,23,48,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 70%)",
        }}
      />

      <Container className="relative py-10 md:py-16">
        <Breadcrumb
          items={[
            { label: "企業を探す", href: "/companies" },
            { label: company.companyName },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="order-2 lg:order-1 lg:col-span-7">
            <SectionNumber no="01" label="COMPANY" />
            <h1 className="font-display mt-6 text-balance text-[28px] font-bold leading-[1.3] text-navy-900 sm:text-4xl md:text-[44px]">
              {company.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="font-label rounded-full bg-navy-900 px-3 py-1.5 text-[11px] font-semibold tracking-widest text-white">
                {company.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-navy-500">
                <MapPin size={13} className="text-accent-600" />
                {company.prefecture}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-navy-500">
                <Calendar size={13} className="text-accent-600" />
                {company.publishedAt}
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm font-semibold text-navy-700">
              {company.companyName}
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-navy-500">
              {company.lead[0]}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto w-[78%] max-w-xs sm:w-3/5 lg:ml-auto lg:w-full lg:max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-100 to-sky-100 lg:-inset-6" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={company.photo}
                  alt={company.photoAlt}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
