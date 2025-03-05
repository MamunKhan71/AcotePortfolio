import HeaderSection from '@/components/PortfolioHeaderSection'
import React from 'react'
import EventSection from './_components/EventsSection'

const Events = () => {
    return (
        <div className='w-full h-full container mx-auto'>
            <HeaderSection
                breadcrumb="Home / <span class='font-bold text-primary'>Event</span>"
                title="Our Events"
                description="Offering solutions & services to address a spectrum of financial issues"
            />
            <div>
                <EventSection />
            </div>
        </div>
    )
}

export default Events