import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


interface WhyChooseUsSidebarProps {
    service: {
        title: string;
        whyChooseUs: string[];
    };
}

const WhyChooseUsSidebar: React.FC<WhyChooseUsSidebarProps> = ({ service }) => {
    return (
        <div className="lg:col-span-1">
            <div className="sticky top-24">
                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                    <ul className="space-y-4">
                        {service.whyChooseUs.map((reason, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                                <p>{reason}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Contact Us Today</h3>
                    <p className="mb-6">
                        Ready to discuss your {service.title.toLowerCase()} project? Get in touch with our team for a free
                        consultation.
                    </p>
                    <Link href={'/book-appointment'}>
                        <Button className="w-full bg-primary hover:bg-green-700">Request a Consultation</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsSidebar;