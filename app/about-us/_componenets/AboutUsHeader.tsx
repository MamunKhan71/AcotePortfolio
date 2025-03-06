import HeaderDescription from '@/components/common/HeaderDescription'
import HeaderTitle from '@/components/common/HeaderTitle'
import AboutUsGridLayout from './AboutUsGridLayout'

const AboutUsHeader = () => {
    return (
        <div className='container mx-auto mt-10 md:mt-20 px-4 md:px-0'>
            {/* Header Section */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-10 '>
                <div className='flex-1 w-full'>
                    <div className='border w-fit border-[#21B24B] bg-[#F1FFF5] rounded-full px-4 py-1 font-bold'>
                        <h4 className='text-primary text-sm'>Leading IT Company in Bangladesh</h4>
                    </div>
                    <div className='md:max-w-[609px] space-y-4 md:space-y-6 mt-4 md:mt-7'>
                        <HeaderTitle title='Shaping a sustainable future with cutting-edge Technology.' className='text-4xl md:text-[44px] leading-relaxed md:leading-[50px]' />
                        <HeaderDescription className='text-base md:text-[22px]' title='We are a global IT 360°creative and digital design services company. We offer services in the multimedia and web technology industry.' />
                    </div>
                </div>
                <div className='flex-1 w-full'>
                    <AboutUsGridLayout />
                </div>
            </div>

        </div>
    )
}

export default AboutUsHeader