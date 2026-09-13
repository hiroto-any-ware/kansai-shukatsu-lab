import { Hero } from "@/components/home/Hero";
import { InterviewOrbit } from "@/components/home/InterviewOrbit";
import { CompanyFinder } from "@/components/home/CompanyFinder";
import { ConnectSection } from "@/components/home/ConnectSection";

export default function Home() {
  return (
    <div className="lab-home">
      <Hero />
      <InterviewOrbit />
      <CompanyFinder />
      <ConnectSection />
    </div>
  );
}
