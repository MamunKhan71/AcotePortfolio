import { Button } from "@/components/ui/button"
import { HeaderCardData, HeaderCardDataTypes } from "@/data/contact-us-data"
import Image from "next/image"

export default function HeaderSection() {
    return (
        <div className="">
            <div className="relative w-full h-[400px] md:h-[627px] bg-[#0a1929] text-white mb-10 md:mb-[183px]">
                <Image
                    src="/acote-banner.png"
                    alt="Office background"
                    width={1920}
                    height={627}
                    className="object-cover w-full h-full"
                    priority
                />
                <div className="absolute inset-0 z-10 px-4 md:px-0">
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

                            <div className="mt-10 md:mt-[60px]">
                                <Button variant={'default'}>
                                    Leave us a message
                                </Button>
                            </div>
                        </div>

                        {/* Stats section */}
                        <div className="hidden md:block md:absolute z-10 -bottom-28 left-0 right-0 bg-white rounded-[30px] md:mx-auto max-w-[90%] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.02),0px_-2px_45px_-5px_rgba(0,0,0,0.06)]">
                            <div className="grid grid-cols-1 md:grid-cols-5 py-9">
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
            <div className="block md:hidden">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {
                        HeaderCardData?.map((stats: HeaderCardDataTypes, index: number) => <HeaderCardSection
                            key={`${stats.subtitle}-${index}`}
                            iconImage={stats.iconImage} subtitle={stats.subtitle} title={stats.title} />)
                    }

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
        <div className="space-y-2 text-center mt-4 md:mt-6">
            <p className="text-primary font-bold text-[28.36px]">{title}+</p>
            <p className="text-[#010101] text-base tracking-[-0.158px]">{subtitle}</p>
        </div>
    </div>
)

