"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface TechCategory {
    id: string
    name: string
    icon: string
    technologies: Technology[]
}

interface Technology {
    name: string
    logo: string
}

export default function TechStack() {
    const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
        frontend: true, // Only the first category is expanded by default
    })

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }))
    }

    const techCategories: TechCategory[] = [
        {
            id: "frontend",
            name: "Front-end",
            icon: "/placeholder.svg?height=40&width=40",
            technologies: [
                { name: "Angular", logo: "/placeholder.svg?height=40&width=40" },
                { name: "JavaScript", logo: "/placeholder.svg?height=40&width=40" },
                { name: "React", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Bootstrap", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Vue.js", logo: "/placeholder.svg?height=40&width=40" },
            ],
        },
        {
            id: "backend",
            name: "Back-end",
            icon: "/placeholder.svg?height=40&width=40",
            technologies: [
                { name: "Node.js", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Python", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Express", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Java", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Spring", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Go", logo: "/placeholder.svg?height=40&width=40" },
            ],
        },
        {
            id: "project-management",
            name: "Project Management",
            icon: "/placeholder.svg?height=40&width=40",
            technologies: [
                { name: "Jira", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Confluence", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Asana", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Trello", logo: "/placeholder.svg?height=40&width=40" },
            ],
        },
        {
            id: "big-data",
            name: "Big Data",
            icon: "/placeholder.svg?height=40&width=40",
            technologies: [
                { name: "Kafka", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Amazon Elasticache", logo: "/placeholder.svg?height=40&width=40" },
                { name: "MongoDB", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Amazon DocumentDB", logo: "/placeholder.svg?height=40&width=40" },
                { name: "DynamoDB", logo: "/placeholder.svg?height=40&width=40" },
            ],
        },
        {
            id: "mobile-app",
            name: "Mobile App Development",
            icon: "/placeholder.svg?height=40&width=40",
            technologies: [
                { name: "Swift", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Ionic", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Kotlin", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Flutter", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Xcode", logo: "/placeholder.svg?height=40&width=40" },
            ],
        },
        {
            id: "database",
            name: "Database",
            icon: "/placeholder.svg?height=40&width=40",
            technologies: [
                { name: "MySQL", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Oracle", logo: "/placeholder.svg?height=40&width=40" },
                { name: "MongoDB", logo: "/placeholder.svg?height=40&width=40" },
            ],
        },
        {
            id: "servers",
            name: "Servers",
            icon: "/placeholder.svg?height=40&width=40",
            technologies: [
                { name: "AWS", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Google Cloud", logo: "/placeholder.svg?height=40&width=40" },
                { name: "Azure", logo: "/placeholder.svg?height=40&width=40" },
            ],
        },
    ]

    return (
        <div className="w-full">
            {techCategories.map((category) => (
                <div key={category.id} className="border-b border-gray-200">
                    <div
                        className="flex items-center py-4 px-4 cursor-pointer hover:bg-gray-50"
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
                        <div className="py-4 px-4 pl-20 flex flex-wrap gap-8 items-center">
                            {category.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <Image
                                        src={tech.logo || "/placeholder.svg"}
                                        alt={tech.name}
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                    <span className="text-sm text-gray-600">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

