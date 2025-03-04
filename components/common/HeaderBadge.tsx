import { cn } from '@/lib/utils'

const HeaderBadge = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h3 className={cn(`text-primary text-base font-semibold tracking-[0.621px] leading-4 uppercase mb-1`, className)}>{title}</h3>
    )
}

export default HeaderBadge