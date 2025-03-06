'use client'
import { services } from "@/data/navbar-menu";
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const NavigationMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full shadow-sm py-2">
            <div className="relative flex items-center justify-between container mx-auto w-full font-roboto px-4 md:px-0">
                <Link href={'/'}>
                    <Image src={'/acote-logo.png'} alt="acote group logo" width={118} height={67} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-16 w-full justify-end">
                    <ul className="flex gap-12 items-center">
                        <li><Link href={'/'}>Home</Link></li>
                        <li>
                            <MyComponentFlyout href="/our-services" FlyoutContent open={open} setOpen={setOpen}>
                                <p className="inline-flex gap-2 items-center transition-all duration-500 ease-in-out delay-300">
                                    Service {!open ? <ChevronDown size={20} className="transition-transform duration-300" /> : <ChevronDown size={20} className="transition-transform duration-300 rotate-180" />}
                                </p>
                            </MyComponentFlyout>
                        </li>
                        <li><Link href={'/our-portfolio'}>Portfolio</Link></li>
                        <li><Link href={'/about-us'}>About</Link></li>
                        <li><Link href={'/contact-us'}>Contact</Link></li>
                        <li><Link href={'/events'}>Events</Link></li>
                    </ul>
                    <Link href={'/book-appointment'}>
                        <Button variant={'default'}>Book an appointment</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu size={24} />
                            </Button>
                        </SheetTrigger>

                        <SheetTitle></SheetTitle>
                        <SheetContent side="left" className="w-64 p-5">
                            <ul className="flex flex-col gap-4">
                                <li><Link href={'/'}>Home</Link></li>
                                <li><Link href={'/our-services'}>Services</Link></li>
                                <li><Link href={'/our-portfolio'}>Portfolio</Link></li>
                                <li><Link href={'/about-us'}>About</Link></li>
                                <li><Link href={'/contact-us'}>Contact</Link></li>
                                <li><Link href={'/events'}>Events</Link></li>
                            </ul>
                            <Link href={'/book-appointment'} className="mt-4 block">
                                <Button variant={'default'} size={'sm'} className="w-[80%] text-sm">Book an appointment</Button>
                            </Link>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;

const MyComponentFlyout = ({ open, setOpen, children, href = "", FlyoutContent }: { open: boolean, children: ReactNode, href: string, FlyoutContent: boolean, setOpen: (open: boolean) => void }) => {
    const showFlyout = open && FlyoutContent;
    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <Link href={href} className="text-black">
                {children}
            </Link>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ x: '-50%' }}
                        className="absolute z-50 top-16 left-1/2 w-full"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
                        <ServiceDropdownMenu />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

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
                            </Button>
                        </div>
                    ))}
                </div>
            </CardHeader>
        </Card>
    );
};
