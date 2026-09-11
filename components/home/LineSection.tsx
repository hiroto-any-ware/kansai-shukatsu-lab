import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function LineSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-accent-700 py-24 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <p className="font-label text-xs font-semibold tracking-[0.3em] text-sky-200">
            LINE
          </p>
          <h2 className="font-display mt-5 text-3xl font-bold leading-snug md:text-4xl">
            関西の就活情報を、
            <br className="md:hidden" />
            もっと近くに。
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/70">
            選考情報、就活イベント、インターン情報など、関西就活ラボからのお知らせを公式LINEでお届けします。
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.04]"
          >
            関西就活ラボ公式LINEを追加
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
