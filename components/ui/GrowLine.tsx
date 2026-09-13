"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useRevealVisible } from "@/components/ui/Reveal";

/**
 * スクロールで画面に入ったときに、横線が左端から右へ伸びる演出。
 * 見出しの区切りや、記事内のセクション境界に使う。
 */
export function GrowLine({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLDivElement>();

  return (
    <div ref={ref} className={cn("h-px w-full overflow-hidden", className)}>
      <motion.div
        className="h-full bg-current"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: visible ? 1 : 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
