import { User } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * 社長・代表者の実写真が入るまでの間、単色ブロックが
 * 「空欄・読み込み失敗」に見えないよう重ねる人物アイコン。
 * 実写真に差し替えると自動的に隠れるものではないため、
 * 本番写真を設定した際はこのコンポーネントの使用箇所を削除すること。
 */
export function PhotoPlaceholderMark({
  className,
  iconSize = 64,
}: {
  className?: string;
  iconSize?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center",
        className
      )}
    >
      {/* mix-blend-difference により、背景色が明るくても暗くても
          自動的に視認できるコントラストを確保する */}
      <User
        size={iconSize}
        strokeWidth={1}
        className="text-white opacity-50 mix-blend-difference"
      />
    </div>
  );
}
