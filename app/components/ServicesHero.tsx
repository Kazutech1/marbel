"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function ServicesHero() {
    return (
        <div className="relative min-h-screen w-full bg-[#0a0a0a] font-sans text-white overflow-hidden">


            {/* Background Image Asset */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0 select-none"
            >
                <Image
                    src="/services-hero-bg.png"
                    alt="Background texture"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Subtle overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 pt-16 pb-24">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">

                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full pt-16 lg:w-1/2"
                    >
                        <h1 className="font-ibm-plex mb-10 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
                            Construction and contracts execution across key sectors
                        </h1>

                        <div className="max-w-xl space-y-8 text-sm leading-relaxed text-gray-300 md:text-base">
                            <p>
                                Marble & Grove Nigeria Ltd provides construction and contracts services focused on disciplined execution, regulatory compliance, and reliable delivery. Services are structured to support projects across civil, industrial, and infrastructure environments.
                            </p>
                            <p>
                                The company undertakes work under defined contractual frameworks and in alignment with approved specifications, safety requirements, and project controls.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Image Grid - Staggered Layout */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Left Column (Starts lower) */}
                            <div className="flex flex-col gap-4 mt-12">
                                {/* Top: Woman with notebook */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="relative aspect-square w-full"
                                >
                                    <Image
                                        src="/services-woman.jpg"
                                        alt="Professional on site with notes"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                {/* Bottom: 2 Workers in vests */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="relative aspect-[4/5] w-full"
                                >
                                    <Image
                                        src="/services-vests.jpg"
                                        alt="Workers reviewing plans on site"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>

                            {/* Right Column (Starts higher - negative margin to pull up) */}
                            <div className="flex flex-col gap-4 -mt-12">
                                {/* Top: Clipboard writing */}
                                <motion.div
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    className="relative aspect-[4/3] w-full"
                                >
                                    <Image
                                        src="/services-clipboard.jpg"
                                        alt="Hands writing on clipboard"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                {/* Bottom: Team in suits/helmets */}
                                <motion.div
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                    className="relative aspect-square w-full"
                                >
                                    <Image
                                        src="/services-team.jpg"
                                        alt="Team reviewing construction plans"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#111] via-[#0a0a0a] to-black pointer-events-none" />
            <div className="absolute top-0 left-[20%] w-[20%] h-full bg-white/5 -skew-x-12 blur-3xl opacity-20 pointer-events-none" />

        </div>
    );
}

