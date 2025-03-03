type Project = {
    name: string;
    overview: string;
    categories: string[];
    portfolioSnapshots: string[],
};

type techOverview = {
    title: string,
    description: string
}
type projectFeatures = {
    title: string,
    description?: string,
    key_point_description?: string,
    key_points?: string[],
}


type PortfolioData = {
    project: Project;
    projectFeatures: projectFeatures[];
    techOverview: techOverview[];
};

export const portfolioDataDetails: PortfolioData = {
    project: {
        name: "Empower your finance with alpine banking",
        overview:
            `
            Alpine Empower Banking successfully transformed its vision into reality by offering a comprehensive financial ecosystem that addressed clients’ needs for secure deposits and high-yield investment opportunities. This initiative not only ensured the safety of clients’ funds but also empowered them to achieve their financial aspirations with confidence and efficiency.
            `,
        categories: ["Fintech", "Web"],
        portfolioSnapshots: [
            "/portfolio/portfolio-1/p1-image.png",
            "/portfolio/portfolio-1/p2-image.png",
            "/portfolio/portfolio-1/p3-image.png",
            "/portfolio/portfolio-1/p4-image.png",
        ],
    },
    projectFeatures: [
        {
            title: "Project overview",
            description:
                "Alpine Empower Banking successfully transformed its vision into reality by offering a comprehensive financial ecosystem that addressed clients’ needs for secure deposits and high-yield investment opportunities. This initiative not only ensured the safety of clients’ funds but also empowered them to achieve their financial aspirations with confidence and efficiency.", 
        },
        {
            title: "Problem",
            description:
                "In today’s financial landscape, customers encounter difficulties in discovering a comprehensive banking solution that not only fosters financial growth with secured deposits and high yields but also prioritizes the safety of their funds.",
            key_point_description: "Here are some key challenges to consider when developing such a platform:",
            key_points: [
                "The lack of seamless access to funds and convenient banking experiences further exacerbates these challenges",
                "This underscores the necessity for an innovative, customer-centric banking platform that encompasses secure deposits with attractive returns, accompanied by the added convenience of international visa card benefits",
                "Such a platform will effectively address the pain points of modern consumers, revolutionize their banking experience, and cater to their evolving needs in a dynamic global economy"
            ]
        },
        {
            title: "Challanges",
            key_point_description: "Here are some key challenges to consider when developing such a platform:",
            key_points: [
                "Alpine Empower Banking's research phase included diverse sources: YouTube videos for industry trends, customer preferences, and banking solutions; reputable articles for market dynamics and compliance; and brainstorming sessions to generate creative ideas and address challenges effectively.",
                "This approach formed a solid foundation for developing their exceptional financial solution."
            ]
        },
        {
            title: "Workflow scenario",
            description: "The project team initiated discussions with stakeholders to understand the core objectives, user needs, and market demands.Conducted comprehensive market research to identify trends, competitors, and potential opportunities for innovation.Defined the scope, objectives, deliverables, and timelines for the project.Collaborated with design teams to create intuitive and user- friendly interfaces and Conducted rigorous testing of all features and functionalities to ensure they function as intended"
        },
        {
            title: "Solutions",
            description: `
            The project focused on addressing the common challenge of stagnant funds by offering high-yield investment opportunities. Through meticulous market research and strategic partnerships, Alpine Empower curated diverse investment options, enabling clients to grow their wealth effectively.
            `,
            key_points: [
                "Recognizing the importance of security in financial transactions, Alpine Empower prioritized building a robust system that guaranteed the safety of clients' deposits.",
                "By implementing cutting-edge security measures, including encryption protocols and multi-factor authentication, the platform ensured data protection and instilled trust among users",
                "This approach empowered users to manage their finances holistically, catering to both short-term needs and long-term goals.",
                "Data-Driven Insights",
                "Consistent UI design",
                "User ratings & feedback",
                "Improved Navigation",
                "Product order history",
                "Descriptive Text",
            ]
        }
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
};
