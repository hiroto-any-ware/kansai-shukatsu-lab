import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { LineReveal } from "@/components/ui/LineReveal";
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
      <section className="lab-section" style={{ paddingTop: "clamp(120px, 14vw, 168px)" }}>
        <div className="mb-6">
          <Breadcrumb items={[{ label: "インタビュー" }]} />
        </div>
        <p className="lab-label">
          <span className="lab-label-rule" aria-hidden="true" /> INTERVIEW
        </p>
        <h1 className="mt-5 max-w-2xl text-4xl leading-tight font-bold tracking-tight md:text-6xl">
          <LineReveal lines={["話を聞くほど、", "選択肢は増えていく。"]} />
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-[#515966]">
          経営者・人事・若手社員への取材を通して、求人票だけでは伝わらない企業の理念や仕事、人、社風を届けます。
        </p>
      </section>

      <section className="lab-section pt-0">
        <div className="lab-stories">
          {sorted.map((c, i) => (
            <StoryCard key={c.slug} company={c} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
