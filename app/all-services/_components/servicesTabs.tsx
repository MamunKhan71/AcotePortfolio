import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';
import React from 'react';
interface ServicesTabsProps {
    servicesData: Array<{
        id: string;
        title: string;
        icon: React.ReactNode;
        services: Array<{
            id: string;
            title: string;
            description: string;
            icon: React.ReactNode;
        }>;
    }>;
    activeCategory: string;
    handleCategoryChange: (value: string) => void;
    handleServiceSelect: (id: string) => void;
    selectedService: string | null;
}

export const ServicesTabs: React.FC<ServicesTabsProps> = ({
    servicesData,
    activeCategory,
    handleCategoryChange,
    handleServiceSelect,
    selectedService,
}) => {
    return (
        <Tabs
            defaultValue={servicesData[0].id}
            value={activeCategory}
            onValueChange={handleCategoryChange}
            className="mb-12"
        >
            <TabsList className="w-full max-w-3xl mx-auto h-auto flex flex-wrap justify-center gap-2 bg-transparent">
                {servicesData.map((category) => (
                    <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="flex items-center gap-2 py-3 px-6 rounded-full border bg-background data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                        {category.icon}
                        <span>{category.title}</span>
                    </TabsTrigger>
                ))}
            </TabsList>

            {!selectedService && (
                <div className="mt-8">
                    {servicesData.map((category) => (
                        <TabsContent key={category.id} value={category.id} className="animate-in fade-in-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.services.map((service) => (
                                    <Card
                                        key={service.id}
                                        className="overflow-hidden transition-all hover:shadow-md cursor-pointer border-2 hover:border-primary/50"
                                        onClick={() => handleServiceSelect(service.id)}
                                    >
                                        <CardHeader className="pb-4">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 rounded-full bg-primary/10 text-primary">{service.icon}</div>
                                                <CardTitle>{service.title}</CardTitle>
                                            </div>
                                            <CardDescription className="text-base">{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardFooter className="pt-0 pb-4">
                                            <Button variant="ghost" className="group w-full justify-between">
                                                Learn More
                                                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </div>
            )}
        </Tabs>
    );
};