"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-shadow duration-200",
        scrolled || open ? "shadow-sm" : ""
      )}
      style={{
        background: "var(--color-tag-surface)",
        borderColor: "color-mix(in srgb, var(--color-tag-ink) 12%, transparent)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-6 md:h-20 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={40} className="h-9 w-9 md:h-10 md:w-10" />
          <span className="flex flex-col leading-tight">
            <span
              className="text-[15px] font-medium tracking-wide md:text-base"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              関西就活ラボ
            </span>
            <span
              className="hidden text-[10px] tracking-[0.2em] md:block"
              style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
            >
              KANSAI SHUKATSU LAB
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[13.5px] font-medium transition-colors"
              style={{
                fontFamily: "var(--font-tag-ui)",
                color:
                  pathname === item.href
                    ? "var(--color-tag-ink)"
                    : "var(--color-tag-muted)",
              }}
            >
              {item.label}
              {pathname === item.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-[2px] w-full"
                  style={{ background: "var(--color-stamp)" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
            style={{ background: "#06C755", fontFamily: "var(--font-tag-ui)" }}
          >
            公式LINEで就活情報を受け取る
          </Link>
          <button
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            style={{ color: "var(--color-tag-ink)" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t lg:hidden"
            style={{
              background: "var(--color-tag-surface)",
              borderColor: "color-mix(in srgb, var(--color-tag-ink) 12%, transparent)",
            }}
          >
            <nav className="flex flex-col px-6 py-4">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="block border-b py-4 text-[15px] font-medium"
                    style={{
                      borderColor: "color-mix(in srgb, var(--color-tag-ink) 12%, transparent)",
                      fontFamily: "var(--font-tag-ui)",
                      color: "var(--color-tag-ink)",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white"
                style={{ background: "#06C755", fontFamily: "var(--font-tag-ui)" }}
              >
                公式LINEで就活情報を受け取る
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
