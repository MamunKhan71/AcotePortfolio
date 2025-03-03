import CustomBadge from '@/components/common/customBadge'
import HeaderTitle from '@/components/common/HeaderTitle'
import React from 'react'
import ImageGridLayout from './_components/grid-layout'
import { portfolioDataDetails } from '@/data/project-details'

const PortfolioDetailsPage = () => {
    const { project, techOverview, customer } = portfolioDataDetails;
    return (
        <div className='container mx-auto mt-20'>
            <div className='flex gap-3 items-center'>
                {
                    project?.categories?.map((category, index) => <CustomBadge key={`category-${index}`} title={category} />)
                }
            </div>
            <div className='flex items-center justify-between gap-32'>
                <div className='flex-1 w-full pr-60'>
                    <HeaderTitle title={project?.name} />
                </div>
                <div className='basis-1/3 w-full space-y-6'>
                    <HeaderDetails title={techOverview?.[0]?.title} subtitle={techOverview?.[0]?.description} />
                    <div className='grid grid-cols-2 gap-x-16'>
                        {techOverview.slice(1).map((item, index) => (
                            <HeaderDetails key={index} title={item.title} subtitle={item.description} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-14'>
                <ImageGridLayout images={project?.portfolioSnapshots || []} />
            </div>
        </div>
    )
}

export default PortfolioDetailsPage


const HeaderDetails = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className='space-y-1 w-full'>
            <h3 className='text-[#030307] font-bold text-2xl md:leading-7 '>{title}</h3>
            <p className='text-lg font-normal md:leading-7 text-[#353539]'>{subtitle}</p>
        </div>
    )
}