import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/LineReveal";

/**
 * TOPページの最後を締めるシーン。「大手だけが、正解じゃない。」
 * 「まだ知らない、自分の未来へ。」というブランドメッセージへ戻し、
 * 3つの導線（企業を探す・インタビューを見る・公式LINE）で締める。
 */
export function FutureSection() {
  return (
    <section className="lab-section lab-future-close">
      <span className="lab-future-close-word" aria-hidden="true">
        FUTURE
      </span>
      <Reveal className="relative text-center">
        <p className="lab-label lab-future-close-label">
          <span className="lab-label-rule" aria-hidden="true" /> KANSAI SHUKATSU LAB
        </p>
        <h2 className="lab-future-close-title">
          <LineReveal
            lines={["大手だけが、正解じゃない。", "まだ知らない、自分の未来へ。"]}
            triggerOn="scroll"
          />
        </h2>
        <div className="lab-future-close-actions">
          <Link href="/companies" className="lab-button">
            企業を探す <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <div className="lab-social-links">
            <Link href="/interviews">
              インタビューを見る <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer">
              公式LINEを追加する <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
