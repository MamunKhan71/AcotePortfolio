import HeroSection from "@/components/hero-section";
import ServicesSection from "./(homepage)/services-section";
import OurJourney from "./(homepage)/our-journey";
import OurProjects from "./(homepage)/our-projects";
import OurPartners from "./(homepage)/our-partners";
import ClientTestimonial from "./(homepage)/client-testimonial";
import OurEvents from "./(homepage)/our-events";
import ContactUsBanner from "@/components/common/contact-us-banner";

export default function Home() {

  return (
    <>
      <HeroSection />
      <div className="space-y-20 md:space-y-28">
        <ServicesSection />
        <OurJourney />
        <OurProjects isService={false} />
      </div>
      <div className="space-y-20 md:space-y-28 mt-20 md:mt-28">
        <OurPartners />
        <ClientTestimonial />
        <OurEvents />
        <ContactUsBanner />
      </div>
    </>
  );
}
