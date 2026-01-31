"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "What We Do", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Execution Approach", href: "/execution-approach" },
    { name: "ESG", href: "/esg" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function MobileMenu({ light = false }: { light?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const iconColor = light && !isOpen ? "bg-black" : "bg-white";

    const menuContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col bg-black px-8 py-24 text-white"
                >
                    <nav className="flex flex-col gap-4 pt-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full py-2 text-2xl font-medium tracking-tight transition-colors hover:text-gray-400"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <div className="lg:hidden">
            <button
                onClick={toggleMenu}
                className="relative z-[10000] flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none"
                aria-label="Toggle Menu"
            >
                <motion.span
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className={`h-0.5 w-6 transition-colors ${iconColor}`}
                />
                <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className={`h-0.5 w-6 transition-colors ${iconColor}`}
                />
                <motion.span
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className={`h-0.5 w-6 transition-colors ${iconColor}`}
                />
            </button>

            {mounted ? createPortal(menuContent, document.body) : null}
        </div>
    );
}
