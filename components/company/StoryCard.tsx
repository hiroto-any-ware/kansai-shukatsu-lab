"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { useRevealVisible } from "@/components/ui/Reveal";

/**
 * インタビュー一覧専用の登場演出。写真を下から幕が上がるようにclip-pathで
 * 開き、キャプションはそのあとに追いかけて浮かび上がる。TOPページの
 * フェード＋上昇（Reveal）や3Dオービットとは異なる、このページだけの動き。
 */
export function StoryCard({
  company,
  index,
}: {
  company: CompanyInterview;
  index: number;
}) {
  const { ref, visible } = useRevealVisible<HTMLElement>();
  const delay = (index % 4) * 0.1;

  return (
    <article ref={ref} className="lab-story">
      <Link href={`/companies/${company.slug}`} className="group block">
        <div className="lab-story-photo">
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: visible ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
            transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
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
          transition={{ duration: 0.6, delay: delay + 0.35, ease: [0.22, 1, 0.36, 1] }}
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
