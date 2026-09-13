"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CompanyInterview } from "@/lib/types";
import { useRevealVisible } from "@/components/ui/Reveal";

// すべての企業を同じ形・同じ大きさの枠で並べる（優劣の印象を与えないため、
// 企業によって枠の大きさや比率を変えない）。
// 登場演出は「企業を探す」ページ専用のズーム＋ぼかし解除。インタビュー一覧の
// 幕が上がる演出や、TOPページのフェード＋上昇とは異なる動きにしている。
export function CompanyCard({
  company,
  index,
}: {
  company: CompanyInterview;
  index: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      animate={
        visible
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.9, filter: "blur(10px)" }
      }
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
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
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
