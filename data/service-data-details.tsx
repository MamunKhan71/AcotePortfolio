import { ServiceDetail } from "@/app/services/_components/service-detail"


export const serviceDetailsData: Record<string, ServiceDetail> = {
    "mobile-app-development": {
        id: "mobile-app-development",
        title: "Mobile App Development",
        subtitle: "Leading Mobile Application Development Services Provider",
        description:
            "Our mobile app development services deliver cutting-edge solutions for iOS and Android platforms. We create intuitive, high-performance applications that engage users and drive business growth.",
        image: "/placeholder.svg?height=400&width=400",
        keyFeatures: [
            {
                title: "Native iOS and Android development",
                description: "Platform-specific apps with optimal performance",
            },
            {
                title: "Cross-platform solutions with React Native and Flutter",
                description: "Cost-effective development for multiple platforms",
            },
            {
                title: "UI/UX design focused on user engagement",
                description: "Intuitive interfaces that delight users",
            },
            {
                title: "Backend integration and API development",
                description: "Seamless connectivity with your existing systems",
            },
            {
                title: "Ongoing maintenance and support",
                description: "Continuous updates and improvements",
            },
            {
                title: "Scalable architecture",
                description: "Built to grow with your business needs",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Discovery & Planning",
                    description: "We analyze your requirements and create a detailed project roadmap.",
                },
                {
                    number: 2,
                    title: "UI/UX Design",
                    description: "Our designers create intuitive and engaging user interfaces.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "We build your app using the latest technologies and best practices.",
                },
                {
                    number: 4,
                    title: "Testing & QA",
                    description: "Rigorous testing to ensure your app is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment & Support",
                    description: "We help launch your app and provide ongoing maintenance.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Native Development",
                    items: ["Swift & Objective-C (iOS)", "Kotlin & Java (Android)", "SwiftUI & Jetpack Compose"],
                },
                {
                    name: "Cross-Platform",
                    items: ["React Native", "Flutter", "Xamarin"],
                },
                {
                    name: "Backend",
                    items: ["Node.js", "Firebase", "AWS & Azure"],
                },
                {
                    name: "Tools & Services",
                    items: ["CI/CD Pipelines", "Analytics Integration", "Payment Gateways"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Smartphone",
                title: "iOS Development",
                description: "Native iOS applications built with Swift and Objective-C",
                slug: "ios",
            },
            {
                icon: "Code",
                title: "Android Development",
                description: "Native Android applications built with Kotlin and Java",
                slug: "android",
            },
            {
                icon: "Layers",
                title: "Cross-Platform Apps",
                description: "Efficient multi-platform development with React Native and Flutter",
                slug: "cross-platform",
            },
        ],
        whyChooseUs: [
            "Experienced team of mobile developers",
            "Proven track record of successful app launches",
            "User-centered design approach",
            "Transparent development process",
            "Ongoing support and maintenance",
        ],
    },
    // Add more service details as needed
}