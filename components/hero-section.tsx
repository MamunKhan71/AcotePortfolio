"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { heroSlides } from "@/data/hero-slide-data"
import Link from "next/link"



export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto-advance heroSlides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    // Handle indicator click
    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <section className="w-full pt-12 md:pt-24 lg:pt-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                    {/* Text Content (Left) */}
                    <div className="space-y-4 md:space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-normal text-gray-900">
                            {heroSlides[currentSlide].title}
                        </h1>
                        <p className="text-[#6B7280] md:text-lg">{heroSlides[currentSlide].description}</p>
                        {
                            heroSlides[currentSlide].id === 1 ? <a href="Acote Group - Company Deck 2024 EN .pdf" download={true}>
                                <Button variant={'default'} className="mt-6">
                                    {heroSlides[currentSlide].buttonText}
                                </Button>
                            </a> : <Link href={heroSlides[currentSlide].buttonLink}>
                                <Button variant={'default'} className="mt-6">
                                    {heroSlides[currentSlide].buttonText}
                                </Button>
                            </Link>
                        }
                    </div>

                    {/* Image (Right) */}
                    <div className="relative h-[300px] md:h-[400px] lg:h-[437.885px] w-full -order-1 md:order-1">
                        {heroSlides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="relative h-full w-full ">
                                    <Image
                                        src={slide.image || "/placeholder.svg"}
                                        alt={slide.title}
                                        fill
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-[44.305px] bg-green-500" : "w-2 bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

