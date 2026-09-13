import Image from "next/image";
import { cn } from "@/lib/cn";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { LineReveal } from "@/components/ui/LineReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { PhotoReveal } from "@/components/ui/PhotoReveal";

/**
 * 下層ページ共通のファーストビュー。TOPページの濃紺＋斜めカット＋
 * 巨大英字という視覚言語を、各ページの内容に合わせて短い形で継承する。
 * 写真の有無・見出しの改行位置・背景英字はページごとに変える。
 */
export function PageHero({
  breadcrumbLabel,
  eyebrow,
  title,
  description,
  bgWord,
  photo,
}: {
  breadcrumbLabel: string;
  eyebrow: string;
  /** 見出しの各行。LineRevealで1行ずつマスクから現れる。 */
  title: string[];
  description?: string;
  bgWord: string;
  photo?: {
    src: string;
    alt: string;
    caption?: string;
  };
}) {
  return (
    <header className={cn("lab-page-hero", photo ? "" : "lab-page-hero--center")}>
      <div className="lab-page-hero-grid" aria-hidden="true" />
      <span className="lab-page-hero-word" aria-hidden="true">
        {bgWord}
      </span>
      <div className="lab-page-hero-inner">
        <StaggerReveal className="lab-page-hero-copy" gap={0.12}>
          <Breadcrumb light items={[{ label: breadcrumbLabel }]} />
          <p className="lab-label mt-6">
            <span className="lab-label-rule" aria-hidden="true" /> {eyebrow}
          </p>
          <h1>
            <LineReveal lines={title} />
          </h1>
          {description && <p className="lab-page-hero-desc">{description}</p>}
        </StaggerReveal>

        {photo && (
          <PhotoReveal x={60} delay={0.15}>
            <figure className="lab-page-hero-photo">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                className="object-cover"
              />
              {photo.caption && <figcaption>{photo.caption}</figcaption>}
            </figure>
          </PhotoReveal>
        )}
      </div>
    </header>
  );
}
