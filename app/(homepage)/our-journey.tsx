'use client'
import CardBackground from '@/components/common/BackgroundCard'
import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import { Button } from '@/components/ui/button'
import { countryList } from '@/data/country-list'
import React, { useState } from 'react'

const OurJourney = () => {
    const [activeCountry, setActiveCountry] = useState(0)
    return (
        <div className='h-[601px] w-full bg-[#111827]'>
            <div className='relative w-full h-full container mx-auto py-[100px]'>
                <div className='w-full h-full max-w-sm'>
                    <HeaderBadge title='our journey' />
                    <ComponentTitle title='Our Global Presence' className={'text-white'} />
                    <div className='mt-7 w-full space-y-3'>
                        {
                            countryList?.map((country, index) => (
                                <div className={`${activeCountry === index ? 'w-full' : 'w-[92%]'}`}>
                                    <Button onClick={() => setActiveCountry(index)} variant={'darkash'} className={`w-full justify-start gap-2`}>
                                        <span className='w-[9.515px] h-[9.515px] bg-[#76BE42] rounded-full'></span>
                                        {country.country}</Button>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='h-[339.323px] w-[894.638px] absolute right-0 top-1/2 -translate-y-1/2'>
                    <div className='relative'>
                        <img className='opacity-30' src="/world-map.png" alt="world map of acot" />
                        <div className='absolute -top-16 left-24'>
                            <div className='flex gap-4 items-center'>
                                <div className='bg-red-500 h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10'></div>
                                <div className='w-[223px] h-[315.422px]'>
                                    {
                                        activeCountry && <CardBackground />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-[120px] right-[296px] bg-[#117fd9] h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10'></div>
                        <div className='absolute top-[150px] right-[190px] bg-[#11d9c8] h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10'></div>
                        <div className='absolute bottom-[130px] right-[205px] bg-[#a71752] h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10'></div>
                        <div className='absolute bottom-[125px] right-[100px] bg-[#eb7600] h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10'></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurJourney




