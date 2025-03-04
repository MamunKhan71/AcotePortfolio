import { timelineData } from "@/data/our-mission-timeline";

export default function OurJourneyTimeline() {
    return (
        <div className="mt-[60px] relative">
            {/* Connecting lines */}
            <div className="absolute w-[80%] left-1/2 -translate-x-1/2 -z-20 top-16">
                <img src="/about-us/connectingLines.png" alt="connecting-lines" />
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-5 gap-4">
                {timelineData.map(({ year, position, text }) => (
                    <div key={year} className="col-span-1 flex flex-col items-center">
                        <div className={position === "top" ? "order-1" : "order-2 mt-24"}>
                            <div className="w-[153px] h-[153px] rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                                {year}
                            </div>
                        </div>
                        <div className="order-2 mt-4 text-center text-lg max-w-56 md:leading-[28px]">
                            {text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}