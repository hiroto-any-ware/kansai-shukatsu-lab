import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Reveal } from "@/components/ui/Reveal";

export function BusinessSummary({ company }: { company: CompanyInterview }) {
  const { businessSummary: b } = company;
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -left-10 -top-6 select-none text-[10rem] leading-none text-white/[0.05] md:text-[16rem]"
      >
        02
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to left, black, transparent 80%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionNumber no="02" label="VISION" light />
            <h2 className="font-display mt-6 text-2xl font-bold leading-snug sm:text-3xl md:text-[2.25rem]">
              そもそも
              <br />
              何をしている会社？
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="font-display text-xl leading-relaxed text-sky-100 sm:text-2xl">
              {b.lead}
            </p>
            <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
              {b.body.map((p, i) => (
                <p key={i} className="max-w-xl text-[15px] leading-8 text-white/70">
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
