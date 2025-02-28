import HeaderDescription from "@/components/common/HeaderDescription";
import HeaderTitle from "@/components/common/HeaderTitle";

export default function OurProcess() {
    return (
        <div className="relative w-full bg-[#0a1526] text-white py-[90px]">
            {/* Header */}
            <div className="container mx-auto">
                <div className="max-w-[689px]">
                    <HeaderTitle className="text-[74.414px] text-white md:leading-[94px]" title="Web Development The Acote Process" />
                    <HeaderDescription className="text-white" title="We devise agile development strategies to create your web app from scratch." />
                </div>

                {/* Process Steps */}
                <div className="relative mt-20">
                    {/* Dotted Line Path */}
                    {/* <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l border-dashed border-gray-600 h-full -translate-x-1/2 z-0"></div> */}

                    {/* Step 1 - Left Aligned */}
                    <div className="relative mb-32 grid grid-cols-2">
                        <div className="col-span-1">
                            <div className="flex flex-col items-start">
                                <div className="bg-green-500 text-white font-bold rounded p-2 w-12 h-12 flex items-center justify-center text-xl mb-4">
                                    01
                                </div>
                                <h3 className="text-xl font-bold mb-2">Roadmap</h3>
                                <p className="text-sm">We design the complete project roadmap.</p>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>

                    {/* Step 2 - Right Aligned */}
                    <div className="relative mb-32 grid grid-cols-2">
                        <div className="col-span-1"></div>
                        <div className="col-span-1">
                            <div className="flex flex-col items-start">
                                <div className="bg-green-500 text-white font-bold rounded p-2 w-12 h-12 flex items-center justify-center text-xl mb-4">
                                    02
                                </div>
                                <h3 className="text-xl font-bold mb-2">User Experience</h3>
                                <p className="text-sm">Experienced UX team to work on your project.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 - Left Aligned */}
                    <div className="relative mb-32 grid grid-cols-2">
                        <div className="col-span-1">
                            <div className="flex flex-col items-start">
                                <div className="bg-green-500 text-white font-bold rounded p-2 w-12 h-12 flex items-center justify-center text-xl mb-4">
                                    03
                                </div>
                                <h3 className="text-xl font-bold mb-2">Development</h3>
                                <p className="text-sm">Flexible development with minimal coding.</p>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>

                    {/* Step 4 - Right Aligned */}
                    <div className="relative mb-32 grid grid-cols-2">
                        <div className="col-span-1"></div>
                        <div className="col-span-1">
                            <div className="flex flex-col items-start">
                                <div className="bg-green-500 text-white font-bold rounded p-2 w-12 h-12 flex items-center justify-center text-xl mb-4">
                                    04
                                </div>
                                <h3 className="text-xl font-bold mb-2">Testing</h3>
                                <p className="text-sm">Intensive testing to review your app from every angle.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 - Left Aligned */}
                    <div className="relative mb-16 grid grid-cols-2">
                        <div className="col-span-1">
                            <div className="flex flex-col items-start">
                                <div className="bg-green-500 text-white font-bold rounded p-2 w-12 h-12 flex items-center justify-center text-xl mb-4">
                                    05
                                </div>
                                <h3 className="text-xl font-bold mb-2">Iteration</h3>
                                <p className="text-sm">Optimizes your app's performance further.</p>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

