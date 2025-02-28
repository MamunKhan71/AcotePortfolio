import { cn } from '@/lib/utils'
import React from 'react'

const HeaderTitle = ({ title, className = '' }: { title: string, className?: string }) => {
    return (
        <h2 className={cn(`text-[#111827] font-bold text-[50px] md:leading-[67px]`, className)}>{title}</h2>
    )
}

export default HeaderTitle