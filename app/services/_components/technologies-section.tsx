import { BadgeCheck } from 'lucide-react';
import React from 'react';

interface TechnologyCategory {
    name: string;
    items: string[];
}

interface TechnologiesSectionProps {
    title: string;
    categories: TechnologyCategory[];
}

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({ title, categories }) => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category) => (
                    <div key={category.name} className="border rounded-lg p-6 bg-white">
                        <h3 className="font-medium text-lg mb-3">{category.name}</h3>
                        <ul className="space-y-2 text-slate-600">
                            {category.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <BadgeCheck className='bg-primary text-white p-1 rounded-full'/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesSection;