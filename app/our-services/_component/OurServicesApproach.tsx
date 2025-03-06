import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderDescription from '@/components/common/HeaderDescription'
import { ourServicesApproachData, ourServicesApproachDataTypes } from '@/data/our-services-approach'

const OurServicesApproach = () => {
    return (
        <div className='container mx-auto w-full px-4 md:px-0'>
            <div className='text-left md:text-center space-y-3 md:space-y-2 mt-8 md:mt-12'>
                <ComponentTitle title='Our web development services' />
                <HeaderDescription className='md:max-w-[475px] mx-auto' title='Advanced technological stacks available to satisfy any development requirements from your business' />
            </div>
            <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
                {ourServicesApproachData?.map((services: ourServicesApproachDataTypes, index: number) => <ApproachCard key={`${services.title}-${index}`} icon={services.icon} description={services.description} title={services.title} />)}
            </div>
        </div>
    )
}

export default OurServicesApproach

const ApproachCard = ({ icon, description, title }: ourServicesApproachDataTypes) => {
    return (
        <div className='flex flex-col justify-start items-start md:items-center w-full space-y-4'>
            <div className='border border-[#E0E0E0] rounded-full size-[75px] flex items-center justify-center'>
                {icon}
            </div>
            <div className='text-left md:text-center space-y-4'>
                <h1 className='text-secondary text-xl md:text-2xl font-medium tracking-[0.66px] md:leading-[48px]'>{title}</h1>
                <p className='text-base md:text-lg text-[#2A2A2A] md:leading-[32.04px]'>{description}</p>
            </div>
        </div>
    )
}