import Link from "next/link";
import { MessageCircle, Users, FileText, ArrowUpRight } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface CTACard {
  icon: typeof FileText;
  title: string;
  href: string;
  external: boolean;
}

const ROTATIONS = ["tag-rotate--1", "tag-rotate-1", "tag-rotate--2"];

export function ArticleCTA({ company }: { company: CompanyInterview }) {
  const cards: CTACard[] = [
    company.website
      ? {
          icon: FileText,
          title: "この企業について詳しく知りたい",
          href: company.website,
          external: true,
        }
      : null,
    {
      icon: Users,
      title: "この企業とイベントで話してみたい",
      href: "/events",
      external: false,
    },
    {
      icon: MessageCircle,
      title: "インターン情報を受け取る",
      href: siteConfig.lineUrl,
      external: true,
    },
  ].filter((c): c is CTACard => c !== null);

  return (
    <section
      className="py-14 md:py-20"
      style={{ background: "var(--color-tag-surface)" }}
    >
      <Container narrow>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title}>
              <Link
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className={`tag-card ${ROTATIONS[i % ROTATIONS.length]} group flex h-full flex-col justify-between p-5`}
              >
                <c.icon size={18} style={{ color: "var(--color-stamp)" }} />
                <p
                  className="mt-6 text-[15px] leading-6 font-bold"
                  style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-ink)" }}
                >
                  {c.title}
                </p>
                <ArrowUpRight
                  size={16}
                  className="mt-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--color-tag-muted)" }}
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-5">
          <Link
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-6 py-6 text-white transition-opacity hover:opacity-90 sm:px-8"
            style={{ background: "var(--color-stamp)" }}
          >
            <span
              className="text-base font-bold sm:text-lg"
              style={{ fontFamily: "var(--font-tag-ui)" }}
            >
              関西の就活情報をLINEで受け取る
            </span>
            <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
