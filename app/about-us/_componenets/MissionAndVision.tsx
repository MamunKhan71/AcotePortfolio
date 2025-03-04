import CircleIcon from '@/components/icons/circle-icon'
import StarIcon from '@/components/icons/star-icon'
import React from 'react'

const MissionAndVision = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <MissionVisionCard
                    svgIcon={<StarIcon />}
                    title="Our Mission"
                    description='Our mission is to reshape lives by offering financial expertise, faster growth, & securing futures through trusted partnerships & innovation.'
                />
                <MissionVisionCard
                    svgIcon={<CircleIcon />}
                    title="Vision"
                    description='Our vision is to create a financially secure future for all, offering innovative solutions & expert guidance to navigate prosperity.'
                />
            </div>
        </div>
    )
}

export default MissionAndVision



const MissionVisionCard = ({ svgIcon, title, description }: { svgIcon: React.ReactNode, title: string, description: string }) => (
    <div className='border border-[#ECECEC] py-9 px-14'>
        <div className='flex items-start gap-7 w-full'>
            <div>
                {svgIcon}
            </div>
            <div className='space-y-4'>
                <p className='text-2xl font-medium md:leading-[35px] w-full'>{title}</p>
                <p className='text-xl md:leading-[36px] text-[#000000b3] w-full'>{description}</p>
            </div>
        </div>
    </div>
)