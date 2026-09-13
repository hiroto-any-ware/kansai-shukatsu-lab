import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function ConnectSection() {
  return (
    <section className="lab-section lab-connect">
      <div>
        <p className="lab-label">EVENTS</p>
        <h2>次は、直接話そう。</h2>
        <p>少人数で、企業の人と話せるイベントを準備中。</p>
        <Link className="lab-text-link" href="/events">
          イベント情報 <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <div>
        <p className="lab-label">KEEP IN TOUCH</p>
        <h2>就活のヒントを、日常に。</h2>
        <p>イベントのお知らせや就活情報を届けます。</p>
        <div className="lab-social-links">
          <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer">
            LINE <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <Link href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
