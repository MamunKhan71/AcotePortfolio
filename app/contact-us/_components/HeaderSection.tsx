import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeaderSection() {
    return (
        <div className="relative w-full h-[627px] bg-[#0a1929] text-white mb-[183px]">
            <Image
                src="/acote-banner.png"
                alt="Office background"
                width={1920}
                height={627}
                className="object-cover w-full h-full"
                priority
            />
            <div className="absolute inset-0 z-10">
                <div className="container mx-auto h-full relative py-[104px]">
                    {/* Hero section */}
                    <div>
                        <h1 className="text-5xl md:text-[75px] font-bold tracking-wide">
                            Let's work
                            <div className="flex items-center gap-2">
                                <div className="w-[61px] h-[8px] bg-[#21B24B]"></div>
                                <span>together.</span>
                            </div>
                        </h1>

                        <div className="mt-[60px]">
                            <Button variant={'default'}>
                                Leave us a message
                            </Button>
                        </div>
                    </div>

                    {/* Stats section */}
                    <div className="absolute z-10 -bottom-28 left-0 right-0 bg-white rounded-[30px] md:mx-auto max-w-[90%] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.02),0px_-2px_45px_-5px_rgba(0,0,0,0.06)]">
                        <div className="grid grid-cols-5 py-9 px-24">
                            {
                                HeaderCardData?.map((stats: HeaderCardDataTypes, index: number) => <HeaderCardSection
                                    key={`${stats.subtitle}-${index}`}
                                    iconImage={stats.iconImage} subtitle={stats.subtitle} title={stats.title} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const HeaderCardSection = ({ iconImage, title, subtitle }: { iconImage: string, title: string, subtitle: string }) => (
    <div className="flex flex-col items-center justify-center">
        <div className="h-16 w-16 relative">
            <Image src={iconImage} fill alt={subtitle} />
        </div>
        <div className="space-y-2 text-center mt-6">
            <p className="text-primary font-bold text-[28.36px]">{title}+</p>
            <p className="text-[#010101] text-base tracking-[-0.158px]">{subtitle}</p>
        </div>
    </div>
)

interface HeaderCardDataTypes {
    iconImage: string;
    title: string;
    subtitle: string;
}
const HeaderCardData: HeaderCardDataTypes[] = [
    {
        iconImage: '/contact-us/partner-icon.png',
        title: '8',
        subtitle: 'Tech Partners'
    },
    {
        iconImage: '/contact-us/experience-icon.png',
        title: '4',
        subtitle: 'Years of Experience'
    },
    {
        iconImage: '/contact-us/countries-icon.png',
        title: '20',
        subtitle: 'Countries Served'
    },
    {
        iconImage: '/contact-us/projects-icon.png',
        title: '200',
        subtitle: 'Projects Completed'
    },
    {
        iconImage: '/contact-us/professional-icon.png',
        title: '100',
        subtitle: 'Professionals'
    },
]