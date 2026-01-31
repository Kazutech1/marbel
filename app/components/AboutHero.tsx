"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <div className="relative w-full bg-white font-sans text-black overflow-hidden">
            {/* Content Area */}
            <div className="px-8 pt-32 pb-12 md:px-12 lg:px-16">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 mb-16">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col justify-between space-y-12 lg:space-y-0 h-full"
                    >
                        <h1 className="font-ibm-plex text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl text-gray-900">
                            What We Do
                        </h1>
                        <p className="max-w-md text-sm leading-relaxed text-gray-500">
                            Marble & Grove Nigeria Ltd operates as a subsidiary of Marble Group, benefiting from Group-level governance, risk management, and performance oversight.
                        </p>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="space-y-6 text-base leading-relaxed text-gray-600 md:text-lg"
                    >
                        <p>
                            Marble & Grove Nigeria Ltd is a Nigerian construction and contracts execution company, delivering civil, industrial, and infrastructure projects across public and private sectors.
                        </p>
                        <p>
                            The company focuses on projects that require disciplined execution, technical competence, and regulatory compliance, operating within structured controls designed to support quality, safety, and on-time delivery.
                        </p>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2/1] lg:aspect-[21/9]"
                >
                    <Image
                        src="/about-hero.jpg"
                        alt="Construction Site Workers"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </div >
    );
}

