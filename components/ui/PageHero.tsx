import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { LineReveal } from "@/components/ui/LineReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { PhotoReveal } from "@/components/ui/PhotoReveal";

/**
 * 下層ページ共通のファーストビュー（「現場台帳」デザイン）。
 * TOPページと同じ、コンクリートの床地に検品タグを並べた視覚言語を
 * 各ページの内容に合わせて短い形で継承する。
 */
export function PageHero({
  breadcrumbLabel,
  eyebrow,
  title,
  description,
  photo,
}: {
  breadcrumbLabel: string;
  eyebrow: string;
  /** 見出しの各行。LineRevealで1行ずつマスクから現れる。 */
  title: string[];
  description?: string;
  /** 旧デザインの背景巨大英字。新デザインでは使用しない（互換のため受け取るが無視する） */
  bgWord?: string;
  photo?: {
    src: string;
    alt: string;
    caption?: string;
  };
}) {
  return (
    <header
      className="pt-28 pb-16 md:pt-36 md:pb-20"
      style={{ background: "var(--color-tag-bg)" }}
    >
      <div className="mx-auto w-full max-w-8xl px-6 md:px-10 lg:px-16">
        <div
          className={
            photo
              ? "grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12"
              : "mx-auto max-w-2xl text-center"
          }
        >
          <StaggerReveal
            className={photo ? "lg:col-span-7" : ""}
            gap={0.12}
          >
            <div className={photo ? "" : "flex justify-center"}>
              <Breadcrumb items={[{ label: breadcrumbLabel }]} />
            </div>
            <div className={photo ? "mt-6" : "mt-6 flex justify-center"}>
              <span
                className="font-tag-label inline-flex items-center gap-1.5 border border-dashed px-2.5 py-1 text-[11px] tracking-wider"
                style={{
                  fontFamily: "var(--font-tag-label)",
                  color: "var(--color-tag-muted)",
                  borderColor: "color-mix(in srgb, var(--color-tag-ink) 30%, transparent)",
                }}
              >
                {eyebrow}
              </span>
            </div>
            <h1
              className="mt-6 text-balance text-[32px] leading-[1.3] font-normal sm:text-4xl md:text-[46px]"
              style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
            >
              <LineReveal lines={title} />
            </h1>
            {description && (
              <p
                className={
                  photo
                    ? "mt-5 max-w-xl text-[15px] leading-8"
                    : "mx-auto mt-5 max-w-xl text-[15px] leading-8"
                }
                style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
              >
                {description}
              </p>
            )}
          </StaggerReveal>

          {photo && (
            <PhotoReveal x={24} delay={0.15} className="lg:col-span-5">
              <figure className="tag-card tag-rotate-1 relative aspect-[4/3] overflow-hidden p-2 lg:aspect-[4/5]">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                {photo.caption && (
                  <figcaption
                    className="absolute bottom-4 left-4 px-2 py-1 text-[10px] tracking-wider"
                    style={{
                      fontFamily: "var(--font-tag-label)",
                      background: "var(--color-tag-surface)",
                      color: "var(--color-tag-muted)",
                    }}
                  >
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            </PhotoReveal>
          )}
        </div>
      </div>
    </header>
  );
}
