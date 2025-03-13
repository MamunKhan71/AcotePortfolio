"use client"

import {
    ArrowRight,
    CheckCircle2
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import ContactUsBanner from "@/components/common/contact-us-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { servicesData } from "@/data/services-data"
import ServicesHeader from "./ServicesHeader"
import { ServicesTabs } from "./servicesTabs"
import ServiceViewSection from "./ServiceViewSection"
import ServiceViewSidebar from "./ServiceViewSidebar"
import ServicesSubSection, { Service } from "./ServicesSubSection"

export function ServicePage() {
    const [activeCategory, setActiveCategory] = useState(servicesData[0].id)
    const [selectedService, setSelectedService] = useState<string | null>(null)
    const [selectedSubService, setSelectedSubService] = useState<string | null>(null)

    const currentCategory = servicesData.find((category) => category.id === activeCategory)
    const currentService = currentCategory?.services.find((service) => service.id === selectedService) || null
    const currentSubService = currentService?.subServices?.find((subService) => subService.id === selectedSubService) || null

    // Reset selections when changing categories
    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId)
        setSelectedService(null)
        setSelectedSubService(null)
    }

    // Handle service selection
    const handleServiceSelect = (serviceId: string) => {
        setSelectedService(serviceId)
        setSelectedSubService(null)
    }

    // Handle subservice selection
    const handleSubServiceSelect = (subServiceId: string) => {
        setSelectedSubService(subServiceId)
    }

    // Go back to service list
    const handleBackToServices = () => {
        setSelectedService(null)
        setSelectedSubService(null)
    }

    // Go back to service detail from subservice
    const handleBackToService = () => {
        setSelectedSubService(null)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto py-12 px-4">
                {/* Header */}
                <ServicesHeader />
                {/* Main category tabs */}
                <ServicesTabs handleCategoryChange={handleCategoryChange} activeCategory={activeCategory} handleServiceSelect={handleServiceSelect} selectedService={selectedService} servicesData={servicesData} />

                {/* Service detail view */}
                {selectedService && !selectedSubService && currentService && (
                    <div className="animate-in fade-in-50 slide-in-from-bottom-5">
                        <Button
                            variant="ghost"
                            className="mb-6 -ml-2 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            onClick={handleBackToServices}
                        >
                            <ArrowRight className="h-4 w-4 rotate-180" />
                            Back to all services
                        </Button>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Main content */}
                            <ServiceViewSection currentService={currentService} handleSubServiceSelect={handleSubServiceSelect} />
                            {/* Sidebar */}
                            <ServiceViewSidebar description={currentService.description} features={currentService.features} image={currentService.image} title={currentService.title} />
                        </div>
                    </div>
                )}

                {/* Sub-service detail view */}
                <ServicesSubSection currentService={currentService} currentSubService={currentSubService} handleBackToServices={handleBackToServices} handleBackToService={handleBackToService} handleSubServiceSelect={handleSubServiceSelect} selectedSubService={selectedSubService} />
            </div>
            <ContactUsBanner />
        </div>
    )
}

