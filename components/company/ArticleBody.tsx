import { ArticleBlock, CompanyInterview, QA } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { cn } from "@/lib/cn";

interface Group {
  heading?: string;
  blocks: ArticleBlock[];
}

/**
 * 元記事の見出し単位でブロックをグルーピングする。
 * 見出しごとに背景色を切り替えることで、長文でも視覚的なリズムを作る。
 */
function groupBlocks(blocks: ArticleBlock[]): Group[] {
  const groups: Group[] = [];
  let current: Group = { blocks: [] };
  for (const block of blocks) {
    if (block.type === "heading") {
      if (current.heading || current.blocks.length > 0) groups.push(current);
      current = { heading: block.text, blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }
  if (current.heading || current.blocks.length > 0) groups.push(current);
  return groups;
}

function QAList({ items }: { items: QA[] }) {
  return (
    <div
      className="space-y-8 border-l-2 pl-6 sm:pl-8"
      style={{ borderColor: "color-mix(in srgb, var(--color-tag-ink) 18%, transparent)" }}
    >
      {items.map((qa, i) => (
        <StaggerReveal key={i} gap={0.18} y={10}>
          <div>
            {qa.speaker && (
              <p
                className="mb-1.5 text-[11px] font-semibold tracking-widest"
                style={{
                  fontFamily: "var(--font-tag-label)",
                  color: "var(--color-tag-link)",
                }}
              >
                {qa.speaker}
              </p>
            )}
            <p
              className="text-base leading-8 font-bold md:text-lg"
              style={{ fontFamily: "var(--font-read)", color: "var(--color-tag-ink)" }}
            >
              Q. {qa.q}
            </p>
          </div>
          <p
            className="mt-2.5 max-w-2xl text-[15px] leading-8"
            style={{ fontFamily: "var(--font-read)", color: "var(--color-tag-muted)" }}
          >
            A. {qa.a}
          </p>
        </StaggerReveal>
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "qa":
      return <QAList items={block.items} />;
    case "paragraphs":
      return (
        <div className="space-y-4">
          {block.speaker && (
            <p
              className="text-[11px] font-semibold tracking-widest"
              style={{
                fontFamily: "var(--font-tag-label)",
                color: "var(--color-tag-link)",
              }}
            >
              {block.speaker}
            </p>
          )}
          {block.paragraphs.map((p, i) => (
            <p
              key={i}
              className="max-w-2xl text-[15px] leading-9"
              style={{ fontFamily: "var(--font-read)", color: "var(--color-tag-ink)" }}
            >
              {p}
            </p>
          ))}
        </div>
      );
    case "quote":
      return (
        <blockquote
          className="max-w-2xl border-l-4 pl-5 md:pl-6"
          style={{ borderColor: "var(--color-stamp)" }}
        >
          <p
            className="text-lg leading-relaxed md:text-xl"
            style={{ fontFamily: "var(--font-read)", color: "var(--color-tag-ink)" }}
          >
            {block.text}
          </p>
        </blockquote>
      );
    case "bullets":
      return (
        <ul className="max-w-2xl space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[15px] leading-7"
              style={{ fontFamily: "var(--font-read)", color: "var(--color-tag-ink)" }}
            >
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--color-stamp)" }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export function ArticleBody({ company }: { company: CompanyInterview }) {
  const groups = groupBlocks(company.blocks);

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--color-tag-bg)" }}
    >
      <div className="flex flex-col">
        {groups.map((group, gi) => {
          const tint = gi % 2 === 1 ? "var(--color-tag-surface)" : "transparent";
          return (
            <div
              key={gi}
              className="border-t border-dashed"
              style={{
                borderColor: "color-mix(in srgb, var(--color-tag-ink) 18%, transparent)",
                background: tint,
              }}
            >
              <Container narrow className="py-10 md:py-14">
                {group.heading && (
                  <Reveal>
                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-[11px] tracking-widest"
                        style={{
                          fontFamily: "var(--font-tag-data)",
                          color: "var(--color-tag-muted)",
                        }}
                      >
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="text-xl leading-snug md:text-2xl"
                        style={{
                          fontFamily: "var(--font-stamp)",
                          color: "var(--color-tag-ink)",
                        }}
                      >
                        {group.heading}
                      </h3>
                    </div>
                  </Reveal>
                )}
                <div className={cn("space-y-6", group.heading && "mt-6")}>
                  {group.blocks.map((block, bi) => (
                    <Reveal
                      key={bi}
                      delay={0.05}
                      variant={block.type === "quote" ? "scale" : "up"}
                    >
                      <BlockRenderer block={block} />
                    </Reveal>
                  ))}
                </div>
              </Container>
            </div>
          );
        })}
      </div>
    </section>
  );
}
