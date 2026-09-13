import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-label inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] uppercase",
        light ? "text-lime" : "text-electric",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          light ? "bg-lime" : "bg-electric"
        )}
      />
      {children}
    </span>
  );
}
