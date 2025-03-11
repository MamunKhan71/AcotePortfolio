"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import ContactForm from "./_components/ContactForm"
import ContactInfo from "./_components/ContactInfo"
import HeaderSection from "./_components/HeaderSection"

export default function ContactUsPage() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div>
            <div>
                <HeaderSection />
            </div>
            {/* Left section - Contact form */}
            <div className="container mx-auto gap-14 mt-20 flex flex-col md:flex-row items-center mb-[120px]">
                <div className="flex-1 w-full">
                    <ContactForm />
                </div>
                {/* Right section - Process steps */}
                <div className="md:w-[504px] w-full">
                    <ContactInfo />
                </div>
            </div>

            {/* Smooth Image to Iframe Transition */}
            <div
                className="h-96 w-full relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence mode="wait">
                    {isHovered ? (
                        <motion.iframe
                            key="iframe"
                            className="h-full w-full absolute inset-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.016913547691!2d90.4208798636641!3d23.81799759288492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79d1f491479%3A0x9b53b3ea3be764b1!2sacotegroup!5e0!3m2!1sen!2sbd!4v1741688940404!5m2!1sen!2sbd"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    ) : (
                        <motion.div
                            key="image"
                            className="h-full w-full absolute inset-0"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Image
                                fill
                                src="/acote-map.png"
                                alt="acote map"
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
