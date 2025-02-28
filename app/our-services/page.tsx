import ContactUsBanner from '@/components/common/contact-us-banner'
import OurProjects from '../(homepage)/our-projects'
import FAQSection from './_component/FAQSection'
import OurIndustriesSection from './_component/OurIndustriesSection'
import OurServicesApproach from './_component/OurServicesApproach'
import OurServicesHeader from './_component/OurServicesHeader'
import TechnologiesSection from './_component/TechnologiesSection'

const OurServices = () => {
    return (
        <div>
            <div className='container mx-auto w-full mt-10'>
                <OurServicesHeader />
                <div className='space-y-24 mb-24'>
                    <OurServicesApproach />
                    <TechnologiesSection />
                    <OurIndustriesSection />
                    <OurProjects isService={true} />
                    <FAQSection />
                </div>
            </div>
            <ContactUsBanner />
        </div>
    )
}

export default OurServices