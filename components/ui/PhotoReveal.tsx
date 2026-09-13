"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useRevealVisible } from "@/components/ui/Reveal";

/**
 * 人物写真向けの登場演出。拡大しながらフェードインし、xを指定すると
 * 左右からも滑り込む（他セクションのスライドインと動きを揃える場合に使う）。
 */
export function PhotoReveal({
  children,
  className,
  delay = 0,
  x = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, scale: 1.04, x }}
      animate={visible ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 1.04, x }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
