import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { events } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function EventTeaser() {
  return (
    <section className="bg-navy-50 py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>EVENT</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 md:text-4xl">
              関西就活ラボ EVENT
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-navy-500">
              学生と企業が、本音で話せる場所。大規模な合同説明会ではなく、少人数で考え方や想いを知ることができるイベントを開催しています。
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {events.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.1}>
              <Link
                href={`/events#${e.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(10,23,48,0.06)] transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(10,23,48,0.25)]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-lg font-bold text-navy-900 md:text-xl">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-navy-500">
                    {e.concept}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-[13px] text-navy-700">
                    <li className="flex items-center gap-2.5">
                      <CalendarDays size={14} className="shrink-0 text-accent-600" />
                      {e.dateLabel}
                    </li>
                    <li className="flex items-center gap-2.5">
                      <MapPin size={14} className="shrink-0 text-accent-600" />
                      {e.place}
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Users size={14} className="shrink-0 text-accent-600" />
                      対象：{e.targetGrade} ／ 定員：{e.capacity}
                    </li>
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button href="/events" variant="outline">
            イベント一覧を見る
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
