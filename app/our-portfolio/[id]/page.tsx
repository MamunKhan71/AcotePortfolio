import CustomBadge from '@/components/common/customBadge'
import HeaderTitle from '@/components/common/HeaderTitle'
import React from 'react'
import ImageGridLayout from './_components/grid-layout'
import { portfolioDataDetails } from '@/data/project-details'
import ComponentTitle from '@/components/common/ComponentTitle'
import { HrDash } from '@/components/icons/hr-dash'
import { StartSvg } from '@/components/icons/star-svg'
import { HeaderDetails } from './_components/HeaderDetails'

const PortfolioDetailsPage = () => {
    const { project, techOverview, projectFeatures } = portfolioDataDetails;
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
            <div className='mt-14'>
                {
                    projectFeatures?.map(project => (
                        <div className='space-y-9'>
                            <div className='flex gap-x-96 justify-between items-start w-full'>
                                <div className='basis-56 mt-6'>
                                    <ComponentTitle title={project.title} />
                                </div>
                                <div className='flex-1 text-[#353539] text-lg md:leading-[27px]'>
                                    <p className='mt-6'>{project?.description}</p>
                                    <p className='mt-6'>{project.key_point_description}</p>
                                    <div className='mt-6'>
                                        <ul className='space-y-2'>
                                            {project?.key_points?.map((challange, index) => (
                                                <li key={`challanges-${index}`} className='flex gap-2 items-start'>
                                                    <div>
                                                        <StartSvg />
                                                    </div>
                                                    {challange}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <HrDash />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default PortfolioDetailsPage






