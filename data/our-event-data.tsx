export interface EventDataTypes {
    image: string;
    date: string;
    title: string;
    category?: string;
    video?: string;
    isVideo?: boolean;
};

export const eventsData: EventDataTypes[] = [
    {
        image: "/events/event1.png",
        date: "January 2, 2025",
        title: "New Year",
        category: "Events",
        video: "/events/event1.mp4",
        isVideo: true
    },
    {
        image: "/events/event2.png",
        date: "December 25, 2024",
        title: "Reward Program",
        category: "Awards",
        video: "/videos/event2.mp4",
        isVideo: true
    },
    {
        image: "/events/event3.png",
        date: "November 21, 2024",
        title: "Tintolab",
        category: "Conferences",
        video: "/videos/event3.mp4",
        isVideo: false
    },
    {
        image: "/events/event4.png",
        date: "May 30, 2024",
        title: "Grepp MoU",
        category: "Office",
        video: "/videos/event4.mp4",
        isVideo: false
    },
    {
        image: "/events/event5.png",
        date: "November 30, 2024",
        title: "Collaborative future projects",
        category: "Fun activity",
        video: "/videos/event5.mp4",
        isVideo: false
    },
    {
        image: "/events/event6.png",
        date: "October 30, 2024",
        title: "UNDP Bangladesh",
        category: "Events",
        video: "/videos/event6.mp4",
        isVideo: true
    }
];
