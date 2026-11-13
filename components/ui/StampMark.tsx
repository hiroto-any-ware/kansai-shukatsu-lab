"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * 検品タグに朱色のペンで印をつけたような、手描き風の下線マーク。
 * 画面に入ったタイミングで一拍だけ線が引かれる（繰り返さない）。
 *
 * サーバーには IntersectionObserver が無いため、共有の useRevealVisible
 * （SSR時は常に visible=true を返す）を使うとハイドレーション不一致になる。
 * そのため、常に false から始まるローカルな state を使う。
 */
function useDrawOnVisible<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function StampMark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useDrawOnVisible<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className={cn("stamp-underline", visible && "is-visible", className)}
    >
      {children}
      <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 13 Q 80 3, 150 10 T 296 8" />
      </svg>
    </span>
  );
}
