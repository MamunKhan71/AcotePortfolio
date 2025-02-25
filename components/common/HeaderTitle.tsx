import React from 'react'

const HeaderTitle = ({title} : {title : string}) => {
    return (
        <h2 className="text-[#111827] font-bold text-[50px] md:leading-[67px]">{title}</h2>
    )
}

export default HeaderTitle