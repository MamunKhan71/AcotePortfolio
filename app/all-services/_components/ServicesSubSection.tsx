import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export interface Service {
    id: string;
    title: string;
    description: string;
    content: string;
    subServices?: Service[];
}

interface ServicesSubSectionProps {
    selectedService?: Service | null;
    selectedSubService: string | null;
    currentService: Service | null;
    currentSubService: Service | null;
    handleBackToService: () => void;
    handleBackToServices: () => void;
    handleSubServiceSelect: (id: string) => void;
}

const ServicesSubSection: React.FC<ServicesSubSectionProps> = ({
    selectedService,
    selectedSubService,
    currentService,
    currentSubService,
    handleBackToService,
    handleBackToServices,
    handleSubServiceSelect,
}) => {
    if (!selectedService || !selectedSubService || !currentService || !currentSubService) {
        return null;
    }

    return (
        <div className="animate-in fade-in-50 slide-in-from-bottom-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <Button
                    variant="ghost"
                    className="-ml-2 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    onClick={handleBackToService}
                >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Back to {currentService.title}
                </Button>

                <div className="flex items-center text-sm text-muted-foreground">
                    <button onClick={handleBackToServices} className="hover:underline">
                        Services
                    </button>
                    <span className="mx-2">/</span>
                    <button onClick={handleBackToService} className="hover:underline">
                        {currentService.title}
                    </button>
                    <span className="mx-2">/</span>
                    <span className="font-medium text-foreground">{currentSubService.title}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <h2 className="text-3xl font-bold mb-6">{currentSubService.title}</h2>
                    <p className="text-xl text-muted-foreground mb-6">{currentSubService.description}</p>
                    <p className="mb-8 text-lg leading-relaxed">{currentSubService.content}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <Card className="bg-primary/5 border-0">
                            <CardHeader>
                                <CardTitle className="text-lg">Expertise</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Our team brings specialized knowledge and years of experience in {currentSubService.title} to every project.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary/5 border-0">
                            <CardHeader>
                                <CardTitle className="text-lg">Methodology</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    We follow a proven, systematic approach to deliver consistent, high-quality results for our clients.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary/5 border-0">
                            <CardHeader>
                                <CardTitle className="text-lg">Technology</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    We leverage cutting-edge tools and technologies to provide innovative solutions that drive results.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary/5 border-0">
                            <CardHeader>
                                <CardTitle className="text-lg">Support</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Our commitment to your success extends beyond project completion with ongoing support and optimization.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Button size="lg" className="mb-12">
                        Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    {currentService.subServices && currentService.subServices.length > 1 && (
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Related Services</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {currentService.subServices
                                    .filter((subService) => subService.id !== selectedSubService)
                                    .map((subService) => (
                                        <Card
                                            key={subService.id}
                                            className="cursor-pointer hover:shadow-md transition-all"
                                            onClick={() => handleSubServiceSelect(subService.id)}
                                        >
                                            <CardHeader>
                                                <CardTitle>{subService.title}</CardTitle>
                                                <CardDescription>{subService.description}</CardDescription>
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

                <div className="lg:col-span-4">
                    <div className="sticky top-8">
                        <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt={currentSubService.title}
                            width={600}
                            height={400}
                            className="rounded-lg mb-6 w-full object-cover"
                        />

                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle>Get Started</CardTitle>
                                <CardDescription>
                                    Take the first step toward implementing {currentSubService.title}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm">
                                    Our team is ready to discuss your specific needs and how our {currentSubService.title} services can help you achieve your goals.
                                </p>
                            </CardContent>
                            <CardFooter className="flex flex-col gap-3">
                                <Button className="w-full">Schedule a Consultation</Button>
                                <Button variant="outline" className="w-full">
                                    Download Brochure
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Case Study</CardTitle>
                                <CardDescription>See how we've helped similar businesses</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm mb-4">
                                    Learn how we helped a leading company improve their operations with our {currentSubService.title} services, resulting in significant improvements in efficiency and ROI.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    Read Case Study
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSubSection;