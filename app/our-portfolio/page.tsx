import ContactUsBanner from '@/components/common/contact-us-banner'
import HeaderSection from '@/components/PortfolioHeaderSection'
import PortfolioMainSection from './_component/PortfolioMainSection'

const OurPortfolio = () => {
    return (
        <div>
            <div className='container mx-auto mb-8 md:mb-16 px-4 md:px-0'>
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