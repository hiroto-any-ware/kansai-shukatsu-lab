import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * セクション背景に薄く敷く装飾用の写真レイヤー。
 * 文字の可読性を最優先し、常に aria-hidden かつ pointer-events-none。
 * 呼び出し側で opacity / グラデーションオーバーレイを重ねて調整する。
 */
export function AmbientPhoto({
  src,
  className,
  imgClassName,
}: {
  src: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <Image
        src={src}
        alt=""
        fill
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
