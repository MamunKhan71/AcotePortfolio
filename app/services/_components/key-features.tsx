import { CheckCircle } from 'lucide-react';
import React from 'react';

interface KeyFeature {
    title: string;
    description: string;
}

interface KeyFeaturesProps {
    keyFeatures: KeyFeature[];
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ keyFeatures }) => {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 py-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <h3 className="font-medium">{feature.title}</h3>
                            <p className="text-slate-600 text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFeatures;