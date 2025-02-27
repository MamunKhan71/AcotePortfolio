interface Service {
    id: number
    name: string
    tag: string
    title: string
    description: string
    image: string
}

export const services: Service[] = [
    {
        id: 1,
        name: "AI & ML",
        tag: "AI & ML",
        title: "We help you to build complex automations",
        description:
            "We provide Empowering machines to see, understand, and analyze the world. Driving smarter decisions through advanced predictive algorithms.",
        image: "/ai.png",
    },
    {
        id: 2,
        name: "Custom Software",
        tag: "SOFTWARE",
        title: "Custom software solutions for your business",
        description: "We develop tailored software solutions that perfectly align with your business needs and objectives.",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 3,
        name: "Mobile App",
        tag: "MOBILE APP",
        title: "Build mobile applications that engage users",
        description:
            "Our team specializes in creating intuitive, fast, and responsive mobile applications for both iOS and Android platforms.",
        image: "/mobile-app.png",
    },
    {
        id: 4,
        name: "Web App",
        tag: "WEB APP",
        title: "Powerful web applications to scale your business",
        description:
            "We design and develop dynamic and scalable web applications that improve efficiency and enhance user experience.",
        image: "/web-app.png",
    },
    {
        id: 5,
        name: "Design",
        tag: "DESIGN",
        title: "Innovative and user-friendly designs",
        description:
            "From UX/UI design to creative digital branding, we craft visually appealing and functional designs that captivate users.",
        image: "/design.png",
    },
    {
        id: 6,
        name: "Cloud Migration",
        tag: "CLOUD MIGRATION",
        title: "Seamless transition to cloud environments",
        description:
            "We help businesses move their infrastructure and operations to the cloud, ensuring minimal disruption and maximum performance.",
        image: "/cloud-migration.png",
    },
    {
        id: 7,
        name: "CRM services",
        tag: "CRM SERVICES",
        title: "Enhancing customer relationships through CRM",
        description:
            "We implement and manage CRM solutions to help you build stronger, lasting relationships with your customers.",
        image: "/crm-services.png",
    },
    {
        id: 8,
        name: "QA & Testing",
        tag: "QA & TESTING",
        title: "Ensure the quality of your product",
        description:
            "Our testing services help deliver bug-free, high-quality software by performing extensive manual and automated tests.",
        image: "/qa-testing.png",
    },
    {
        id: 9,
        name: "Game Development",
        tag: "GAME DEVELOPMENT",
        title: "Create immersive gaming experiences",
        description:
            "We provide full-cycle game development services, creating engaging, high-performance games for various platforms.",
        image: "/game-development.png",
    },
    {
        id: 10,
        name: "IoT Development Services",
        tag: "IOT DEVELOPMENT",
        title: "Unlock the potential of IoT for your business",
        description:
            "We develop IoT solutions to enable smarter devices, connectivity, and data analytics for improved decision-making.",
        image: "/iot-development.png",
    },
    {
        id: 11,
        name: "Smart Factory Services",
        tag: "SMART FACTORY",
        title: "Digitally transform your manufacturing process",
        description:
            "We provide end-to-end smart factory solutions, integrating IoT, AI, and automation to optimize production and efficiency.",
        image: "/smart-factory.png",
    }
];

