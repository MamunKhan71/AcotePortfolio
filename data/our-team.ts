export interface Founder {
    name: string;
    role: string;
    imageSrc: string;
    message: string;
    description?: string,
    keyPoints?: string[],
}
export const founderInfo: Founder[] = [
    {
        name: 'Edward Kim',
        role: '- CEO & Founder',
        imageSrc: '/about-us/founder-1.png',
        message: 'A Massage From Our Managing Director',
        description: 'We have an unswerving commitment to become the most trusted partner for you by providing meaningful values and professional solutions in agile, right and competitive manner. Our global experience and industry’s most talented people make amazing things happen. The future beckons with opportunities, and Acote BPO will be where these opportunities connect.',
    },
    {
        name: 'Mark Ilwhan Kim',
        role: 'Al Technology Advisor',
        imageSrc: '/about-us/founder-2.png',
        message: 'Al Technology Advisor',
        keyPoints: [
            'Expertise in Robotics/ Artificial Intelligence/ Machine Learning/ Computer Vision',
            'Over 25 years of experience as CTO at global tech giants',
            'Ph.D. in Electrical and Computer Engineering, University of Massachusetts',
            'Electrical and Computer Engineering,  Seoul National University',
        ]
    }
]