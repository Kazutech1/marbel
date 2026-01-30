import React from 'react';
import Image from 'next/image';

export default function ProjectExecution() {
    const executionItems = [
        "Project planning and scheduling",
        "Site supervision and coordination",
        "Health and safety management",
        "Quality assurance and inspections",
        "Progress monitoring and reporting",
    ];

    return (
        <section className="bg-white py-24 text-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
                            Project Execution
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base">
                            All projects are managed through defined execution processes that include:
                        </p>

                        <div className="mb-10 flex flex-wrap gap-4">
                            {executionItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2.5 rounded-full border border-gray-100 bg-white px-5 py-3 text-xs text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#D4C9A8]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                            Execution is supported by clear reporting lines and oversight mechanisms.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative aspect-[16/10] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/project-execution.jpg"
                                alt="Team reviewing blueprints at a table"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
