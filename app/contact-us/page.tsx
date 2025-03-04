"use client"
import ContactForm from "./_components/ContactForm"
import ContactInfo from "./_components/ContactInfo"
import HeaderSection from "./_components/HeaderSection"

export default function ContactUsPage() {
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
            <div className="h-96 w-full">
                <img src="/acote-map.png" alt="acote map" className="h-full w-full object-cover" />
            </div>
        </div>
    )
}

