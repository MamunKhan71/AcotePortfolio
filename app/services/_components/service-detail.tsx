import ShimmerButton from "@/components/shimmer-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeft, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import KeyFeatures from "./key-features"
import ProcessSection from "./process-section"
import TechnologiesSection from "./technologies-section"
import WhyChooseUsSidebar from "./whyChooseUsSidebar"
import SpecializedServiceComponent from "./specialized-service"

// Define the types for the service detail data
export interface ServiceDetail {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    keyFeatures: {
        title: string
        description: string
    }[]
    process: {
        title: string
        steps: {
            number: number
            title: string
            description: string
        }[]
    }
    technologies: {
        title: string
        categories: {
            name: string
            items: string[]
        }[]
    }
    specializedServices: {
        icon: string
        title: string
        description: string
        slug: string
    }[]
    whyChooseUs: string[]
}

// Props for the ServiceDetail component
interface ServiceDetailProps {
    service: ServiceDetail
    className?: string
}
export const IconComponent = ({ iconName }: { iconName: string }) => {
    const LucideIcon = require("lucide-react")[iconName]
    return LucideIcon ? <LucideIcon className="h-10 w-10 text-emerald-500 mb-4" /> : null
}

export default function ServiceDetail({ service, className }: ServiceDetailProps) {

    return (
        <div className={cn("", className)}>
            {/* Hero Section */}
            <section className="container mt-10 mx-auto py-20 relative">
                <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="absolute inset-0 -z-20 rounded-2xl" style={{ filter: 'brightness(0.2)' }} />
                <div className="container mx-auto px-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to all services
                            </Link>
                            <h1 className="text-4xl font-bold text-white mb-6">{service.title}</h1>
                            <p className="text-xl text-white/90 mb-8">{service.subtitle}</p>
                            <div className="flex gap-4 items-center">
                                <Link href={'tel:+8801758388865'}>
                                    <Button size="lg" className="bg-primary text-white hover:bg-secondary inline-flex gap-2 items-center">
                                        <Phone /> Call Now
                                    </Button>
                                </Link>
                                <Link href={'/book-appointment'}>
                                    <ShimmerButton title="Request a Consultation" className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="prose max-w-none">
                                <h2 className="text-3xl font-bold mb-6">Our {service.title} Services</h2>
                                <p className="text-lg text-slate-700 mb-6">{service.description}</p>
                            </div>

                            {/* Process Section */}
                            <ProcessSection process={service.process} />

                            {/* Technologies Section */}
                            <TechnologiesSection categories={service.technologies.categories} title={service.technologies.title} />

                            {/* Key Features */}
                            <KeyFeatures keyFeatures={service.keyFeatures} />

                            {/* Specialized Services */}
                            {service.specializedServices.length > 0 && (
                                <SpecializedServiceComponent service={service}/>
                            )}
                        </div>

                        {/* Sidebar */}
                        <WhyChooseUsSidebar service={service} />
                    </div>
                </div>
            </section>
        </div>
    )
}

