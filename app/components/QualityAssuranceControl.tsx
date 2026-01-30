import React from 'react';
import Image from 'next/image';

export default function QualityAssuranceControl() {
    const items = [
        "Inspection and testing plans",
        "Verification of materials and workmanship",
        "Monitoring of compliance with drawings and specifications",
        "Documentation and corrective action where required",
    ];

    return (
        <section className="bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Content */}
                <div className="flex w-full flex-col justify-center px-6 py-24 lg:w-1/2 lg:pl-12 lg:pr-16 xl:pl-24">
                    <div className="max-w-xl">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl">
                            Quality Assurance and Control
                        </h2>

                        <p className="mb-8 text-sm text-gray-400 md:text-base leading-relaxed">
                            Quality assurance is embedded throughout the project lifecycle to ensure work meets technical specifications and applicable standards.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-500">
                            Quality control measures include:
                        </p>

                        <div className="mb-10 flex flex-wrap gap-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs text-gray-800 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#8B7D5B]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Image - Flush with right edge with vertical margin */}
                <div className="relative w-full lg:w-1/2 py-12 lg:py-24">
                    <div className="relative aspect-[16/10] w-full lg:h-full lg:aspect-auto overflow-hidden">
                        <Image
                            src="/quality-assurance.jpg"
                            alt="Professionals reviewing data on a laptop and documents"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
