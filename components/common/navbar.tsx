'use client'
import { services } from "@/data/navbar-menu";
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
const NavigationMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full shadow-sm py-2">
            <div className="relative flex items-center justify-between container mx-auto w-full font-roboto">
                <div className="flex justify-between items-center w-full">
                    <Link href={'/'}>
                        <Image src={'/acote-logo.png'} alt="acote group logo" width={118} height={67} />
                    </Link>
                    <div className="flex items-center gap-16 w-full justify-end">
                        <ul className="flex gap-12 items-center">
                            <li>Home</li>
                            <li>
                                <MyComponentFlyout href="/our-services" FlyoutContent open={open} setOpen={setOpen}>
                                    <p className="inline-flex gap-2 items-center transition-all duration-500 ease-in-out delay-300">
                                        Service {!open ? <ChevronDown size={20} className="transition-transform duration-300" /> : <ChevronDown size={20} className="transition-transform duration-300 rotate-180" />}
                                    </p>
                                </MyComponentFlyout>
                            </li>
                            <li>Portfolio</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        <Button variant={'default'}>Book an appointment</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;


const MyComponentFlyout = ({ open, setOpen, children, href = "", FlyoutContent }: { open: boolean, children: ReactNode, href: string, FlyoutContent: boolean, setOpen: (open: boolean) => void }) => {
    const showFlyout = open && FlyoutContent
    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <Link href={href} className="text-black">
                {children}
            </Link>
            <AnimatePresence>
                {
                    showFlyout &&
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ x: '-50%' }}
                        className="absolute z-50 top-16 left-1/2 w-full">
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent">
                        </div>
                        <ServiceDropdownMenu />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )

}


const ServiceDropdownMenu = () => {
    return (
        <Card className="flex justify-between w-full drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-2xl border-none">
            <CardHeader className="p-10">
                <div className="flex justify-between gap-[30px] w-full">
                    {Object.values(services).map((section) => (
                        <div key={section.title} className="space-y-5">
                            <h4 className="text-[26px] font-bold font-grotesk underline underline-offset-2 text-[#525252] leading-[24px]">{section.title}</h4>
                            <div className="space-y-2 font-inter mb-10">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.title}
                                        href="#"
                                        className="group flex items-start gap-2 rounded-lg p-3 hover:bg-muted"
                                    >
                                        <div>
                                            <item.icon />
                                        </div>
                                        <div className="space-y-1">
                                            <h5 className="text-base font-medium leading-none">{item.title}</h5>
                                            <p className="line-clamp-2 text-sm text-muted-foreground leading-[20px]">{item.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Button variant="link" size="sm" className="h-auto p-0 text-sm font-semibold text-[#FF5E5E] shadow-none">
                                All Services
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.3172 10.4422L11.6922 16.0672C11.5749 16.1844 11.4159 16.2503 11.25 16.2503C11.0841 16.2503 10.9251 16.1844 10.8078 16.0672C10.6905 15.9499 10.6247 15.7908 10.6247 15.625C10.6247 15.4591 10.6905 15.3001 10.8078 15.1828L15.3664 10.625H3.125C2.95924 10.625 2.80027 10.5591 2.68306 10.4419C2.56585 10.3247 2.5 10.1657 2.5 9.99998C2.5 9.83422 2.56585 9.67525 2.68306 9.55804C2.80027 9.44083 2.95924 9.37498 3.125 9.37498H15.3664L10.8078 4.81717C10.6905 4.69989 10.6247 4.54083 10.6247 4.37498C10.6247 4.20913 10.6905 4.05007 10.8078 3.93279C10.9251 3.81552 11.0841 3.74963 11.25 3.74963C11.4159 3.74963 11.5749 3.81552 11.6922 3.93279L17.3172 9.55779C17.3753 9.61584 17.4214 9.68477 17.4529 9.76064C17.4843 9.83652 17.5005 9.91785 17.5005 9.99998C17.5005 10.0821 17.4843 10.1634 17.4529 10.2393C17.4214 10.3152 17.3753 10.3841 17.3172 10.4422Z" fill="#FF5E5E" />
                                </svg>
                            </Button>
                        </div>
                    ))}
                </div>
            </CardHeader>
        </Card>
    )
}


const colorProfile = () => {

}