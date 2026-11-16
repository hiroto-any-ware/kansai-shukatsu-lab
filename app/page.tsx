import { Hero } from "@/components/home/Hero";
import { InterviewOrbit } from "@/components/home/InterviewOrbit";
import { CompanyFinder } from "@/components/home/CompanyFinder";
import { ConnectSection } from "@/components/home/ConnectSection";
import { FutureSection } from "@/components/home/FutureSection";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <div style={{ background: "var(--color-tag-bg)" }}>
      <Hero />
      <Marquee text="大手だけが、正解じゃない。" />
      <InterviewOrbit />
      <CompanyFinder />
      <ConnectSection />
      <FutureSection />
    </div>
  );
}
