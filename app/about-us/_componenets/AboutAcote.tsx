import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import HeaderDescription from '@/components/common/HeaderDescription'

const AboutAcote = () => {
    return (
        <div className='container mx-auto px-4 md:px-0'>
            <div className='flex flex-col md:flex-row gap-6 md:gap-14 w-full items-center justify-between'>
                <div className='relative basis-2/5 h-[450px] w-full rounded-[30px] overflow-hidden '>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-xtlcQzurf0?si=PdkLi4SUOuRYWSLT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='flex-1 w-full'>
                    <div className='space-y-3 md:space-y-4 mb-4 md:mb-7'>
                        <HeaderBadge className='capitalize text-xl' title='About Acote Group' />
                        <ComponentTitle className='leading-relaxed md:max-w-[609px]' title='Revolutionizing Businesses with Future-Ready Tech Solutions.' />
                    </div>
                    <HeaderDescription className='md:leading-[40px] text-base md:text-[21px] text-left' title='Acote Group offers innovative and comprehensive solutions across four core services: Acote Solution, Digital Marketing, AI/ML Solutions, and BPO. From tailored software and AI innovation to impactful marketing and exceptional business process outsourcing, we empower businesses to thrive and stay ahead in a competitive world. Our commitment to excellence ensures measurable results and long-term success for our clients.' />
                </div>
            </div>
        </div>
    )
}

export default AboutAcote