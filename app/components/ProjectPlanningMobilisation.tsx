import React from 'react';
import Image from 'next/image';

export default function ProjectPlanningMobilisation() {
    const items = [
        "Review of project scope and contractual requirements",
        "Development of execution plans and schedules",
        "Resource planning and site mobilisation",
        "Establishment of project controls and reporting structures",
    ];

    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
                            Project Planning and Mobilisation
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base leading-relaxed">
                            Project execution begins with structured planning and mobilisation activities that establish scope, responsibilities, and controls.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-600">
                            This includes:
                        </p>

                        <div className="mb-10 flex flex-col items-start gap-4">
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

                        <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                            Clear planning at the outset supports efficient execution and risk management.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/planning-section.jpg"
                                alt="People working at a table with layouts"
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
