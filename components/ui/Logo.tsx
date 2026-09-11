import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full",
        className
      )}
    >
      <Image
        src="/brand/logo-mark.png"
        alt="関西就活ラボ ロゴ"
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </span>
  );
}
