import Image from "next/image";
import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { cn } from "@/lib/cn";

const spanClass: Record<string, string> = {
  large: "col-span-2 md:col-span-4 aspect-[16/10]",
  tall: "col-span-1 md:col-span-2 aspect-[3/4]",
  normal: "col-span-1 md:col-span-3 aspect-[4/3]",
};

export function Gallery({ company }: { company: CompanyInterview }) {
  const images = [...company.gallery].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>GALLERY</Eyebrow>
          <h2 className="font-display mt-4 text-2xl font-bold text-navy-900 md:text-[32px]">
            写真でみる、{company.companyName}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {images.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 6) * 0.05}
              className={cn(
                "group relative overflow-hidden rounded-xl",
                spanClass[img.layout ?? "normal"]
              )}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="font-label absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[9px] font-semibold tracking-widest text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                {img.category}
              </span>
              {i === 0 && <SampleBadge className="bottom-3 right-3" />}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
