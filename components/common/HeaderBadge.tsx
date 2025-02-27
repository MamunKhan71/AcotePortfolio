import React from 'react'

const HeaderBadge = ({title} : {title: string}) => {
    return (
        <h3 className="text-primary text-base font-semibold tracking-[0.621px] leading-4 uppercase mb-1">{title}</h3>
    )
}

export default HeaderBadge