"use client"

import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { faqItems } from "@/data/faq-data"
import HeaderDescription from "@/components/common/HeaderDescription"

export default function FAQSection() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
    const contentRefs = useRef<Record<string, HTMLDivElement | null>>({})

    const toggleItem = (id: string) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }
    const leftColumnItems = faqItems.slice(0, Math.ceil(faqItems.length / 2))
    const rightColumnItems = faqItems.slice(Math.ceil(faqItems.length / 2))

    const renderFaqItem = (item: (typeof faqItems)[0]) => (
        <div key={item.id} className="border border-gray-200 rounded-xl">
            <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left py-6 px-6 flex justify-between items-center focus:outline-none"
                aria-expanded={openItems[item.id]}
            >
                <span className="font-semibold text-lg">{item.question}</span>
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ease-in-out ${openItems[item.id] ? "transform rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems[item.id] ? "max-h-96" : "max-h-0"
                    }`}
                ref={(el) => {
                    contentRefs.current[item.id] = el;
                }}
            >
                <div className="px-6 pb-6">
                    <div className="space-y-4">
                        <hr className="border-px border-dashed" />
                        <HeaderDescription className="text-base" title={item.answer} />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">FAQs</h1>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">{leftColumnItems.map(renderFaqItem)}</div>
                <div className="space-y-4">{rightColumnItems.map(renderFaqItem)}</div>
            </div>
        </div>
    )
}

