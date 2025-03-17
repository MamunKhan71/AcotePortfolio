import ShimmerButton from "@/components/shimmer-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeft, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

export default function ServiceDetail({ service, className }: ServiceDetailProps) {
    // Function to dynamically import icons from lucide-react
    const IconComponent = ({ iconName }: { iconName: string }) => {
        const LucideIcon = require("lucide-react")[iconName]
        return LucideIcon ? <LucideIcon className="h-10 w-10 text-emerald-500 mb-4" /> : null
    }

    return (
        <div className={cn("", className)}>
            {/* Hero Section */}
            <section className="container mt-10 mx-auto py-20 relative">
                <Image src="/mobile-app.jpg" alt="Mobile App" layout="fill" objectFit="cover" className="absolute inset-0 -z-20 rounded-2xl" style={{ filter: 'brightness(0.2)' }} />
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
                                <Button size="lg" className="bg-primary text-white hover:bg-secondary inline-flex gap-2 items-center">
                                    <Phone /> Call Now
                                </Button>
                                <ShimmerButton title="Request a Consultation" className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="prose max-w-none">
                                <h2 className="text-3xl font-bold mb-6">Our {service.title} Services</h2>
                                <p className="text-lg text-slate-700 mb-6">{service.description}</p>
                            </div>

                            {/* Process Section */}
                            <div className="mt-12 bg-slate-50 p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-6">{service.process.title}</h2>
                                <ol className="space-y-6">
                                    {service.process.steps.map((step) => (
                                        <li key={step.number} className="flex items-start gap-4">
                                            <span className="bg-emerald-100 text-emerald-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                                                {step.number}
                                            </span>
                                            <div>
                                                <h3 className="font-medium text-lg">{step.title}</h3>
                                                <p className="text-slate-600">{step.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Technologies Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-6">{service.technologies.title}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.technologies.categories.map((category) => (
                                        <div key={category.name} className="border rounded-lg p-6 bg-white">
                                            <h3 className="font-medium text-lg mb-3">{category.name}</h3>
                                            <ul className="space-y-2 text-slate-600">
                                                {category.items.map((item, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.keyFeatures.map((feature, index) => (
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

                            {/* Specialized Services */}
                            {service.specializedServices.length > 0 && (
                                <div className="mt-12">
                                    <h2 className="text-2xl font-bold mb-6">Specialized Services</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {service.specializedServices.map((specialService, index) => (
                                            <div key={index} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                                                <IconComponent iconName={specialService.icon} />
                                                <h3 className="text-xl font-medium mb-2">{specialService.title}</h3>
                                                <p className="text-slate-600 mb-4">{specialService.description}</p>
                                                <Link
                                                    href={`/services/${service.id}/${specialService.slug}`}
                                                    className="text-emerald-600 font-medium inline-flex items-center"
                                                >
                                                    View Details
                                                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
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
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Request a Consultation</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

