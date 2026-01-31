"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "What We Do", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Execution Approach", href: "/execution-approach" },
    { name: "#governance", href: "/#governance", label: "ESG" },
    { name: "News", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine variant based on path and scroll
    const isHome = pathname === "/";
    const isAbout = pathname === "/about";

    // Scrolled state always uses light style (white bg, black text)
    // Non-scrolled state depends on whether the page hero is light or dark
    // Most heroes are dark (Home, Services, Projects, etc.), but About is light
    const useLightStyle = scrolled || isAbout;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-4 md:px-12 lg:px-16 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                : "bg-transparent py-6"
                }`}
        >
            <div className="flex items-center justify-between max-w-[1400px] mx-auto w-full">
                <Link href="/" className="relative h-12 w-32 md:h-16 md:w-40">
                    <Image
                        src={useLightStyle ? "/footerlogo.png" : "/herologo.png"}
                        alt="Marble & Grove Nigeria Ltd"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-[11px] min-[1150px]:text-xs xl:text-sm font-medium tracking-wide">
                    {navLinks.map((link) => {
                        const href = link.href;
                        const label = link.label || link.name;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={link.name}
                                href={href}
                                className={`transition-all duration-300 ${isActive
                                    ? useLightStyle
                                        ? "rounded-full bg-[#E6D8B5] px-6 py-2 text-black"
                                        : "rounded-full bg-white px-6 py-2 text-black"
                                    : useLightStyle
                                        ? "text-gray-600 hover:text-black"
                                        : "text-gray-200 hover:text-white"
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>

                <MobileMenu light={useLightStyle} />
            </div>
        </motion.nav>
    );
}
