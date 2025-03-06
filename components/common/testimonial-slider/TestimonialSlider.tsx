"use client"

import IconLeftArrow from "@/components/icons/iconLeftArrow"
import IconRightArrow from "@/components/icons/iconRightArrow"
import { testimonials } from "@/data/testimonial-data"
import Image from "next/image"
import { useState } from "react"

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === testimonials.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <div className="w-full">
            <div className="mt-12 grid md:grid-cols-[1fr,4fr] gap-[70px] items-center">
                <div className="flex justify-end ">
                    <div className="w-full md:w-[260px] h-[260px] bg-gray-100 relative">
                        <Image
                            src={currentTestimonial.image || "/placeholder.svg"}
                            alt={currentTestimonial.name}
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                </div>
                <div>
                    <blockquote className="text-lg md:text-[30px] md:leading-[44px]">"{currentTestimonial.quote}"</blockquote>
                    <div className="mt-10 space-y-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={135}
                            height={28}
                            viewBox="0 0 135 28"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_236_8973)">
                                <path
                                    d="M13.403 0.772461L16.5661 9.48058L25.8255 9.79795L18.521 15.4973L21.0805 24.4015L13.403 19.2158L5.72545 24.4015L8.28491 15.4973L0.980469 9.79795L10.2398 9.48058L13.403 0.772461Z"
                                    fill="#23A549"
                                />
                                <path
                                    d="M40.5202 0.772461L43.6833 9.48058L52.9426 9.79795L45.6382 15.4973L48.1977 24.4015L40.5202 19.2158L32.8426 24.4015L35.4021 15.4973L28.0977 9.79795L37.357 9.48058L40.5202 0.772461Z"
                                    fill="#23A549"
                                />
                                <path
                                    d="M67.6335 0.772461L70.7966 9.48058L80.056 9.79795L72.7515 15.4973L75.3109 24.4015L67.6335 19.2158L59.9559 24.4015L62.5153 15.4973L55.2109 9.79795L64.4703 9.48058L67.6335 0.772461Z"
                                    fill="#23A549"
                                />
                                <path
                                    d="M94.7506 0.772461L97.9137 9.48058L107.173 9.79795L99.8685 15.4973L102.428 24.4015L94.7506 19.2158L87.0731 24.4015L89.6325 15.4973L82.3281 9.79795L91.5875 9.48058L94.7506 0.772461Z"
                                    fill="#23A549"
                                />
                                <path
                                    d="M121.868 0.772461L125.032 9.48058L134.291 9.79795L126.986 15.4973L129.545 24.4015L121.868 19.2158L114.19 24.4015L116.75 15.4973L109.445 9.79795L118.705 9.48058L121.868 0.772461Z"
                                    fill="#23A549"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_236_8973">
                                    <rect
                                        width="134.98"
                                        height="27.79"
                                        fill="white"
                                        transform="translate(0.0117188)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex justify-between items-center">
                            <div className="space-y-1">
                                <p className="font-bold text-xl text-secondary">{currentTestimonial.name}</p>
                                <p className="text-lg font-medium text-secondary/70">{currentTestimonial.title}</p>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={goToPrevious}
                                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <IconLeftArrow color="#BBB" />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <IconRightArrow color="#BBB"/>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

