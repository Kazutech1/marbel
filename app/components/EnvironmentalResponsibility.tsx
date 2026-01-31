import React from 'react';
import Image from 'next/image';

export default function EnvironmentalResponsibility() {
    const items = [
        "Compliance with applicable environmental laws and regulations",
        "Site controls to minimise dust, waste, and environmental disturbance",
        "Responsible handling and disposal of construction materials and waste",
        "Coordination with regulators and consultants where environmental approvals are required",
    ];

    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl text-[#1a1a1a]">
                            Environmental Responsibility
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base leading-relaxed">
                            Environmental considerations are addressed throughout project execution, particularly in relation to site activities and construction impacts.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-400">
                            Environmental management practices include:
                        </p>

                        <div className="mb-10 flex flex-col gap-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex w-fit items-center gap-3 rounded-full border border-gray-100 bg-white px-5 py-3 text-xs text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#D4C9A8]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm leading-relaxed text-gray-400">
                            Environmental measures are applied in proportion to project scope and regulatory expectations.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/env-resp.jpg"
                                alt="Volunteers planting trees"
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
