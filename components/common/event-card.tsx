"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { EventDataTypes } from "@/data/our-event-data"
import { Play } from "lucide-react"
import { useState } from "react"

const EventCard = ({ image, date, title, video, isVideo = false }: EventDataTypes) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="space-y-4">
            {isVideo ? (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <div className="w-full h-[270.98px] relative group cursor-pointer">
                            <img className="w-full h-full object-cover" src={image || "/placeholder.svg"} alt={title} />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-primary/80 rounded-full p-3 transform transition-transform group-hover:scale-110">
                                    <Play className="w-8 h-8 text-white" fill="white" />
                                </div>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogTitle />
                    <DialogContent className="sm:max-w-[800px] p-0 bg-black">
                        <div className="relative w-full pt-[56.25%]">
                            <video className="absolute top-0 left-0 w-full h-full" controls autoPlay src={video}>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </DialogContent>
                </Dialog>
            ) : (
                <div className="w-full h-[270.98px]">
                    <img className="w-full h-full object-cover" src={image || "/placeholder.svg"} alt={title} />
                </div>
            )}
            <div className="flex items-center gap-6 text-base text-secondary">
                <p>{date}</p>
                <hr className="border h-4 w-0" />
                <p className="font-bold">{title}</p>
            </div>
        </div>
    )
}

export default EventCard

