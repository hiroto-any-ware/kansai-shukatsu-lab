import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div
      className="flex min-h-[70vh] items-center pt-16 md:pt-20"
      style={{ background: "var(--color-tag-bg)" }}
    >
      <Container narrow className="py-24 text-center">
        <p
          className="text-xs font-semibold tracking-[0.3em]"
          style={{ fontFamily: "var(--font-tag-label)", color: "var(--color-stamp)" }}
        >
          404
        </p>
        <h1
          className="mt-5 text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-stamp)", color: "var(--color-tag-ink)" }}
        >
          ページが見つかりませんでした。
        </h1>
        <p
          className="mt-4 text-sm leading-7"
          style={{ fontFamily: "var(--font-tag-ui)", color: "var(--color-tag-muted)" }}
        >
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--color-stamp)", fontFamily: "var(--font-tag-ui)" }}
        >
          トップページへ戻る
          <ArrowUpRight size={16} />
        </Link>
      </Container>
    </div>
  );
}
