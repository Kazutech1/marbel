"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

export default function ProjectsHero() {
    return (
        <div className="relative min-h-[80vh] w-full font-sans text-white overflow-hidden">
            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/projects-hero.jpg"
                    alt="Construction Site at Sunset"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </motion.div>

            {/* Navbar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 flex items-center justify-between px-6 py-8 lg:px-12"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-32 md:h-16 md:w-40">
                        <Image
                            src="/herologo.png"
                            alt="Marble & Grove Nigeria Ltd"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Nav Links */}
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide">
                    <Link href="/" className="text-gray-300 transition hover:text-white">Home</Link>
                    <Link href="/about" className="text-gray-300 transition hover:text-white">Who We Are</Link>
                    <Link href="/services" className="text-gray-300 transition hover:text-white">Our Services</Link>
                    <Link href="/projects" className="rounded-full bg-white px-6 py-2.5 text-black font-semibold">Projects</Link>
                    <Link href="/execution-approach" className="text-gray-300 transition hover:text-white">Execution Approach</Link>
                    <Link href="/#governance" className="text-gray-300 transition hover:text-white">ESG</Link>
                    <Link href="#" className="text-gray-300 transition hover:text-white">News</Link>
                    <Link href="#" className="text-gray-300 transition hover:text-white">Careers</Link>
                    <Link href="/contact" className="text-gray-300 transition hover:text-white">Contact</Link>
                </div>

                <MobileMenu />
            </motion.nav>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl pt-12"
                >
                    <h1 className="font-ibm-plex mb-8 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-7xl">
                        Delivering projects with discipline and accountability
                    </h1>

                    <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-gray-200 md:text-base lg:text-lg">
                        <p>
                            Marble & Grove Nigeria Ltd undertakes construction projects across civil, industrial, and infrastructure categories, delivering work in accordance with approved specifications, contractual obligations, and regulatory requirements.
                        </p>
                        <p>
                            Projects are executed using structured planning, defined controls, and <span className="text-white font-medium">clear</span> accountability frameworks aligned with the company&apos;s execution approach.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
    );
}

