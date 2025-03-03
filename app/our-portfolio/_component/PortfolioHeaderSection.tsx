import HeaderDescription from '@/components/common/HeaderDescription'
import HeaderTitle from '@/components/common/HeaderTitle'
import React from 'react'

const PortfolioHeaderSection = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full mt-20 space-y-5'>
            <div className='bg-[#b9b9b91f] w-fit px-6 rounded-full py-1 text-xl'>
                <p>Home / <span className='font-bold text-primary'>Portfolio</span></p>
            </div>
            <HeaderTitle title='Our Portfolio' />
            <HeaderDescription className='max-w-[444px] text-2xl text-center' title='Offering solutions & services to address a spectrum of financial issues'/>
        </div>
    )
}

export default PortfolioHeaderSection