import { cn } from '@/lib/utils'

const ComponentTitle = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h2 className={cn(`text-black font-semibold text-3xl md:text-[40px] capitalize tracking-[-0.66px] leading-[32px] md:leading-[58px] ${className}`)}>
            {title}
        </h2>
    )
}

export default ComponentTitle