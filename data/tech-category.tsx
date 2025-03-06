export interface TechCategory {
    id: string
    name: string
    icon: string
    technologies: Technology[]
}
export interface Technology {
    name: string
    logo: string
}

export const techCategories: TechCategory[] = [
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