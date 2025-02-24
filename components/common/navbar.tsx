'use client'
import { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/navbar-menu";
import { Card, CardHeader } from "../ui/card";
import { AnimatePresence, motion } from 'framer-motion'
const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex items-center justify-between container mx-auto w-full font-roboto">
            <div className="flex justify-between items-center w-full">
                <Link href={'/'}>
                    <Image src={'/acote-logo.png'} alt="acote group logo" width={118} height={67} />
                </Link>
                <div className="flex items-center gap-16 w-full justify-end">
                    <ul className="flex gap-12 items-center">
                        <li>Home</li>
                        <li>
                            <MyComponentFlyout href="#" FlyoutContent >
                                <p>Service</p>
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
    );
};

export default NavigationMenu;


const MyComponentFlyout = ({ children, href = "", FlyoutContent }: { children: ReactNode, href: string, FlyoutContent: boolean }) => {
    const [open, setOpen] = useState(false)
    const showFlyout = open && FlyoutContent
    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <a href={href} className="text-black">
                {children}
            </a>
            <AnimatePresence>
                {
                    showFlyout &&
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ x: '-50%' }}
                        className="absolute top-16 left-1/2 w-full">
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
                <div className="flex justify-between w-full">
                    {Object.values(services).map((section) => (
                        <div key={section.title} className="space-y-3">
                            <h4 className="text-[26px] font-bold font-grotesk underline underline-offset-2 text-[#525252] leading-[24px]">{section.title}</h4>
                            <div className="space-y-2">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.title}
                                        href="#"
                                        className="group flex items-start gap-2 rounded-lg p-2 hover:bg-muted"
                                    >
                                        <div>
                                            <item.icon />
                                        </div>
                                        <div className="space-y-1">
                                            <h5 className="text-sm font-medium leading-none font-inter">{item.title}</h5>
                                            <p className="line-clamp-2 text-xs text-muted-foreground">{item.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-primary shadow-none">
                                All Services →
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