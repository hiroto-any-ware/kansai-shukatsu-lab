"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { useRevealVisible } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

/**
 * インタビュー一覧の登場演出。写真はズーム＋左右スライドイン
 * （インタビュー詳細ヒーローの社長写真と同じ動きの言語）で現れ、
 * キャプションはそのあとに追いかけて浮かび上がる。
 *
 * 4件ごとに1件を大きく表示し、雑誌のような強弱をつける。
 * サイズの違いは掲載順の演出であり、企業の優劣を表すものではない
 * （どの企業が「大きい枠」になるかは常に位置だけで決まる）。
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
  const large = index % 4 === 0;

  return (
    <article ref={ref} className={cn("lab-story", large ? "lab-story--large" : "lab-story--normal")}>
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
