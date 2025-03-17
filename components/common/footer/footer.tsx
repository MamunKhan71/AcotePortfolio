import { footerQuickLinks, footerResourcesLinks } from '@/data/footer-links'
import FollowUsContent from './components/follow-us-content'
import FooterContent from './components/footer-content'
import FooterFirst from './components/footer-first'
import FooterInfoBar from './components/footer-info-bar'
import CompanyAwards from './components/company-awards'

const Footer = () => {
    return (
        <div className='bg-[#010F22]'>
            <div className='container mx-auto py-11 w-full px-4 md:px-0'>
                <div className="flex justify-between items-start gap-6 md:gap-16 flex-wrap">
                    <FooterFirst />
                    {/* Footer second portion */}
                    <FooterContent title='Quick Links' links={footerQuickLinks} />
                    {/* Footer third portion */}
                    <FooterContent title='Resources' links={footerResourcesLinks} />
                    <FollowUsContent />
                </div>
            </div>
            <CompanyAwards />
            <FooterInfoBar />
        </div>
    )
}

export default Footer


