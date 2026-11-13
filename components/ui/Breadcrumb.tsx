import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const all: BreadcrumbItem[] = [{ label: "TOP", href: "/" }, ...items];
  return (
    <nav
      aria-label="パンくずリスト"
      className="flex flex-wrap items-center gap-1.5 text-xs"
      style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
    >
      {all.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <ChevronRight
              size={12}
              style={{ color: "color-mix(in srgb, var(--color-tag-ink) 25%, transparent)" }}
            />
          )}
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:underline">
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "var(--color-tag-ink)" }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
