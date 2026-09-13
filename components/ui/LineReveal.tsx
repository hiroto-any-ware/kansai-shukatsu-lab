"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { prefersReducedMotion, useRevealVisible } from "@/components/ui/Reveal";

/**
 * 見出しを1行ずつマスクの奥からスライドインさせる演出。
 * triggerOn="mount"（既定）：ページ表示直後に必ず再生（ファーストビューの見出し向け）。
 * triggerOn="scroll"：スクロールで画面に入ったときに再生（本文中の強調コピー向け）。
 */
export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  triggerOn = "mount",
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  triggerOn?: "mount" | "scroll";
}) {
  const [mounted, setMounted] = useState(prefersReducedMotion());
  const { ref, visible } = useRevealVisible<HTMLSpanElement>();

  useEffect(() => {
    if (triggerOn !== "mount") return;
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, [triggerOn]);

  const active = triggerOn === "mount" ? mounted : visible;

  return (
    <span
      ref={triggerOn === "scroll" ? ref : undefined}
      className={cn("block", className)}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "110%" }}
            animate={{ y: active ? "0%" : "110%" }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
