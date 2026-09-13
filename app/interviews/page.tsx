import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { PageHero } from "@/components/ui/PageHero";
import { STOCK_IMAGES } from "@/lib/images";
import { StoryCard } from "@/components/company/StoryCard";

export const metadata: Metadata = {
  title: "企業インタビュー",
  description:
    "関西就活ラボが取材した企業インタビューの一覧。経営者・人事・若手社員への取材を通して、企業の理念や仕事、人、社風を届けます。",
};

const sorted = [...companies].sort((a, b) =>
  a.publishedAt < b.publishedAt ? 1 : -1
);

export default function InterviewsPage() {
  return (
    <div className="lab-home">
      <PageHero
        breadcrumbLabel="インタビュー"
        eyebrow="INTERVIEW"
        title={["話を聞くほど、", "選択肢は増えていく。"]}
        description="経営者・人事・若手社員への取材を通して、求人票だけでは伝わらない企業の理念や仕事、人、社風を届けます。"
        bgWord="VOICE"
        photo={{ src: STOCK_IMAGES.himejiCastle, alt: "姫路城" }}
      />

      <section className="lab-section">
        <div className="lab-stories">
          {sorted.map((c, i) => (
            <StoryCard key={c.slug} company={c} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
