import Image from "next/image";
import Link from "next/link";
import { CompanyInterview } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholderMark } from "@/components/ui/PhotoPlaceholderMark";

export function CompanyCard({
  company,
  index,
}: {
  company: CompanyInterview;
  index: number;
}) {
  const isWide = index % 7 === 3;
  const aspect = ["aspect-[4/3]", "aspect-square", "aspect-[3/4]"][index % 3];

  if (isWide) {
    return (
      <Reveal delay={(index % 6) * 0.05} className="sm:col-span-2">
        <Link
          href={`/companies/${company.slug}`}
          className="group grid grid-cols-1 gap-5 rounded-2xl border border-navy-900/8 p-4 transition-colors hover:border-navy-900/25 sm:grid-cols-[1.2fr_1fr] sm:gap-0 sm:p-0"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:aspect-auto sm:rounded-l-2xl sm:rounded-r-none">
            <Image
              src={company.representativePhoto}
              alt={company.representativePhotoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <PhotoPlaceholderMark iconSize={40} />
          </div>
          <div className="flex flex-col justify-center p-1 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="font-label rounded-full bg-navy-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-navy-700">
                {company.category}
              </span>
              <span className="text-xs text-navy-400">{company.prefecture}</span>
            </div>
            <h3 className="font-display mt-3 text-xl font-bold text-navy-900">
              {company.companyName}
            </h3>
            <p className="mt-2 text-sm leading-6 text-navy-500">
              {company.oneLiner}
            </p>
            <p className="mt-3 text-xs text-navy-400">{company.location}</p>
          </div>
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal delay={(index % 6) * 0.05}>
      <Link href={`/companies/${company.slug}`} className="group block h-full">
        <div className={`relative w-full overflow-hidden rounded-2xl ${aspect}`}>
          <Image
            src={company.representativePhoto}
            alt={company.representativePhotoAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <PhotoPlaceholderMark iconSize={48} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/5 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white ring-1 ring-white/60">
              <Image src={company.companyLogo} alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="font-label text-[10px] font-semibold tracking-widest text-sky-200">
              {company.category} / {company.prefecture}
            </span>
            <h3 className="font-display mt-1.5 text-lg font-bold leading-snug text-white">
              {company.companyName}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-white/70">
              {company.oneLiner}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
