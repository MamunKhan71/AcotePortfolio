import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import OurJourneyTimeline from './OurJourneyTimeline'

const OurJourneySection = () => {
    return (
        <div className='container mx-auto text-center'>
            <div>
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