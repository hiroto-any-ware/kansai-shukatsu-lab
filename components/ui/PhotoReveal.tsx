"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useRevealVisible } from "@/components/ui/Reveal";

/**
 * 人物写真向けの控えめな登場演出。ごくわずかに拡大しながら
 * フェードインする（不自然に動いて見えない強さに抑えている）。
 */
export function PhotoReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
