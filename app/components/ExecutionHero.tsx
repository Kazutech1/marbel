"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function ExecutionHero() {
    return (
        <div className="relative min-h-[85vh] w-full font-sans text-white overflow-hidden">
            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/hero-execution.jpg"
                    alt="Vision and Execution Strategy"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>



            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl pt-16"
                >
                    <h1 className="font-ibm-plex mb-10 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-7xl">
                        Delivering projects through structure, control, and accountability
                    </h1>

                    <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-gray-200 md:text-base lg:text-lg">
                        <p>
                            Marble & Grove Nigeria Ltd delivers construction projects using a structured execution approach designed to support safety, quality, regulatory compliance, and on-time delivery.
                        </p>
                        <p>
                            The company applies defined planning, control, and reporting processes across all projects, scaled appropriately to project scope and complexity.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
    );
}

