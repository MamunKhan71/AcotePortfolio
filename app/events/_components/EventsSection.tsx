"use client";

import Pagination from "@/app/our-portfolio/_component/Pagination";
import EventCard from "@/components/common/event-card";
import { Button } from "@/components/ui/button";
import { eventsData } from "@/data/our-event-data";
import { cn } from "@/lib/utils"; // Ensure you have this utility
import { useEffect, useState } from "react";

const tabs = [
    "All",
    "Awards",
    "Events",
    "Fun activity",
    "Office",
    "Conferences"
];

export default function EventSection() {
    const [activeTab, setActiveTab] = useState("All");
    const [filteredEvents, setFilteredEvents] = useState(eventsData)
    const ITEMS_PER_PAGE = 9
    const TOTAL_ITEMS = filteredEvents?.length
    useEffect(() => {
        if (activeTab === "All") {
            setFilteredEvents(eventsData);
        } else {
            const updatedData = eventsData?.filter(portfolio => portfolio.category === activeTab);
            setFilteredEvents(updatedData);
        }
    }, [activeTab]);

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE)

    const indexOfLastItem = (currentPage * ITEMS_PER_PAGE)
    const indexOfFirstItem = (indexOfLastItem - ITEMS_PER_PAGE)
    const currentItems = filteredEvents?.slice(indexOfFirstItem, indexOfLastItem)
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        window.scrollTo(0, 0)
    }

    return (
        <div className="mb-10 md:mb-[50px] space-y-10">
            <div className="flex flex-wrap gap-[18px] mt-10 md:mt-[50px] p-4 justify-center md:max-w-5xl mx-auto w-full h-full">
                {tabs.map((tab) => (
                    <Button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-6 py-2 text-sm font-medium rounded-full border transition-all",
                            activeTab === tab
                                ? "bg-black text-white hover:bg-black"
                                : "bg-white text-black border-[#C4C4C4] hover:bg-gray-100"
                        )}
                    >
                        {tab}
                    </Button>
                ))}
            </div>
            <div>
                <div className='h-full w-full mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full'>
                        {
                            currentItems?.map((event, index) => <EventCard key={`event${index}`} image={event.image} date={event.date} title={event.title} category={event.category} isVideo={event.isVideo} video={event.video}
                            description={event.description}
                            />)
                        }
                    </div>
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}
