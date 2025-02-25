import { cn } from '@/lib/utils'
import React from 'react'

const ComponentTitle = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h2 className={cn(`text-black font-semibold text-[40px] capitalize tracking-[-0.66px] md:leading-[58px] ${className}`)}>
            {title}
        </h2>
    )
}

export default ComponentTitle