import Image from 'next/image'
import Link from 'next/link'
import SocialContainer from './social-container'

const CompanyAwards = () => {
    return (
        <div className='relative w-full py-4 border-t border-t-[#232751]'>
            <div className='container mx-auto flex w-full items-center justify-between'>
                <SocialContainer />
                <div className='flex  items-center justify-end gap-4 w-full'>
                    <div className='flex gap-4 items-center'>
                        <Image src={'/certifications/9001.webp'} alt='9001' height={200} width={400} className='h-12 w-fit' />
                        <Image src={'/certifications/27001.png'} alt='27001' height={200} width={400} className='h-12 w-fit' />
                        <Link href={'https://www.glassdoor.com/Overview/Working-at-Acote-Group-EI_IE9523523.11,22.htm'} target='__blank'>
                            <Image src={'/certifications/glassdoor.png'} alt='glassdoor' height={200} width={400} className='h-12 w-fit' />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CompanyAwards