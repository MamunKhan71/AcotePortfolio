import React from 'react'
import PortfolioHeaderSection from './_component/PortfolioHeaderSection'
import PortfolioMainSection from './_component/PortfolioMainSection'
import ContactUsBanner from '@/components/common/contact-us-banner'

const OurPortfolio = () => {
    return (
        <div>
            <div className='container mx-auto mb-16'>
                <PortfolioHeaderSection />
                <PortfolioMainSection />
            </div>
            <ContactUsBanner />
        </div>
    )
}

export default OurPortfolio