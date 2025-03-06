import HeaderDescription from "@/components/common/HeaderDescription";
import HeaderTitle from "@/components/common/HeaderTitle";
import { webDevSteps } from "@/data/web-development-process";
import MobileProcessStep from "./MobileSteps";

type ProcessStepProps = {
    step: string;
    title: string;
    description: string;
    align: "left" | "right";
    margin: string;
};

const ProcessStep = ({ step, title, description, align, margin }: ProcessStepProps) => {
    const stepContent = (
        <div className="flex flex-col items-start">
            <div className="bg-primary text-[40px] text-white font-bold rounded-tl-[20px] rounded-md rounded-br-[20px] px-4 py-2 flex items-center justify-center mb-4">
                {step}
            </div>
            <h3 className="md:text-[33.172px] font-bold md:leading-[55px]">{title}</h3>
            <p className="text-xl md:leading-[28px] max-w-[300px]">{description}</p>
        </div>
    );

    return (
        <div className={`relative ${margin} grid grid-cols-2`}>
            {align === "left" ? (
                <>
                    <div className="col-span-1 flex items-center justify-center">{stepContent}</div>
                    <div className="col-span-1" />
                </>
            ) : (
                <>
                    <div className="col-span-1" />
                    <div className="col-span-1 flex items-center justify-center">{stepContent}</div>
                </>
            )}
        </div>
    );
};


export default function OurProcess() {
    return (
        <div>
            <div className="hidden md:block relative h-full md:h-[2001px] w-full bg-[#0a1526] text-white py-[90px]">
                {/* Header */}
                <div className="container mx-auto relative z-20">
                    <div className="max-w-[689px]">
                        <HeaderTitle
                            className="text-[74.414px] text-white md:leading-[94px] max-w-[450px]"
                            title="Web Development The Acote Process"
                        />
                        <HeaderDescription
                            className="text-white"
                            title="We devise agile development strategies to create your web app from scratch."
                        />
                    </div>

                    {/* Process Steps */}
                    <div className="relative mt-20 w-full">
                        {webDevSteps?.map((stepData, idx) => (
                            <ProcessStep key={idx} {...stepData} />
                        ))}
                    </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
                    <img src="/our-services/development-process.png" className="h-full w-full" alt="" />
                </div>
            </div>
            <div className="md:hidden relative mt-12 bg-secondary px-8 py-12">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[47px] h-[85%] top-1/2 -translate-y-1/2 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/10 z-0"></div>
                {webDevSteps?.map((step, index) => (
                    <MobileProcessStep description={step.description} number={step.step} title={step.title} key={`${step.title}-${index}`} />
                ))}
            </div>
        </div>
    );
}
