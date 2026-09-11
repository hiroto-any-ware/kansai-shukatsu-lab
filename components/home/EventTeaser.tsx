import { CalendarClock } from "lucide-react";
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
              学生と企業が、本音で話せる場所。大規模な合同説明会ではなく、少人数で考え方や想いを知ることができるイベントを企画しています。
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 rounded-2xl bg-white p-10 text-center shadow-[0_1px_2px_rgba(10,23,48,0.06)] md:p-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-50">
            <CalendarClock size={20} className="text-accent-600" />
          </div>
          <h3 className="font-display mt-5 text-lg font-bold text-navy-900 md:text-xl">
            イベント情報は近日公開予定です
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-navy-500">
            現在、企業様と内容を調整しながら準備を進めています。決まり次第、公式LINE・Instagramでお知らせします。
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Button href="/events" variant="outline">
            イベントページを見る
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
