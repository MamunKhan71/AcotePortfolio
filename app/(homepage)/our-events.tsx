import ComponentTitle from '@/components/common/ComponentTitle'
import EventCard from '@/components/common/event-card'
import HeaderBadge from '@/components/common/HeaderBadge'
import { Button } from '@/components/ui/button'
import { eventsData } from '@/data/our-event-data'
import Link from 'next/link'

const OurEvents = () => {
    return (
        <div className='container mx-auto px-4 md:px-0'>
            <div className='flex justify-between items-center w-full'>
                <div className='space-y-3 md:space-y-0'>
                    <HeaderBadge title='media' />
                    <ComponentTitle title='Our Events' />
                </div>
                <Link href={'/events'}>
                    <Button variant={'outline'} className='text-base md:text-xl'>View all</Button>
                </Link>
            </div>
            <div className='mt-10 md:mt-[60px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full'>
                    {
                        eventsData?.map((event, index) => <EventCard key={`event${index}`} image={event.image} date={event.date} title={event.title} description={event.description} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default OurEvents