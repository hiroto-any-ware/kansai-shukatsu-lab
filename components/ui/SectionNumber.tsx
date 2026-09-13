import { cn } from "@/lib/cn";

/**
 * 記事の流れが視覚的にも分かるよう、各セクションの冒頭に置く
 * 「01 / COMPANY」のようなセクション番号ラベル。
 */
export function SectionNumber({
  no,
  label,
  light = false,
  className,
}: {
  no: string;
  label: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "font-display text-2xl font-light",
          light ? "text-white/40" : "text-ink/25"
        )}
      >
        {no}
      </span>
      <span
        className={cn(
          "h-px w-8",
          light ? "bg-white/30" : "bg-ink/20"
        )}
      />
      <span
        className={cn(
          "font-label text-xs font-semibold tracking-[0.3em]",
          light ? "text-lime" : "text-electric"
        )}
      >
        {label}
      </span>
    </div>
  );
}
