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

function FilterTag({
  active,
  dashed,
  onClick,
  children,
}: {
  active: boolean;
  dashed?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      data-active={active}
      className={`px-3 py-1.5 text-[13px] transition-colors ${
        dashed ? "border-dashed" : "border-solid"
      }`}
      style={{
        fontFamily: "var(--font-tag-ui)",
        border: "1px solid",
        borderColor: active
          ? "var(--color-stamp)"
          : "color-mix(in srgb, var(--color-tag-ink) 28%, transparent)",
        background: active ? "var(--color-stamp)" : "transparent",
        color: active ? "#fff" : "var(--color-tag-ink)",
      }}
    >
      {children}
    </button>
  );
}

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
      <Reveal>
        <div
          className="flex flex-col gap-8 border-b pb-10"
          style={{ borderColor: "color-mix(in srgb, var(--color-tag-ink) 18%, transparent)" }}
        >
          <div>
            <p
              className="mb-2 text-[11px] tracking-widest"
              style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
            >
              KANSAI AREA
            </p>
            <p
              className="mb-3 text-sm"
              style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
            >
              関西の企業を探す。指定しない場合は、すべての地域の企業インタビューを表示します。
            </p>
            <div className="flex flex-wrap gap-2">
              {REGION_OPTIONS.map((p) => (
                <FilterTag
                  key={p}
                  active={prefs.has(p)}
                  dashed={p === OTHER_REGION_LABEL}
                  onClick={() => toggle(prefs, setPrefs, p)}
                >
                  {p}
                </FilterTag>
              ))}
            </div>
          </div>
          <div>
            <p
              className="mb-3 text-[11px] tracking-widest"
              style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
            >
              CATEGORY
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <FilterTag key={c} active={cats.has(c)} onClick={() => toggle(cats, setCats, c)}>
                  {c}
                </FilterTag>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="flex items-center justify-between py-8">
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
        >
          <strong
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-tag-data)", color: "var(--color-tag-ink)" }}
          >
            {filtered.length}
          </strong>{" "}
          件の企業インタビュー
        </p>
        {hasFilter && (
          <button
            onClick={() => {
              setPrefs(new Set());
              setCats(new Set());
            }}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            <X size={13} />
            絞り込みをリセット
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <motion.p
          layout
          className="py-20 text-center text-sm"
          style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
        >
          条件に合う企業が見つかりませんでした。絞り込み条件を変えてお試しください。
        </motion.p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
