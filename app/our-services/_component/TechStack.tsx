"use client"
import { techCategories } from "@/data/tech-category"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function TechStack() {
    const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
        frontend: true,
    })

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }))
    }

    return (
        <div className="w-full">
            {techCategories.map((category) => (
                <div key={category.id} className="border-b border-gray-200">
                    <div
                        className="flex items-center py-4 cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleCategory(category.id)}
                    >
                        <div className="flex items-center gap-4 flex-1">
                            <div className="bg-blue-50 rounded-full p-2 w-12 h-12 flex items-center justify-center">
                                <Image
                                    src={category.icon || "/placeholder.svg"}
                                    alt={category.name}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-medium">{category.name}</span>
                        </div>
                        <div className="ml-auto">
                            {expandedCategories[category.id] ? (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-500" />
                            )}
                        </div>
                    </div>

                    {expandedCategories[category.id] && (
                        <div className="py-6 px-4 pl-20 flex flex-wrap gap-8 items-center bg-[#F8F8F8]">
                            {category.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-2 rounded-xl shadow-xl px-10 py-2">
                                    <Image
                                        src={tech.logo || "/placeholder.svg"}
                                        alt={tech.name}
                                        width={158}
                                        height={49}
                                        className="object-contain w-fit md:w-[158px] h-[49px]"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

