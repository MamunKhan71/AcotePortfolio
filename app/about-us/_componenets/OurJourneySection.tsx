import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import OurJourneyTimeline from './OurJourneyTimeline'

const OurJourneySection = () => {
    return (
        <div className='container mx-auto text-left md:text-center px-4 md:px-0'>
            <div className='space-y-3 md:space-y-0'>
                <HeaderBadge title='our journey' />
                <ComponentTitle title='Our Milestones' />
            </div>
            <div>
                <OurJourneyTimeline />
            </div>
        </div>
    )
}

export default OurJourneySection