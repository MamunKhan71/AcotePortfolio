"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { ArrowRight, CheckCircle2, ChevronRight, Network, Settings, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Service data structure with detailed content
const servicesData = {
    // IT Solutions
    "mobile-app-development": {
        title: "Mobile App Development",
        icon: <Smartphone className="h-6 w-6" />,
        description: "Leading Mobile Application Development Services Provider",
        longDescription:
            "Our mobile app development services deliver cutting-edge solutions for iOS and Android platforms. We create intuitive, high-performance applications that engage users and drive business growth.",
        features: [
            "Native iOS and Android development",
            "Cross-platform solutions with React Native and Flutter",
            "UI/UX design focused on user engagement",
            "Backend integration and API development",
            "Ongoing maintenance and support",
        ],
        image: "/our-services/mobile-app.avif",
        subServices: {
            "ios-development": {
                title: "iOS Development",
                description: "Native iOS applications built with Swift and Objective-C",
                content:
                    "Our iOS development team creates beautiful, high-performance applications for iPhone and iPad. We leverage the latest iOS features and design guidelines to deliver exceptional user experiences.",
                features: [
                    "Swift and Objective-C development",
                    "Apple Human Interface Guidelines compliance",
                    "App Store optimization and submission",
                    "Integration with Apple services (Apple Pay, HealthKit, etc.)",
                    "Performance optimization for all iOS devices",
                ],
            },
            "android-development": {
                title: "Android Development",
                description: "Native Android applications built with Kotlin and Java",
                content:
                    "Our Android development team creates robust, feature-rich applications for the diverse Android ecosystem. We ensure compatibility across devices while maintaining performance and usability.",
                features: [
                    "Kotlin and Java development",
                    "Material Design implementation",
                    "Google Play Store optimization",
                    "Integration with Google services",
                    "Device compatibility testing",
                ],
            },
            "cross-platform": {
                title: "Cross-Platform Apps",
                description: "Efficient multi-platform development with React Native and Flutter",
                content:
                    "Our cross-platform development approach allows for efficient creation of applications that run on both iOS and Android from a single codebase, reducing development time and cost while maintaining native-like performance.",
                features: [
                    "React Native and Flutter development",
                    "Code reusability across platforms",
                    "Native module integration when needed",
                    "Consistent UI/UX across platforms",
                    "Faster time-to-market",
                ],
            },
        },
    },
    "custom-software": {
        title: "Custom Software",
        icon: <Settings className="h-6 w-6" />,
        description: "Software Development As A Service (SaaS) Corporation",
        longDescription:
            "We develop tailored software solutions that address your unique business challenges. Our custom software development services help organizations streamline operations, improve efficiency, and gain competitive advantages.",
        features: [
            "Enterprise software development",
            "Cloud-based application development",
            "Legacy system modernization",
            "Integration with existing systems",
            "Scalable architecture design",
        ],
        image: "/our-services/mobile-app.avif",
        subServices: {
            "enterprise-solutions": {
                title: "Enterprise Solutions",
                description: "Comprehensive software systems for large organizations",
                content:
                    "Our enterprise solutions address complex business needs with scalable, secure, and integrated software systems. We help large organizations streamline operations, improve data management, and enhance decision-making capabilities.",
                features: [
                    "ERP and CRM systems",
                    "Business intelligence solutions",
                    "Workflow automation",
                    "Enterprise data management",
                    "Secure authentication and authorization",
                ],
            },
            "cloud-applications": {
                title: "Cloud Applications",
                description: "Scalable, reliable applications built for the cloud",
                content:
                    "We develop cloud-native applications that leverage the full potential of cloud platforms. Our solutions are designed for scalability, reliability, and cost-efficiency, enabling businesses to adapt quickly to changing demands.",
                features: [
                    "Microservices architecture",
                    "Containerization with Docker and Kubernetes",
                    "Serverless computing",
                    "Multi-cloud deployment strategies",
                    "Auto-scaling and load balancing",
                ],
            },
            "legacy-modernization": {
                title: "Legacy System Modernization",
                description: "Transforming outdated systems into modern, efficient solutions",
                content:
                    "We help organizations modernize their legacy systems, preserving valuable business logic while upgrading technology stacks. Our approach minimizes disruption while delivering improved performance, security, and user experience.",
                features: [
                    "Code refactoring and reengineering",
                    "Database migration and optimization",
                    "API-first modernization approach",
                    "Phased implementation strategies",
                    "Knowledge transfer and documentation",
                ],
            },
        },
    },
    // AI/ML Solutions
    "machine-learning": {
        title: "Machine Learning",
        icon: <Network className="h-6 w-6" />,
        description: "Driving smarter decisions through advanced predictive algorithms.",
        longDescription:
            "Our machine learning services help businesses leverage data to make better decisions, automate processes, and gain valuable insights. We develop custom ML models tailored to your specific business needs.",
        features: [
            "Predictive analytics and forecasting",
            "Classification and clustering algorithms",
            "Natural language processing",
            "Recommendation systems",
            "Anomaly detection",
        ],
        image: "/our-services/ios.webp",
        subServices: {
            "supervised-learning": {
                title: "Supervised Learning",
                description: "Training models on labeled data for prediction and classification",
                content:
                    "Our supervised learning solutions use labeled datasets to train models that can make accurate predictions on new, unseen data. We implement regression, classification, and other supervised techniques to solve complex business problems.",
                features: [
                    "Classification algorithms (SVM, Random Forest, etc.)",
                    "Regression models for prediction",
                    "Feature engineering and selection",
                    "Model evaluation and validation",
                    "Hyperparameter tuning",
                ],
            },
            "unsupervised-learning": {
                title: "Unsupervised Learning",
                description: "Discovering patterns and structures in unlabeled data",
                content:
                    "Our unsupervised learning approaches help businesses discover hidden patterns and structures in their data without predefined labels. We implement clustering, dimensionality reduction, and other techniques to extract valuable insights.",
                features: [
                    "Clustering algorithms (K-means, DBSCAN, etc.)",
                    "Dimensionality reduction (PCA, t-SNE)",
                    "Anomaly detection",
                    "Association rule learning",
                    "Feature extraction",
                ],
            },
            "reinforcement-learning": {
                title: "Reinforcement Learning",
                description: "Training agents to make optimal decisions through interaction",
                content:
                    "Our reinforcement learning solutions enable systems to learn optimal behaviors through interaction with their environment. We develop RL agents that can make sequential decisions to maximize long-term rewards in complex, dynamic scenarios.",
                features: [
                    "Policy optimization algorithms",
                    "Q-learning and deep Q-networks",
                    "Multi-agent reinforcement learning",
                    "Simulation environments for training",
                    "Real-world deployment strategies",
                ],
            },
        },
    },
    // Add more services as needed
}

