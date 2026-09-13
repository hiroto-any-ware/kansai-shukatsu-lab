"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";

// これらのページは冒頭セクションがネイビーの暗い背景のため、
// スクロール前のヘッダーは白文字にして視認性を確保する。
const DARK_HERO_ROUTES = new Set(["/"]);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  const onDarkHero = DARK_HERO_ROUTES.has(pathname) && !scrolled && !open;

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(10,23,48,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-6 md:h-20 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={40} className="h-9 w-9 ring-1 ring-white/40 md:h-10 md:w-10" />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-display text-[15px] font-medium tracking-wide transition-colors md:text-base",
                onDarkHero ? "text-white" : "text-navy-900"
              )}
            >
              関西就活ラボ
            </span>
            <span
              className={cn(
                "font-label hidden text-[10px] tracking-[0.2em] transition-colors md:block",
                onDarkHero ? "text-white/70" : "text-navy-500"
              )}
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
              className={cn(
                "relative text-[13.5px] font-medium transition-colors",
                onDarkHero
                  ? "text-white/85 hover:text-white"
                  : "text-navy-800/80 hover:text-navy-900",
                pathname === item.href && (onDarkHero ? "text-white" : "text-navy-900")
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-accent-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#06C755] px-4 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03] md:inline-flex"
          >
            公式LINEで就活情報を受け取る
          </Link>
          <button
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              onDarkHero ? "text-white" : "text-navy-900"
            )}
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
            className="overflow-hidden border-t border-navy-900/10 bg-white lg:hidden"
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
                    className="block border-b border-navy-900/5 py-4 text-[15px] font-medium text-navy-900"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-5 py-3.5 text-sm font-semibold text-white"
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
