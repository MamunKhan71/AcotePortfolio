import React from 'react'
import AboutUsHeader from './_componenets/AboutUsHeader'
import AboutAcote from './_componenets/AboutAcote'
import MissionAndVision from './_componenets/MissionAndVision'
import OurJourneySection from './_componenets/OurJourneySection'
import OurTeam from './_componenets/OurTeam'
import OurClients from './_componenets/OurClients'
import ContactUsBanner from '@/components/common/contact-us-banner'

const AboutUs = () => {
    return (
        <div>
            {/* About us header section */}
            <div className='space-y-20 mb-20'>
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