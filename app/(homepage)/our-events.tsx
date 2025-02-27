import ComponentTitle from '@/components/common/ComponentTitle'
import EventCard from '@/components/common/event-card'
import HeaderBadge from '@/components/common/HeaderBadge'
import { Button } from '@/components/ui/button'
import { eventsData } from '@/data/our-event-data'

const OurEvents = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <HeaderBadge title='media' />
                    <ComponentTitle title='Our Events' />
                </div>
                <Button variant={'outline'}>View all</Button>
            </div>
            <div className='mt-[60px]'>
                <div className='grid grid-cols-3 gap-8 w-full'>
                    {
                        eventsData?.map((event, index) => <EventCard key={`event${index}`} image={event.image} date={event.date} title={event.title} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default OurEvents