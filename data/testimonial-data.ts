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
            "I’ve been working with Acote Group for almost two years now. With their keen eye for design, development skills and expert project management, I’ve been able to serve many more clients than I would have without them.",
        name: "Gaute Remen",
        title: "CEO, Casper Ltd",
        image: "/testimony-1.png",
        rating: 5,
    },
    {
        id: 2,
        quote:
            "The team's attention to detail and commitment to quality has transformed our digital presence. Their strategic approach has helped us reach new markets and grow our business substantially.",
        name: "Sarah Johnson",
        title: "Marketing Director, Nexus Inc",
        image: "/placeholder.svg?height=200&width=200",
        rating: 5,
    },
    {
        id: 3,
        quote:
            "Working with this team has been a game-changer for our company. Their innovative solutions and responsive support have exceeded our expectations at every turn.",
        name: "Michael Chen",
        title: "Founder, TechFlow Solutions",
        image: "/placeholder.svg?height=200&width=200",
        rating: 5,
    },
]