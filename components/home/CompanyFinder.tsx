import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PREFECTURES, CATEGORIES, OTHER_REGION_LABEL } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

const REGION_OPTIONS = [...PREFECTURES, OTHER_REGION_LABEL];

export function CompanyFinder() {
  return (
    <section className="lab-section lab-finder">
      <Reveal variant="left" className="lab-section-head">
        <div>
          <p className="lab-label">FIND YOUR NEXT</p>
          <h2>気になる場所、仕事から。</h2>
        </div>
        <Link href="/companies">
          企業一覧 <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </Reveal>

      <div className="lab-filter-row">
        <h3>地域</h3>
        <div>
          {REGION_OPTIONS.map((p, i) => (
            <Reveal key={p} delay={i * 0.04} as="div">
              <Link href={`/companies?pref=${encodeURIComponent(p)}`}>
                {p}
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <details className="lab-industries">
        <summary>業種から探す</summary>
        <div>
          {CATEGORIES.map((c) => (
            <Link key={c} href={`/companies?cat=${encodeURIComponent(c)}`}>
              {c}
            </Link>
          ))}
        </div>
      </details>
    </section>
  );
}
