"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CompanyInterview,
  PREFECTURES,
  CATEGORIES,
  OTHER_REGION_LABEL,
  regionLabel,
} from "@/lib/types";
import { CompanyCard } from "@/components/company/CompanyCard";
import { Reveal } from "@/components/ui/Reveal";
import { X } from "lucide-react";

const REGION_OPTIONS = [...PREFECTURES, OTHER_REGION_LABEL];

export function CompanyListClient({
  companies,
  initialPref,
  initialCat,
}: {
  companies: CompanyInterview[];
  initialPref?: string;
  initialCat?: string;
}) {
  const [prefs, setPrefs] = useState<Set<string>>(
    new Set(initialPref ? [initialPref] : [])
  );
  const [cats, setCats] = useState<Set<string>>(
    new Set(initialCat ? [initialCat] : [])
  );

  const toggle = (set: Set<string>, setter: (s: Set<string>) => void, value: string) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  };

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      const prefOk = prefs.size === 0 || prefs.has(regionLabel(c.prefecture));
      const catOk = cats.size === 0 || cats.has(c.category);
      return prefOk && catOk;
    });
  }, [companies, prefs, cats]);

  const hasFilter = prefs.size > 0 || cats.size > 0;

  return (
    <div>
      <Reveal className="flex flex-col gap-8 border-b border-[#cdd1d8] pb-10">
        <div>
          <p className="lab-label mb-2">KANSAI AREA</p>
          <p className="mb-3 text-sm text-[#515966]">
            関西の企業を探す。指定しない場合は、すべての地域の企業インタビューを表示します。
          </p>
          <div className="lab-pill-group">
            {REGION_OPTIONS.map((p) => (
              <button
                key={p}
                onClick={() => toggle(prefs, setPrefs, p)}
                data-active={prefs.has(p)}
                className={`lab-pill ${p === OTHER_REGION_LABEL ? "lab-pill--dashed" : ""}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="lab-label mb-3">CATEGORY</p>
          <div className="lab-pill-group">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => toggle(cats, setCats, c)}
                data-active={cats.has(c)}
                className="lab-pill"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="flex items-center justify-between py-8">
        <p className="lab-companies-count">
          <strong>{filtered.length}</strong> 件の企業インタビュー
        </p>
        {hasFilter && (
          <button
            onClick={() => {
              setPrefs(new Set());
              setCats(new Set());
            }}
            className="lab-companies-reset"
          >
            <X size={13} />
            絞り込みをリセット
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <motion.p
          layout
          className="py-20 text-center text-sm text-[#515966]"
        >
          条件に合う企業が見つかりませんでした。絞り込み条件を変えてお試しください。
        </motion.p>
      ) : (
        <div className="lab-companies-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <CompanyCard key={c.slug} company={c} index={i} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
