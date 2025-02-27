import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import TestimonialSlider from '@/components/common/testimonial-slider/TestimonialSlider'
import React from 'react'

const ClientTestimonial = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <HeaderBadge title='testimony' />
                <ComponentTitle title='Trusted by 100+ Customers' />
            </div>
            <div className='w-full'>
                <TestimonialSlider />
            </div>
        </div>
    )
}

export default ClientTestimonial