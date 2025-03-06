import { footerQuickLinks, footerResourcesLinks } from '@/data/footer-links'
import FooterFirst from './components/footer-first'
import FooterContent from './components/footer-content'
import FollowUsContent from './components/follow-us-content'
import FooterInfoBar from './components/footer-info-bar'

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
            <FooterInfoBar />
        </div>
    )
}

export default Footer


