import { timelineData } from "@/data/our-mission-timeline";

export default function OurJourneyTimeline() {
    return (
        <div className="mt-0 md:mt-[60px] relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute w-[80%] left-1/2 -translate-x-1/2 -z-20 top-16">
                <img src="/about-us/connectingLines.png" alt="connecting-lines" />
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 md:mt-0">
                {timelineData.map(({ year, position, text }) => (
                    <div key={year} className="col-span-1 flex flex-row md:flex-col gap-4 md:gap-0 items-center">
                        <div className={position === "top" ? "order-1" : "order-2 md:mt-24"}>
                            <div className="w-24 md:w-[153px] h-24 md:h-[153px] rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                {year}
                            </div>
                        </div>
                        <div className="order-2 mt-0 md:mt-4 text-left md:text-center text-base md:text-lg md:max-w-56 md:leading-[28px]">
                            {text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}