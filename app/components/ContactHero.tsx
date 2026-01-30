"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

export default function ContactHero() {
    return (
        <div className="relative min-h-[85vh] w-full font-sans text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/contact-hero.jpg"
                    alt="Corporate architectural background"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Navbar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 flex w-full items-center justify-between px-6 py-8 md:px-12 lg:px-24"
            >
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/herologo.png"
                        alt="Marble & Grove Logo"
                        width={180}
                        height={60}
                        className="h-auto w-32 md:w-40 lg:w-48"
                        unoptimized
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-[11px] min-[1150px]:text-xs xl:text-[13px] font-medium tracking-wide text-gray-200">
                    <Link href="/" className="transition-colors hover:text-white">Home</Link>
                    <Link href="/about" className="transition-colors hover:text-white">Who We Are</Link>
                    <Link href="/services" className="transition-colors hover:text-white">Our Services</Link>
                    <Link href="/projects" className="transition-colors hover:text-white">Projects</Link>
                    <Link href="/execution-approach" className="transition-colors hover:text-white">Execution Approach</Link>
                    <Link href="/#governance" className="transition-colors hover:text-white">ESG</Link>
                    <Link href="#" className="transition-colors hover:text-white">News</Link>
                    <Link href="#" className="transition-colors hover:text-white">Careers</Link>
                </div>

                <Link
                    href="/contact"
                    className="hidden lg:block rounded-full bg-white px-8 py-3 text-[13px] font-semibold text-black transition-all hover:bg-gray-100"
                >
                    Contact
                </Link>

                <MobileMenu />
            </motion.nav>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 text-center md:pt-40 lg:pt-48">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h1 className="font-ibm-plex max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-7xl leading-[1.1]">
                        Corporate enquiries and project correspondence
                    </h1>

                    <div className="mt-12 max-w-2xl space-y-6 text-sm leading-relaxed text-gray-200 md:text-base opacity-90">
                        <p>
                            Marble & Grove Nigeria Ltd welcomes enquiries relating to project discussions, corporate matters, partnerships, and official correspondence.
                        </p>
                        <p>
                            All enquiries are managed through defined communication channels to ensure accuracy, consistency, and appropriate handling.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

