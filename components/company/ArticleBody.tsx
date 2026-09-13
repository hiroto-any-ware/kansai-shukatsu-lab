import { ArticleBlock, CompanyInterview, QA } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { GrowLine } from "@/components/ui/GrowLine";
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
    <div className="space-y-8 border-l-2 border-[#cdd1d8] pl-6 sm:pl-8">
      {items.map((qa, i) => (
        <StaggerReveal key={i} gap={0.18} y={10}>
          <div>
            {qa.speaker && (
              <p className="font-label mb-1.5 text-[11px] font-semibold tracking-widest text-electric">
                {qa.speaker}
              </p>
            )}
            <p className="font-display text-base leading-8 font-bold text-ink md:text-lg">
              Q. {qa.q}
            </p>
          </div>
          <p className="mt-2.5 max-w-2xl text-[15px] leading-7 text-[#515966]">
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
            <p className="font-label text-[11px] font-semibold tracking-widest text-electric">
              {block.speaker}
            </p>
          )}
          {block.paragraphs.map((p, i) => (
            <p key={i} className="max-w-2xl text-[15px] leading-8 text-ink">
              {p}
            </p>
          ))}
        </div>
      );
    case "quote":
      return (
        <blockquote className="max-w-2xl border-l-4 border-electric/40 pl-5 md:pl-6">
          <p className="font-display text-lg leading-relaxed text-ink md:text-xl">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );
    case "bullets":
      return (
        <ul className="max-w-2xl space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-7 text-ink">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
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
    <section className="bg-white py-20 md:py-28">
      <Container narrow>
        <SectionNumber no="03" label="INTERVIEW" />
      </Container>

      <div className="mt-12 flex flex-col">
        {groups.map((group, gi) => {
          const tint = gi % 2 === 1 ? "bg-[#eef0f3]/60" : "bg-white";
          return (
            <div key={gi} className={cn("border-t border-[#cdd1d8]", tint)}>
              <Container narrow className="py-10 md:py-14">
                {group.heading && (
                  <Reveal>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl font-light text-ink/15 md:text-4xl">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-bold leading-snug text-ink md:text-2xl">
                        {group.heading}
                      </h3>
                    </div>
                    <GrowLine className="mt-4 max-w-[120px] text-ink/15" delay={0.2} />
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
