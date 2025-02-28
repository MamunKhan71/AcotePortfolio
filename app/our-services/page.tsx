import OurIndustriesSection from './_component/OurIndustriesSection'
import OurServicesApproach from './_component/OurServicesApproach'
import OurServicesHeader from './_component/OurServicesHeader'
import TechnologiesSection from './_component/TechnologiesSection'

const OurServices = () => {
    return (
        <div className='container mx-auto w-full mt-10'>
            <OurServicesHeader />
            <div className='space-y-24'>
                <OurServicesApproach />
                <TechnologiesSection />
                <OurIndustriesSection />
            </div>
        </div>
    )
}

export default OurServices