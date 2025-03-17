import { ServiceDetail } from "@/app/services/_components/service-detail"


export const serviceDetailsData: Record<string, ServiceDetail> = {
    "mobile-app-development": {
        id: "mobile-app-development",
        title: "Mobile App Development",
        subtitle: "Leading Mobile Application Development Services Provider",
        description:
            "Our mobile app development services deliver cutting-edge solutions for iOS and Android platforms. We create intuitive, high-performance applications that engage users and drive business growth.",
        image: "/mobile-app.jpg",
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
                slug: "ios-development",
            },
            {
                icon: "Code",
                title: "Android Development",
                description: "Native Android applications built with Kotlin and Java",
                slug: "android-development",
            },
            {
                icon: "Layers",
                title: "Cross-Platform Apps",
                description: "Efficient multi-platform development with React Native and Flutter",
                slug: "cross-platform-apps",
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
    "cross-platform-apps": {
        id: "cross-platform-apps",
        title: "Cross-Platform Apps",
        subtitle: "Efficient Multi-Platform Development",
        description:
            "Our cross-platform app development services leverage React Native and Flutter to create high-quality applications for both iOS and Android. Save time and cost with a single codebase.",
        image: "/placeholder.svg?height=400&width=400",
        keyFeatures: [
            {
                title: "Single codebase for multiple platforms",
                description: "Efficient development and maintenance",
            },
            {
                title: "Consistent user experience",
                description: "Uniform look and feel across devices",
            },
            {
                title: "Faster time to market",
                description: "Accelerated development process",
            },
            {
                title: "Cost-effective solutions",
                description: "Reduced development and maintenance costs",
            },
            {
                title: "Access to native features",
                description: "Utilize device capabilities with plugins",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your needs and project scope.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the app with React Native or Flutter.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the app works flawlessly on all platforms.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Publishing the app to app stores.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Cross-Platform Frameworks",
                    items: ["React Native", "Flutter"],
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
                icon: "Layers",
                title: "Cross-Platform Apps",
                description: "Efficient multi-platform development with React Native and Flutter",
                slug: "cross-platform",
            },
        ],
        whyChooseUs: [
            "Expertise in cross-platform development",
            "Cost-effective and time-saving solutions",
            "Consistent user experience across devices",
            "Access to native features",
            "Ongoing support and maintenance",
        ],
    },
    "android-development": {
        id: "android-development",
        title: "Android Development",
        subtitle: "Native Android Applications",
        description:
            "Our Android development services provide robust and scalable applications built with Kotlin and Java. We deliver high-performance apps tailored to your business needs.",
        image: "/android.jpg",
        keyFeatures: [
            {
                title: "Native Android development",
                description: "High-performance apps with Kotlin and Java",
            },
            {
                title: "Custom UI/UX design",
                description: "Engaging and intuitive user interfaces",
            },
            {
                title: "Seamless integration",
                description: "Integration with existing systems and APIs",
            },
            {
                title: "Security and compliance",
                description: "Secure apps adhering to industry standards",
            },
            {
                title: "Ongoing support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Gathering",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design",
                    description: "Creating custom UI/UX designs.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the app with Kotlin and Java.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the app is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Publishing the app to the Google Play Store.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Native Development",
                    items: ["Kotlin", "Java"],
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
                slug: "ios-development",
            },
        ],
        whyChooseUs: [
            "Expert Android developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Engaging user experiences",
            "Ongoing support and maintenance",
        ],
    },
    "ios-development": {
        id: "ios-development",
        title: "iOS Development",
        subtitle: "Native iOS Applications",
        description:
            "Our iOS development services deliver high-quality applications built with Swift and Objective-C. We create engaging and high-performance apps tailored to your business needs.",
        image: "/ios.jpg",
        keyFeatures: [
            {
                title: "Native iOS development",
                description: "High-performance apps with Swift and Objective-C",
            },
            {
                title: "Custom UI/UX design",
                description: "Engaging and intuitive user interfaces",
            },
            {
                title: "Seamless integration",
                description: "Integration with existing systems and APIs",
            },
            {
                title: "Security and compliance",
                description: "Secure apps adhering to industry standards",
            },
            {
                title: "Ongoing support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Gathering",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design",
                    description: "Creating custom UI/UX designs.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the app with Swift and Objective-C.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the app is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Publishing the app to the Apple App Store.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Native Development",
                    items: ["Swift", "Objective-C"],
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
                icon: "Code",
                title: "Android Development",
                description: "Native Android applications built with Kotlin and Java",
                slug: "android-development",
            },
        ],
        
        whyChooseUs: [
            "Expert iOS developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Engaging user experiences",
            "Ongoing support and maintenance",
        ],
    },
}