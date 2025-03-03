type Project = {
    name: string;
    overview: string;
    categories: string[];
    portfolioSnapshots: string[],
};

type Problem = {
    description: string;
    challenges: string[];
};

type Research = {
    sources: string[];
};

type Workflow = {
    steps: string[];
};

type Solutions = {
    investment_opportunities: string;
    security_measures: string[];
    user_empowerment: string;
};

type techOverview = {
    title: string,
    description: string
}

type Contact = {
    office: string;
    phone: string;
    email: string;
};

type Company = {
    name: string;
    services: string[];
    location: string;
    contact: Contact;
};

type Legal = {
    copyright: string;
    policies: string[];
};

type PortfolioData = {
    project: Project;
    problem: Problem;
    research: Research;
    workflow: Workflow;
    solutions: Solutions;
    features: string[];
    techOverview: techOverview[];
    customer: string;
    contact: Contact;
    company: Company;
    legal: Legal;
};

export const portfolioDataDetails: PortfolioData = {
    project: {
        name: "Empower your finance with alpine banking",
        overview:
            "Alpine Empower Banking successfully transformed its vision into reality by offering a comprehensive financial ecosystem that addressed clients’ needs for secure deposits and high-yield investment opportunities. This initiative ensured the safety of clients’ funds and empowered them to achieve their financial aspirations efficiently.",
        categories: ["Fintech", "Web"],
        portfolioSnapshots: [
            "/portfolio/portfolio-1/p1-image.png",
            "/portfolio/portfolio-1/p2-image.png",
            "/portfolio/portfolio-1/p3-image.png",
            "/portfolio/portfolio-1/p4-image.png",
        ],
    },
    problem: {
        description:
            "Customers face difficulties in finding a banking solution that ensures financial growth with secure deposits and high returns while maintaining the safety of their funds.",
        challenges: [
            "Lack of seamless access to funds and convenient banking experiences.",
            "Need for a customer-centric banking platform with secure deposits, high yields, and international visa card benefits.",
        ],
    },
    research: {
        sources: [
            "YouTube videos for industry trends and customer preferences",
            "Reputable articles for market dynamics and compliance",
            "Brainstorming sessions for idea generation",
        ],
    },
    workflow: {
        steps: [
            "Stakeholder discussions to understand objectives, user needs, and market demands.",
            "Market research to identify trends, competitors, and innovation opportunities.",
            "Defined project scope, objectives, deliverables, and timelines.",
            "Collaborated with design teams for intuitive user interfaces.",
            "Conducted rigorous testing for functionality assurance.",
        ],
    },
    solutions: {
        investment_opportunities:
            "High-yield investment opportunities to combat stagnant funds.",
        security_measures: [
            "Cutting-edge encryption protocols",
            "Multi-factor authentication",
            "Robust deposit protection system",
        ],
        user_empowerment:
            "Holistic financial management for short-term and long-term goals.",
    },
    features: [
        "Data-Driven Insights",
        "Consistent UI Design",
        "User Ratings & Feedback",
        "Improved Navigation",
        "Product Order History",
        "Descriptive Text",
    ],
    techOverview: [
        {
            title: "TECHNOLOGIES",
            description: 'Salesforce Service Cloud, Lightning Web Components (LWC), Apex, Visualforce pages, Aura'
        },
        {
            title: "PLATFORMS",
            description: 'Salesforce'
        },
        {
            title: "CUSTOMER",
            description: 'Confidential'
        }
    ],
    customer: "Confidential",
    contact: {
        office: "6th Floor, DTX Business Center, Pragati Sarani Road, Dhaka 1229",
        phone: "(629) 555-0129",
        email: "info@acotegroup.com",
    },
    company: {
        name: "Acote Group",
        services: [
            "BPO",
            "Design Solution",
            "Digital Marketing",
            "IT Solution",
        ],
        location:
            "DTX Business Center, 6th Floor, Plot no. 1176 & 1543, Pragati Sarani Road, Kuril, Dhaka 1229",
        contact: {
            office: "6th Floor, DTX Business Center, Pragati Sarani Road, Dhaka 1229",
            phone: "+880 1758 388865",
            email: "hr@acotegroup.com",
        },
    },
    legal: {
        copyright: "© 2025 Acote Group. All Rights Reserved.",
        policies: ["Privacy Policy", "Terms and Conditions"],
    },
};
