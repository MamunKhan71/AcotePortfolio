import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import TestimonialSlider from '@/components/common/testimonial-slider/TestimonialSlider'

const ClientTestimonial = () => {
    return (
        <div className='container mx-auto px-4 md:px-0'>
            <div className='text-left md:text-center space-y-3 md:space-y-0'>
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