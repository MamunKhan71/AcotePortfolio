'use client'
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

// Define the subcategory type
export interface ServiceSubcategory {
    id: string
    icon: string
    title: string
    slug: string
    color: string // For the icon color
}

interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    description: string
    href: string
    subcategories?: ServiceSubcategory[]
}

export default function ServiceCard({ icon, title, description, href, subcategories }: ServiceCardProps) {
    // State to toggle the visibility of subcategories
    const [isCollapsed, setIsCollapsed] = useState(true)

    // Function to dynamically import icons from lucide-react
    const IconComponent = ({ iconName, color }: { iconName: string; color: string }) => {
        const LucideIcon = require("lucide-react")[iconName]
        return LucideIcon ? (
            <div className={`flex-shrink-0 ${color}`}>
                <LucideIcon className="h-5 w-5" />
            </div>
        ) : null
    }

    return (
        <div className="service-card group border rounded-lg p-4">
            <Link href={href}>
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 transition-colors">{title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-1">{description}</p>
            </Link>
            {subcategories && subcategories.length > 0 && (
                <div className="mt-4 pt-4 border-t">
                    {/* Collapsible Header for Subcategories */}
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsCollapsed((prev) => !prev)}
                    >
                        <span className="font-semibold text-primary">View All Services</span>
                        <div>
                            {isCollapsed ? (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            ) : (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                            )}
                        </div>
                    </div>

                    {/* Subcategories List */}
                    {!isCollapsed && (
                        <div className="flex flex-col divide-y">
                            {subcategories.map((subcategory) => (
                                <Link
                                    key={subcategory.id}
                                    href={`${href}/${subcategory.slug}`}
                                    className="flex items-center gap-3 py-3 hover:bg-slate-50 transition-colors"
                                >
                                    <IconComponent iconName={subcategory.icon} color={subcategory.color} />
                                    <span className="text-gray-600">{subcategory.title}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
