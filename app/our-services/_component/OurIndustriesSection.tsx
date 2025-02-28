import ComponentTitle from '@/components/common/ComponentTitle'
import FinanceIcon from '@/components/icons/healthcare-icon'
import React from 'react'

const OurIndustriesSection = () => {
    return (
        <div>
            <ComponentTitle title='Our industries' />
            <div className='grid grid-cols-3 gap-[18px]'>
                <OurIndustriesCard />
            </div>
        </div>
    )
}

export default OurIndustriesSection


const OurIndustriesCard = () => {
    return (
        <div className='relative bg-[#E2E2E2]/50 px-4 py-6 rounded-sm'>
            <p className='text-xl font-medium'>Finance</p>
            <div className='absolute right-8 bottom-0'>
                <FinanceIcon />
            </div>
        </div>
    )
}