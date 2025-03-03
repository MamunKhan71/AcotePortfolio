import HeaderDescription from '@/components/common/HeaderDescription'
import HeaderTitle from '@/components/common/HeaderTitle'
import Link from 'next/link'

const LiveProjectView = ({ imageUrl, link, title, description }: { imageUrl: string, link: string, title: string, description: string }) => {
    return (
        <div className='flex gap-7'>
            <div className='h-[480px] w-full'>
                <img src={imageUrl} alt='live project section' className='rounded-3xl w-full h-full object-cover' />
            </div>
            <div className='bg-[#F5F5F5] rounded-3xl px-14 py-[74px] flex flex-col justify-between items-start'>
                <HeaderTitle className='max-w-[232px]' title={title} />
                <HeaderDescription title={description} />
                <Link href={`https://www.${link}`} target={'_blank'} className='underline font-bold text-xl text-[#030307] underline-offset-1'>
                    {link}
                </Link>
            </div>
        </div>
    )
}

export default LiveProjectView