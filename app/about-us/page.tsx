import ContactUsBanner from '@/components/common/contact-us-banner'
import AboutAcote from './_componenets/AboutAcote'
import AboutUsHeader from './_componenets/AboutUsHeader'
import MissionAndVision from './_componenets/MissionAndVision'
import OurClients from './_componenets/OurClients'
import OurJourneySection from './_componenets/OurJourneySection'
import OurTeam from './_componenets/OurTeam'

const AboutUs = () => {
    return (
        <div>
            {/* About us header section */}
            <div className='space-y-10 md:space-y-20 mb-10 md:mb-20'>
                <AboutUsHeader />
                <AboutAcote />
                <MissionAndVision />
                <OurJourneySection />
                <OurTeam />
                <OurClients />
            </div>
            <ContactUsBanner />
        </div>
    )
}

export default AboutUs