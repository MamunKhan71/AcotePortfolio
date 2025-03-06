import { cn } from '@/lib/utils'

const HeaderTitle = ({ title, className = '' }: { title: string, className?: string }) => {
    return (
        <h2 className={cn(`text-[#111827] font-bold text-4xl md:text-[50px] leading-[52px] md:leading-[67px]`, className)}>{title}</h2>
    )
}

export default HeaderTitle