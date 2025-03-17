import React from 'react';

interface Step {
    number: number;
    title: string;
    description: string;
}

interface Process {
    title: string;
    steps: Step[];
}

interface ProcessSectionProps {
    process: Process;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ process }) => {
    return (
        <div className="mt-12 bg-slate-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">{process.title}</h2>
            <ol className="space-y-6">
                {process.steps.map((step) => (
                    <li key={step.number} className="flex items-start gap-4">
                        <span className="bg-emerald-100 text-emerald-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                            {step.number}
                        </span>
                        <div>
                            <h3 className="font-medium text-lg">{step.title}</h3>
                            <p className="text-slate-600">{step.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ProcessSection;