import HeaderDescription from '@/components/common/HeaderDescription';
import HeaderTitle from '@/components/common/HeaderTitle';
import React from 'react';

interface HeaderSectionProps {
    breadcrumb: string;
    title: string;
    description?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ breadcrumb, title, description }) => {
    return (
        <div className='flex flex-col items-center justify-center w-full mt-10 md:mt-20 space-y-3 md:space-y-5'>
            <div className='bg-[#b9b9b91f] w-fit px-6 rounded-full py-1 text-xl'>
                <p dangerouslySetInnerHTML={{ __html: breadcrumb }} />
            </div>
            <HeaderTitle title={title} />
            <HeaderDescription className='md:max-w-[444px] text-xl md:text-2xl text-center' title={description || ''} />
        </div>
    )
}

export default HeaderSection;
