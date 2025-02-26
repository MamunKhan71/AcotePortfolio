import HeroSection from "@/components/hero-section";
import ServicesSection from "./(homepage)/services-section";
import OurJourney from "./(homepage)/our-journey";
import OurProjects from "./(homepage)/our-projects";

export default function Home() {

  return (
    <>
      <HeroSection />
      <div className="space-y-28">
        <ServicesSection />
        <OurJourney />
        <OurProjects />
      </div>
    </>
  );
}
