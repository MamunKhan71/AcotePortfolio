import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { IconComponent } from './service-detail';
interface SpecializedService {
    icon: string;
    title: string;
    description: string;
    slug: string;
}

interface Service {
    id: string;
    specializedServices: SpecializedService[];
}

interface SpecializedServiceProps {
    service: Service;
}

const SpecializedServiceComponent: React.FC<SpecializedServiceProps> = ({ service }) => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Specialized Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.specializedServices.map((specialService, index) => (
                    <div key={index} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                        <IconComponent iconName={specialService.icon} />
                        <h3 className="text-xl font-medium mb-2">{specialService.title}</h3>
                        <p className="text-slate-600 mb-4">{specialService.description}</p>
                        <Link
                            href={`/services/${specialService.slug}`}
                            className="text-emerald-600 font-medium inline-flex items-center"
                        >
                            View Details
                            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecializedServiceComponent;