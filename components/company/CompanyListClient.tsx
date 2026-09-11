"use client";

import { useMemo, useState } from "react";
import {
  CompanyInterview,
  PREFECTURES,
  CATEGORIES,
  OTHER_REGION_LABEL,
  regionLabel,
} from "@/lib/types";
import { CompanyCard } from "@/components/company/CompanyCard";
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
      <div className="flex flex-col gap-8 border-b border-navy-900/8 pb-10">
        <div>
          <p className="font-label mb-1 text-xs font-semibold tracking-[0.25em] text-navy-400">
            KANSAI AREA
          </p>
          <p className="mb-3 text-sm text-navy-500">
            関西の企業を探す。指定しない場合は、すべての地域の企業インタビューを表示します。
          </p>
          <div className="flex flex-wrap gap-2.5">
            {REGION_OPTIONS.map((p) => (
              <button
                key={p}
                onClick={() => toggle(prefs, setPrefs, p)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  prefs.has(p)
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-navy-900/15 text-navy-700 hover:border-navy-900/40"
                } ${p === OTHER_REGION_LABEL ? "border-dashed" : ""}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-label mb-3 text-xs font-semibold tracking-[0.25em] text-navy-400">
            CATEGORY
          </p>
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => toggle(cats, setCats, c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  cats.has(c)
                    ? "border-accent-600 bg-accent-600 text-white"
                    : "border-navy-900/15 text-navy-700 hover:border-navy-900/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-8">
        <p className="text-sm text-navy-500">
          <span className="font-display text-lg font-bold text-navy-900">
            {filtered.length}
          </span>{" "}
          件の企業インタビュー
        </p>
        {hasFilter && (
          <button
            onClick={() => {
              setPrefs(new Set());
              setCats(new Set());
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-500 hover:text-navy-900"
          >
            <X size={13} />
            絞り込みをリセット
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-sm text-navy-400">
          条件に合う企業が見つかりませんでした。絞り込み条件を変えてお試しください。
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (
            <CompanyCard key={c.slug} company={c} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
