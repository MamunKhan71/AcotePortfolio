
const CustomBadge = ({ title }: { title: string }) => {
    return (
        <div className='rounded-full px-4 py-2 border border-primary text-primary text-base md:leading-4 bg-[#DDFFE3] w-fit'>
            {title}
        </div>
    )
}

export default CustomBadge