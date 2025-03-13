import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';

interface SubService {
    id: string;
    title: string;
    description: string;
}

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    content: string;
    features: string[];
    subServices?: SubService[];
}

interface ServiceViewSectionProps {
    currentService: Service;
    handleSubServiceSelect: (id: string) => void;
}

const ServiceViewSection: React.FC<ServiceViewSectionProps> = ({ currentService, handleSubServiceSelect }) => {
    return (
        <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">{currentService.icon}</div>
                <h2 className="text-3xl font-bold">{currentService.title}</h2>
            </div>

            <p className="text-xl text-muted-foreground mb-6">{currentService.description}</p>
            <p className="mb-8 text-lg leading-relaxed">{currentService.content}</p>

            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                    </li>
                ))}
            </ul>

            <Button size="lg" className="mb-12">
                Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {currentService.subServices && currentService.subServices.length > 0 && (
                <div>
                    <h3 className="text-2xl font-bold mb-6">Specialized Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentService.subServices.map((subService) => (
                            <Card
                                key={subService.id}
                                className="cursor-pointer hover:shadow-md transition-all border-2 hover:border-primary/50"
                                onClick={() => handleSubServiceSelect(subService.id)}
                            >
                                <CardHeader>
                                    <CardTitle>{subService.title}</CardTitle>
                                    <CardDescription className="text-base">{subService.description}</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button variant="ghost" className="group w-full justify-between">
                                        View Details
                                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default ServiceViewSection;