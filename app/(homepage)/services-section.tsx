"use client"

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
]

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
                    <h3 className="text-emerald-500 font-medium">OUR SERVICES</h3>
                    <h2 className="text-4xl font-bold mt-2">Global software, AI innovation & IT Consulting</h2>
                    <p className="text-muted-foreground mt-4 max-w-xl">
                        Our dedicated and highly professional team strives to provide our global clients with full-stack solutions
                        by multiple platforms, languages in a timely manner.
                    </p>
                </div>

                <div className="relative grid lg:grid-cols-[300px,1fr] gap-24 mt-12">
                    {/* Services List */}
                    <div className="space-y-1">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                className={`relative w-full text-left p-4 hover:bg-muted rounded-lg transition-colors ${index === activeService ? "bg-muted" : ""
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
                            <div className="flex-1 space-y-6 max-w-xs flex flex-col justify-between h-full">
                                <span className="inline-flex px-4 py-1.5 bg-primary/10 backdrop-blur-sm border border-primary/80 w-fit rounded-lg text-base font-semibold text-primary">
                                    {services[activeService].tag}
                                </span>
                                <div className="space-y-5">
                                    <h3 className="text-3xl font-bold">{services[activeService].title}</h3>
                                    <p className="text-muted-foreground text-lg">{services[activeService].description}</p>
                                </div>
                                <Button variant={'default'} className="bg-primary">Learn More</Button>
                            </div>

                            <div className="flex-1 h-[357px] relative">
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
                    <Button variant="outline" size="icon" onClick={prevService} className="rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextService} className="rounded-full">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

