import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Globe, CheckCircle, FolderKanban, Award } from "lucide-react"

export default function HeaderSection() {
    return (
        <div className="relative w-full h-[627px] bg-[#0a1929] text-white overflow-hidden">
            {/* Background image */}
            <Image
                src="/placeholder.svg?height=627&width=1920"
                alt="Office background"
                width={1920}
                height={627}
                className="object-cover w-full h-full"
                priority
            />

            {/* Content overlay */}
            <div className="absolute inset-0 bg-[#0a1929]/70"></div>

            {/* Main content */}
            <div className="absolute inset-0 z-10">
                <div className="container mx-auto px-4 py-8 h-full relative">
                    {/* Logo */}
                    <div className="flex justify-end">
                        <div className="relative">
                            <span className="text-5xl font-bold italic text-[#4aeaab] filter drop-shadow-[0_0_10px_rgba(74,234,171,0.7)]">
                                acote
                            </span>
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#4aeaab] filter blur-[2px]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#4aeaab] filter blur-[2px]"></div>
                        </div>
                    </div>

                    {/* Hero section */}
                    <div className="mt-16 max-w-xl">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Let's work
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-1.5 bg-[#4aeaab]"></div>
                                <span>together.</span>
                            </div>
                        </h1>

                        <div className="mt-8">
                            <Button className="rounded-full px-6 py-6 h-auto bg-[#4aeaab] hover:bg-[#3ad99a] text-[#0a1929] font-medium text-sm">
                                Leave us a message
                            </Button>
                        </div>
                    </div>

                    {/* Stats section */}
                    <div className="absolute bottom-8 left-0 right-0 bg-white rounded-xl mx-4 md:mx-auto max-w-4xl">
                        <div className="grid grid-cols-5 py-6">
                            {/* Tech Partners */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-[#4aeaab]/10 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-[#4aeaab]" />
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-[#4aeaab] font-bold text-xl">8+</p>
                                    <p className="text-[#0a1929] text-xs">Tech Partners</p>
                                </div>
                            </div>

                            {/* Years of Experience */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-[#4aeaab]/10 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-[#4aeaab]" />
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-[#4aeaab] font-bold text-xl">4+</p>
                                    <p className="text-[#0a1929] text-xs">Years of Experience</p>
                                </div>
                            </div>

                            {/* Countries Served */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-[#4aeaab]/10 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-[#4aeaab]" />
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-[#4aeaab] font-bold text-xl">20+</p>
                                    <p className="text-[#0a1929] text-xs">Countries Served</p>
                                </div>
                            </div>

                            {/* Projects Completed */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-[#4aeaab]/10 flex items-center justify-center">
                                    <FolderKanban className="w-6 h-6 text-[#4aeaab]" />
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-[#4aeaab] font-bold text-xl">200+</p>
                                    <p className="text-[#0a1929] text-xs">Projects Completed</p>
                                </div>
                            </div>

                            {/* Professionals */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-[#4aeaab]/10 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-[#4aeaab]" />
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-[#4aeaab] font-bold text-xl">100+</p>
                                    <p className="text-[#0a1929] text-xs">Professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

