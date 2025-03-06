import ComponentTitle from '@/components/common/ComponentTitle'
import categoriesData, { CategoryDataTypes } from '@/data/our-industries-data'

const OurIndustriesSection = () => {
    return (
        <div className='px-4 md:px-0'>
            <ComponentTitle title='Our industries' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-10'>
                {
                    categoriesData?.map((category: CategoryDataTypes) => <OurIndustriesCard key={category.id} icon={category.icon} name={category.name} />)
                }
            </div>
        </div>
    )
}

export default OurIndustriesSection


const OurIndustriesCard = ({ icon, name }: CategoryDataTypes) => {
    return (
        <div className='relative bg-[#E2E2E2]/50 px-4 py-6 rounded-sm'>
            <p className='text-xl font-medium'>{name}</p>
            <div className='absolute right-16 bottom-0'>
                {icon}
            </div>
        </div>
    )
}