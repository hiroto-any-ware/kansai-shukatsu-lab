"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { useRevealVisible } from "@/components/ui/Reveal";

// すべての企業を同じ形・同じ大きさの枠で並べる（優劣の印象を与えないため、
// 企業によって枠の大きさや比率を変えない）。
// 登場演出は、インタビュー詳細ヒーローの社長写真と同じズーム＋左右スライド
// インに統一している。
export function CompanyCard({
  company,
  index,
}: {
  company: CompanyInterview;
  index: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLDivElement>();
  const x = index % 2 === 0 ? -48 : 48;

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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/companies/${company.slug}`} className="group block h-full">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src={company.photo}
            alt={company.photoAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: `50% ${company.photoFocusY ?? 30}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080f1d]/80 via-[#080f1d]/5 to-transparent" />
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-lime group-hover:text-void">
            <ArrowUpRight size={16} />
          </span>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="font-label text-[10px] font-semibold tracking-widest text-white/70">
              {company.category} / {company.prefecture}
            </span>
            <h3 className="mt-1.5 text-lg leading-snug font-bold text-white">
              {company.companyName}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-white/70">
              {company.title}
            </p>
            <span className="mt-3 block h-[2px] w-8 origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
