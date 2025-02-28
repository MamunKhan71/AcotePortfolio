import HeaderDescription from "@/components/common/HeaderDescription";
import HeaderTitle from "@/components/common/HeaderTitle";

export default function OurProcess() {
    return (
        <div className="relative h-[2001px] w-full bg-[#0a1526] text-white py-[90px]">
            {/* Header */}
            <div className="container mx-auto relative z-20">
                <div className="max-w-[689px]">
                    <HeaderTitle className="text-[74.414px] text-white md:leading-[94px]" title="Web Development The Acote Process" />
                    <HeaderDescription className="text-white" title="We devise agile development strategies to create your web app from scratch." />
                </div>

                {/* Process Steps */}
                <div className="relative mt-20 w-full">
                    {/* Dotted Line Path */}
                    {/* Step 1 - Left Aligned */}
                    <div className="relative mb-32 grid grid-cols-2">
                        <div className="col-span-1  flex items-center justify-center">
                            <div className="flex flex-col items-start">
                                <div className="bg-primary text-[40px] text-white font-bold rounded-tl-[20px] rounded-md rounded-br-[20px] px-4 py-2 flex items-center justify-center mb-4">
                                    01
                                </div>
                                <h3 className="md:text-[33.172px] font-bold md:leading-[55px]">Roadmap</h3>
                                <p className="text-xl md:leading-[28px] max-w-[300px]">We design the complete project roadmap.</p>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>

                    {/* Step 2 - Right Aligned */}
                    <div className="relative mb-32 grid grid-cols-2">
                        <div className="col-span-1"></div>
                        <div className="col-span-1 flex items-center justify-center">
                            <div className="flex flex-col items-start">
                                <div className="bg-primary text-[40px] text-white font-bold rounded-tl-[20px] rounded-md rounded-br-[20px] px-4 py-2 flex items-center justify-center mb-4">
                                    02
                                </div>
                                <h3 className="md:text-[33.172px] font-bold md:leading-[55px]">User Experience</h3>
                                <p className="text-xl md:leading-[28px] max-w-[300px]">Experienced UX team to work on your project.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 - Left Aligned */}
                    <div className="relative mb-32 grid grid-cols-2">
                        <div className="col-span-1  flex items-center justify-center">
                            <div className="flex flex-col items-start">
                                <div className="bg-primary text-[40px] text-white font-bold rounded-tl-[20px] rounded-md rounded-br-[20px] px-4 py-2 flex items-center justify-center mb-4">
                                    03
                                </div>
                                <h3 className="md:text-[33.172px] font-bold md:leading-[55px]">Development</h3>
                                <p className="text-xl md:leading-[28px] max-w-[300px]">Flexible development with minimal coding.</p>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>

                    {/* Step 4 - Right Aligned */}
                    <div className="relative mb-32 grid grid-cols-2">
                        <div className="col-span-1"></div>
                        <div className="col-span-1  flex items-center justify-center">
                            <div className="flex flex-col items-start">
                                <div className="bg-primary text-[40px] text-white font-bold rounded-tl-[20px] rounded-md rounded-br-[20px] px-4 py-2 flex items-center justify-center mb-4">
                                    04
                                </div>
                                <h3 className="md:text-[33.172px] font-bold md:leading-[55px]">Testing</h3>
                                <p className="text-xl md:leading-[28px] max-w-[300px]">Intensive testing to review your app from every angle.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 - Left Aligned */}
                    <div className="relative mb-16 grid grid-cols-2">
                        <div className="col-span-1  flex items-center justify-center">
                            <div className="flex flex-col items-start">
                                <div className="bg-primary text-[40px] text-white font-bold rounded-tl-[20px] rounded-md rounded-br-[20px] px-4 py-2 flex items-center justify-center mb-4">
                                    05
                                </div>
                                <h3 className="md:text-[33.172px] font-bold md:leading-[55px]">Iteration</h3>
                                <p className="text-xl md:leading-[28px] max-w-[300px]">Optimizes your app's performance further.</p>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
                <img src="/our-services/development-process.png" className="h-full w-full" alt="" />
            </div>
        </div>
    )
}

