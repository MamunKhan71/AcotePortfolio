"use client"

import HeaderBadge from "@/components/common/HeaderBadge"
import HeaderTitle from "@/components/common/HeaderTitle"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface Service {
    id: number
    name: string
    tag: string
    title: string
    description: string
    image: string
}

const services: Service[] = [
    {
        id: 1,
        name: "AI & ML",
        tag: "AI & ML",
        title: "We help you to build complex automations",
        description:
            "We provide Empowering machines to see, understand, and analyze the world. Driving smarter decisions through advanced predictive algorithms.",
        image: "/ai.png",
    },
    {
        id: 2,
        name: "Custom Software",
        tag: "SOFTWARE",
        title: "Custom software solutions for your business",
        description: "We develop tailored software solutions that perfectly align with your business needs and objectives.",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 3,
        name: "Mobile App",
        tag: "MOBILE APP",
        title: "Build mobile applications that engage users",
        description:
            "Our team specializes in creating intuitive, fast, and responsive mobile applications for both iOS and Android platforms.",
        image: "/mobile-app.png",
    },
    {
        id: 4,
        name: "Web App",
        tag: "WEB APP",
        title: "Powerful web applications to scale your business",
        description:
            "We design and develop dynamic and scalable web applications that improve efficiency and enhance user experience.",
        image: "/web-app.png",
    },
    {
        id: 5,
        name: "Design",
        tag: "DESIGN",
        title: "Innovative and user-friendly designs",
        description:
            "From UX/UI design to creative digital branding, we craft visually appealing and functional designs that captivate users.",
        image: "/design.png",
    },
    {
        id: 6,
        name: "Cloud Migration",
        tag: "CLOUD MIGRATION",
        title: "Seamless transition to cloud environments",
        description:
            "We help businesses move their infrastructure and operations to the cloud, ensuring minimal disruption and maximum performance.",
        image: "/cloud-migration.png",
    },
    {
        id: 7,
        name: "CRM services",
        tag: "CRM SERVICES",
        title: "Enhancing customer relationships through CRM",
        description:
            "We implement and manage CRM solutions to help you build stronger, lasting relationships with your customers.",
        image: "/crm-services.png",
    },
    {
        id: 8,
        name: "QA & Testing",
        tag: "QA & TESTING",
        title: "Ensure the quality of your product",
        description:
            "Our testing services help deliver bug-free, high-quality software by performing extensive manual and automated tests.",
        image: "/qa-testing.png",
    },
    {
        id: 9,
        name: "Game Development",
        tag: "GAME DEVELOPMENT",
        title: "Create immersive gaming experiences",
        description:
            "We provide full-cycle game development services, creating engaging, high-performance games for various platforms.",
        image: "/game-development.png",
    },
    {
        id: 10,
        name: "IoT Development Services",
        tag: "IOT DEVELOPMENT",
        title: "Unlock the potential of IoT for your business",
        description:
            "We develop IoT solutions to enable smarter devices, connectivity, and data analytics for improved decision-making.",
        image: "/iot-development.png",
    },
    {
        id: 11,
        name: "Smart Factory Services",
        tag: "SMART FACTORY",
        title: "Digitally transform your manufacturing process",
        description:
            "We provide end-to-end smart factory solutions, integrating IoT, AI, and automation to optimize production and efficiency.",
        image: "/smart-factory.png",
    }
];


export default function ServicesSection() {
    const [activeService, setActiveService] = useState(0)

    const nextService = () => {
        setActiveService((prev) => (prev + 1) % services.length)
    }

    const prevService = () => {
        setActiveService((prev) => (prev - 1 + services.length) % services.length)
    }

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="space-y-6">
                <div>
                    <div className="space-y-2">
                        <HeaderBadge title="our services" />
                        <HeaderTitle title="Global software, AI innovation & IT Consulting" />
                    </div>
                    <p className="text-muted-foreground mt-4 max-w-xl">
                        Our dedicated and highly professional team strives to provide our global clients with full-stack solutions
                        by multiple platforms, languages in a timely manner.
                    </p>
                </div>

                <div className="relative grid lg:grid-cols-[300px,1fr] gap-24 mt-12">
                    {/* Services List */}
                    <div>
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                className={`relative w-full text-left px-4 py-[11px] hover:bg-muted rounded-lg transition-colors ${index === activeService ? "bg-muted" : ""
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-muted-foreground">{String(service.id).padStart(2, "0")}.</span>
                                    <span className={index === activeService ? "text-emerald-500 font-medium" : ""}>{service.name}</span>
                                </div>
                                {
                                    index === activeService && <div className="w-1.5 rounded-full -left-0.5 z-10 bg-primary h-full absolute top-0">
                                    </div>
                                }
                            </button>
                        ))}
                        <div className="h-full border top-0 absolute">
                        </div>
                    </div>

                    {/* Active Service Content */}
                    <div className="relative overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.05)] rounded-2xl p-[44px]">
                        <div className="flex gap-14 justify-between h-full w-full items-start">
                            <div className="flex-1 space-y-6 flex flex-col justify-between h-full w-auto">
                                <span className="inline-flex px-4 py-1.5 bg-primary/10 backdrop-blur-sm border border-primary/80 w-fit rounded-lg text-base font-semibold text-primary">
                                    {services[activeService].tag}
                                </span>
                                <div className="space-y-5">
                                    <h3 className="text-3xl font-bold max-w-sm">{services[activeService].title}</h3>
                                    <p className="text-muted-foreground text-lg max-w-xs">{services[activeService].description}</p>
                                </div>
                                <div>
                                    <Button variant={'default'} className="bg-primary">Learn More</Button>
                                </div>
                            </div>

                            <div className="flex-1 h-full relative">
                                <div className="h-full absolute -right-12">
                                    <img src="/ai.png" alt="" className="h-full" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-40"></div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2 mt-8">
                    <Button variant="outline" size="icon" onClick={prevService} className="rounded-full text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19L5 12L12 5" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextService} className="rounded-full text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    )
}

