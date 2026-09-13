import Link from "next/link";
import { InstagramIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { mainNav, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-void text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="bg-white" />
            <span className="font-display text-lg">関西就活ラボ</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            関西の就活生へ、まだ知らない企業との出会いを。
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
            >
              <InstagramIcon size={17} />
            </Link>
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-4 py-2.5 text-[13px] font-semibold text-white"
            >
              公式LINEを追加
            </Link>
          </div>
        </div>

        <div>
          <p className="font-label text-xs tracking-[0.2em] text-white/40">
            SITEMAP
          </p>
          <ul className="mt-4 space-y-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-label text-xs tracking-[0.2em] text-white/40">
            OTHERS
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="/knowhow"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                就活ノウハウ
              </Link>
            </li>
            <li>
              <Link
                href="/for-companies"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                取材・イベントのご相談
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} 関西就活ラボ</p>
        </Container>
      </div>
    </footer>
  );
}
