import { cn } from '@/lib/utils'

const HeaderDescription = ({ title, className }: { title: string, className?: string }) => {
    return (
        <p className={cn(`text-[#6B7280] text-lg ${className}`)}>{title}</p>
    )
}

export default HeaderDescription