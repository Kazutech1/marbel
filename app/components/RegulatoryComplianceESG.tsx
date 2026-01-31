import React from 'react';
import Image from 'next/image';

export default function RegulatoryComplianceESG() {
    const items = [
        "Project planning",
        "Execution and supervision",
        "Reporting and documentation",
    ];

    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/regulatory-compliance-esg.jpg"
                                alt="Professionals in hard hats reviewing architectural plans"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
                            Regulatory Compliance
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base leading-relaxed">
                            Compliance with laws, regulations, and contractual requirements is a core component of responsible operations.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-400">
                            Compliance considerations are integrated into:
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-full border border-gray-100 bg-white px-5 py-3 text-xs text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#D4C9A8]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
