import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-white pt-16 md:pt-20">
      <Container narrow className="py-24 text-center">
        <p className="font-label text-xs font-semibold tracking-[0.3em] text-accent-600">
          404
        </p>
        <h1 className="font-display mt-5 text-3xl font-bold text-navy-900 md:text-4xl">
          ページが見つかりませんでした。
        </h1>
        <p className="mt-4 text-sm leading-7 text-navy-500">
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          トップページへ戻る
          <ArrowUpRight size={16} />
        </Link>
      </Container>
    </div>
  );
}
