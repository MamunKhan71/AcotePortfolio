export interface heroSlidesDataTypes {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
}
// Slide data
export const heroSlides: heroSlidesDataTypes[] = [
    {
        id: 1,
        title: "Your Reliable Software Development Partner",
        description:
            "We offer IT experts who bring data-driven and innovative digital transformation approaches to our clients. Our skills & experience in Software Development have enabled sustainable growth for enterprises of all sizes.",
        buttonText: "Download Portfolio",
        buttonLink: "#",
        image: "/heroNav4.png",
    },
    {
        id: 2,
        title: "Smart AI & ML Solutions for Your Business",
        description:
            "We use Artificial Intelligence and Machine Learning to help businesses work faster, make better decisions, and grow. Our smart solutions make tasks easier and improve results.",
        buttonText: "Our Services",
        buttonLink: "#",
        image: "/heroNav3.jpg",
    },
    {
        id: 3,
        title: "Reliable BPO Services to Boost Your Business",
        description:
            "Stay ahead of the competition with our strategic technology consulting services. We help you navigate the digital landscape and implement solutions that position your business for future growth.",
        buttonText: "Get Started",
        buttonLink: "#",
        image: "/heroNav2.jpg",
    },
]