import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "ghost" | "line";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-accent-600 focus-visible:bg-accent-600",
  outline:
    "border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
  ghost: "text-navy-900 hover:text-accent-600",
  line: "bg-[#06C755] text-white hover:brightness-95",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
        variantClasses[variant],
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
