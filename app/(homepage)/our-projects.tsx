import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import ProjectCards from '@/components/common/ProjectCards'
import { Button } from '@/components/ui/button'
import { blogsData } from '@/data/blogs-data'
import Link from 'next/link'

const OurProjects = ({ isService }: { isService: boolean }) => {
    return (
        <div className='container mx-auto h-full w-full px-4 md:px-0'>
            <div className='flex w-full justify-between items-center'>
                <div className='space-y-2 md:space-y-0'>
                    {!isService && <HeaderBadge title='our projects' />}
                    <ComponentTitle title='recent projects' />
                </div>
                {!isService && <Link href={'/our-portfolio'}><Button className='text-base md:text-xl' variant={'outline'}>View all</Button></Link>}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-8 md:mt-14 w-full h-full pb-20 md:pb-28'>
                {
                    blogsData?.map((blog, index) => <ProjectCards key={`blog-${index}`} title={blog.title} imageUrl={blog.imageUrl} category={blog.category} isVisible={true} id={blog.id} />)
                }
            </div>
        </div>
    )
}

export default OurProjects