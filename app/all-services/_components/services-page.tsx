"use client"

import { useState } from "react"
import Image from "next/image"
import {
    ArrowRight,
    CheckCircle2,
    Code,
    Database,
    Layers,
    LayoutGrid,
    Lightbulb,
    Megaphone,
    MonitorSmartphone,
    Network,
    PenTool,
    Search,
    Server,
    Settings,
    Smartphone,
    Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactUsBanner from "@/components/common/contact-us-banner"

// Service data structure
const servicesData = [
    {
        id: "it-solutions",
        title: "IT Solutions",
        icon: <Server className="h-5 w-5" />,
        description: "Comprehensive technology solutions for modern businesses",
        services: [
            {
                id: "mobile-app-development",
                title: "Mobile App Development",
                icon: <Smartphone className="h-5 w-5" />,
                description: "Leading Mobile Application Development Services Provider",
                content:
                    "Our mobile app development services deliver cutting-edge solutions for iOS and Android platforms. We create intuitive, high-performance applications that engage users and drive business growth.",
                features: [
                    "Native iOS and Android development",
                    "Cross-platform solutions with React Native and Flutter",
                    "UI/UX design focused on user engagement",
                    "Backend integration and API development",
                    "Ongoing maintenance and support",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "ios-development",
                        title: "iOS Development",
                        description: "Native iOS applications built with Swift and Objective-C",
                        content:
                            "Our iOS development team creates beautiful, high-performance applications for iPhone and iPad. We leverage the latest iOS features and design guidelines to deliver exceptional user experiences.",
                    },
                    {
                        id: "android-development",
                        title: "Android Development",
                        description: "Native Android applications built with Kotlin and Java",
                        content:
                            "Our Android development team creates robust, feature-rich applications for the diverse Android ecosystem. We ensure compatibility across devices while maintaining performance and usability.",
                    },
                    {
                        id: "cross-platform",
                        title: "Cross-Platform Apps",
                        description: "Efficient multi-platform development with React Native and Flutter",
                        content:
                            "Our cross-platform development approach allows for efficient creation of applications that run on both iOS and Android from a single codebase, reducing development time and cost while maintaining native-like performance.",
                    },
                ],
            },
            {
                id: "custom-software",
                title: "Custom Software",
                icon: <Settings className="h-5 w-5" />,
                description: "Software Development As A Service (SaaS) Corporation",
                content:
                    "We develop tailored software solutions that address your unique business challenges. Our custom software development services help organizations streamline operations, improve efficiency, and gain competitive advantages.",
                features: [
                    "Enterprise software development",
                    "Cloud-based application development",
                    "Legacy system modernization",
                    "Integration with existing systems",
                    "Scalable architecture design",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "enterprise-solutions",
                        title: "Enterprise Solutions",
                        description: "Comprehensive software systems for large organizations",
                        content:
                            "Our enterprise solutions address complex business needs with scalable, secure, and integrated software systems. We help large organizations streamline operations, improve data management, and enhance decision-making capabilities.",
                    },
                    {
                        id: "cloud-applications",
                        title: "Cloud Applications",
                        description: "Scalable, reliable applications built for the cloud",
                        content:
                            "We develop cloud-native applications that leverage the full potential of cloud platforms. Our solutions are designed for scalability, reliability, and cost-efficiency, enabling businesses to adapt quickly to changing demands.",
                    },
                    {
                        id: "legacy-modernization",
                        title: "Legacy System Modernization",
                        description: "Transforming outdated systems into modern, efficient solutions",
                        content:
                            "We help organizations modernize their legacy systems, preserving valuable business logic while upgrading technology stacks. Our approach minimizes disruption while delivering improved performance, security, and user experience.",
                    },
                ],
            },
            {
                id: "web-development",
                title: "Web Development",
                icon: <Code className="h-5 w-5" />,
                description: "Building scalable, secure, & user-friendly web solutions",
                content:
                    "Our web development services create powerful, responsive websites and web applications that drive business growth. We combine cutting-edge technologies with user-centered design to deliver exceptional digital experiences.",
                features: [
                    "Responsive website development",
                    "Progressive web applications (PWAs)",
                    "E-commerce solutions",
                    "Content management systems",
                    "Web application development",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "frontend-development",
                        title: "Frontend Development",
                        description: "Creating engaging user interfaces with modern technologies",
                        content:
                            "Our frontend development team creates responsive, interactive user interfaces using the latest web technologies. We focus on performance, accessibility, and cross-browser compatibility to ensure an exceptional user experience.",
                    },
                    {
                        id: "backend-development",
                        title: "Backend Development",
                        description: "Building robust server-side applications and APIs",
                        content:
                            "Our backend development services create secure, scalable server-side applications and APIs that power your digital products. We use modern frameworks and best practices to ensure reliability and performance.",
                    },
                    {
                        id: "full-stack-development",
                        title: "Full Stack Development",
                        description: "End-to-end web development from frontend to backend",
                        content:
                            "Our full stack development approach provides comprehensive web solutions that integrate frontend and backend technologies seamlessly. We deliver complete web applications that meet your business requirements and technical specifications.",
                    },
                ],
            },
            {
                id: "ui-ux-design",
                title: "UI/UX Design",
                icon: <PenTool className="h-5 w-5" />,
                description: "Designing seamless, user-centric digital experiences",
                content:
                    "Our UI/UX design services create intuitive, engaging digital experiences that delight users and achieve business goals. We combine research, strategy, and creativity to design interfaces that are both beautiful and functional.",
                features: [
                    "User research and persona development",
                    "Information architecture",
                    "Wireframing and prototyping",
                    "Visual design and branding",
                    "Usability testing and optimization",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "user-research",
                        title: "User Research",
                        description: "Understanding user needs, behaviors, and motivations",
                        content:
                            "Our user research services help you understand your users' needs, behaviors, and motivations. We use a variety of research methods to gather insights that inform design decisions and product strategy.",
                    },
                    {
                        id: "interface-design",
                        title: "Interface Design",
                        description: "Creating visually appealing and intuitive interfaces",
                        content:
                            "Our interface design services create visually appealing, intuitive interfaces that align with your brand identity and meet user expectations. We focus on consistency, clarity, and visual hierarchy to enhance usability.",
                    },
                    {
                        id: "usability-testing",
                        title: "Usability Testing",
                        description: "Evaluating and improving user experience through testing",
                        content:
                            "Our usability testing services evaluate how real users interact with your digital products. We identify usability issues and provide actionable recommendations to improve the user experience and achieve business goals.",
                    },
                ],
            },
        ],
    },
    {
        id: "ai-ml-solutions",
        title: "AI/ML Solutions",
        icon: <Lightbulb className="h-5 w-5" />,
        description: "Intelligent solutions powered by artificial intelligence and machine learning",
        services: [
            {
                id: "machine-learning",
                title: "Machine Learning",
                icon: <Network className="h-5 w-5" />,
                description: "Driving smarter decisions through advanced predictive algorithms",
                content:
                    "Our machine learning services help businesses leverage data to make better decisions, automate processes, and gain valuable insights. We develop custom ML models tailored to your specific business needs.",
                features: [
                    "Predictive analytics and forecasting",
                    "Classification and clustering algorithms",
                    "Natural language processing",
                    "Recommendation systems",
                    "Anomaly detection",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "supervised-learning",
                        title: "Supervised Learning",
                        description: "Training models on labeled data for prediction and classification",
                        content:
                            "Our supervised learning solutions use labeled datasets to train models that can make accurate predictions on new, unseen data. We implement regression, classification, and other supervised techniques to solve complex business problems.",
                    },
                    {
                        id: "unsupervised-learning",
                        title: "Unsupervised Learning",
                        description: "Discovering patterns and structures in unlabeled data",
                        content:
                            "Our unsupervised learning approaches help businesses discover hidden patterns and structures in their data without predefined labels. We implement clustering, dimensionality reduction, and other techniques to extract valuable insights.",
                    },
                    {
                        id: "reinforcement-learning",
                        title: "Reinforcement Learning",
                        description: "Training agents to make optimal decisions through interaction",
                        content:
                            "Our reinforcement learning solutions enable systems to learn optimal behaviors through interaction with their environment. We develop RL agents that can make sequential decisions to maximize long-term rewards in complex, dynamic scenarios.",
                    },
                ],
            },
            {
                id: "computer-vision",
                title: "Computer Vision",
                icon: <LayoutGrid className="h-5 w-5" />,
                description: "Empowering machines to see, understand, & analyze the world",
                content:
                    "Our computer vision services enable machines to interpret and understand visual information from the world. We develop systems that can recognize objects, detect patterns, and extract insights from images and videos.",
                features: [
                    "Image recognition and classification",
                    "Object detection and tracking",
                    "Facial recognition and analysis",
                    "Scene understanding and segmentation",
                    "Visual search and retrieval",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "image-recognition",
                        title: "Image Recognition",
                        description: "Identifying objects, people, and scenes in images",
                        content:
                            "Our image recognition solutions identify objects, people, places, and activities in images. We develop systems that can classify images, detect specific features, and extract meaningful information from visual data.",
                    },
                    {
                        id: "object-detection",
                        title: "Object Detection",
                        description: "Locating and identifying multiple objects in images and videos",
                        content:
                            "Our object detection solutions locate and identify multiple objects within images and videos. We develop systems that can detect specific objects, track their movement, and analyze their behavior in real-time.",
                    },
                    {
                        id: "facial-recognition",
                        title: "Facial Recognition",
                        description: "Identifying and verifying individuals based on facial features",
                        content:
                            "Our facial recognition solutions identify and verify individuals based on their facial features. We develop secure, privacy-compliant systems for authentication, access control, and personalized experiences.",
                    },
                ],
            },
            {
                id: "multi-modal-ai",
                title: "Multi Modal AI",
                icon: <Layers className="h-5 w-5" />,
                description: "Integrating diverse data streams for holistic AI-powered experiences",
                content:
                    "Our multi-modal AI solutions combine different types of data (text, images, audio, etc.) to create more comprehensive and accurate AI systems. We develop integrated solutions that understand and process multiple forms of information.",
                features: [
                    "Multi-modal data integration",
                    "Cross-modal learning algorithms",
                    "Fusion of visual and textual data",
                    "Audio-visual processing",
                    "Multi-modal interaction systems",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "computer-vision",
                        title: "Computer Vision",
                        description: "Enabling machines to interpret and understand visual information",
                        content:
                            "Our computer vision solutions enable machines to interpret and understand visual information from the world. We develop systems for image recognition, object detection, scene understanding, and visual search.",
                    },
                    {
                        id: "natural-language-processing",
                        title: "Natural Language Processing",
                        description: "Processing and understanding human language",
                        content:
                            "Our NLP solutions enable machines to understand, interpret, and generate human language. We develop systems for text classification, sentiment analysis, language translation, and conversational AI.",
                    },
                    {
                        id: "speech-recognition",
                        title: "Speech Recognition",
                        description: "Converting spoken language into text and commands",
                        content:
                            "Our speech recognition solutions convert spoken language into text and commands. We develop systems for voice assistants, transcription services, and voice-controlled applications.",
                    },
                ],
            },
            {
                id: "iot-development",
                title: "IoT Development",
                icon: <MonitorSmartphone className="h-5 w-5" />,
                description: "Connecting physical devices to digital systems for smarter operations",
                content:
                    "Our IoT development services connect physical devices to digital systems, enabling data collection, monitoring, and automation. We create end-to-end IoT solutions that drive efficiency and innovation.",
                features: [
                    "IoT device integration",
                    "Sensor data collection and analysis",
                    "Real-time monitoring systems",
                    "Edge computing solutions",
                    "IoT security implementation",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "iot-sensors",
                        title: "IoT Sensors & Devices",
                        description: "Hardware solutions for data collection and interaction",
                        content:
                            "We design and implement IoT sensor networks and devices that collect data from the physical world. Our solutions include custom hardware integration, sensor calibration, and device management systems.",
                    },
                    {
                        id: "iot-platforms",
                        title: "IoT Platforms",
                        description: "Comprehensive platforms for device management and data processing",
                        content:
                            "Our IoT platform solutions provide the infrastructure needed to manage devices, collect and process data, and enable automation. We develop scalable, secure platforms that connect your physical and digital systems.",
                    },
                    {
                        id: "iot-analytics",
                        title: "IoT Analytics",
                        description: "Extracting insights from IoT data streams",
                        content:
                            "Our IoT analytics services transform raw sensor data into actionable insights. We implement real-time and batch processing systems that help you understand patterns, predict outcomes, and optimize operations.",
                    },
                ],
            },
        ],
    },
    {
        id: "bpo",
        title: "BPO",
        icon: <Database className="h-5 w-5" />,
        description: "Business process outsourcing services to streamline operations",
        services: [
            {
                id: "data-entry",
                title: "Data Entry",
                icon: <Database className="h-5 w-5" />,
                description: "Accurate and efficient input for seamless data management",
                content:
                    "Our data entry services provide accurate, efficient data processing for businesses of all sizes. We handle large volumes of information with precision, ensuring your data is organized, accessible, and error-free.",
                features: [
                    "Manual and automated data entry",
                    "Form processing and digitization",
                    "Data cleansing and validation",
                    "Database management",
                    "Secure data handling protocols",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "form-processing",
                        title: "Form Processing",
                        description: "Converting paper and digital forms into structured data",
                        content:
                            "Our form processing services convert paper and digital forms into structured, usable data. We handle various form types, extract relevant information, and organize it according to your requirements.",
                    },
                    {
                        id: "data-conversion",
                        title: "Data Conversion",
                        description: "Transforming data between different formats and systems",
                        content:
                            "Our data conversion services transform information between different formats, structures, and systems. We ensure data integrity and compatibility while migrating from legacy systems to modern platforms.",
                    },
                    {
                        id: "data-cleansing",
                        title: "Data Cleansing",
                        description: "Identifying and correcting errors in datasets",
                        content:
                            "Our data cleansing services identify and correct errors, inconsistencies, and duplicates in your datasets. We improve data quality through standardization, validation, and enrichment processes.",
                    },
                ],
            },
            {
                id: "data-processing",
                title: "Data Processing",
                icon: <Server className="h-5 w-5" />,
                description: "Transforming raw data into actionable insights",
                content:
                    "Our data processing services transform raw information into structured, actionable insights. We handle complex data operations, from extraction and transformation to analysis and visualization.",
                features: [
                    "ETL (Extract, Transform, Load) processes",
                    "Data mining and pattern recognition",
                    "Statistical analysis and reporting",
                    "Data visualization and dashboarding",
                    "Big data processing",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "data-mining",
                        title: "Data Mining",
                        description: "Discovering patterns and relationships in large datasets",
                        content:
                            "Our data mining services discover patterns, correlations, and insights in large datasets. We use advanced algorithms to extract valuable information that supports decision-making and strategic planning.",
                    },
                    {
                        id: "data-analysis",
                        title: "Data Analysis",
                        description: "Interpreting data to identify trends and make predictions",
                        content:
                            "Our data analysis services interpret complex datasets to identify trends, patterns, and relationships. We provide statistical analysis, predictive modeling, and actionable recommendations based on your data.",
                    },
                    {
                        id: "data-visualization",
                        title: "Data Visualization",
                        description: "Creating visual representations of data for better understanding",
                        content:
                            "Our data visualization services transform complex information into clear, compelling visual formats. We create interactive dashboards, charts, and graphs that make data accessible and actionable for all stakeholders.",
                    },
                ],
            },
            {
                id: "back-office-support",
                title: "Back-office Support",
                icon: <Settings className="h-5 w-5" />,
                description: "Essential administrative functions to support your core business",
                content:
                    "Our back-office support services handle essential administrative functions, allowing you to focus on core business activities. We provide reliable, efficient support for accounting, HR, customer service, and more.",
                features: [
                    "Accounting and bookkeeping",
                    "HR administration and payroll",
                    "Order processing and inventory management",
                    "Customer support and service",
                    "Document management and processing",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "accounting-services",
                        title: "Accounting Services",
                        description: "Managing financial records and transactions",
                        content:
                            "Our accounting services manage financial records, transactions, and reporting with accuracy and efficiency. We handle bookkeeping, accounts payable/receivable, financial reconciliation, and compliance requirements.",
                    },
                    {
                        id: "hr-services",
                        title: "HR Services",
                        description: "Supporting human resources functions and employee management",
                        content:
                            "Our HR services support your human resources functions with efficiency and compliance. We handle payroll processing, benefits administration, employee onboarding, and HR documentation management.",
                    },
                    {
                        id: "customer-support",
                        title: "Customer Support",
                        description: "Providing assistance and resolving issues for customers",
                        content:
                            "Our customer support services provide responsive, professional assistance to your customers. We handle inquiries, resolve issues, and ensure a positive customer experience across multiple channels.",
                    },
                ],
            },
            {
                id: "data-scrapping",
                title: "Data Scrapping",
                icon: <Search className="h-5 w-5" />,
                description: "Harvesting web data securely and effectively",
                content:
                    "Our data scraping services extract valuable information from websites, applications, and online platforms. We collect, structure, and deliver data that supports your business intelligence, market research, and competitive analysis.",
                features: [
                    "Web scraping and crawling",
                    "Content extraction and structuring",
                    "Data aggregation from multiple sources",
                    "Automated data collection systems",
                    "Compliance with legal and ethical standards",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "web-scraping",
                        title: "Web Scraping",
                        description: "Extracting data from websites automatically",
                        content:
                            "Our web scraping services extract data from websites automatically and efficiently. We develop custom scrapers that navigate complex sites, handle authentication, and collect specific information according to your requirements.",
                    },
                    {
                        id: "content-extraction",
                        title: "Content Extraction",
                        description: "Identifying and extracting specific content from web pages",
                        content:
                            "Our content extraction services identify and extract specific information from web pages, documents, and other sources. We parse structured and unstructured content to retrieve the data you need in a usable format.",
                    },
                    {
                        id: "data-aggregation",
                        title: "Data Aggregation",
                        description: "Combining data from multiple sources into a unified dataset",
                        content:
                            "Our data aggregation services combine information from multiple sources into unified, consistent datasets. We integrate data from websites, APIs, databases, and other sources to provide comprehensive insights.",
                    },
                ],
            },
        ],
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        icon: <Megaphone className="h-5 w-5" />,
        description: "Strategic marketing services to boost your online presence",
        services: [
            {
                id: "seo",
                title: "SEO",
                icon: <Search className="h-5 w-5" />,
                description: "Optimizing visibility to drive organic growth",
                content:
                    "Our SEO services improve your website's visibility in search engine results, driving organic traffic and increasing conversions. We implement proven strategies that align with the latest search engine algorithms and best practices.",
                features: [
                    "Keyword research and strategy",
                    "On-page optimization",
                    "Technical SEO audits and fixes",
                    "Content optimization",
                    "Link building and authority development",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "on-page-seo",
                        title: "On-Page SEO",
                        description: "Optimizing individual web pages for search engines",
                        content:
                            "Our on-page SEO services optimize individual web pages to improve search engine rankings and drive targeted traffic. We enhance content, meta tags, headings, images, and internal linking to align with search intent.",
                    },
                    {
                        id: "off-page-seo",
                        title: "Off-Page SEO",
                        description: "Building authority through external signals",
                        content:
                            "Our off-page SEO services build your website's authority through external signals like backlinks, social mentions, and brand citations. We implement ethical link building strategies that improve your domain authority and search rankings.",
                    },
                    {
                        id: "technical-seo",
                        title: "Technical SEO",
                        description: "Optimizing website infrastructure for search engines",
                        content:
                            "Our technical SEO services optimize your website's infrastructure to improve crawling, indexing, and rendering. We address issues like site speed, mobile-friendliness, structured data, and XML sitemaps to enhance search performance.",
                    },
                ],
            },
            {
                id: "social-media-marketing",
                title: "Social Media Marketing",
                icon: <Megaphone className="h-5 w-5" />,
                description: "Engaging audiences and building connections across platforms",
                content:
                    "Our social media marketing services build your brand presence and engage your target audience across social platforms. We create and implement strategies that drive awareness, engagement, and conversions.",
                features: [
                    "Social media strategy development",
                    "Content creation and curation",
                    "Community management and engagement",
                    "Paid social advertising",
                    "Performance tracking and analytics",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "social-media-strategy",
                        title: "Social Media Strategy",
                        description: "Developing comprehensive plans for social media success",
                        content:
                            "Our social media strategy services develop comprehensive plans for achieving your business objectives through social channels. We analyze your audience, competitors, and industry trends to create tailored strategies that drive results.",
                    },
                    {
                        id: "content-creation",
                        title: "Content Creation",
                        description: "Producing engaging content for social media platforms",
                        content:
                            "Our social media content creation services produce engaging, shareable content that resonates with your target audience. We create graphics, videos, copy, and interactive elements tailored to each social platform.",
                    },
                    {
                        id: "community-management",
                        title: "Community Management",
                        description: "Building and nurturing online communities",
                        content:
                            "Our community management services build and nurture your online presence through consistent engagement. We monitor conversations, respond to comments and messages, and foster positive relationships with your audience.",
                    },
                ],
            },
            {
                id: "content-marketing",
                title: "Content Marketing",
                icon: <PenTool className="h-5 w-5" />,
                description: "Creating valuable content to inform, inspire, and convert",
                content:
                    "Our content marketing services create and distribute valuable, relevant content that attracts and engages your target audience. We develop comprehensive strategies that build authority, drive traffic, and generate leads.",
                features: [
                    "Content strategy development",
                    "Blog and article writing",
                    "Ebook and whitepaper creation",
                    "Infographic and visual content design",
                    "Content distribution and promotion",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "blog-writing",
                        title: "Blog Writing",
                        description: "Creating informative and engaging blog content",
                        content:
                            "Our blog writing services create informative, engaging articles that establish your authority and drive organic traffic. We research topics, optimize for SEO, and craft compelling content that resonates with your target audience.",
                    },
                    {
                        id: "ebook-creation",
                        title: "eBook Creation",
                        description: "Developing comprehensive guides and resources",
                        content:
                            "Our eBook creation services develop comprehensive, valuable resources that generate leads and demonstrate your expertise. We handle research, writing, design, and formatting to produce professional, engaging eBooks.",
                    },
                    {
                        id: "infographic-design",
                        title: "Infographic Design",
                        description: "Visualizing complex information in engaging formats",
                        content:
                            "Our infographic design services transform complex information into visually engaging, shareable graphics. We combine data visualization, illustration, and concise copy to create compelling infographics that communicate effectively.",
                    },
                ],
            },
            {
                id: "video-marketing",
                title: "Video Marketing",
                icon: <Video className="h-5 w-5" />,
                description: "Captivating audiences through powerful visual storytelling",
                content:
                    "Our video marketing services create compelling visual content that engages your audience and drives action. We develop and implement video strategies across platforms, from concept to production to distribution.",
                features: [
                    "Video strategy development",
                    "Explainer and promotional videos",
                    "Social media video content",
                    "Animation and motion graphics",
                    "Video SEO and distribution",
                ],
                image: "/placeholder.svg?height=400&width=600",
                subServices: [
                    {
                        id: "video-production",
                        title: "Video Production",
                        description: "Creating professional video content from concept to completion",
                        content:
                            "Our video production services create professional video content from concept to completion. We handle scriptwriting, filming, editing, and post-production to deliver high-quality videos that achieve your marketing objectives.",
                    },
                    {
                        id: "animation",
                        title: "Animation",
                        description: "Developing animated videos and motion graphics",
                        content:
                            "Our animation services develop engaging animated videos and motion graphics that explain complex concepts, showcase products, and tell your brand story. We create 2D and 3D animations tailored to your audience and objectives.",
                    },
                    {
                        id: "video-advertising",
                        title: "Video Advertising",
                        description: "Creating and optimizing video ads for various platforms",
                        content:
                            "Our video advertising services create and optimize video ads for social media, YouTube, and other platforms. We develop targeted campaigns that capture attention, drive engagement, and generate conversions.",
                    },
                ],
            },
        ],
    },
]

