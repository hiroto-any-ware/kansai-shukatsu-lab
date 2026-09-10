import Image from "next/image";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function ExecutiveInterview({ company }: { company: CompanyInterview }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container narrow>
        <Reveal>
          <Eyebrow>INTERVIEW</Eyebrow>
          <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-[32px]">
            経営者・人事に聞きました
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-16">
          {company.executiveInterview.map((person, pi) => (
            <div key={person.name}>
              <Reveal className="flex flex-col items-start gap-5 sm:flex-row sm:gap-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-28">
                  <Image
                    src={person.photo}
                    alt={`${person.name}（掲載イメージ）`}
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
                  <p className="mt-3 text-sm leading-6 text-navy-500">
                    {person.profile}
                  </p>
                </div>
              </Reveal>

              <div className="mt-8 space-y-8 border-l-2 border-navy-900/10 pl-6 sm:ml-[6.5rem] sm:pl-8">
                {person.qa.map((qa, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p className="font-display text-base leading-8 font-bold text-navy-900 md:text-lg">
                      Q. {qa.q}
                    </p>
                    <p className="mt-2.5 text-sm leading-7 text-navy-600">
                      {qa.a}
                    </p>
                  </Reveal>
                ))}
              </div>

              {pi < company.executiveInterview.length - 1 && (
                <div className="mt-16 h-px w-full bg-navy-900/8" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
