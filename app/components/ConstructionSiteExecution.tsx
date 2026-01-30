import React from 'react';
import Image from 'next/image';

export default function ConstructionSiteExecution() {
    const items = [
        "Day-to-day site supervision",
        "Coordination of subcontractors and suppliers",
        "Interface management with consultants and stakeholders",
        "Monitoring of progress against schedule",
    ];

    return (
        <section className="relative bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Image - Full bleed to left and bottom */}
                <div className="relative w-full lg:w-1/2 pt-12 lg:pt-24 lg:pb-0">
                    <div className="relative aspect-[16/10] w-full lg:h-[600px] lg:aspect-auto">
                        <Image
                            src="/construction-site.jpg"
                            alt="Construction site with excavators"
                            fill
                            className="object-cover object-left-bottom"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex w-full flex-col justify-center px-6 py-24 lg:w-1/2 lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl leading-tight">
                            Construction and Site Execution
                        </h2>

                        <p className="mb-8 text-sm text-gray-400 md:text-base leading-relaxed">
                            Construction activities are managed through structured supervision and coordination.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-500">
                            This includes:
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

                        <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                            Execution is supported by defined roles, responsibilities, and authority levels.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
