import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

/**
 * インタビュー中の印象的な発言を、雑誌の見開きのように大きく見せる引用セクション。
 * 実際に発言された内容のみを表示し、新たな発言を生成することはしない。
 */
export function PullQuote({
  quote,
  attribution,
  dark = false,
  className,
}: {
  quote: string;
  attribution?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden py-20 md:py-28",
        dark ? "bg-void text-white" : "bg-[#eef0f3] text-ink",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "font-display pointer-events-none absolute -top-6 left-6 select-none text-[9rem] leading-none md:-top-10 md:left-16 md:text-[13rem]",
          dark ? "text-white/[0.06]" : "text-ink/[0.05]"
        )}
      >
        &ldquo;
      </span>
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal variant="scale">
          <p className="font-display text-balance text-2xl leading-snug font-bold sm:text-3xl md:text-[2.75rem]">
            {quote}
          </p>
          {attribution && (
            <p
              className={cn(
                "font-label mt-8 text-xs font-semibold tracking-[0.25em]",
                dark ? "text-lime" : "text-electric"
              )}
            >
              {attribution}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
