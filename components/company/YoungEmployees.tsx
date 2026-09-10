import Image from "next/image";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function YoungEmployees({ company }: { company: CompanyInterview }) {
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>YOUNG STAFF</Eyebrow>
          <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-[32px]">
            若手社員インタビュー
          </h2>
        </Reveal>

        <div
          className={`mt-12 grid grid-cols-1 gap-8 ${
            company.youngEmployees.length > 1 ? "lg:grid-cols-2 lg:gap-10" : ""
          }`}
        >
          {company.youngEmployees.map((emp) => (
            <Reveal key={emp.name} className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(10,23,48,0.06)]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={emp.photo}
                  alt={`${emp.name}（掲載イメージ）`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-bold text-white">
                    {emp.name}
                  </p>
                  <p className="mt-0.5 text-xs text-sky-100">
                    {emp.joinedYear} ／ {emp.jobType}
                  </p>
                </div>
              </div>
              <div className="space-y-5 p-6">
                {emp.qa.map((qa, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-navy-900">
                      Q. {qa.q}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-navy-500">
                      A. {qa.a}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
