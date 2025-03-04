import { Founder } from '@/data/our-team';
import Image from 'next/image';
import React from 'react';

const FounderCard: React.FC<Founder> = ({ name, role, imageSrc, message, description, keyPoints }) => {
    return (
        <div className="bg-[#152231] rounded-2xl overflow-hidden p-6 flex">
            <div
                className="w-60 h-[305px] mr-4 flex-shrink-0 relative bg-cover bg-no-repeat rounded-xl overflow-hidden"
                style={{ backgroundImage: `url('/about-us/profile-background.png')` }}
            >
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="rounded-md object-contain w-full h-full"
                />
                <div className="absolute w-full h-[35%] bottom-0 opacity-90"
                    style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.89) 46.51%, #000 100%)' }}>
                    <div className='flex justify-end flex-col items-center w-full h-full p-3 text-white'>
                        <h1 className='font-medium text-lg text-[#D0D0D0]'>{name}</h1>
                        <h1 className='text-xs text-[#9D9D9D]'>{role}</h1>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-[30px] text-white font-semibold mb-4">{message}</h3>
                <p className='text-base text-white md:leading-[24.63px]'>{description}</p>
                {
                    keyPoints && <ul className="text-base text-white list-disc pl-5 md:leading-[24.63px] space-y-1">
                        {keyPoints?.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                }

            </div>
        </div>
    );
};

interface FounderSectionProps {
    founders: Founder[];
}

const FounderSection: React.FC<FounderSectionProps> = ({ founders }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12 mt-16">
            {founders.map((founder, index) => (
                <FounderCard key={index} {...founder} />
            ))}
        </div>
    );
};

export default FounderSection;

