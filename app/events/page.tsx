import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Users,
  Clock,
  Ticket,
  Shirt,
  ArrowUpRight,
} from "lucide-react";
import { events } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SampleBadge } from "@/components/ui/SampleBadge";

export const metadata: Metadata = {
  title: "就活イベント",
  description:
    "関西就活ラボが開催する就活イベント一覧。大規模な合同企業説明会ではなく、学生と企業が本音で話せる少人数のイベントを開催しています。",
};

export default function EventsPage() {
  return (
    <div className="bg-white pt-16 md:pt-20">
      <div className="bg-navy-50">
        <Container className="py-14 md:py-20">
          <Breadcrumb items={[{ label: "就活イベント" }]} />
          <Eyebrow className="mt-6">EVENT</Eyebrow>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-navy-900 md:text-5xl">
            関西就活ラボ EVENT
          </h1>
          <p className="font-display mt-5 max-w-lg text-lg text-navy-700">
            学生と企業が、本音で話せる場所。
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-navy-500">
            大規模な合同企業説明会ではなく、企業と学生がお互いの考え方や想いを知ることのできる、少人数のイベントとして開催しています。
          </p>
        </Container>
      </div>

      <div className="divide-y divide-navy-900/8">
        {events.map((e, i) => (
          <section key={e.slug} id={e.slug} className="scroll-mt-20 py-16 md:py-24">
            <Container>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                <Reveal className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={e.image}
                      alt={e.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <SampleBadge className="bottom-3 right-3" />
                  </div>
                </Reveal>

                <div className="lg:col-span-7">
                  <Reveal>
                    <span className="font-label text-xs font-semibold tracking-widest text-accent-600">
                      EVENT {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display mt-3 text-2xl font-bold text-navy-900 md:text-3xl">
                      {e.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-navy-500">
                      {e.concept}
                    </p>
                  </Reveal>

                  <Reveal delay={0.1} className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                    <InfoRow icon={CalendarDays} label="開催日時" value={e.dateLabel} />
                    <InfoRow icon={MapPin} label="開催場所" value={e.place} />
                    <InfoRow icon={Users} label="対象学年" value={e.targetGrade} />
                    <InfoRow icon={Users} label="定員" value={e.capacity} />
                    <InfoRow icon={Clock} label="申込締切" value={e.deadline} />
                    <InfoRow icon={Ticket} label="参加費" value={e.fee} />
                    <InfoRow icon={Shirt} label="服装" value={e.dressCode} />
                  </Reveal>

                  <Reveal delay={0.15} className="mt-6">
                    <p className="font-label mb-2 text-[11px] font-semibold tracking-widest text-navy-400">
                      PARTICIPATING COMPANIES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {e.participatingCompanies.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-navy-900/12 px-3 py-1.5 text-xs text-navy-700"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal delay={0.2} className="mt-8">
                    <p className="font-label mb-3 text-[11px] font-semibold tracking-widest text-navy-400">
                      TIMETABLE
                    </p>
                    <ul className="space-y-2.5 border-l-2 border-navy-900/10 pl-5">
                      {e.timetable.map((t) => (
                        <li key={t.time} className="flex gap-4 text-sm">
                          <span className="font-display w-14 shrink-0 font-bold text-navy-900">
                            {t.time}
                          </span>
                          <span className="text-navy-600">{t.content}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={0.25} className="mt-9">
                    <Link
                      href={e.applyUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                    >
                      申込フォームへ進む
                      <ArrowUpRight size={16} />
                    </Link>
                    <p className="mt-3 text-xs text-navy-400">
                      ※ 掲載イベントはサンプルです。実際の開催情報は公式LINE・Instagramでお知らせします。
                    </p>
                  </Reveal>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon size={15} className="mt-0.5 shrink-0 text-accent-600" />
      <div>
        <p className="font-label text-[10px] font-semibold tracking-widest text-navy-400">
          {label.toUpperCase()}
        </p>
        <p className="mt-0.5 text-sm text-navy-800">{value}</p>
      </div>
    </div>
  );
}
