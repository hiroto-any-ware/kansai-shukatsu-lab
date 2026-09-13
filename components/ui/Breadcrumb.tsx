import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({
  items,
  light = false,
}: {
  items: BreadcrumbItem[];
  light?: boolean;
}) {
  const all: BreadcrumbItem[] = [{ label: "TOP", href: "/" }, ...items];
  return (
    <nav
      aria-label="パンくずリスト"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-xs",
        light ? "text-white/60" : "text-[#515966]"
      )}
    >
      {all.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <ChevronRight size={12} className={light ? "text-white/30" : "text-[#cdd1d8]"} />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className={cn("transition-colors", light ? "hover:text-white" : "hover:text-ink")}
            >
              {item.label}
            </Link>
          ) : (
            <span className={light ? "text-white" : "text-ink"}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
