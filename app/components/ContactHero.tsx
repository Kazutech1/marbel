"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


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

