"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/home-hero.jpg"
          alt="Construction Site Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-8 py-12 md:px-12 lg:px-16 pb-24">

        {/* Content Area */}
        <div className="mb-8 flex flex-col items-end justify-between lg:flex-row lg:items-end">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-block rounded-full bg-black/30 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-gray-200 border border-white/10">
              A subsidiary of Marble Group
            </div>

            <h1 className="font-ibm-plex text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              We are Marble & Grove Nigeria LTD
            </h1>

            <div className="space-y-4 text-base text-gray-200 md:text-lg max-w-2xl leading-relaxed">
              <p>
                Marble & Grove Nigeria Ltd is a Nigerian construction and contracts execution company, delivering civil, industrial, and infrastructure projects across public and private sectors.
              </p>
              <p>
                Operating as a subsidiary of Marble Group, the company combines on-ground execution capability with Group-level governance, risk management, and operational oversight, ensuring projects are delivered with quality, safety, and accountability.
              </p>
            </div>
          </motion.div>

          {/* Right Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex gap-4 lg:mt-0"
          >
            <Link
              href="/services"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Our Services
            </Link>
            <Link
              href="/projects"
              className="rounded-full bg-white/10 backdrop-blur-md px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/20 border border-white/10"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

