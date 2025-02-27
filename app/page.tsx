import HeroSection from "@/components/hero-section";
import ServicesSection from "./(homepage)/services-section";
import OurJourney from "./(homepage)/our-journey";
import OurProjects from "./(homepage)/our-projects";
import OurPartners from "./(homepage)/our-partners";
import ClientTestimonial from "./(homepage)/client-testimonial";

export default function Home() {

  return (
    <>
      <HeroSection />
      <div className="space-y-28">
        <ServicesSection />
        <OurJourney />
        <OurProjects />
      </div>
      <div className="space-y-28 mt-28">
        <OurPartners />
        <ClientTestimonial />
      </div>
    </>
  );
}
