import { cn } from "@/lib/cn";

export function SampleBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-label pointer-events-none absolute z-10 rounded-full bg-black/45 px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] text-white backdrop-blur-sm",
        className
      )}
    >
      SAMPLE / 掲載イメージ
    </span>
  );
}
