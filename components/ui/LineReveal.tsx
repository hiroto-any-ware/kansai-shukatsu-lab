"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/components/ui/Reveal";

/**
 * 見出しを1行ずつマスクの奥からスライドインさせる、ページ表示直後専用の演出。
 * スクロール検知（Reveal）とは異なり、マウント直後に必ず再生する。
 */
export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const [mounted, setMounted] = useState(prefersReducedMotion());

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "110%" }}
            animate={{ y: mounted ? "0%" : "110%" }}
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
