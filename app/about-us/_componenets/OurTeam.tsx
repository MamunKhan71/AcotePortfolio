'use client'
import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import { Button } from '@/components/ui/button'
import { founderInfo } from '@/data/our-team'
import { useState } from 'react'
import FounderSection from './team-founder/FounderSection'

const buttons = [
    { id: 'founder', label: 'Founders & Leaders' },
    { id: 'team', label: 'Team Members' }
]

const OurTeam = () => {
    const [activeButton, setActiveButton] = useState('founder')
    return (
        <div className='bg-[#101B26] w-full p-20'>
            <div className='container mx-auto '>
                <div className='text-center'>
                    <HeaderBadge title='our team' />
                    <ComponentTitle className='text-white' title='Meet Our Expert Team' />
                </div>
                <div className='flex gap-4 items-center justify-center w-full mt-7'>
                    {buttons.map(({ id, label }) => (
                        <Button
                            key={id}
                            onClick={() => setActiveButton(id)}
                            className={`rounded-md text-xl font-bold md:leading-[29.905px] hover:bg-[#82c8ee33] 
                                ${activeButton === id ? 'bg-[#82c8ee33] text-[#76BE42]' : 'bg-[#1C2B40] text-[#BABABA]'}`}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
                <div>
                    {
                        activeButton === 'founder' && <FounderSection founders={founderInfo} />
                    }
                </div>
            </div>
        </div>
    )
}

export default OurTeam


