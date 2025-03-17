export interface NAV_LINKS_TYPES {
    name: string;
    href: string;
    hasDropdown?: boolean;
}
export const NAV_LINKS: NAV_LINKS_TYPES[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/all-services", hasDropdown: true },
    { name: "Products", href: "/our-products"},
    { name: "Portfolio", href: "/our-portfolio" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Events", href: "/events" }
];