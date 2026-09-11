import Image from "next/image";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Reveal } from "@/components/ui/Reveal";

export function Interview({ company }: { company: CompanyInterview }) {
  const person = company.representative;
  return (
    <section className="bg-white py-20 md:py-28">
      <Container narrow>
        <SectionNumber no="03" label="INTERVIEW" />

        <Reveal className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full sm:h-24 sm:w-24">
            <Image
              src={company.representativePhoto}
              alt={company.representativePhotoAlt}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-navy-900">
              {person.name}
            </p>
            <p className="font-label mt-1 text-xs font-semibold tracking-widest text-accent-600">
              {person.role.toUpperCase()}
            </p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-navy-500">
              {person.profile}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-10 border-l-2 border-navy-900/10 pl-6 sm:ml-[6.5rem] sm:pl-8">
          {person.qa.map((qa, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="font-display text-lg leading-8 font-bold text-navy-900 md:text-xl">
                Q. {qa.q}
              </p>
              <p className="mt-3 text-[15px] leading-7 text-navy-600">
                {qa.a}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
