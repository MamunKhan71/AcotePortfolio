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
        image: "/cross-platform.jpg",
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
    // custom software section
    "custom-software": {
        id: "custom-software",
        title: "Custom Software Development",
        subtitle: "Tailored Software Solutions",
        description:
            "Our custom software development services provide bespoke solutions tailored to your unique business needs. We deliver high-quality, scalable, and secure software applications.",
        image: "/custom-soft.jpg",
        keyFeatures: [
            {
                title: "Bespoke solutions",
                description: "Custom-built software tailored to your requirements",
            },
            {
                title: "Scalable architecture",
                description: "Solutions that grow with your business",
            },
            {
                title: "Integration with existing systems",
                description: "Seamless connectivity with your current infrastructure",
            },
            {
                title: "Security and compliance",
                description: "Adherence to industry standards and regulations",
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
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the software with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the software is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the software to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Frontend",
                    items: ["React", "Angular", "Vue.js"],
                },
                {
                    name: "Backend",
                    items: ["Node.js", "Python", "Java"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
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
                title: "Web Applications",
                description: "High-performance web applications built with modern frameworks",
                slug: "web-applications",
            },
            {
                icon: "Code",
                title: "Desktop Software",
                description: "Robust Desktop Applications built with latest tech",
                slug: "desktop-software",
            },
            {
                icon: "Code",
                title: "SaaS Solutions",
                description: "Scalable and Secure SaaS Solutions",
                slug: "saas-solutions",
            },
        ],
        whyChooseUs: [
            "Tailored solutions for your business",
            "Expert developers",
            "Secure and compliant applications",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "web-applications": {
        id: "web-applications",
        title: "Web Application Development",
        subtitle: "High-Performance Web Applications",
        description:
            "Our web application development services deliver high-performance, scalable, and secure web applications using the latest technologies and best practices.",
        image: "/web-dev.jpg",
        keyFeatures: [
            {
                title: "Responsive design",
                description: "Applications that work seamlessly across devices",
            },
            {
                title: "Scalable solutions",
                description: "Built to handle growing user bases",
            },
            {
                title: "Custom functionality",
                description: "Tailored features to meet your business needs",
            },
            {
                title: "Security and compliance",
                description: "Adherence to industry standards and regulations",
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
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the web application with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the application is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the application to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Frontend",
                    items: ["React", "Angular", "Vue.js"],
                },
                {
                    name: "Backend",
                    items: ["Node.js", "Python", "Java"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
                },
                {
                    name: "Tools & Services",
                    items: ["CI/CD Pipelines", "Analytics Integration", "Payment Gateways"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Desktop",
                title: "Desktop Software",
                description: "Robust desktop applications for Windows, macOS, and Linux",
                slug: "desktop-software",
            },
        ],
        whyChooseUs: [
            "Expert web developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "desktop-software": {
        id: "desktop-software",
        title: "Desktop Software Development",
        subtitle: "Robust Desktop Applications",
        description:
            "Our desktop software development services deliver robust and high-performance applications for Windows, macOS, and Linux. We create custom solutions tailored to your business needs.",
        image: "/desktop-soft.jpg",
        keyFeatures: [
            {
                title: "Cross-platform development",
                description: "Applications for Windows, macOS, and Linux",
            },
            {
                title: "Custom functionality",
                description: "Tailored features to meet your business needs",
            },
            {
                title: "High performance",
                description: "Optimized for speed and efficiency",
            },
            {
                title: "Security and compliance",
                description: "Adherence to industry standards and regulations",
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
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the desktop application with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the application is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the application to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Frontend",
                    items: ["Electron", "WPF", "Qt"],
                },
                {
                    name: "Backend",
                    items: ["Node.js", "C#", "C++"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "SQLite"],
                },
                {
                    name: "Tools & Services",
                    items: ["CI/CD Pipelines", "Analytics Integration", "Payment Gateways"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Cloud",
                title: "SaaS Solutions",
                description: "Scalable and secure Software as a Service solutions",
                slug: "saas-solutions",
            },
        ],
        whyChooseUs: [
            "Expert desktop developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "High-performance applications",
            "Ongoing support and maintenance",
        ],
    },
    "saas-solutions": {
        id: "saas-solutions",
        title: "SaaS Solutions",
        subtitle: "Scalable and Secure SaaS Solutions",
        description:
            "Our SaaS solutions provide scalable and secure software as a service applications. We deliver high-quality, multi-tenant applications that meet your business needs.",
        image: "/saas-soft.jpg",
        keyFeatures: [
            {
                title: "Multi-tenant architecture",
                description: "Scalable solutions for multiple users",
            },
            {
                title: "Custom functionality",
                description: "Tailored features to meet your business needs",
            },
            {
                title: "High performance",
                description: "Optimized for speed and efficiency",
            },
            {
                title: "Security and compliance",
                description: "Adherence to industry standards and regulations",
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
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the SaaS application with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the application is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the application to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Frontend",
                    items: ["React", "Angular", "Vue.js"],
                },
                {
                    name: "Backend",
                    items: ["Node.js", "Python", "Java"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
                },
                {
                    name: "Tools & Services",
                    items: ["CI/CD Pipelines", "Analytics Integration", "Payment Gateways"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Desktop",
                title: "Desktop Software",
                description: "Robust desktop applications for Windows, macOS, and Linux",
                slug: "desktop-software",
            },
        ],
        whyChooseUs: [
            "Expert SaaS developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    //Web Development Service Section

    "web-development": {
        id: "web-development",
        title: "Web Development",
        subtitle: "Comprehensive Web Development Services",
        description:
            "Our web development services provide robust and scalable websites tailored to your business needs.",
        image: "/web-dev.jpg",
        keyFeatures: [
            {
                title: "Responsive Design",
                description: "Websites that work on any device",
            },
            {
                title: "SEO Optimized",
                description: "Built with search engines in mind",
            },
            {
                title: "Custom Development",
                description: "Tailored solutions for unique requirements",
            },
            {
                title: "Performance Optimization",
                description: "Fast loading and efficient websites",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the website with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the website is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the website to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Frontend",
                    items: ["React", "Angular", "Vue.js"],
                },
                {
                    name: "Backend",
                    items: ["Node.js", "Python", "Java"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
                },
                {
                    name: "Tools & Services",
                    items: ["CI/CD Pipelines", "Analytics Integration", "Payment Gateways"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Web",
                title: "Frontend Development",
                description: "Interactive and Engaging Frontend Solutions",
                slug: "frontend-development",
            },
            {
                icon: "Web",
                title: "Backend Development",
                description: "Robust and Scalable Backend Solutions",
                slug: "backend-development",
            },
            {
                icon: "Web",
                title: "E-Commerce",
                description: "Comprehensive Ecommerce Development",
                slug: "ecommerce",
            },
            {
                icon: "Web",
                title: "CMS Development",
                description: "Flexible and Scalable CMS Solutions",
                slug: "cms-development",
            },
        ],
        whyChooseUs: [
            "Expert web developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "frontend-development": {
        id: "frontend-development",
        title: "Frontend Development",
        subtitle: "Interactive and Engaging Frontend Solutions",
        description:
            "Our frontend development services focus on creating interactive and engaging user interfaces.",
        image: "/frontend-dev.jpg",
        keyFeatures: [
            {
                title: "Modern Frameworks",
                description: "Utilizing the latest frontend technologies",
            },
            {
                title: "Responsive Design",
                description: "Interfaces that adapt to any screen size",
            },
            {
                title: "User-Centric Design",
                description: "Focusing on user experience and usability",
            },
            {
                title: "Performance Optimization",
                description: "Fast and efficient frontend solutions",
            },
            {
                title: "Cross-Browser Compatibility",
                description: "Ensuring functionality across all browsers",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the frontend with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the frontend is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the frontend to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Frontend",
                    items: ["React", "Angular", "Vue.js"],
                },
                {
                    name: "Tools & Services",
                    items: ["Webpack", "Babel", "Sass"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Web",
                title: "Backend Development",
                description: "Robust and Scalable Backend Solutions",
                slug: "backend-development",
            },
            {
                icon: "Web",
                title: "E-Commerce",
                description: "Comprehensive Ecommerce Development",
                slug: "ecommerce",
            },
            {
                icon: "Web",
                title: "CMS Development",
                description: "Flexible and Scalable CMS Solutions",
                slug: "cms-development",
            },
        ],
        whyChooseUs: [
            "Expert frontend developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "backend-development": {
        id: "backend-development",
        title: "Backend Development",
        subtitle: "Robust and Scalable Backend Solutions",
        description:
            "Our backend development services ensure robust and scalable server-side solutions.",
        image: "/backend-dev.jpg",
        keyFeatures: [
            {
                title: "API Development",
                description: "Creating secure and efficient APIs",
            },
            {
                title: "Database Management",
                description: "Efficient data storage and retrieval",
            },
            {
                title: "Scalable Architecture",
                description: "Solutions that grow with your business",
            },
            {
                title: "Security and Compliance",
                description: "Adherence to industry standards and regulations",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the backend with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the backend is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the backend to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Backend",
                    items: ["Node.js", "Python", "Java"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
                },
                {
                    name: "Tools & Services",
                    items: ["Docker", "Kubernetes", "AWS"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Web",
                title: "Frontend Development",
                description: "Interactive and Engaging Frontend Solutions",
                slug: "frontend-development",
            },
            {
                icon: "Web",
                title: "E-Commerce",
                description: "Comprehensive Ecommerce Development",
                slug: "ecommerce",
            },
            {
                icon: "Web",
                title: "CMS Development",
                description: "Flexible and Scalable CMS Solutions",
                slug: "cms-development",
            },
        ],
        whyChooseUs: [
            "Expert backend developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "ecommerce": {
        id: "ecommerce",
        title: "Ecommerce Solutions",
        subtitle: "Comprehensive Ecommerce Development",
        description:
            "Our ecommerce solutions provide robust and scalable online stores tailored to your business needs.",
        image: "/ecommerce-dev.jpg",
        keyFeatures: [
            {
                title: "Custom Storefronts",
                description: "Unique designs for your online store",
            },
            {
                title: "Payment Integration",
                description: "Secure and efficient payment gateways",
            },
            {
                title: "Inventory Management",
                description: "Efficient product and stock management",
            },
            {
                title: "SEO Optimized",
                description: "Built with search engines in mind",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the ecommerce platform with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the platform is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the platform to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Frontend",
                    items: ["React", "Angular", "Vue.js"],
                },
                {
                    name: "Backend",
                    items: ["Node.js", "Python", "Java"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
                },
                {
                    name: "Tools & Services",
                    items: ["Shopify", "WooCommerce", "Magento"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Web",
                title: "Frontend Development",
                description: "Interactive and Engaging Frontend Solutions",
                slug: "frontend-development",
            },
            {
                icon: "Web",
                title: "Backend Development",
                description: "Robust and Scalable Backend Solutions",
                slug: "backend-development",
            },
            {
                icon: "Web",
                title: "CMS Development",
                description: "Flexible and Scalable CMS Solutions",
                slug: "cms-development",
            },
        ],
        whyChooseUs: [
            "Expert ecommerce developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "cms-development": {
        id: "cms-development",
        title: "CMS Development",
        subtitle: "Flexible and Scalable CMS Solutions",
        description:
            "Our CMS development services provide flexible and scalable content management systems tailored to your business needs.",
        image: "/cms-dev.jpg",
        keyFeatures: [
            {
                title: "Custom Themes",
                description: "Unique designs for your CMS",
            },
            {
                title: "Plugin Development",
                description: "Custom plugins for additional functionality",
            },
            {
                title: "SEO Optimized",
                description: "Built with search engines in mind",
            },
            {
                title: "User-Friendly Interface",
                description: "Easy to use and manage",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Development Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the CMS with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the CMS is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the CMS to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Frontend",
                    items: ["React", "Angular", "Vue.js"],
                },
                {
                    name: "Backend",
                    items: ["Node.js", "Python", "Java"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
                },
                {
                    name: "Tools & Services",
                    items: ["WordPress", "Drupal", "Joomla"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Web",
                title: "Frontend Development",
                description: "Interactive and Engaging Frontend Solutions",
                slug: "frontend-development",
            },
            {
                icon: "Web",
                title: "Backend Development",
                description: "Robust and Scalable Backend Solutions",
                slug: "backend-development",
            },
            {
                icon: "Web",
                title: "E-Commerce",
                description: "Comprehensive Ecommerce Development",
                slug: "ecommerce",
            },
        ],
        whyChooseUs: [
            "Expert CMS developers",
            "Custom solutions tailored to your needs",
            "Secure and compliant applications",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },

    // UI / UX Design Section

    "ui-ux-design": {
        id: "ui-ux-design",
        title: "UI/UX Design",
        subtitle: "Creative and User-Centric Design Solutions",
        description:
            "Our UI/UX design services focus on creating creative and user-centric designs that enhance user experience.",
        image: "/uiux.jpg",
        keyFeatures: [
            {
                title: "User Research",
                description: "Understanding user needs and behaviors",
            },
            {
                title: "Wireframing",
                description: "Creating wireframes for design planning",
            },
            {
                title: "Prototyping",
                description: "Building interactive prototypes",
            },
            {
                title: "Usability Testing",
                description: "Testing designs with real users",
            },
            {
                title: "Visual Design",
                description: "Creating visually appealing designs",
            },
        ],
        process: {
            title: "Our Design Process",
            steps: [
                {
                    number: 1,
                    title: "Research",
                    description: "Understanding user needs and behaviors.",
                },
                {
                    number: 2,
                    title: "Wireframing",
                    description: "Creating wireframes for design planning.",
                },
                {
                    number: 3,
                    title: "Prototyping",
                    description: "Building interactive prototypes.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Testing designs with real users.",
                },
                {
                    number: 5,
                    title: "Implementation",
                    description: "Implementing the final design.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Design Tools",
                    items: ["Adobe XD", "Sketch", "Figma"],
                },
                {
                    name: "Prototyping Tools",
                    items: ["InVision", "Marvel", "Axure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Design",
                title: "User Research",
                description: "In-Depth User Research Services",
                slug: "user-research",
            },
            {
                icon: "Design",
                title: "Wireframing",
                description: "Detailed Wireframing Services",
                slug: "wireframing",
            },
            {
                icon: "Design",
                title: "Prototyping",
                description: "Interactive Prototyping Services",
                slug: "prototyping",
            },
            {
                icon: "Design",
                title: "Usability Testing",
                description: "Comprehensive Usability Testing Services",
                slug: "usability-testing",
            },
        ],
        whyChooseUs: [
            "Expert UI/UX designers",
            "Custom solutions tailored to your needs",
            "User-centric designs",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "user-research": {
        id: "user-research",
        title: "User Research",
        subtitle: "In-Depth User Research Services",
        description:
            "Our user research services provide in-depth insights into user needs and behaviors to inform design decisions.",
        image: "/user-research.jpg",
        keyFeatures: [
            {
                title: "Qualitative Research",
                description: "In-depth interviews and observations",
            },
            {
                title: "Quantitative Research",
                description: "Surveys and data analysis",
            },
            {
                title: "User Personas",
                description: "Creating detailed user personas",
            },
            {
                title: "Journey Mapping",
                description: "Mapping user journeys and experiences",
            },
            {
                title: "Usability Testing",
                description: "Testing designs with real users",
            },
        ],
        process: {
            title: "Our Research Process",
            steps: [
                {
                    number: 1,
                    title: "Planning",
                    description: "Defining research goals and methods.",
                },
                {
                    number: 2,
                    title: "Data Collection",
                    description: "Collecting data through various methods.",
                },
                {
                    number: 3,
                    title: "Analysis",
                    description: "Analyzing data to extract insights.",
                },
                {
                    number: 4,
                    title: "Reporting",
                    description: "Creating detailed research reports.",
                },
                {
                    number: 5,
                    title: "Implementation",
                    description: "Using insights to inform design decisions.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Research Tools",
                    items: ["SurveyMonkey", "Google Forms", "Typeform"],
                },
                {
                    name: "Analysis Tools",
                    items: ["SPSS", "R", "Excel"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Design",
                title: "UI/UX Design",
                description: "Creative and User-Centric Design Solutions",
                slug: "ui-ux-design",
            },
            {
                icon: "Design",
                title: "Wireframing",
                description: "Detailed Wireframing Services",
                slug: "wireframing",
            },
            {
                icon: "Design",
                title: "Prototyping",
                description: "Interactive Prototyping Services",
                slug: "prototyping",
            },
            {
                icon: "Design",
                title: "Usability Testing",
                description: "Comprehensive Usability Testing Services",
                slug: "usability-testing",
            },
        ],
        whyChooseUs: [
            "Expert researchers",
            "Custom solutions tailored to your needs",
            "In-depth insights",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "wireframing": {
        id: "wireframing",
        title: "Wireframing",
        subtitle: "Detailed Wireframing Services",
        description:
            "Our wireframing services provide detailed wireframes to plan and visualize design layouts.",
        image: "/wireframing.jpg",
        keyFeatures: [
            {
                title: "Low-Fidelity Wireframes",
                description: "Basic wireframes for initial planning",
            },
            {
                title: "High-Fidelity Wireframes",
                description: "Detailed wireframes for design visualization",
            },
            {
                title: "Interactive Wireframes",
                description: "Clickable wireframes for user testing",
            },
            {
                title: "Collaborative Tools",
                description: "Tools for team collaboration and feedback",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Wireframing Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Sketching",
                    description: "Creating initial sketches and concepts.",
                },
                {
                    number: 3,
                    title: "Wireframing",
                    description: "Building detailed wireframes.",
                },
                {
                    number: 4,
                    title: "Review",
                    description: "Reviewing wireframes with stakeholders.",
                },
                {
                    number: 5,
                    title: "Finalization",
                    description: "Finalizing wireframes for design implementation.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Wireframing Tools",
                    items: ["Balsamiq", "Axure", "Figma"],
                },
                {
                    name: "Collaboration Tools",
                    items: ["Miro", "Mural", "Slack"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Design",
                title: "UI/UX Design",
                description: "Creative and User-Centric Design Solutions",
                slug: "ui-ux-design",
            },
            {
                icon: "Design",
                title: "User Research",
                description: "In-Depth User Research Services",
                slug: "user-research",
            },
            {
                icon: "Design",
                title: "Prototyping",
                description: "Interactive Prototyping Services",
                slug: "prototyping",
            },
            {
                icon: "Design",
                title: "Usability Testing",
                description: "Comprehensive Usability Testing Services",
                slug: "usability-testing",
            },
        ],
        whyChooseUs: [
            "Expert wireframe designers",
            "Custom solutions tailored to your needs",
            "Detailed planning",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "prototyping": {
        id: "prototyping",
        title: "Prototyping",
        subtitle: "Interactive Prototyping Services",
        description:
            "Our prototyping services provide interactive prototypes to test and validate design concepts.",
        image: "/prototyping.jpg",
        keyFeatures: [
            {
                title: "Low-Fidelity Prototypes",
                description: "Basic prototypes for initial testing",
            },
            {
                title: "High-Fidelity Prototypes",
                description: "Detailed prototypes for design validation",
            },
            {
                title: "Interactive Prototypes",
                description: "Clickable prototypes for user testing",
            },
            {
                title: "Collaborative Tools",
                description: "Tools for team collaboration and feedback",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Prototyping Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Sketching",
                    description: "Creating initial sketches and concepts.",
                },
                {
                    number: 3,
                    title: "Prototyping",
                    description: "Building interactive prototypes.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Testing prototypes with real users.",
                },
                {
                    number: 5,
                    title: "Finalization",
                    description: "Finalizing prototypes for design implementation.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Prototyping Tools",
                    items: ["InVision", "Marvel", "Axure"],
                },
                {
                    name: "Collaboration Tools",
                    items: ["Miro", "Mural", "Slack"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Design",
                title: "UI/UX Design",
                description: "Creative and User-Centric Design Solutions",
                slug: "ui-ux-design",
            },
            {
                icon: "Design",
                title: "User Research",
                description: "In-Depth User Research Services",
                slug: "user-research",
            },
            {
                icon: "Design",
                title: "Wireframing",
                description: "Detailed Wireframing Services",
                slug: "wireframing",
            },
            {
                icon: "Design",
                title: "Usability Testing",
                description: "Comprehensive Usability Testing Services",
                slug: "usability-testing",
            },
        ],
        whyChooseUs: [
            "Expert prototype designers",
            "Custom solutions tailored to your needs",
            "Interactive testing",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "usability-testing": {
        id: "usability-testing",
        title: "Usability Testing",
        subtitle: "Comprehensive Usability Testing Services",
        description:
            "Our usability testing services provide comprehensive testing to ensure designs are user-friendly and effective.",
        image: "/usability-testing.jpg",
        keyFeatures: [
            {
                title: "User Testing",
                description: "Testing designs with real users",
            },
            {
                title: "Feedback Analysis",
                description: "Analyzing user feedback for improvements",
            },
            {
                title: "Iterative Testing",
                description: "Continuous testing and refinement",
            },
            {
                title: "Collaborative Tools",
                description: "Tools for team collaboration and feedback",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Testing Process",
            steps: [
                {
                    number: 1,
                    title: "Planning",
                    description: "Defining testing goals and methods.",
                },
                {
                    number: 2,
                    title: "Recruitment",
                    description: "Recruiting participants for testing.",
                },
                {
                    number: 3,
                    title: "Testing",
                    description: "Conducting usability tests.",
                },
                {
                    number: 4,
                    title: "Analysis",
                    description: "Analyzing test results and feedback.",
                },
                {
                    number: 5,
                    title: "Reporting",
                    description: "Creating detailed testing reports.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Testing Tools",
                    items: ["UserTesting", "Lookback", "Optimal Workshop"],
                },
                {
                    name: "Analysis Tools",
                    items: ["SPSS", "R", "Excel"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Design",
                title: "UI/UX Design",
                description: "Creative and User-Centric Design Solutions",
                slug: "ui-ux-design",
            },
            {
                icon: "Design",
                title: "User Research",
                description: "In-Depth User Research Services",
                slug: "user-research",
            },
            {
                icon: "Design",
                title: "Wireframing",
                description: "Detailed Wireframing Services",
                slug: "wireframing",
            },
            {
                icon: "Design",
                title: "Prototyping",
                description: "Interactive Prototyping Services",
                slug: "prototyping",
            },
        ],
        whyChooseUs: [
            "Expert usability testers",
            "Custom solutions tailored to your needs",
            "Comprehensive testing",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },

    // Digital Marketing Services

    "digital-marketing": {
        id: "digital-marketing",
        title: "Digital Marketing",
        subtitle: "Comprehensive Digital Marketing Services",
        description:
            "Our digital marketing services provide comprehensive strategies to enhance your online presence and reach your target audience.",
        image: "/digital-marketing.jpg",
        keyFeatures: [
            {
                title: "SEO",
                description: "Optimizing your website for search engines",
            },
            {
                title: "Social Media",
                description: "Engaging with your audience on social platforms",
            },
            {
                title: "PPC",
                description: "Pay-per-click advertising for targeted reach",
            },
            {
                title: "Content Marketing",
                description: "Creating valuable content to attract and retain customers",
            },
            {
                title: "Email Marketing",
                description: "Building relationships through targeted email campaigns",
            },
        ],
        process: {
            title: "Our Marketing Process",
            steps: [
                {
                    number: 1,
                    title: "Research",
                    description: "Understanding your business and target audience.",
                },
                {
                    number: 2,
                    title: "Strategy",
                    description: "Developing a comprehensive marketing strategy.",
                },
                {
                    number: 3,
                    title: "Execution",
                    description: "Implementing marketing campaigns.",
                },
                {
                    number: 4,
                    title: "Monitoring",
                    description: "Tracking and analyzing campaign performance.",
                },
                {
                    number: 5,
                    title: "Optimization",
                    description: "Refining strategies for better results.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "SEO Tools",
                    items: ["Google Analytics", "SEMrush", "Ahrefs"],
                },
                {
                    name: "Social Media Tools",
                    items: ["Hootsuite", "Buffer", "Sprout Social"],
                },
                {
                    name: "Email Marketing Tools",
                    items: ["Mailchimp", "Constant Contact", "Sendinblue"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Marketing",
                title: "SEO",
                description: "Search Engine Optimization Services",
                slug: "seo",
            },
            {
                icon: "Marketing",
                title: "Social Media",
                description: "Social Media Management Services",
                slug: "social-media",
            },
            {
                icon: "Marketing",
                title: "PPC",
                description: "Pay-Per-Click Advertising Services",
                slug: "ppc",
            },
            {
                icon: "Marketing",
                title: "Content Marketing",
                description: "Content Marketing Services",
                slug: "content-marketing",
            },
            {
                icon: "Marketing",
                title: "Email Marketing",
                description: "Email Marketing Services",
                slug: "email-marketing",
            },
        ],
        whyChooseUs: [
            "Expert marketers",
            "Custom solutions tailored to your needs",
            "Comprehensive strategies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "seo": {
        id: "seo",
        title: "SEO",
        subtitle: "Search Engine Optimization Services",
        description:
            "Our SEO services enhance your website's visibility and ranking on search engines.",
        image: "/seo.jpg",
        keyFeatures: [
            {
                title: "Keyword Research",
                description: "Identifying the best keywords for your business",
            },
            {
                title: "On-Page Optimization",
                description: "Optimizing website content and structure",
            },
            {
                title: "Off-Page Optimization",
                description: "Building backlinks and improving domain authority",
            },
            {
                title: "Technical SEO",
                description: "Ensuring your website is technically sound",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our SEO Process",
            steps: [
                {
                    number: 1,
                    title: "Research",
                    description: "Understanding your business and target audience.",
                },
                {
                    number: 2,
                    title: "Strategy",
                    description: "Developing a comprehensive SEO strategy.",
                },
                {
                    number: 3,
                    title: "Implementation",
                    description: "Implementing SEO tactics.",
                },
                {
                    number: 4,
                    title: "Monitoring",
                    description: "Tracking and analyzing SEO performance.",
                },
                {
                    number: 5,
                    title: "Optimization",
                    description: "Refining strategies for better results.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "SEO Tools",
                    items: ["Google Analytics", "SEMrush", "Ahrefs"],
                },
                {
                    name: "Webmaster Tools",
                    items: ["Google Search Console", "Bing Webmaster Tools"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Marketing",
                title: "Digital Marketing",
                description: "Comprehensive Digital Marketing Services",
                slug: "digital-marketing",
            },
            {
                icon: "Marketing",
                title: "Social Media",
                description: "Social Media Management Services",
                slug: "social-media",
            },
            {
                icon: "Marketing",
                title: "PPC",
                description: "Pay-Per-Click Advertising Services",
                slug: "ppc",
            },
            {
                icon: "Marketing",
                title: "Content Marketing",
                description: "Content Marketing Services",
                slug: "content-marketing",
            },
            {
                icon: "Marketing",
                title: "Email Marketing",
                description: "Email Marketing Services",
                slug: "email-marketing",
            },
        ],
        whyChooseUs: [
            "Expert SEO specialists",
            "Custom solutions tailored to your needs",
            "Comprehensive strategies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "social-media": {
        id: "social-media",
        title: "Social Media",
        subtitle: "Social Media Management Services",
        description:
            "Our social media services enhance your brand's presence and engagement on social platforms.",
        image: "/social-media.jpg",
        keyFeatures: [
            {
                title: "Content Creation",
                description: "Creating engaging content for social platforms",
            },
            {
                title: "Community Management",
                description: "Engaging with your audience and building relationships",
            },
            {
                title: "Social Advertising",
                description: "Targeted advertising on social platforms",
            },
            {
                title: "Analytics and Reporting",
                description: "Tracking and analyzing social media performance",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Social Media Process",
            steps: [
                {
                    number: 1,
                    title: "Research",
                    description: "Understanding your business and target audience.",
                },
                {
                    number: 2,
                    title: "Strategy",
                    description: "Developing a comprehensive social media strategy.",
                },
                {
                    number: 3,
                    title: "Execution",
                    description: "Implementing social media campaigns.",
                },
                {
                    number: 4,
                    title: "Monitoring",
                    description: "Tracking and analyzing social media performance.",
                },
                {
                    number: 5,
                    title: "Optimization",
                    description: "Refining strategies for better results.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Social Media Tools",
                    items: ["Hootsuite", "Buffer", "Sprout Social"],
                },
                {
                    name: "Analytics Tools",
                    items: ["Google Analytics", "Facebook Insights", "Twitter Analytics"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Marketing",
                title: "Digital Marketing",
                description: "Comprehensive Digital Marketing Services",
                slug: "digital-marketing",
            },
            {
                icon: "Marketing",
                title: "SEO",
                description: "Search Engine Optimization Services",
                slug: "seo",
            },
            {
                icon: "Marketing",
                title: "PPC",
                description: "Pay-Per-Click Advertising Services",
                slug: "ppc",
            },
            {
                icon: "Marketing",
                title: "Content Marketing",
                description: "Content Marketing Services",
                slug: "content-marketing",
            },
            {
                icon: "Marketing",
                title: "Email Marketing",
                description: "Email Marketing Services",
                slug: "email-marketing",
            },
        ],
        whyChooseUs: [
            "Expert social media managers",
            "Custom solutions tailored to your needs",
            "Comprehensive strategies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "ppc": {
        id: "ppc",
        title: "PPC",
        subtitle: "Pay-Per-Click Advertising Services",
        description:
            "Our PPC services provide targeted advertising solutions to enhance your online presence and reach your target audience.",
        image: "/ppc.jpg",
        keyFeatures: [
            {
                title: "Keyword Research",
                description: "Identifying the best keywords for your business",
            },
            {
                title: "Ad Creation",
                description: "Creating compelling ads for your campaigns",
            },
            {
                title: "Bid Management",
                description: "Optimizing bids for maximum ROI",
            },
            {
                title: "Analytics and Reporting",
                description: "Tracking and analyzing campaign performance",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our PPC Process",
            steps: [
                {
                    number: 1,
                    title: "Research",
                    description: "Understanding your business and target audience.",
                },
                {
                    number: 2,
                    title: "Strategy",
                    description: "Developing a comprehensive PPC strategy.",
                },
                {
                    number: 3,
                    title: "Execution",
                    description: "Implementing PPC campaigns.",
                },
                {
                    number: 4,
                    title: "Monitoring",
                    description: "Tracking and analyzing PPC performance.",
                },
                {
                    number: 5,
                    title: "Optimization",
                    description: "Refining strategies for better results.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "PPC Tools",
                    items: ["Google Ads", "Bing Ads", "Facebook Ads"],
                },
                {
                    name: "Analytics Tools",
                    items: ["Google Analytics", "SEMrush", "Ahrefs"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Marketing",
                title: "Digital Marketing",
                description: "Comprehensive Digital Marketing Services",
                slug: "digital-marketing",
            },
            {
                icon: "Marketing",
                title: "SEO",
                description: "Search Engine Optimization Services",
                slug: "seo",
            },
            {
                icon: "Marketing",
                title: "Social Media",
                description: "Social Media Management Services",
                slug: "social-media",
            },
            {
                icon: "Marketing",
                title: "Content Marketing",
                description: "Content Marketing Services",
                slug: "content-marketing",
            },
            {
                icon: "Marketing",
                title: "Email Marketing",
                description: "Email Marketing Services",
                slug: "email-marketing",
            },
        ],
        whyChooseUs: [
            "Expert PPC specialists",
            "Custom solutions tailored to your needs",
            "Comprehensive strategies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "content-marketing": {
        id: "content-marketing",
        title: "Content Marketing",
        subtitle: "Content Marketing Services",
        description:
            "Our content marketing services provide valuable content to attract and retain customers.",
        image: "/content-marketing.jpg",
        keyFeatures: [
            {
                title: "Content Creation",
                description: "Creating valuable content for your audience",
            },
            {
                title: "Content Strategy",
                description: "Developing a comprehensive content strategy",
            },
            {
                title: "Content Distribution",
                description: "Distributing content across various channels",
            },
            {
                title: "Analytics and Reporting",
                description: "Tracking and analyzing content performance",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Content Marketing Process",
            steps: [
                {
                    number: 1,
                    title: "Research",
                    description: "Understanding your business and target audience.",
                },
                {
                    number: 2,
                    title: "Strategy",
                    description: "Developing a comprehensive content strategy.",
                },
                {
                    number: 3,
                    title: "Execution",
                    description: "Creating and distributing content.",
                },
                {
                    number: 4,
                    title: "Monitoring",
                    description: "Tracking and analyzing content performance.",
                },
                {
                    number: 5,
                    title: "Optimization",
                    description: "Refining strategies for better results.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Content Tools",
                    items: ["WordPress", "HubSpot", "CoSchedule"],
                },
                {
                    name: "Analytics Tools",
                    items: ["Google Analytics", "SEMrush", "Ahrefs"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Marketing",
                title: "Digital Marketing",
                description: "Comprehensive Digital Marketing Services",
                slug: "digital-marketing",
            },
            {
                icon: "Marketing",
                title: "SEO",
                description: "Search Engine Optimization Services",
                slug: "seo",
            },
            {
                icon: "Marketing",
                title: "Social Media",
                description: "Social Media Management Services",
                slug: "social-media",
            },
            {
                icon: "Marketing",
                title: "PPC",
                description: "Pay-Per-Click Advertising Services",
                slug: "ppc",
            },
            {
                icon: "Marketing",
                title: "Email Marketing",
                description: "Email Marketing Services",
                slug: "email-marketing",
            },
        ],
        whyChooseUs: [
            "Expert content marketers",
            "Custom solutions tailored to your needs",
            "Comprehensive strategies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "email-marketing": {
        id: "email-marketing",
        title: "Email Marketing",
        subtitle: "Email Marketing Services",
        description:
            "Our email marketing services provide targeted email campaigns to build relationships and drive conversions.",
        image: "/email-marketing.jpg",
        keyFeatures: [
            {
                title: "Campaign Creation",
                description: "Creating compelling email campaigns",
            },
            {
                title: "List Management",
                description: "Managing and segmenting email lists",
            },
            {
                title: "Automation",
                description: "Automating email workflows",
            },
            {
                title: "Analytics and Reporting",
                description: "Tracking and analyzing campaign performance",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Email Marketing Process",
            steps: [
                {
                    number: 1,
                    title: "Research",
                    description: "Understanding your business and target audience.",
                },
                {
                    number: 2,
                    title: "Strategy",
                    description: "Developing a comprehensive email marketing strategy.",
                },
                {
                    number: 3,
                    title: "Execution",
                    description: "Creating and sending email campaigns.",
                },
                {
                    number: 4,
                    title: "Monitoring",
                    description: "Tracking and analyzing email performance.",
                },
                {
                    number: 5,
                    title: "Optimization",
                    description: "Refining strategies for better results.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Email Marketing Tools",
                    items: ["Mailchimp", "Constant Contact", "Sendinblue"],
                },
                {
                    name: "Analytics Tools",
                    items: ["Google Analytics", "SEMrush", "Ahrefs"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Marketing",
                title: "Digital Marketing",
                description: "Comprehensive Digital Marketing Services",
                slug: "digital-marketing",
            },
            {
                icon: "Marketing",
                title: "SEO",
                description: "Search Engine Optimization Services",
                slug: "seo",
            },
            {
                icon: "Marketing",
                title: "Social Media",
                description: "Social Media Management Services",
                slug: "social-media",
            },
            {
                icon: "Marketing",
                title: "PPC",
                description: "Pay-Per-Click Advertising Services",
                slug: "ppc",
            },
            {
                icon: "Marketing",
                title: "Content Marketing",
                description: "Content Marketing Services",
                slug: "content-marketing",
            },
        ],
        whyChooseUs: [
            "Expert email marketers",
            "Custom solutions tailored to your needs",
            "Comprehensive strategies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    // AI / ML Services
    
    "ai-ml-solutions": {
        id: "ai-ml-solutions",
        title: "AI/ML Solutions",
        subtitle: "Advanced AI and Machine Learning Services",
        description:
            "Our AI/ML solutions provide cutting-edge artificial intelligence and machine learning services to enhance your business operations.",
        image: "/ai-ml.jpg",
        keyFeatures: [
            {
                title: "Custom AI Models",
                description: "Tailored AI models to meet specific business needs",
            },
            {
                title: "Data Analysis",
                description: "In-depth analysis of data to extract valuable insights",
            },
            {
                title: "Automation",
                description: "Automating processes with intelligent systems",
            },
            {
                title: "Predictive Analytics",
                description: "Forecasting future trends and behaviors",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our AI/ML Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Data Collection",
                    description: "Gathering and preparing data for analysis.",
                },
                {
                    number: 3,
                    title: "Model Development",
                    description: "Building and training AI models.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Validating model performance and accuracy.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Integrating AI solutions into your systems.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "AI Frameworks",
                    items: ["TensorFlow", "PyTorch", "Keras"],
                },
                {
                    name: "Data Processing",
                    items: ["Pandas", "NumPy", "Scikit-learn"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "AI",
                title: "Machine Learning",
                description: "Custom machine learning models for various applications",
                slug: "machine-learning",
            },
            {
                icon: "AI",
                title: "Computer Vision",
                description: "Advanced image and video analysis solutions",
                slug: "computer-vision",
            },
            {
                icon: "AI",
                title: "NLP",
                description: "Natural Language Processing for text analysis",
                slug: "nlp",
            },
            {
                icon: "AI",
                title: "Predictive Analytics",
                description: "Forecasting and trend analysis",
                slug: "predictive-analytics",
            },
        ],
        whyChooseUs: [
            "Expert AI/ML developers",
            "Custom solutions tailored to your needs",
            "Advanced technologies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "machine-learning": {
        id: "machine-learning",
        title: "Machine Learning",
        subtitle: "Custom Machine Learning Models",
        description:
            "Our machine learning services provide custom models to automate processes and enhance decision-making.",
        image: "/machine-learning.jpg",
        keyFeatures: [
            {
                title: "Supervised Learning",
                description: "Training models with labeled data",
            },
            {
                title: "Unsupervised Learning",
                description: "Discovering patterns in unlabeled data",
            },
            {
                title: "Reinforcement Learning",
                description: "Training models through trial and error",
            },
            {
                title: "Model Optimization",
                description: "Improving model accuracy and performance",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our ML Process",
            steps: [
                {
                    number: 1,
                    title: "Data Collection",
                    description: "Gathering and preparing data for analysis.",
                },
                {
                    number: 2,
                    title: "Model Development",
                    description: "Building and training machine learning models.",
                },
                {
                    number: 3,
                    title: "Testing",
                    description: "Validating model performance and accuracy.",
                },
                {
                    number: 4,
                    title: "Deployment",
                    description: "Integrating models into your systems.",
                },
                {
                    number: 5,
                    title: "Monitoring",
                    description: "Tracking model performance and making improvements.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "ML Frameworks",
                    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
                },
                {
                    name: "Data Processing",
                    items: ["Pandas", "NumPy"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "AI",
                title: "AI/ML Solutions",
                description: "Advanced AI and Machine Learning Services",
                slug: "ai-ml-solutions",
            },
            {
                icon: "AI",
                title: "Computer Vision",
                description: "Advanced image and video analysis solutions",
                slug: "computer-vision",
            },
            {
                icon: "AI",
                title: "NLP",
                description: "Natural Language Processing for text analysis",
                slug: "nlp",
            },
            {
                icon: "AI",
                title: "Predictive Analytics",
                description: "Forecasting and trend analysis",
                slug: "predictive-analytics",
            },
        ],
        whyChooseUs: [
            "Expert ML developers",
            "Custom solutions tailored to your needs",
            "Advanced technologies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "computer-vision": {
        id: "computer-vision",
        title: "Computer Vision",
        subtitle: "Advanced Image and Video Analysis",
        description:
            "Our computer vision services provide advanced image and video analysis solutions to automate visual tasks.",
        image: "/computer-vision.jpg",
        keyFeatures: [
            {
                title: "Image Recognition",
                description: "Identifying objects and patterns in images",
            },
            {
                title: "Video Analysis",
                description: "Analyzing video content for insights",
            },
            {
                title: "Facial Recognition",
                description: "Identifying and verifying individuals",
            },
            {
                title: "Object Detection",
                description: "Detecting and classifying objects in real-time",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Computer Vision Process",
            steps: [
                {
                    number: 1,
                    title: "Data Collection",
                    description: "Gathering and preparing visual data for analysis.",
                },
                {
                    number: 2,
                    title: "Model Development",
                    description: "Building and training computer vision models.",
                },
                {
                    number: 3,
                    title: "Testing",
                    description: "Validating model performance and accuracy.",
                },
                {
                    number: 4,
                    title: "Deployment",
                    description: "Integrating models into your systems.",
                },
                {
                    number: 5,
                    title: "Monitoring",
                    description: "Tracking model performance and making improvements.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "CV Frameworks",
                    items: ["OpenCV", "TensorFlow", "PyTorch"],
                },
                {
                    name: "Data Processing",
                    items: ["Pandas", "NumPy"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "AI",
                title: "AI/ML Solutions",
                description: "Advanced AI and Machine Learning Services",
                slug: "ai-ml-solutions",
            },
            {
                icon: "AI",
                title: "Machine Learning",
                description: "Custom machine learning models for various applications",
                slug: "machine-learning",
            },
            {
                icon: "AI",
                title: "NLP",
                description: "Natural Language Processing for text analysis",
                slug: "nlp",
            },
            {
                icon: "AI",
                title: "Predictive Analytics",
                description: "Forecasting and trend analysis",
                slug: "predictive-analytics",
            },
        ],
        whyChooseUs: [
            "Expert CV developers",
            "Custom solutions tailored to your needs",
            "Advanced technologies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "nlp": {
        id: "nlp",
        title: "NLP",
        subtitle: "Natural Language Processing Services",
        description:
            "Our NLP services provide advanced text analysis solutions to automate language-based tasks.",
        image: "/nlp.jpg",
        keyFeatures: [
            {
                title: "Text Analysis",
                description: "Extracting insights from textual data",
            },
            {
                title: "Sentiment Analysis",
                description: "Understanding emotions and opinions in text",
            },
            {
                title: "Chatbots",
                description: "Automating customer interactions with intelligent bots",
            },
            {
                title: "Language Translation",
                description: "Translating text between languages",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our NLP Process",
            steps: [
                {
                    number: 1,
                    title: "Data Collection",
                    description: "Gathering and preparing textual data for analysis.",
                },
                {
                    number: 2,
                    title: "Model Development",
                    description: "Building and training NLP models.",
                },
                {
                    number: 3,
                    title: "Testing",
                    description: "Validating model performance and accuracy.",
                },
                {
                    number: 4,
                    title: "Deployment",
                    description: "Integrating models into your systems.",
                },
                {
                    number: 5,
                    title: "Monitoring",
                    description: "Tracking model performance and making improvements.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "NLP Frameworks",
                    items: ["NLTK", "SpaCy", "Transformers"],
                },
                {
                    name: "Data Processing",
                    items: ["Pandas", "NumPy"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "AI",
                title: "AI/ML Solutions",
                description: "Advanced AI and Machine Learning Services",
                slug: "ai-ml-solutions",
            },
            {
                icon: "AI",
                title: "Machine Learning",
                description: "Custom machine learning models for various applications",
                slug: "machine-learning",
            },
            {
                icon: "AI",
                title: "Computer Vision",
                description: "Advanced image and video analysis solutions",
                slug: "computer-vision",
            },
            {
                icon: "AI",
                title: "Predictive Analytics",
                description: "Forecasting and trend analysis",
                slug: "predictive-analytics",
            },
        ],
        whyChooseUs: [
            "Expert NLP developers",
            "Custom solutions tailored to your needs",
            "Advanced technologies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "predictive-analytics": {
        id: "predictive-analytics",
        title: "Predictive Analytics",
        subtitle: "Forecasting and Trend Analysis",
        description:
            "Our predictive analytics services provide forecasting and trend analysis to enhance decision-making.",
        image: "/predictive-analytics.jpg",
        keyFeatures: [
            {
                title: "Data Modeling",
                description: "Building models to predict future outcomes",
            },
            {
                title: "Trend Analysis",
                description: "Identifying patterns and trends in data",
            },
            {
                title: "Risk Assessment",
                description: "Evaluating potential risks and opportunities",
            },
            {
                title: "Scenario Planning",
                description: "Exploring different future scenarios",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Predictive Analytics Process",
            steps: [
                {
                    number: 1,
                    title: "Data Collection",
                    description: "Gathering and preparing data for analysis.",
                },
                {
                    number: 2,
                    title: "Model Development",
                    description: "Building and training predictive models.",
                },
                {
                    number: 3,
                    title: "Testing",
                    description: "Validating model performance and accuracy.",
                },
                {
                    number: 4,
                    title: "Deployment",
                    description: "Integrating models into your systems.",
                },
                {
                    number: 5,
                    title: "Monitoring",
                    description: "Tracking model performance and making improvements.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Analytics Tools",
                    items: ["R", "Python", "Tableau"],
                },
                {
                    name: "Data Processing",
                    items: ["Pandas", "NumPy"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "AI",
                title: "AI/ML Solutions",
                description: "Advanced AI and Machine Learning Services",
                slug: "ai-ml-solutions",
            },
            {
                icon: "AI",
                title: "Machine Learning",
                description: "Custom machine learning models for various applications",
                slug: "machine-learning",
            },
            {
                icon: "AI",
                title: "Computer Vision",
                description: "Advanced image and video analysis solutions",
                slug: "computer-vision",
            },
            {
                icon: "AI",
                title: "NLP",
                description: "Natural Language Processing for text analysis",
                slug: "nlp",
            },
        ],
        whyChooseUs: [
            "Expert analytics developers",
            "Custom solutions tailored to your needs",
            "Advanced technologies",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    // ERP Solution Services
    "enterprise-solutions": {
        id: "enterprise-solutions",
        title: "Enterprise Solutions",
        subtitle: "Comprehensive Enterprise Software Services",
        description:
            "Our enterprise solutions provide robust and scalable software services to streamline your business operations.",
        image: "/enterprise.jpg",
        keyFeatures: [
            {
                title: "Custom ERP Systems",
                description: "Tailored ERP solutions for efficient resource management",
            },
            {
                title: "CRM Solutions",
                description: "Customer relationship management systems to enhance customer engagement",
            },
            {
                title: "Business Intelligence",
                description: "Data-driven insights for informed decision-making",
            },
            {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure for your business",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Enterprise Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the enterprise solution with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the solution is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the solution to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "ERP Platforms",
                    items: ["SAP", "Oracle", "Microsoft Dynamics"],
                },
                {
                    name: "CRM Platforms",
                    items: ["Salesforce", "HubSpot", "Zoho CRM"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Enterprise",
                title: "ERP Systems",
                description: "Comprehensive ERP solutions for resource management",
                slug: "erp-systems",
            },
            {
                icon: "Enterprise",
                title: "CRM Solutions",
                description: "Customer relationship management systems",
                slug: "crm-solutions",
            },
            {
                icon: "Enterprise",
                title: "Business Intelligence",
                description: "Data-driven insights for decision-making",
                slug: "business-intelligence",
            },
            {
                icon: "Enterprise",
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure for your business",
                slug: "cloud-solutions",
            },
        ],
        whyChooseUs: [
            "Expert enterprise developers",
            "Custom solutions tailored to your needs",
            "Robust and scalable architecture",
            "Comprehensive support",
            "Ongoing support and maintenance",
        ],
    },
    "erp-systems": {
        id: "erp-systems",
        title: "ERP Systems",
        subtitle: "Comprehensive ERP Solutions",
        description:
            "Our ERP systems provide comprehensive solutions for efficient resource management and business operations.",
        image: "/erp-systems.jpg",
        keyFeatures: [
            {
                title: "Custom ERP Solutions",
                description: "Tailored ERP systems for your business needs",
            },
            {
                title: "Integration",
                description: "Seamless integration with existing systems",
            },
            {
                title: "Scalable Architecture",
                description: "Solutions that grow with your business",
            },
            {
                title: "Real-Time Analytics",
                description: "Data-driven insights for informed decision-making",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our ERP Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the ERP system with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the system is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the system to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "ERP Platforms",
                    items: ["SAP", "Oracle", "Microsoft Dynamics"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Enterprise",
                title: "Enterprise Solutions",
                description: "Comprehensive Enterprise Software Services",
                slug: "enterprise-solutions",
            },
            {
                icon: "Enterprise",
                title: "CRM Solutions",
                description: "Customer relationship management systems",
                slug: "crm-solutions",
            },
            {
                icon: "Enterprise",
                title: "Business Intelligence",
                description: "Data-driven insights for decision-making",
                slug: "business-intelligence",
            },
            {
                icon: "Enterprise",
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure for your business",
                slug: "cloud-solutions",
            },
        ],
        whyChooseUs: [
            "Expert ERP developers",
            "Custom solutions tailored to your needs",
            "Robust and scalable architecture",
            "Comprehensive support",
            "Ongoing support and maintenance",
        ],
    },
    "crm-solutions": {
        id: "crm-solutions",
        title: "CRM Solutions",
        subtitle: "Customer Relationship Management Systems",
        description:
            "Our CRM solutions provide comprehensive systems to enhance customer engagement and relationship management.",
        image: "/crm-solutions.jpg",
        keyFeatures: [
            {
                title: "Custom CRM Solutions",
                description: "Tailored CRM systems for your business needs",
            },
            {
                title: "Integration",
                description: "Seamless integration with existing systems",
            },
            {
                title: "Scalable Architecture",
                description: "Solutions that grow with your business",
            },
            {
                title: "Real-Time Analytics",
                description: "Data-driven insights for informed decision-making",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our CRM Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Development",
                    description: "Building the CRM system with the latest technologies.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the system is bug-free and performs well.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the system to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "CRM Platforms",
                    items: ["Salesforce", "HubSpot", "Zoho CRM"],
                },
                {
                    name: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Enterprise",
                title: "Enterprise Solutions",
                description: "Comprehensive Enterprise Software Services",
                slug: "enterprise-solutions",
            },
            {
                icon: "Enterprise",
                title: "ERP Systems",
                description: "Comprehensive ERP solutions for resource management",
                slug: "erp-systems",
            },
            {
                icon: "Enterprise",
                title: "Business Intelligence",
                description: "Data-driven insights for decision-making",
                slug: "business-intelligence",
            },
            {
                icon: "Enterprise",
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure for your business",
                slug: "cloud-solutions",
            },
        ],
        whyChooseUs: [
            "Expert CRM developers",
            "Custom solutions tailored to your needs",
            "Robust and scalable architecture",
            "Comprehensive support",
            "Ongoing support and maintenance",
        ],
    },
    "business-intelligence": {
        id: "business-intelligence",
        title: "Business Intelligence",
        subtitle: "Data-Driven Insights for Decision-Making",
        description:
            "Our business intelligence services provide data-driven insights to enhance decision-making and business operations.",
        image: "/business-intelligence.jpg",
        keyFeatures: [
            {
                title: "Data Visualization",
                description: "Visualizing data for easy interpretation",
            },
            {
                title: "Dashboard Development",
                description: "Creating interactive dashboards for real-time insights",
            },
            {
                title: "Data Integration",
                description: "Integrating data from multiple sources",
            },
            {
                title: "Predictive Analytics",
                description: "Forecasting future trends and behaviors",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our BI Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Data Collection",
                    description: "Gathering and preparing data for analysis.",
                },
                {
                    number: 3,
                    title: "Dashboard Development",
                    description: "Creating interactive dashboards for insights.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the dashboards are accurate and reliable.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the dashboards to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "BI Tools",
                    items: ["Tableau", "Power BI", "Looker"],
                },
                {
                    name: "Data Processing",
                    items: ["Pandas", "NumPy"],
                },
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Enterprise",
                title: "Enterprise Solutions",
                description: "Comprehensive Enterprise Software Services",
                slug: "enterprise-solutions",
            },
            {
                icon: "Enterprise",
                title: "ERP Systems",
                description: "Comprehensive ERP solutions for resource management",
                slug: "erp-systems",
            },
            {
                icon: "Enterprise",
                title: "CRM Solutions",
                description: "Customer relationship management systems",
                slug: "crm-solutions",
            },
            {
                icon: "Enterprise",
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure for your business",
                slug: "cloud-solutions",
            },
        ],
        whyChooseUs: [
            "Expert BI developers",
            "Custom solutions tailored to your needs",
            "Data-driven insights",
            "Scalable architecture",
            "Ongoing support and maintenance",
        ],
    },
    "cloud-solutions": {
        id: "cloud-solutions",
        title: "Cloud Solutions",
        subtitle: "Scalable Cloud Infrastructure",
        description:
            "Our cloud solutions provide scalable infrastructure to enhance your business operations and reduce costs.",
        image: "/cloud-solutions.jpg",
        keyFeatures: [
            {
                title: "Cloud Migration",
                description: "Seamless migration to cloud platforms",
            },
            {
                title: "Infrastructure Management",
                description: "Managing and optimizing cloud infrastructure",
            },
            {
                title: "Security and Compliance",
                description: "Ensuring data security and regulatory compliance",
            },
            {
                title: "Cost Optimization",
                description: "Reducing costs with efficient cloud solutions",
            },
            {
                title: "Ongoing Support",
                description: "Continuous updates and maintenance",
            },
        ],
        process: {
            title: "Our Cloud Process",
            steps: [
                {
                    number: 1,
                    title: "Requirement Analysis",
                    description: "Understanding your business needs and goals.",
                },
                {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Creating wireframes and prototypes.",
                },
                {
                    number: 3,
                    title: "Migration",
                    description: "Migrating systems to the cloud.",
                },
                {
                    number: 4,
                    title: "Testing",
                    description: "Ensuring the cloud infrastructure is secure and reliable.",
                },
                {
                    number: 5,
                    title: "Deployment",
                    description: "Deploying the cloud infrastructure to your environment.",
                },
            ],
        },
        technologies: {
            title: "Technologies We Use",
            categories: [
                {
                    name: "Cloud Platforms",
                    items: ["AWS", "Google Cloud", "Azure"],
                },
                {
                    name: "Security Tools",
                    items: ["Cloudflare", "AWS Shield", "Azure Security Center"],
                },
                {
                    name: "Management Tools",
                    items: ["Terraform", "Kubernetes", "Docker"],
                },
            ],
        },
        specializedServices: [
            {
                icon: "Enterprise",
                title: "Enterprise Solutions",
                description: "Comprehensive Enterprise Software Services",
                slug: "enterprise-solutions",
            },
            {
                icon: "Enterprise",
                title: "ERP Systems",
                description: "Comprehensive ERP solutions for resource management",
                slug: "erp-systems",
            },
            {
                icon: "Enterprise",
                title: "CRM Solutions",
                description: "Customer relationship management systems",
                slug: "crm-solutions",
            },
            {
                icon: "Enterprise",
                title: "Business Intelligence",
                description: "Data-driven insights for decision-making",
                slug: "business-intelligence",
            },
        ],
        whyChooseUs: [
            "Expert cloud developers",
            "Custom solutions tailored to your needs",
            "Scalable and secure infrastructure",
            "Cost-effective solutions",
            "Ongoing support and maintenance",
        ],
    },

}