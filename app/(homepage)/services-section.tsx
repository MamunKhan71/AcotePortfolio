"use client"

import HeaderBadge from "@/components/common/HeaderBadge"
import HeaderTitle from "@/components/common/HeaderTitle"
import { Button } from "@/components/ui/button"
import { services } from "@/data/our-services"
import { useState } from "react"

export default function ServicesSection() {
    const [activeService, setActiveService] = useState(0)

    const nextService = () => {
        setActiveService((prev) => (prev + 1) % services.length)
    }

    const prevService = () => {
        setActiveService((prev) => (prev - 1 + services.length) % services.length)
    }

    return (
        <section className="container mx-auto mt-20 md:mt-28 px-4 md:px-0">
            <div className="space-y-4 md:space-y-6">
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

                <div className="relative grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8 md:gap-16 mt-6 md:mt-12">
                    {/* Services List */}
                    <div>
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                className={`relative w-full text-left px-4 py-[11px] hover:bg-muted rounded-lg transition-colors ${index === activeService ? "bg-muted" : ""}`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-muted-foreground">{String(service.id).padStart(2, "0")}.</span>
                                    <span className={index === activeService ? "text-emerald-500 font-medium" : ""}>{service.name}</span>
                                </div>
                                {index === activeService && (
                                    <div className="w-1.5 rounded-full -left-0.5 z-10 bg-primary h-full absolute top-0"></div>
                                )}
                            </button>
                        ))}
                        <div className="h-full border top-0 absolute"></div>
                    </div>

                    {/* Active Service Content */}
                    <div className="relative overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.05)] rounded-2xl p-[24px] md:p-[44px]">
                        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 justify-between h-full w-full items-start">
                            <div className="flex-1 space-y-6 flex flex-col justify-between h-full w-auto">
                                <span className="inline-flex px-4 py-1.5 bg-primary/10 backdrop-blur-sm border border-primary/80 w-fit rounded-lg text-base font-semibold text-primary">
                                    {services[activeService].tag}
                                </span>
                                <div className="space-y-5">
                                    <h3 className="text-2xl md:text-3xl font-bold max-w-sm">{services[activeService].title}</h3>
                                    <p className="text-muted-foreground text-lg max-w-xs">{services[activeService].description}</p>
                                </div>
                                <div>
                                    <Button variant={'default'} className="bg-primary">Learn More</Button>
                                </div>
                            </div>

                            <div className="flex-1 h-full relative">
                                <div className="h-full md:absolute -right-12">
                                    <img src={services[activeService].image} alt={services[activeService].title} className="h-full" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-40"></div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2 mt-8 justify-center md:justify-start">
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
