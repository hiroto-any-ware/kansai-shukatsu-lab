import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const AVATAR_TINTS = [
  "bg-navy-900 text-white",
  "bg-accent-600 text-white",
  "bg-sky-200 text-navy-900",
];

export function EmployeeVoices({ company }: { company: CompanyInterview }) {
  if (company.employeeVoices.length === 0) return null;

  return (
    <section className="bg-sky-50 py-16 md:py-24">
      <Container>
        <Reveal>
          <p className="font-label text-xs font-semibold tracking-[0.3em] text-accent-600">
            EMPLOYEE VOICE
          </p>
          <h3 className="font-display mt-4 text-xl font-bold text-navy-900 md:text-2xl">
            若手社員に聞きました。
          </h3>
          <p className="mt-2 text-xs text-navy-400">
            ※ 社員写真は用意できないため、テキストでのご紹介です。
          </p>
        </Reveal>

        <div
          className={`mt-10 grid grid-cols-1 gap-6 ${
            company.employeeVoices.length > 1 ? "lg:grid-cols-2 lg:gap-8" : ""
          }`}
        >
          {company.employeeVoices.map((emp, ei) => (
            <Reveal
              key={emp.name}
              delay={ei * 0.08}
              className="rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(10,23,48,0.06)] md:p-8"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold ${AVATAR_TINTS[ei % AVATAR_TINTS.length]}`}
                >
                  {emp.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-base font-bold text-navy-900">
                    {emp.name}
                  </p>
                  <p className="text-xs text-navy-400">
                    {emp.joinedYear} ／ {emp.jobType}
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-5">
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
