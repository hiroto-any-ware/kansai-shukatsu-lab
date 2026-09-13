"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

const upVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * スクロールで要素が画面に入ったら表示するためのフック。
 * IntersectionObserver が何らかの理由で発火しない環境
 * （古いブラウザ、タブが非表示のまま読み込まれた場合など）でも
 * コンテンツが永久に非表示のままにならないよう、
 * 一定時間後に強制的に表示するフォールバックを備えている。
 */
export function useRevealVisible<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const skipAnimation =
    prefersReducedMotion() || typeof IntersectionObserver === "undefined";
  const [visible, setVisible] = useState(skipAnimation);

  useEffect(() => {
    if (skipAnimation) return;
    const node = ref.current;
    if (!node) return;

    const fallback = window.setTimeout(() => setVisible(true), 3000);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          window.clearTimeout(fallback);
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [skipAnimation]);

  return { ref, visible };
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
  /**
   * "up": フェード＋上昇（既定）。"fade": 位置移動のない単純フェード。
   * "scale": 拡大しながら現れる（引用文向け）。
   * "left"/"right": 左右から滑り込んでくる（2カラムレイアウトの左右対で使う）。
   */
  variant?: "up" | "fade" | "scale" | "left" | "right";
}) {
  const { ref, visible } = useRevealVisible<HTMLLIElement | HTMLDivElement>();
  const variantMap: Record<typeof variant, Variants> = {
    up: upVariants,
    fade: fadeVariants,
    scale: scaleVariants,
    left: leftVariants,
    right: rightVariants,
  };
  const variants = variantMap[variant];

  if (as === "li") {
    return (
      <motion.li
        ref={ref as React.RefObject<HTMLLIElement>}
        className={cn(className)}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={variants}
        transition={{ delay }}
      >
        {children}
      </motion.li>
    );
  }
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className)}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
