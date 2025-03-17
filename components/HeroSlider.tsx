"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Define the service slides with background images
const services = [
  {
    id: 1,
    title: "Custom Software Development",
    subtitle: "Tailored Solutions for Your Business",
    description:
      "We transform your ideas into powerful, scalable software solutions that drive business growth and operational excellence.",
    cta: "Explore Solutions",
    image: "/custom-soft.jpg",
    overlayColor: "from-blue-900/80 to-black/80",
    position: "bg-center",
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Systems for Tomorrow",
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.",
    cta: "Discover AI Solutions",
    image: "/ai-bg.jpg",
    overlayColor: "from-blue-950/80 to-black/80",
    position: "bg-center",
  },
  {
    id: 3,
    title: "Mobile App Development",
    subtitle: "Engaging Experiences on Every Device",
    description:
      "Create stunning, high-performance mobile applications that captivate users and drive engagement across platforms.",
    cta: "View Mobile Portfolio",
    image: "/mobile-app.jpg",
    overlayColor: "from-gray-950/80 to-black/90",
    position: "bg-center",
  },
  {
    id: 4,
    title: "Web Application Development",
    subtitle: "Powerful Web Experiences",
    description:
      "Build responsive, feature-rich web applications that deliver exceptional user experiences and drive business results.",
    cta: "See Our Web Projects",
    image: "/web-dev.jpg",
    overlayColor: "from-amber-900/80 to-black/80",
    position: "bg-center",
  },
  {
    id: 5,
    title: "Cloud Migration & DevOps",
    subtitle: "Seamless Infrastructure Solutions",
    description:
      "Streamline your operations with cloud infrastructure and continuous integration/deployment pipelines for maximum efficiency.",
    cta: "Learn About Our Process",
    image: "/devops.jpg",
    overlayColor: "from-green-950/80 to-black/80",
    position: "bg-center",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  // Handle autoplay
  useEffect(() => {
    if (!autoplay || isHovering) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, isHovering])

  // Navigation functions
  const nextSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setAutoplay(false)
    setCurrentSlide(index)
  }

  return (
    <section
      className="relative w-full h-screen max-h-[800px] overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        {services.map(
          (service, index) =>
            index === currentSlide && (
              <motion.div
                key={service.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className={`object-cover ${service.position}`}
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.overlayColor}`}></div>
                </div>


                {/* Content */}
                <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
                  <div className="max-w-3xl">
                    <motion.span
                      className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {service.subtitle}
                    </motion.span>

                    <motion.h2
                      className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {service.title}
                    </motion.h2>

                    <motion.p
                      className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <Link
                        href="#"
                        className="group inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/20 hover:shadow-xl"
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="absolute bottom-1/2 w-full px-4 flex justify-between items-center translate-y-1/2 z-10 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 flex items-center justify-center text-white border border-white/10 transition-all duration-300 transform hover:scale-110 pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 flex items-center justify-center text-white border border-white/10 transition-all duration-300 transform hover:scale-110 pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
        {services.map((_, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 h-full bg-green-500"
            initial={{ width: "0%" }}
            animate={{
              width: index === currentSlide ? "100%" : "0%",
              left: `${(100 / services.length) * index}%`,
            }}
            transition={{
              duration: index === currentSlide ? 6 : 0.5,
              ease: "linear",
            }}
            style={{
              width: `${100 / services.length}%`,
            }}
          />
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center gap-3 z-10">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 ${
              index === currentSlide ? "w-12 bg-green-500" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-white/50"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Service quick navigation */}
      <div className="absolute top-8 right-8 z-10 hidden md:block">
        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              onClick={() => goToSlide(index)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className={`group flex items-center gap-2 transition-all duration-300 ${
                index === currentSlide ? "opacity-100" : "opacity-50 hover:opacity-100"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-6 bg-green-500" : "bg-white group-hover:w-4 group-hover:bg-green-400"
                }`}
              ></span>
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  index === currentSlide ? "text-white" : "text-white/70"
                }`}
              >
                {service.title.split(" ")[0]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

