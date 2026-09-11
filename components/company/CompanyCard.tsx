import Image from "next/image";
import Link from "next/link";
import { CompanyInterview } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

// すべての企業を同じ形・同じ大きさの枠で並べる（優劣の印象を与えないため、
// 企業によって枠の大きさや比率を変えない）。
export function CompanyCard({
  company,
  index,
}: {
  company: CompanyInterview;
  index: number;
}) {
  return (
    <Reveal delay={(index % 6) * 0.05}>
      <Link href={`/companies/${company.slug}`} className="group block h-full">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src={company.photo}
            alt={company.photoAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: `50% ${company.photoFocusY ?? 30}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="font-label text-[10px] font-semibold tracking-widest text-sky-200">
              {company.category} / {company.prefecture}
            </span>
            <h3 className="font-display mt-1.5 text-lg font-bold leading-snug text-white">
              {company.companyName}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-white/70">
              {company.title}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
