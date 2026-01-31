import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#efeff3] pt-20 pb-32 lg:pb-40">
            {/* Background Large Text Effect */}
            <div className="absolute bottom-0 left-0 right-0 z-0 select-none overflow-hidden leading-none pointer-events-none">
                <span className="block text-[12rem] font-bold text-[#E5E7E6] whitespace-nowrap text-center opacity-100 lg:text-[18rem]">
                    arble & Grove
                </span>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-8xl px-6 lg:px-8">
                <div className="rounded-[2.5rem] bg-white p-12 shadow-sm border border-gray-100">
                    <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

                        {/* Left Column: Logo & Description */}
                        <div className="max-w-md">
                            <div className="mb-8">
                                <Image
                                    src="/footerlogo.png"
                                    alt="Marble & Grove Nigeria Ltd"
                                    width={180}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm leading-relaxed text-gray-500">
                                Marble & Grove Nigeria Ltd is a Nigerian construction and contracts execution company, delivering civil, industrial, and infrastructure projects across public and private sectors.
                            </p>
                        </div>

                        {/* Right Columns: Links */}
                        <div className="flex gap-16 lg:gap-24">
                            {/* Careers Column */}
                            <div className="flex flex-col gap-4">
                                <h3 className="font-semibold text-gray-900">Careers</h3>
                                <Link href="/careers" className="text-sm text-gray-500 hover:text-gray-900">
                                    Careers
                                </Link>
                            </div>

                            {/* Company Column */}
                            <div className="flex flex-col gap-4">
                                <h3 className="font-semibold text-gray-900">Company</h3>
                                <nav className="flex flex-col gap-3">
                                    <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">Home</Link>
                                    <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">What We Do</Link>
                                    <Link href="/services" className="text-sm text-gray-500 hover:text-gray-900">Our Services</Link>
                                    <Link href="/projects" className="text-sm text-gray-500 hover:text-gray-900">Projects</Link>
                                    <Link href="/execution-approach" className="text-sm text-gray-500 hover:text-gray-900">Execution Approach</Link>
                                    <Link href="/esg" className="text-sm text-gray-500 hover:text-gray-900">ESG</Link>
                                    <Link href="/news" className="text-sm text-gray-500 hover:text-gray-900">News</Link>
                                    <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</Link>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-xs text-gray-500 md:flex-row">
                        <p>2026 Marble Group. All rights reserved</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
                            <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
