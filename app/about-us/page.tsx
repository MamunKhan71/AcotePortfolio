import React from 'react'
import AboutUsHeader from './_componenets/AboutUsHeader'
import AboutAcote from './_componenets/AboutAcote'
import MissionAndVision from './_componenets/MissionAndVision'

const AboutUs = () => {
    return (
        <div className='space-y-20'>
            {/* About us header section */}
            <AboutUsHeader />
            <AboutAcote />
            <MissionAndVision />
        </div>
    )
}

export default AboutUs