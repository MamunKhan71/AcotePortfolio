import { teamInfoTypes } from "@/data/our-team";
import Image from "next/image";

export const TeamCard: React.FC<teamInfoTypes> = ({ name, role, imageSrc }) => {
    return (
        <div className="w-full md:w-fit">
            <div
                className="w-full md:w-60 h-96 md:h-[355px] mr-4 flex-shrink-0 relative bg-cover bg-no-repeat rounded-xl overflow-hidden"
                style={{ backgroundImage: `url('/about-us/profile-background.png')` }}
            >
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="rounded-md object-cover md:object-contain w-full h-full"
                />
                <div className="absolute w-full h-[35%] bottom-0 opacity-90"
                    style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.89) 46.51%, #000 100%)' }}>
                    <div className='flex justify-end flex-col w-full h-full p-3 text-white'>
                        <h1 className='font-medium text-lg text-[#D0D0D0]'>{name}</h1>
                        <h1 className='text-xs text-[#9D9D9D]'>- {role}</h1>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};
