"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { useRevealVisible } from "@/components/ui/Reveal";

/**
 * インタビュー一覧の登場演出。写真はズーム＋左右スライドイン
 * （インタビュー詳細ヒーローの社長写真と同じ動きの言語）で現れ、
 * キャプションはそのあとに追いかけて浮かび上がる。
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

  return (
    <article ref={ref} className="lab-story">
      <Link href={`/companies/${company.slug}`} className="group block">
        <div className="lab-story-photo">
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
          <span className="lab-story-arrow">
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 14 }}
          transition={{ duration: 0.6, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="lab-meta">
            {company.category} ／ {company.prefecture}
          </p>
          <h3>{company.title}</h3>
          <p className="lab-company">{company.companyName}</p>
        </motion.div>
      </Link>
    </article>
  );
}
