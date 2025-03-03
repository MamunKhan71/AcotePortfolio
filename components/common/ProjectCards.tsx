import { blogsDataTypes } from "@/data/blogs-data"

const ProjectCards = ({ imageUrl, category, title, isVisible }: blogsDataTypes) => {
    return (
        <div className='space-y-3 w-full'>
            <img src={imageUrl} className="h-[336.327px] object-cover rounded-2xl w-full" alt="" />
            {
                isVisible && <div className="flex items-center gap-2 w-full">
                    <span className="h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                    <span className="text-xs">{category}</span>
                </div>
            }
            <p className="text-xl md:leading-[32px] w-full">{title}</p>
        </div>
    )
}

export default ProjectCards