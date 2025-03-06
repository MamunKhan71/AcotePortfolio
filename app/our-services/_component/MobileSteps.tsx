interface ProcessStepProps {
    number: string
    title: string
    description: string
}

export default function MobileProcessStep({ number, title, description }: ProcessStepProps) {
    return (
        <div className="relative mb-12 pl-16">
            {/* Circle connector to the timeline */}
            <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>

            <div className="flex flex-col items-start">
                <div className="bg-primary text-2xl text-white font-bold rounded-tl-[20px] rounded-md rounded-br-[20px] px-4 py-2 flex items-center justify-center mb-4">
                    {number}
                </div>
                <h3 className="text-2xl font-bold leading-tight text-white">{title}</h3>
                <p className="text-base leading-relaxed text-gray-200">{description}</p>
            </div>
        </div>
    )
}

