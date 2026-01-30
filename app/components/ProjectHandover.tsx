import React from 'react';
import Image from 'next/image';

export default function ProjectHandover() {
    const items = [
        "Final inspections and verification",
        "Documentation and as-built records",
        "Handover to client representatives",
    ];

    return (
        <section className="bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Content */}
                <div className="flex w-full flex-col justify-center px-6 py-24 lg:w-1/2 lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl leading-tight">
                            Project Completion and Handover
                        </h2>

                        <p className="mb-8 text-sm text-gray-400 md:text-base leading-relaxed">
                            Project completion activities are managed to ensure orderly handover and closure.
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
                            Completion processes are aligned with contractual and quality requirements.
                        </p>
                    </div>
                </div>

                {/* Right Image - ends at the right edge with vertical margin */}
                <div className="relative w-full lg:w-1/2 py-12 lg:py-24">
                    <div className="relative aspect-[16/10] w-full lg:h-full lg:aspect-auto overflow-hidden">
                        <Image
                            src="/project-handover.jpg"
                            alt="Professionals shaking hands on a construction site"
                            fill
                            className="object-cover object-center"
                            unoptimized
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
