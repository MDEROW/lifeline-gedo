import Hero from "@/components/sections/Hero";
import MissionStrip from "@/components/sections/MissionStrip";
import ImpactBar from "@/components/sections/ImpactBar";
import Programs from "@/components/sections/Programs";
import CrisisAppeal from "@/components/sections/CrisisAppeal";
import Stories from "@/components/sections/Stories";
import Partners from "@/components/sections/Partners";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStrip />
      <ImpactBar />
      <Programs />
      <CrisisAppeal />
      <Stories />
      <Partners />
      <ContactCTA />
    </>
  );
}
