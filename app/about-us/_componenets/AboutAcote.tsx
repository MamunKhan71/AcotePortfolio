import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import HeaderDescription from '@/components/common/HeaderDescription'
import Image from 'next/image'

const AboutAcote = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex gap-14 w-full items-center justify-between'>
                <div className='relative basis-2/5 h-[450px] w-full rounded-[30px] overflow-hidden '>
                    <Image fill src={`/about-us/about-acote.png`} alt='about acote' className='object-cover h-full w-full' />
                </div>
                <div className='flex-1 w-full'>
                    <div className='space-y-4 mb-7'>
                        <HeaderBadge className='capitalize text-xl' title='About Acote Group' />
                        <ComponentTitle className='max-w-[609px]' title='Revolutionizing Businesses with Future-Ready Tech Solutions.' />
                    </div>
                    <HeaderDescription className='md:leading-[40px] text-[21px]' title='Acote Group offers innovative and comprehensive solutions across four core services: Acote Solution, Digital Marketing, AI/ML Solutions, and BPO. From tailored software and AI innovation to impactful marketing and exceptional business process outsourcing, we empower businesses to thrive and stay ahead in a competitive world. Our commitment to excellence ensures measurable results and long-term success for our clients.' />
                </div>
            </div>
        </div>
    )
}

export default AboutAcote