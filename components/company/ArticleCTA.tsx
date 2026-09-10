import Link from "next/link";
import { MessageCircle, Users, FileText, ArrowUpRight } from "lucide-react";
import { CompanyInterview } from "@/lib/types";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ArticleCTA({ company }: { company: CompanyInterview }) {
  const cards = [
    {
      icon: FileText,
      title: "この企業について詳しく知りたい",
      href: company.website,
      external: true,
    },
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
      external: false,
    },
  ];

  return (
    <section className="bg-sky-50 py-16 md:py-20">
      <Container narrow>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <Reveal key={c.title}>
              <Link
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(10,23,48,0.06)] transition-shadow hover:shadow-[0_16px_32px_-16px_rgba(10,23,48,0.25)]"
              >
                <c.icon size={20} className="text-accent-600" />
                <p className="font-display mt-6 text-[15px] font-bold leading-6 text-navy-900">
                  {c.title}
                </p>
                <ArrowUpRight
                  size={16}
                  className="mt-4 text-navy-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-600"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-6">
          <Link
            href={siteConfig.lineUrl}
            className="flex items-center justify-between rounded-2xl bg-[#06C755] px-6 py-6 text-white transition-transform hover:scale-[1.01] sm:px-8"
          >
            <span className="font-display text-base font-bold sm:text-lg">
              関西の就活情報をLINEで受け取る
            </span>
            <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
