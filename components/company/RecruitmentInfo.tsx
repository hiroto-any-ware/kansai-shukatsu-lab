import { CompanyInterview } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, MapPin, ListChecks, Globe } from "lucide-react";

export function RecruitmentInfo({ company }: { company: CompanyInterview }) {
  const r = company.recruitmentInfo;
  const items = [
    { icon: Briefcase, label: "募集職種", value: r.positions.join(" ／ ") },
    { icon: MapPin, label: "勤務地", value: r.locations.join(" ／ ") },
    { icon: ListChecks, label: "選考フロー", value: r.selectionProcess },
    { icon: ListChecks, label: "新卒採用情報", value: r.newGraduateInfo },
    ...(r.internshipInfo
      ? [{ icon: ListChecks, label: "インターン情報", value: r.internshipInfo }]
      : []),
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <Container narrow>
        <Reveal>
          <SectionNumber no="05" label="RECRUIT" />
          <h2 className="font-display mt-6 text-2xl font-bold text-navy-900 md:text-[32px]">
            採用情報
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <Reveal
              key={item.label}
              className="rounded-xl border border-navy-900/10 p-5"
            >
              <div className="flex items-center gap-2 text-accent-600">
                <item.icon size={15} />
                <span className="font-label text-[11px] font-semibold tracking-widest">
                  {item.label.toUpperCase()}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-6 text-navy-700">
                {item.value}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <a
            href={r.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <Globe size={15} />
            会社HP・採用ページを見る
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
