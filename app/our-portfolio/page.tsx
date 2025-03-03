import ContactUsBanner from '@/components/common/contact-us-banner'
import PortfolioHeaderSection from './_component/PortfolioHeaderSection'
import PortfolioMainSection from './_component/PortfolioMainSection'

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