import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import HeaderDescription from '@/components/common/HeaderDescription'
import { CompanySlider } from '@/components/common/marquee/company-slider'
import React from 'react'

const OurPartners = () => {
    return (
        <div>
            <div className='container mx-auto mt-28'>
                <div className='flex w-full flex-col justify-center gap-4'>
                    <div className='text-center'>
                        <HeaderBadge title={`partner's`} />
                        <ComponentTitle title='Our Clients' />
                        <HeaderDescription className='mx-auto max-w-[574px] text-sm' title='Proudly partnered with 250+ clients from diverse industries including Banking & Finance, Automotive, Retail, Health Care, Education, Media & Entertainment.' />
                    </div>
                </div>
                <div className='mt-11'>
                    <CompanySlider />
                </div>
            </div>
        </div>
    )
}

export default OurPartners