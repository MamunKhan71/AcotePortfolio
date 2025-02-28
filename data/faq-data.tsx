export interface faqItemsTypes {
    id: string;
    question: string;
    answer: string;
}
export const faqItems: faqItemsTypes[] = [
    {
        id: "about",
        question: "About Acote!",
        answer:
            "Acote is a web development company specializing in creating custom digital solutions for businesses of all sizes. We focus on delivering high-quality, user-friendly websites and applications that help our clients achieve their business goals.",
    },
    {
        id: "cost",
        question: "What is the Cost of Web Development Services?",
        answer:
            "Our web development services are priced based on the scope, complexity, and timeline of your project. We offer transparent pricing and provide detailed quotes after understanding your specific requirements.",
    },
    {
        id: "ownership",
        question: "How complete is my ownership?",
        answer:
            "You retain 100% ownership of all work delivered. This includes all source code, design assets, and intellectual property created during the development process.",
    },
    {
        id: "tech-stack",
        question: "Which technology stacks are used for development projects?",
        answer:
            "We work with a variety of modern technology stacks including React, Next.js, Node.js, and various database solutions. The specific technologies are chosen based on your project requirements and long-term goals.",
    },
    {
        id: "roadmap",
        question: "What features are on the product roadmap?",
        answer:
            "Our product roadmap includes continuous improvements to our development process, new integration capabilities, and enhanced support services. We regularly update our offerings based on industry trends and client feedback.",
    },
    {
        id: "methodology",
        question: "What is your Methodology for both ideas/existing platforms?",
        answer:
            "We follow an agile development methodology that adapts to both new ideas and existing platforms. For new projects, we start with discovery and planning phases. For existing platforms, we begin with a thorough audit before implementing improvements.",
    },
    {
        id: "engagement",
        question: "Your main Engagement Model for development projects?",
        answer:
            "We offer flexible engagement models including fixed-price projects, time and materials, and dedicated development teams. We'll recommend the best approach based on your project needs and constraints.",
    },
    {
        id: "maintenance",
        question: "Maintenance services included in the Development Package?",
        answer:
            "Our development packages include a post-launch maintenance period where we address bugs, make minor adjustments, and ensure everything is running smoothly. Extended maintenance plans are also available.",
    },
    {
        id: "support",
        question: "What support do you offer?",
        answer:
            "We provide comprehensive support including technical assistance, bug fixes, feature enhancements, and regular updates. Our support team is available via email, phone, and ticketing system to address any issues promptly.",
    },
]
