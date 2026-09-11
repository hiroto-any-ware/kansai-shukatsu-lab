import { Hero } from "@/components/home/Hero";
import { PickUp } from "@/components/home/PickUp";
import { CompanyFinder } from "@/components/home/CompanyFinder";
import { RecentInterviews } from "@/components/home/RecentInterviews";
import { EventTeaser } from "@/components/home/EventTeaser";
import { InstagramSection } from "@/components/home/InstagramSection";
import { LineSection } from "@/components/home/LineSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PickUp />
      <CompanyFinder />
      <RecentInterviews />
      <EventTeaser />
      <InstagramSection />
      <LineSection />
    </>
  );
}
