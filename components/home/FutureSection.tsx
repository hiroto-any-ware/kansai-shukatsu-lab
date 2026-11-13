import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/LineReveal";
import { Container } from "@/components/ui/Container";

/**
 * TOPページの最後を締めるセクション。「大手だけが、正解じゃない。」
 * 「まだ知らない、自分の未来へ。」というブランドメッセージへ戻し、
 * 3つの導線（企業を探す・インタビューを見る・公式LINE）で締める。
 */
export function FutureSection() {
  return (
    <section
      className="py-20 text-center md:py-28"
      style={{ background: "var(--color-tag-bg)" }}
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl">
          <span
            className="font-tag-label inline-flex items-center gap-1.5 border border-dashed px-2.5 py-1 text-[11px] tracking-wider"
            style={{
              fontFamily: "var(--font-tag-label)",
              color: "var(--color-tag-muted)",
              borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
            }}
          >
            KANSAI SHUKATSU LAB
          </span>

          <h2
            className="mt-6 text-balance text-[28px] leading-[1.45] sm:text-4xl md:text-[44px]"
            style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
          >
            <LineReveal
              lines={["大手だけが、正解じゃない。", "まだ知らない、自分の未来へ。"]}
              triggerOn="scroll"
            />
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--color-stamp)", fontFamily: "var(--font-tag-ui)" }}
            >
              企業を探す
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/interviews"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
            >
              インタビューを見る
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
            >
              公式LINEを追加する
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
