import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function ConnectSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-tag-surface)" }}>
      <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
        <Reveal variant="left">
          <span
            className="text-[11px] tracking-widest"
            style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
          >
            EVENTS
          </span>
          <h2
            className="mt-3 text-2xl leading-snug"
            style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
          >
            次は、直接話そう。
          </h2>
          <p
            className="mt-4 text-[15px] leading-7"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            少人数で、企業の人と話せるイベントを準備中。
          </p>
          <Link
            href="/events"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
          >
            イベント情報
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal
          variant="right"
          delay={0.1}
          className="border-t border-[#00000026] pt-10 sm:border-l sm:border-t-0 sm:pt-0 sm:pl-16"
        >
          <span
            className="text-[11px] tracking-widest"
            style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
          >
            KEEP IN TOUCH
          </span>
          <h2
            className="mt-3 text-2xl leading-snug"
            style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
          >
            就活のヒントを、日常に。
          </h2>
          <p
            className="mt-4 text-[15px] leading-7"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            イベントのお知らせや就活情報を届けます。
          </p>
          <div className="mt-6 flex gap-6">
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
            >
              LINE
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
            >
              Instagram
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
