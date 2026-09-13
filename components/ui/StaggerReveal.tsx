"use client";

import { Children, isValidElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useRevealVisible } from "@/components/ui/Reveal";

/**
 * 複数の要素（番号→見出し→本文、など）を、ひとつのスクロール検知に対して
 * 少しずつ時間差で表示するための入れ物。個々の要素は shrink 用に
 * key を付けて渡す。
 */
export function StaggerReveal({
  children,
  className,
  gap = 0.12,
  y = 16,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  y?: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLDivElement>();
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={cn(className)}>
      {items.map((child, i) => (
        <motion.div
          key={isValidElement(child) && child.key ? child.key : i}
          initial={{ opacity: 0, y }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
          transition={{ duration: 0.6, delay: i * gap, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
