import ContactUsBanner from '@/components/common/contact-us-banner'
import OurProjects from '../(homepage)/our-projects'
import FAQSection from './_component/FAQSection'
import OurIndustriesSection from './_component/OurIndustriesSection'
import OurProcess from './_component/OurProcess'
import OurServicesApproach from './_component/OurServicesApproach'
import OurServicesHeader from './_component/OurServicesHeader'
import TechnologiesSection from './_component/TechnologiesSection'

const OurServices = () => {
    return (
        <div className='w-full mt-10'>
            <OurServicesHeader />
            <div className='space-y-16 md:space-y-24'>
                <OurServicesApproach />
                <OurProcess />
                <TechnologiesSection />
                <div className='container mx-auto w-full space-y-16 md:space-y-24 mb-16 md:mb-24'>
                    <OurIndustriesSection />
                    <OurProjects isService={true} />
                    <FAQSection />
                </div>
                <ContactUsBanner />
            </div>
        </div>
    )
}

export default OurServices