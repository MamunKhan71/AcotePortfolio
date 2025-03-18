'use client'
import { NAV_LINKS } from "@/data/nav-links-data";
import { services } from "@/data/navbar-menu";
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const NavigationMenu = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname();
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    return (
        <div className="w-full py-0 md:py-2 sticky top-0 bg-white z-50 shadow-md">
            <div className="relative flex items-center justify-between container mx-auto w-full font-roboto px-4 md:px-0">
                <Link href={'/'}>
                    <Image src={'/acote-logo.png'} alt="acote group logo" width={118} height={67} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-16 w-full justify-end">
                    <ul className="flex gap-12 items-center">
                        {
                            NAV_LINKS?.map((navItem, index) => (
                                <li key={`navbar-item-${index}`}>
                                    {
                                        navItem?.hasDropdown ? <MyComponentFlyout href={navItem.href} FlyoutContent open={open} setOpen={setOpen}>
                                            <p className={`inline-flex gap-2 items-center transition-all duration-500 ease-in-out delay-300 ${navItem.href === pathname ? 'text-primary font-bold' : 'text-black'}`}>
                                                {navItem.name} {!open ? <ChevronDown size={20} className="transition-transform duration-300" /> : <ChevronDown size={20} className="transition-transform duration-300 rotate-180" />}
                                            </p>
                                        </MyComponentFlyout> : <Link className={`${navItem.href === pathname ? 'text-primary font-bold' : 'text-black'}`} href={navItem.href}>{navItem.name}</Link>
                                    }
                                </li>
                            ))
                        }
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

                        <SheetContent side="left" className="w-[85vw] sm:w-80 p-5 overflow-y-auto">
                            <SheetTitle></SheetTitle>
                            <div className="py-4">
                                <Link href={"/"} className="mb-6 block">
                                    <Image src={"/acote-logo.png"} alt="acote group logo" width={118} height={67} />
                                </Link>
                                <ul className="flex flex-col gap-4">
                                    {
                                        NAV_LINKS?.map((navItem, index) => navItem.hasDropdown ?
                                            <li key={`mobile-nav-${index}`}>
                                                <Collapsible open={mobileServicesOpen} onOpenChange={setMobileServicesOpen} className="w-full">
                                                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                                                        Services
                                                        <ChevronDown
                                                            size={20}
                                                            className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                                        />
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent className="mt-2">
                                                        <MobileServiceMenu />
                                                    </CollapsibleContent>
                                                </Collapsible>
                                            </li> :
                                            <li key={`mobile-nav-${index}`}>
                                                <Link href={navItem.href}>{navItem.name}</Link>
                                            </li>
                                        )
                                    }
                                </ul>
                                <Link href={"/book-appointment"} className="mt-6 block">
                                    <Button variant={"default"} className="w-full">
                                        Book an appointment
                                    </Button>
                                </Link>
                            </div>
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
                                        href={item.href}
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


// Mobile-optimized version of the service menu
const MobileServiceMenu = () => {
    return (
        <div className="space-y-6 mt-2">
            {Object.values(services).map((section) => (
                <div key={section.title} className="space-y-2">
                    <h4 className="text-base font-bold font-grotesk text-[#525252]">{section.title}</h4>
                    <div className="space-y-3 font-inter">
                        {section.items.map((item) => (
                            <Link key={item.title} href="#" className="group flex items-start gap-2 rounded-lg py-1.5 hover:bg-muted">
                                <div className="mt-0.5">
                                    <item.icon />
                                </div>
                                <div>
                                    <h5 className="text-sm font-medium leading-tight">{item.title}</h5>
                                    <p className="text-xs text-muted-foreground leading-tight">{item.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs font-semibold text-[#FF5E5E] shadow-none">
                        All Services
                    </Button>
                </div>
            ))}
        </div>
    )
}
