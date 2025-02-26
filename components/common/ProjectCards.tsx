import { blogsDataTypes } from "@/data/blogs-data"

const ProjectCards = ({ imageUrl, category, title }: blogsDataTypes) => {
    return (
        <div className='space-y-3 w-full'>
            <img src={imageUrl} className="h-full object-cover rounded-2xl w-full" alt="" />
            <div className="flex items-center gap-2 w-full">
                <span className="h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                <span className="text-xs">{category}</span>
            </div>
            <p className="text-xl md:leading-[32px] max-w-sm">{title}</p>
        </div>
    )
}

export default ProjectCards