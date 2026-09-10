import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  narrow = false,
}: {
  className?: string;
  children: React.ReactNode;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-16",
        narrow ? "max-w-4xl" : "max-w-8xl",
        className
      )}
    >
      {children}
    </div>
  );
}
