"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CareersHero() {
    return (
        <section className="relative min-h-screen w-full font-sans text-white overflow-hidden flex flex-col justify-center items-center text-center px-6">
            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/careers-hero.jpg"
                    alt="Professional team at Marble & Grove"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-5xl pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="font-ibm-plex text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-7xl mb-8"
                >
                    Building capability for disciplined project delivery
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="space-y-6 text-base text-gray-200 md:text-lg max-w-3xl mx-auto leading-relaxed"
                >
                    <p>
                        Marble & Grove Nigeria Ltd recognises that effective construction and contracts execution depends on capable people, clear accountability, and professional conduct.
                    </p>
                    <p>
                        As a subsidiary of Marble Group, the company builds teams that support safe, compliant, and reliable project delivery, operating within structured governance and operational frameworks.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
