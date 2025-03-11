export interface EventDataTypes {
    image: string;
    date: string;
    title: string;
    category?: string;
    video?: string;
    isVideo?: boolean;
    description?: string;
};

export const eventsData: EventDataTypes[] = [
    {
        image: "/events/event1.png",
        date: "January 2, 2025",
        title: "New Year",
        category: "Events",
        video: "/events/event1.mp4",
        isVideo: true,
        description: 'Acote Group celebrated the new year with employees and team members, fostering a positive and festive work environment.'
    },
    {
        image: "/events/event2.png",
        date: "December 25, 2024",
        title: "Reward Program",
        category: "Awards",
        video: "/videos/event2.mp4",
        isVideo: true,
        description: 'A recognition event to appreciate outstanding employees for their contributions and achievements.'
    },
    {
        image: "/events/event3.png",
        date: "November 21, 2024",
        title: "Tintolab",
        category: "Conferences",
        video: "/videos/event3.mp4",
        isVideo: false,
        description: 'Welcomed Joonyum Choi, CEO of Tintolab, to discuss potential collaborations and future projects.'
    },
    {
        image: "/events/event4.png",
        date: "May 30, 2024",
        title: "Grepp MoU",
        category: "Office",
        video: "/videos/event4.mp4",
        isVideo: false,
        description: 'Signed of a Memorandum of Understanding (MoU) between Acote Group and Grepp to drive technological innovation.'
    },
    {
        image: "/events/event5.png",
        date: "November 30, 2024",
        title: "Collaborative future projects",
        category: "Fun activity",
        video: "/videos/event5.mp4",
        isVideo: false,
        description: 'Announcement of collaboration with BIDA and BEZA to promote digital and infrastructural development.'
    },
    {
        image: "/events/event6.png",
        date: "October 30, 2024",
        title: "UNDP Bangladesh",
        category: "Events",
        video: "/videos/event6.mp4",
        isVideo: true,
        description: 'Met with UNDP Bangladesh representatives to explore partnership opportunities for sustainable development projects.'
    }
];
