"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { useRevealVisible } from "@/components/ui/Reveal";

const ROTATIONS = ["tag-rotate--1", "tag-rotate-2", "tag-rotate--2", "tag-rotate-1"];

/**
 * インタビュー一覧を「作業台に散らばったタグ」として見せるカード。
 * CompanyCardと同じ視覚言語（tag-card + 回転）を、記事一覧向けの
 * 縦に長いレイアウトで表現する。
 */
export function StoryCard({
  company,
  index,
}: {
  company: CompanyInterview;
  index: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLElement>();
  const delay = (index % 3) * 0.12;
  const x = index % 2 === 0 ? -48 : 48;
  const rotate = ROTATIONS[index % ROTATIONS.length];

  return (
    <article ref={ref}>
      <Link href={`/companies/${company.slug}`} className={`tag-card ${rotate} group block p-2`}>
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04, x }}
            animate={
              visible
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 1.04, x }
            }
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={company.photo}
              alt={company.photoAlt}
              fill
              sizes="(max-width: 760px) 84vw, (max-width: 1100px) 45vw, 31vw"
              className="object-cover"
              style={{ objectPosition: `50% ${company.photoFocusY ?? 30}%` }}
            />
          </motion.div>
          <span
            className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            style={{ background: "var(--color-stamp)" }}
          >
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
        <motion.div
          className="p-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 14 }}
          transition={{ duration: 0.6, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[10px] tracking-widest"
            style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-tag-muted)" }}
          >
            {company.category} ／ {company.prefecture}
          </p>
          <h3
            className="mt-1.5 text-[17px] leading-snug"
            style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
          >
            {company.title}
          </h3>
          <p
            className="mt-1.5 text-xs"
            style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
          >
            {company.companyName}
          </p>
        </motion.div>
      </Link>
    </article>
  );
}