export function ServiceContent() {
    const searchParams = useSearchParams()

    // Get the current service and subservice from URL params
    const currentService = searchParams.get("service") || ""
    const currentSubService = searchParams.get("subservice") || ""

    // Get the service data
    const serviceData = servicesData[currentService]

    // If no service is selected, show a default welcome screen
    if (!serviceData) {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh] text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to Our Services</h1>
                <p className="text-muted-foreground max-w-2xl mb-8">
                    Please select a service from the sidebar to view detailed information. Our comprehensive range of services is
                    designed to meet your business needs and drive digital transformation.
                </p>
                <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Services illustration"
                    width={500}
                    height={300}
                    className="rounded-lg mb-8"
                />
            </div>
        )
    }

    // If a service is selected but no subservice, show the service overview
    if (!currentSubService || !serviceData.subServices[currentSubService]) {
        return (
            <div className="container mx-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <span>Services</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="font-medium text-foreground">{serviceData.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold flex items-center gap-3 mb-4">
                            {serviceData.icon}
                            {serviceData.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6">{serviceData.description}</p>
                        <p className="mb-8">{serviceData.longDescription}</p>

                        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                            {serviceData.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" className="mb-8">
                            Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <div>
                        <Image
                            src={serviceData.image || "/placeholder.svg"}
                            alt={serviceData.title}
                            width={600}
                            height={400}
                            className="rounded-lg mb-6"
                        />

                        <Card>
                            <CardHeader>
                                <CardTitle>Explore Sub-Services</CardTitle>
                                <CardDescription>Discover our specialized offerings within {serviceData.title}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {Object.entries(serviceData.subServices).map(([id, subService]) => (
                                        <li key={id}>
                                            <Button variant="ghost" className="w-full justify-start text-left" asChild>
                                                <a href={`/services?service=${currentService}&subservice=${id}`}>
                                                    {subService.title}
                                                    <ChevronRight className="ml-auto h-4 w-4" />
                                                </a>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Related Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(servicesData)
                            .filter(([id]) => id !== currentService)
                            .slice(0, 3)
                            .map(([id, service]) => (
                                <Card key={id} className="overflow-hidden">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            {service.icon}
                                            <CardTitle>{service.title}</CardTitle>
                                        </div>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button variant="ghost" asChild className="w-full">
                                            <a href={`/services?service=${id}`}>
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        )
    }

    // If both service and subservice are selected, show the subservice details
    const subServiceData = serviceData.subServices[currentSubService]

    return (
        <div className="container mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <span>Services</span>
                <ChevronRight className="h-4 w-4" />
                <a href={`/services?service=${currentService}`} className="hover:underline">
                    {serviceData.title}
                </a>
                <ChevronRight className="h-4 w-4" />
                <span className="font-medium text-foreground">{subServiceData.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h1 className="text-3xl font-bold mb-4">{subServiceData.title}</h1>
                    <p className="text-xl text-muted-foreground mb-6">{subServiceData.description}</p>
                    <p className="mb-8">{subServiceData.content}</p>

                    <h2 className="text-xl font-semibold mb-4">Capabilities</h2>
                    <ul className="space-y-3 mb-8">
                        {subServiceData.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Tabs defaultValue="overview" className="mb-8">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="process">Our Process</TabsTrigger>
                            <TabsTrigger value="technologies">Technologies</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="p-4 border rounded-md mt-2">
                            <p>
                                Our {subServiceData.title} service provides comprehensive solutions tailored to your business needs. We
                                combine industry expertise with cutting-edge technology to deliver exceptional results.
                            </p>
                        </TabsContent>
                        <TabsContent value="process" className="p-4 border rounded-md mt-2">
                            <ol className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        1
                                    </div>
                                    <div>
                                        <strong>Discovery & Requirements</strong>
                                        <p className="text-sm text-muted-foreground">
                                            We analyze your needs and define project requirements
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        2
                                    </div>
                                    <div>
                                        <strong>Design & Planning</strong>
                                        <p className="text-sm text-muted-foreground">We create detailed designs and implementation plans</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        3
                                    </div>
                                    <div>
                                        <strong>Development & Testing</strong>
                                        <p className="text-sm text-muted-foreground">We build and thoroughly test your solution</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        4
                                    </div>
                                    <div>
                                        <strong>Deployment & Integration</strong>
                                        <p className="text-sm text-muted-foreground">
                                            We deploy your solution and integrate with existing systems
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        5
                                    </div>
                                    <div>
                                        <strong>Support & Maintenance</strong>
                                        <p className="text-sm text-muted-foreground">
                                            We provide ongoing support and continuous improvements
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </TabsContent>
                        <TabsContent value="technologies" className="p-4 border rounded-md mt-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span>React / React Native</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span>Swift / SwiftUI</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span>Kotlin / Java</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span>Flutter / Dart</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span>Node.js / Express</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span>Firebase / AWS</span>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    <Button size="lg">
                        Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div>
                    <Image
                        src={serviceData.image}
                        alt={subServiceData.title}
                        width={600}
                        height={400}
                        className="rounded-lg mb-6"
                    />

                    <Card>
                        <CardHeader>
                            <CardTitle>Other {serviceData.title} Services</CardTitle>
                            <CardDescription>Explore more specialized services we offer</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {Object.entries(serviceData.subServices)
                                    .filter(([id]) => id !== currentSubService)
                                    .map(([id, subService]) => (
                                        <li key={id}>
                                            <Button variant="ghost" className="w-full justify-start text-left" asChild>
                                                <a href={`/services?service=${currentService}&subservice=${id}`}>
                                                    {subService.title}
                                                    <ChevronRight className="ml-auto h-4 w-4" />
                                                </a>
                                            </Button>
                                        </li>
                                    ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" asChild className="w-full">
                                <a href={`/services?service=${currentService}`}>Back to {serviceData.title}</a>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Need Help?</CardTitle>
                            <CardDescription>Contact our team for more information</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">
                                Our experts are ready to answer your questions and help you find the right solution for your business.
                            </p>
                            <Button className="w-full">Contact Us</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

