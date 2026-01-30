import React from 'react';
import Image from 'next/image';

export default function ReportingOversight() {
    const items = [
        "Regular progress reporting",
        "Issue and risk escalation",
        "Performance monitoring",
    ];

    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-8">
                <div className="flex flex-col gap-12">

                    {/* Top Content Area */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="mb-6 text-3xl font-semibold md:text-4xl lg:text-5xl text-[#1a1a1a]">
                                Reporting and Oversight
                            </h2>
                            <p className="mb-8 text-sm font-medium text-gray-600">
                                Reporting processes include:
                            </p>
                            <div className="flex flex-wrap gap-4">
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

                        <div className="max-w-md lg:pt-4">
                            <p className="text-sm text-gray-500 leading-relaxed md:text-base">
                                Project reporting supports oversight, decision-making, and accountability.
                            </p>
                        </div>
                    </div>

                    {/* Sub-text above image */}
                    <div className="mt-4">
                        <p className="text-sm leading-relaxed text-gray-500">
                            Projects benefit from oversight aligned with Marble Group governance standards.
                        </p>
                    </div>

                    {/* Wide Image */}
                    <div className="relative mt-8 w-full">
                        <div className="relative aspect-[21/9] w-full overflow-hidden shadow-sm ">
                            <Image
                                src="/reporting-oversight.jpg"
                                alt="Professionals reviewing charts on a desk"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
