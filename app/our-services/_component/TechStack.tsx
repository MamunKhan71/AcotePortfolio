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
            icon: "/technology/frontend-icon.png",
            technologies: [
                { name: "Angular", logo: "/technology/frontend-1.png" },
                { name: "JavaScript", logo: "/technology/frontend-2.png" },
                { name: "React", logo: "/technology/frontend-3.png" },
                { name: "Bootstrap", logo: "/technology/frontend-4.png" },
                { name: "Vue.js", logo: "/technology/frontend-5.png" },
            ],
        },
        {
            id: "backend",
            name: "Back-end",
            icon: "/technology/backend-icon.png",
            technologies: [
                { name: "Node.js", logo: "/technology/backend-1.png" },
                { name: "Python", logo: "/technology/backend-2.png" },
                { name: "Express", logo: "/technology/backend-3.png" },
                { name: "Java", logo: "/technology/backend-4.png" },
                { name: "Spring", logo: "/technology/backend-5.png" },
                { name: "Go", logo: "/technology/backend-6.png" },
            ],
        },
        {
            id: "project-management",
            name: "Project Management",
            icon: "/technology/project-icon.png",
            technologies: [
                { name: "Jira", logo: "/technology/project-1.png" },
                { name: "Confluence", logo: "/technology/project-2.png" },
                { name: "Asana", logo: "/technology/project-3.png" },
                { name: "Trello", logo: "/technology/project-4.png" },
            ],
        },
        {
            id: "big-data",
            name: "Big Data",
            icon: "/technology/bigdata-icon.png",
            technologies: [
                { name: "Kafka", logo: "/technology/bigdata-1.png" },
                { name: "Amazon Elasticache", logo: "/technology/bigdata-2.png" },
                { name: "MongoDB", logo: "/technology/bigdata-3.png" },
                { name: "Amazon DocumentDB", logo: "/technology/bigdata-4.png" },
                { name: "DynamoDB", logo: "/technology/bigdata-5.png" },
            ],
        },
        {
            id: "mobile-app",
            name: "Mobile App Development",
            icon: "/technology/mobileapp-icon.png",
            technologies: [
                { name: "Swift", logo: "/technology/mobileapp-1.png" },
                { name: "Ionic", logo: "/technology/mobileapp-2.png" },
                { name: "Kotlin", logo: "/technology/mobileapp-3.png" },
                { name: "Flutter", logo: "/technology/mobileapp-4.png" },
                { name: "Xcode", logo: "/technology/mobileapp-5.png" },
            ],
        },
        {
            id: "database",
            name: "Database",
            icon: "/technology/database-icon.png",
            technologies: [
                { name: "MySQL", logo: "/technology/database-1.png" },
                { name: "Oracle", logo: "/technology/database-2.png" },
                { name: "MongoDB", logo: "/technology/database-3.png" },
            ],
        },
        {
            id: "servers",
            name: "Servers",
            icon: "/technology/server-icon.png",
            technologies: [
                { name: "AWS", logo: "/technology/server-1.png" },
                { name: "Google Cloud", logo: "/technology/server-2.png" },
                { name: "Azure", logo: "/technology/server-3.png" },
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
                        <div className="py-6 px-4 pl-20 flex flex-wrap gap-8 items-center bg-[#F8F8F8]">
                            {category.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 rounded-xl shadow-xl px-10 py-2">
                                    <Image
                                        src={tech.logo || "/placeholder.svg"}
                                        alt={tech.name}
                                        width={158}
                                        height={49}
                                        className="object-contain"
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

