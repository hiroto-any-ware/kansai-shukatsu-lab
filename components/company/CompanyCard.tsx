"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { useRevealVisible } from "@/components/ui/Reveal";

const ROTATIONS = ["tag-rotate--2", "tag-rotate-1", "tag-rotate--1", "tag-rotate-2"];

/**
 * 企業一覧を「作業台に散らばったタグ」として見せるカード。
 * 均一なSaaS風カードグリッドを避け、カードごとにわずかな回転を持たせる
 * （モバイルではglobals.cssのメディアクエリで回転を打ち消す）。
 */
export function CompanyCard({
  company,
  index,
}: {
  company: CompanyInterview;
  index: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLDivElement>();
  const x = index % 2 === 0 ? -48 : 48;
  const rotate = ROTATIONS[index % ROTATIONS.length];

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 1.04, x }}
      animate={
        visible
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 0, scale: 1.04, x }
      }
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/companies/${company.slug}`}
        className={`tag-card ${rotate} group block h-full p-2`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={company.photo}
            alt={company.photoAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: `50% ${company.photoFocusY ?? 30}%` }}
          />
        </div>
        <div className="p-3">
          <span
            className="block text-[10px] tracking-widest"
            style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
          >
            {company.category} / {company.prefecture}
          </span>
          <h3
            className="mt-1.5 line-clamp-2 text-[17px] leading-snug"
            style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
          >
            {company.companyName}
          </h3>
          <p
            className="mt-1.5 line-clamp-2 text-xs leading-5"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            {company.title}
          </p>
          <span
            className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-stamp)" }}
          >
            記事を読む
            <ArrowUpRight size={13} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
