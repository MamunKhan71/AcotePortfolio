import { blogsDataTypes } from "@/data/blogs-data"

const ProjectCards = ({ imageUrl, category, title }: blogsDataTypes) => {
    return (
        <div className='h-[337.029px] space-y-3'>
            <img src={imageUrl} className="h-full rounded-2xl" alt="" />
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                <span className="text-xs">{category}</span>
            </div>
            <p className="text-xl md:leading-[32px] max-w-sm">{title}</p>
        </div>
    )
}

export default ProjectCards