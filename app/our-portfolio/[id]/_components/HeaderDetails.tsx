export const HeaderDetails = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className='space-y-1 w-full'>
            <h3 className='text-[#030307] font-bold text-2xl md:leading-7 '>{title}</h3>
            <p className='text-lg font-normal md:leading-7 text-[#353539]'>{subtitle}</p>
        </div>
    )
}