export function ServicePage() {
    const [activeCategory, setActiveCategory] = useState(servicesData[0].id)
    const [selectedService, setSelectedService] = useState<string | null>(null)
    const [selectedSubService, setSelectedSubService] = useState<string | null>(null)

    const currentCategory = servicesData.find((category) => category.id === activeCategory)
    const currentService = currentCategory?.services.find((service) => service.id === selectedService)
    const currentSubService = currentService?.subServices?.find((subService) => subService.id === selectedSubService)

    // Reset selections when changing categories
    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId)
        setSelectedService(null)
        setSelectedSubService(null)
    }

    // Handle service selection
    const handleServiceSelect = (serviceId: string) => {
        setSelectedService(serviceId)
        setSelectedSubService(null)
    }

    // Handle subservice selection
    const handleSubServiceSelect = (subServiceId: string) => {
        setSelectedSubService(subServiceId)
    }

    // Go back to service list
    const handleBackToServices = () => {
        setSelectedService(null)
        setSelectedSubService(null)
    }

    // Go back to service detail from subservice
    const handleBackToService = () => {
        setSelectedSubService(null)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto py-12 px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive technology solutions tailored to your business needs
                    </p>
                </div>

                {/* Main category tabs */}
                <Tabs
                    defaultValue={servicesData[0].id}
                    value={activeCategory}
                    onValueChange={handleCategoryChange}
                    className="mb-12"
                >
                    <TabsList className="w-full max-w-3xl mx-auto h-auto flex flex-wrap justify-center gap-2 bg-transparent">
                        {servicesData.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="flex items-center gap-2 py-3 px-6 rounded-full border bg-background data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                {category.icon}
                                <span>{category.title}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Service selection view (only shown when no service is selected) */}
                    {!selectedService && (
                        <div className="mt-8">
                            {servicesData.map((category) => (
                                <TabsContent key={category.id} value={category.id} className="animate-in fade-in-50">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {category.services.map((service) => (
                                            <Card
                                                key={service.id}
                                                className="overflow-hidden transition-all hover:shadow-md cursor-pointer border-2 hover:border-primary/50"
                                                onClick={() => handleServiceSelect(service.id)}
                                            >
                                                <CardHeader className="pb-4">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className="p-2 rounded-full bg-primary/10 text-primary">{service.icon}</div>
                                                        <CardTitle>{service.title}</CardTitle>
                                                    </div>
                                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                                </CardHeader>
                                                <CardFooter className="pt-0 pb-4">
                                                    <Button variant="ghost" className="group w-full justify-between">
                                                        Learn More
                                                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </div>
                    )}
                </Tabs>

                {/* Service detail view */}
                {selectedService && !selectedSubService && currentService && (
                    <div className="animate-in fade-in-50 slide-in-from-bottom-5">
                        <Button
                            variant="ghost"
                            className="mb-6 -ml-2 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            onClick={handleBackToServices}
                        >
                            <ArrowRight className="h-4 w-4 rotate-180" />
                            Back to all services
                        </Button>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Main content */}
                            <div className="lg:col-span-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">{currentService.icon}</div>
                                    <h2 className="text-3xl font-bold">{currentService.title}</h2>
                                </div>

                                <p className="text-xl text-muted-foreground mb-6">{currentService.description}</p>
                                <p className="mb-8 text-lg leading-relaxed">{currentService.content}</p>

                                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                                <ul className="grid grid-cols-1 gap-4 mb-8">
                                    {currentService.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                            <span className="text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button size="lg" className="mb-12">
                                    Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                                {/* Sub-services section */}
                                {currentService.subServices && currentService.subServices.length > 0 && (
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6">Specialized Services</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {currentService.subServices.map((subService) => (
                                                <Card
                                                    key={subService.id}
                                                    className="cursor-pointer hover:shadow-md transition-all border-2 hover:border-primary/50"
                                                    onClick={() => handleSubServiceSelect(subService.id)}
                                                >
                                                    <CardHeader>
                                                        <CardTitle>{subService.title}</CardTitle>
                                                        <CardDescription className="text-base">{subService.description}</CardDescription>
                                                    </CardHeader>
                                                    <CardFooter>
                                                        <Button variant="ghost" className="group w-full justify-between">
                                                            View Details
                                                            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-8">
                                    <Image
                                        src={currentService.image || "/placeholder.svg"}
                                        alt={currentService.title}
                                        width={600}
                                        height={400}
                                        className="rounded-lg mb-6 w-full object-cover"
                                    />

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Why Choose Us</CardTitle>
                                            <CardDescription>Our approach to {currentService.title}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                                <p>Expert team with years of industry experience</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                                <p>Tailored solutions to meet your specific needs</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                                <p>Proven track record of successful projects</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                                <p>Ongoing support and maintenance</p>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">Contact Us Today</Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Sub-service detail view */}
                {selectedService && selectedSubService && currentService && currentSubService && (
                    <div className="animate-in fade-in-50 slide-in-from-bottom-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                            <Button
                                variant="ghost"
                                className="-ml-2 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                                onClick={handleBackToService}
                            >
                                <ArrowRight className="h-4 w-4 rotate-180" />
                                Back to {currentService.title}
                            </Button>

                            <div className="flex items-center text-sm text-muted-foreground">
                                <button onClick={handleBackToServices} className="hover:underline">
                                    Services
                                </button>
                                <span className="mx-2">/</span>
                                <button onClick={handleBackToService} className="hover:underline">
                                    {currentService.title}
                                </button>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-foreground">{currentSubService.title}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Main content */}
                            <div className="lg:col-span-8">
                                <h2 className="text-3xl font-bold mb-6">{currentSubService.title}</h2>
                                <p className="text-xl text-muted-foreground mb-6">{currentSubService.description}</p>
                                <p className="mb-8 text-lg leading-relaxed">{currentSubService.content}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <Card className="bg-primary/5 border-0">
                                        <CardHeader>
                                            <CardTitle className="text-lg">Expertise</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                Our team brings specialized knowledge and years of experience in {currentSubService.title} to
                                                every project.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-primary/5 border-0">
                                        <CardHeader>
                                            <CardTitle className="text-lg">Methodology</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                We follow a proven, systematic approach to deliver consistent, high-quality results for our
                                                clients.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-primary/5 border-0">
                                        <CardHeader>
                                            <CardTitle className="text-lg">Technology</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                We leverage cutting-edge tools and technologies to provide innovative solutions that drive
                                                results.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-primary/5 border-0">
                                        <CardHeader>
                                            <CardTitle className="text-lg">Support</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                Our commitment to your success extends beyond project completion with ongoing support and
                                                optimization.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Button size="lg" className="mb-12">
                                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                                {/* Related sub-services */}
                                {currentService.subServices && currentService.subServices.length > 1 && (
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6">Related Services</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {currentService.subServices
                                                .filter((subService) => subService.id !== selectedSubService)
                                                .map((subService) => (
                                                    <Card
                                                        key={subService.id}
                                                        className="cursor-pointer hover:shadow-md transition-all"
                                                        onClick={() => handleSubServiceSelect(subService.id)}
                                                    >
                                                        <CardHeader>
                                                            <CardTitle>{subService.title}</CardTitle>
                                                            <CardDescription>{subService.description}</CardDescription>
                                                        </CardHeader>
                                                        <CardFooter>
                                                            <Button variant="ghost" className="group w-full justify-between">
                                                                View Details
                                                                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                                            </Button>
                                                        </CardFooter>
                                                    </Card>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-8">
                                    <Image
                                        src="/placeholder.svg?height=400&width=600"
                                        alt={currentSubService.title}
                                        width={600}
                                        height={400}
                                        className="rounded-lg mb-6 w-full object-cover"
                                    />

                                    <Card className="mb-6">
                                        <CardHeader>
                                            <CardTitle>Get Started</CardTitle>
                                            <CardDescription>
                                                Take the first step toward implementing {currentSubService.title}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-sm">
                                                Our team is ready to discuss your specific needs and how our {currentSubService.title} services
                                                can help you achieve your goals.
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex flex-col gap-3">
                                            <Button className="w-full">Schedule a Consultation</Button>
                                            <Button variant="outline" className="w-full">
                                                Download Brochure
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Case Study</CardTitle>
                                            <CardDescription>See how we've helped similar businesses</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm mb-4">
                                                Learn how we helped a leading company improve their operations with our{" "}
                                                {currentSubService.title} services, resulting in significant improvements in efficiency and ROI.
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" className="w-full">
                                                Read Case Study
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ContactUsBanner />
        </div>
    )
}

