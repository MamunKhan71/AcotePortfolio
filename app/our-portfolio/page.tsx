import ContactUsBanner from '@/components/common/contact-us-banner'
import PortfolioMainSection from './_component/PortfolioMainSection'
import HeaderSection from '@/components/PortfolioHeaderSection'

const OurPortfolio = () => {
    return (
        <div>
            <div className='container mx-auto mb-16'>
                <HeaderSection
                    breadcrumb="Home / <span class='font-bold text-primary'>Portfolio</span>"
                    title="Our Portfolio"
                    description="Offering solutions & services to address a spectrum of financial issues"
                />
                <PortfolioMainSection />
            </div>
            <ContactUsBanner />
        </div>
    )
}

export default OurPortfolio