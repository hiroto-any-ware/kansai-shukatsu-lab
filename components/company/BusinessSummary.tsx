import Image from "next/image";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";

export function BusinessSummary({ company }: { company: CompanyInterview }) {
  const { businessSummary: b } = company;
  return (
    <section className="bg-sky-50 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <Eyebrow>ABOUT THE BUSINESS</Eyebrow>
            <h2 className="font-display mt-4 text-2xl font-bold leading-snug text-navy-900 md:text-[32px]">
              そもそも
              <br />
              何をしている会社？
            </h2>
            <p className="font-display mt-6 text-lg leading-8 text-navy-700">
              {b.lead}
            </p>
            <div className="mt-6 space-y-5">
              {b.body.map((p, i) => (
                <p key={i} className="text-sm leading-7 text-navy-600">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-[16/11]">
              <Image
                src={b.image}
                alt={b.imageAlt}
                fill
                className="object-cover"
              />
              <SampleBadge className="bottom-4 right-4" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
