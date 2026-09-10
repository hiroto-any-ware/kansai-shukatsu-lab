import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const all: BreadcrumbItem[] = [{ label: "TOP", href: "/" }, ...items];
  return (
    <nav aria-label="パンくずリスト" className="flex flex-wrap items-center gap-1.5 text-xs text-navy-500">
      {all.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={12} className="text-navy-300" />}
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-navy-900">
              {item.label}
            </Link>
          ) : (
            <span className="text-navy-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
