import HeaderDescription from '@/components/common/HeaderDescription'
import HeaderTitle from '@/components/common/HeaderTitle'
import { Button } from '@/components/ui/button'

const OurServicesHeader = () => {
    return (
        <div className='flex justify-between items-center w-full'>
            <div className="w-full h-full flex-1">
                <div>
                    <div className="space-y-12">
                        <div className="max-w-xl space-y-5">
                            <HeaderTitle title='Your Trusted Web Development Partner' />
                            <h1 className="font-bold text-5xl leading-[32px] md:leading-[52px]"></h1>
                            <HeaderDescription title='We offer IT experts who bring data-driven and innovative digital transformation approaches to our clients. Our skills & experience in Software Development have enabled sustainable growth for enterprises of all sizes.' />
                        </div>
                        <Button variant={'default'}>Download Portfolio</Button>
                    </div>
                </div>
            </div>
            <div className='h-full w-[573px]'>
                <img src={'/our-services/our-services-header.gif'} className='h-full w-full' alt='our services header image' />
            </div>
        </div>
    )
}

export default OurServicesHeader