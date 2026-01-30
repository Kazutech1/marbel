"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

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
          src="/herobg.jpg"
          alt="Construction Site Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-8 py-6 md:px-12 lg:px-16">
        {/* Navbar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <Link href="/" className="relative h-12 w-32 md:h-16 md:w-40">
            <Image
              src="/herologo.png"
              alt="Marble & Grove Nigeria Ltd"
              fill
              className="object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link
              href="/"
              className="rounded-full bg-white px-6 py-2 text-black transition hover:bg-white/90"
            >
              Home
            </Link>
            <Link href="/about" className="text-gray-200 transition hover:text-white">Who We Are</Link>
            <Link href="/services" className="text-gray-200 transition hover:text-white">What We Do</Link>
            <Link href="/services" className="text-gray-200 transition hover:text-white">Our Services</Link>
            <Link href="/projects" className="text-gray-200 transition hover:text-white">Projects</Link>
            <Link href="/execution-approach" className="text-gray-200 transition hover:text-white">Execution Approach</Link>
            <Link href="/#governance" className="text-gray-200 transition hover:text-white">ESG</Link>
            <Link href="#" className="text-gray-200 transition hover:text-white">News</Link>
            <Link href="#" className="text-gray-200 transition hover:text-white">Careers</Link>
            <Link href="/contact" className="text-gray-200 transition hover:text-white">Contact</Link>
          </div>

          <MobileMenu />
        </motion.nav>

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

