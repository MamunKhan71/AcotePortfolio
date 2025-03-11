// Testimonial data
export interface testimonialDataTypes {
    id: number,
    quote: string;
    name: string;
    title: string;
    image: string;
    rating: number;
}
export const testimonials: testimonialDataTypes[] = [
    {
        id: 1,
        quote:
            "Working with Acote Group has been a game-changer for DGBangla. Their expertise in website and portfolio development has provided us with a strong digital presence, making it easier to showcase our work and attract new clients. Their professionalism and attention to detail have exceeded our expectations.",
        name: "Md. Arsad Parvez",
        title: "Managing Director, DGBangla",
        image: "/testimony-1.jpg",
        rating: 5,
    },
    {
        id: 2,
        quote:
            "Maintaining efficient traffic monitoring at MAWA Highway is crucial, and Acote Group has been instrumental in achieving this goal. Their expertise in AI model development for vehicle detection using computer vision has greatly enhanced our ability to manage and analyze traffic flow. Their innovative approach and commitment to excellence have exceeded our expectations, making them a valuable partner for Korean Expressway Corporation (KEC).",
        name: "Park, Jin Woo",
        title: "General Manager, Korean Expressway Corporation",
        image: "/testimony-2.jpg",
        rating: 5,
    },
    {
        id: 3,
        quote:
            "Acote Group has been a valuable partner in our recent projects. Their innovative approach and professionalism have made every collaboration seamless and rewarding. Together, we’re pushing the boundaries of what’s possible, and I’m excited to see where our partnership takes us next.",
        name: "Joonyum Choi",
        title: "CEO, Tintolab",
        image: "/testimony-3.jpg",
        rating: 5,
    },
]