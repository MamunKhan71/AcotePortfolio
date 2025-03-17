import ContactUsBanner from "@/components/common/contact-us-banner";
import HeroSection from "@/components/hero-section";
import ClientTestimonial from "./(homepage)/client-testimonial";
import OurEvents from "./(homepage)/our-events";
import OurJourney from "./(homepage)/our-journey";
import OurPartners from "./(homepage)/our-partners";
import OurProjects from "./(homepage)/our-projects";
import ServicesSection from "./(homepage)/services-section";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {

  return (
    <>
      {/* <HeroSection /> */}
      <HeroSlider />
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
