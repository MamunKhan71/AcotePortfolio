"use client";

import ProjectCards from "@/components/common/ProjectCards";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Ensure you have this utility
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { portfolioData } from "@/data/portfolio-data";

const tabs = [
    "All",
    "Graphics Design",
    "Apps Development",
    "UX/UI Design",
    "Finance",
    "Marketing",
    "SaaS & Dashboard",
    "FinTech",
    "AI/ML",
    "Business",
    "SEO",
    "Web Development",
    "Mobile App",
];

export default function PortfolioMainSection() {
    const [activeTab, setActiveTab] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(portfolioData)
    const ITEMS_PER_PAGE = 9
    const TOTAL_ITEMS = filteredProjects?.length
    useEffect(() => {
        if (activeTab === "All") {
            setFilteredProjects(portfolioData); 
        } else {
            const updatedData = portfolioData?.filter(portfolio => portfolio.category === activeTab);
            setFilteredProjects(updatedData);
        }
    }, [activeTab]);

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE)

    const indexOfLastItem = (currentPage * ITEMS_PER_PAGE)
    const indexOfFirstItem = (indexOfLastItem - ITEMS_PER_PAGE)
    const currentItems = filteredProjects?.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className="flex flex-wrap gap-[18px] mt-[50px] p-4 justify-center max-w-5xl mx-auto w-full h-full">
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
                <div className='h-full w-full'>
                    <div className='grid grid-cols-3 gap-7 mt-14 w-full h-full pb-6'>
                        {
                            currentItems?.map((blog, index) => <ProjectCards key={`blog-${index}`} title={blog.title} imageUrl={blog.imageUrl} category={blog.category} isVisible={false} />)
                        }
                    </div>
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}
