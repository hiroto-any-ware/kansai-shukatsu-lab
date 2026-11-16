interface MarqueeProps {
  text: string;
  className?: string;
}

/**
 * 横に流れ続けるテキスト帯。中身を2セット並べて-50%ループさせる、CSSのみの定番実装。
 */
export function Marquee({ text, className }: MarqueeProps) {
  const items = Array.from({ length: 6 });

  return (
    <div
      className={`marquee-track border-y py-5 ${className ?? ""}`}
      style={{
        background: "var(--color-tag-surface)",
        borderColor: "color-mix(in srgb, var(--color-tag-ink) 12%, transparent)",
      }}
    >
      <div className="marquee-track__inner">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
            {items.map((_, i) => (
              <span key={i} className="flex shrink-0 items-center">
                <span
                  className="whitespace-nowrap text-xl tracking-wide sm:text-2xl"
                  style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
                >
                  {text}
                </span>
                <span
                  aria-hidden="true"
                  className="mx-8 inline-block h-2 w-2 rounded-full sm:mx-10"
                  style={{ background: "var(--color-stamp)" }}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
