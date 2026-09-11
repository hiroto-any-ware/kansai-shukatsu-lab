"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function StudentQA({ company }: { company: CompanyInterview }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-navy-900 py-16 text-white md:py-24">
      <Container narrow>
        <Reveal>
          <SectionNumber no="04" label="VOICE" light />
          <h2 className="font-display mt-6 text-2xl font-bold md:text-[32px]">
            学生が気になること、
            <br className="sm:hidden" />
            聞いてみました。
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {company.studentQuestions.map((qa, i) => {
            const open = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-bold leading-7 md:text-lg">
                    Q. {qa.q}
                  </span>
                  <Plus
                    size={18}
                    className={cn(
                      "shrink-0 text-sky-200 transition-transform duration-300",
                      open && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-sm leading-7 text-white/70">
                      A. {qa.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
