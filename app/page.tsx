import { Hero } from "@/components/home/Hero";
import { PickUp } from "@/components/home/PickUp";
import { NewInterviews } from "@/components/home/NewInterviews";
import { CompanyFinder } from "@/components/home/CompanyFinder";
import { Feature } from "@/components/home/Feature";
import { EventTeaser } from "@/components/home/EventTeaser";
import { InstagramSection } from "@/components/home/InstagramSection";
import { LineSection } from "@/components/home/LineSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PickUp />
      <NewInterviews />
      <CompanyFinder />
      <Feature />
      <EventTeaser />
      <InstagramSection />
      <LineSection />
    </>
  );
}
