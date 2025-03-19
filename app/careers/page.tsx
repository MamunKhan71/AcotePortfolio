"use client"

import ComponentTitle from "@/components/common/ComponentTitle"
import HeaderDescription from "@/components/common/HeaderDescription"
import HeaderSection from "@/components/PortfolioHeaderSection"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { categories, jobs } from "@/data/careers/jobs"
import { Briefcase, ChevronRight, Clock, Filter, MapPin, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CareerPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const filteredJobs = jobs.filter(
        (job) =>
            (selectedCategory === "All" || job.category === selectedCategory) &&
            (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.description.toLowerCase().includes(searchTerm.toLowerCase())),
    )

    return (
        <div className="w-full md:min-h-screen py-10 mb-10 md:mb-20">
            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center mb-5 md:mb-10">
                    <HeaderSection
                        breadcrumb="Home / <span class='font-bold text-primary'>Career</span>"
                        title="Join Our Team"
                        description="Be part of our innovative team creating cutting-edge technology solutions that transform businesses"
                    />
                </div>

                <div className="rounded-xl p-4 md:p-6 mb-5 md:mb-10 border">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Input
                                type="text"
                                placeholder="Search for jobs..."
                                className="pl-10 h-12 "
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                        <div className="md:flex-shrink-0">
                            <Button className="bg-primary hover:bg-[#008c44] h-12 px-6">
                                <Search className="mr-2 h-4 w-4" />
                                Search
                            </Button>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="text-gray-300 mr-2 flex items-center">
                            <Filter className="h-4 w-4 mr-1" /> Filter:
                        </span>
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                className={`cursor-pointer px-4 py-2 text-sm font-normal ${selectedCategory === category
                                    ? "bg-primary"
                                    : "bg-transparent hover:bg-primary/90 hover:text-white"
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="rounded-xl bg-gray-50/50 border p-4 md:p-6 transition-colors duration-200"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl text-primary font-semibold">{job.title}</h3>
                                        <div className="flex flex-wrap gap-x-4 text-sm text-secondary/60">
                                            <span className="flex items-center">
                                                <MapPin className="h-4 w-4 mr-1" /> {job.location}
                                            </span>
                                            <span className="flex items-center">
                                                <Briefcase className="h-4 w-4 mr-1" /> {job.type}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="h-4 w-4 mr-1" /> {job.postedDate}
                                            </span>
                                        </div>
                                        <p className="max-w-96 text-secondary text-base">{job.description}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <Link href={`/careers/${job.id}`}>
                                            <Button className="bg-primary hover:bg-[#008c44]">
                                                Details <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full h-full flex items-center justify-center col-span-2">
                            <div className="flex flex-col items-center justify-center gap-6 w-full text-center">
                                <div className="relative h-40 w-40">
                                    <Image src={'/not-found.png'} fill alt="not found image" />
                                </div>
                                <div>
                                    <ComponentTitle title="No Jobs Found" />
                                    <HeaderDescription className="max-w-2xl" title="We couldn't find any jobs matching your search criteria. Please try different keywords or filters." />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

