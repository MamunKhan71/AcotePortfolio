import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';

interface ServiceViewSidebarProps {
    image: string;
    title: string;
    description: string;
    features: string[];
}

const ServiceViewSidebar: React.FC<ServiceViewSidebarProps> = ({ image, title, description, features }) => {
    return (
        <div className="lg:col-span-4">
            <div className="sticky top-8">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={600}
                    height={400}
                    className="rounded-lg mb-6 w-full object-cover"
                />
                <Card>
                    <CardHeader>
                        <CardTitle>Why Choose Us</CardTitle>
                        <CardDescription>Our approach to {title}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <p>{feature}</p>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Contact Us Today</Button>
                    </CardFooter>
                </Card>
            </div>
        </div >
    )
}

export default ServiceViewSidebar
