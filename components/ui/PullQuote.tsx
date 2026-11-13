import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { StampMark } from "@/components/ui/StampMark";
import { Container } from "@/components/ui/Container";

/**
 * インタビュー中の印象的な発言を、検品タグに朱色のペンで
 * 印をつけたような体裁で見せる引用セクション。
 * 実際に発言された内容のみを表示し、新たな発言を生成することはしない。
 */
export function PullQuote({
  quote,
  attribution,
  className,
}: {
  quote: string;
  attribution?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("py-16 md:py-24", className)}
      style={{ background: "var(--color-tag-surface)" }}
    >
      <Container narrow>
        <Reveal variant="scale">
          <div className="tag-card tag-rotate--1 mx-auto max-w-2xl p-8 md:p-12">
            <span
              className="text-[10px] tracking-[0.25em]"
              style={{
                fontFamily: "var(--font-tag-label)",
                color: "var(--color-tag-muted)",
              }}
            >
              印象に残った一言
            </span>
            <p
              className="mt-4 text-2xl leading-snug md:text-[2.25rem]"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              <StampMark>{quote}</StampMark>
            </p>
            {attribution && (
              <p
                className="mt-6 text-xs font-semibold tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-tag-label)",
                  color: "var(--color-tag-link)",
                }}
              >
                {attribution}
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
