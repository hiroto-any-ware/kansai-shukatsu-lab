import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function EditorialComment({ company }: { company: CompanyInterview }) {
  const { editorialComment: e } = company;
  return (
    <section className="bg-white py-16 md:py-24">
      <Container narrow>
        <Reveal className="rounded-2xl border border-navy-900/8 bg-sky-50/60 p-8 md:p-12">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-display text-base text-white">
            関
          </span>
          <p className="font-label mt-5 text-xs font-semibold tracking-[0.25em] text-accent-600">
            EDITOR&apos;S NOTE
          </p>
          <h2 className="font-display mt-3 text-2xl font-bold text-navy-900 md:text-3xl">
            {e.heading}
          </h2>
          <div className="mt-5 space-y-4">
            {e.body.map((p, i) => (
              <p key={i} className="text-[15px] leading-8 text-navy-700">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 text-xs text-navy-400">関西就活ラボ編集部</p>
        </Reveal>
      </Container>
    </section>
  );
}
