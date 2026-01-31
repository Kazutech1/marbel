import React from 'react';
import Image from 'next/image';

export default function HealthSafetyWorkforce() {
    const items = [
        "Site safety planning and risk assessments",
        "Safety briefings and toolbox talks",
        "Supervision of site activities",
        "Compliance with applicable labour and safety regulations",
    ];

    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
                            Health, Safety, and Workforce Welfare
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base leading-relaxed">
                            The safety and wellbeing of employees, subcontractors, and site personnel are treated as operational priorities.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-400">
                            Workforce and safety practices include:
                        </p>

                        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-full border border-gray-100 bg-white px-5 py-3 text-xs text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#8B7D5B]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="mb-10 text-sm leading-relaxed text-gray-400">
                            The company seeks to maintain safe and respectful working environments across all project sites.
                        </p>

                        <button className="w-fit rounded-full bg-[#E5DCC3] px-8 py-4 text-sm font-semibold text-[#5C5441] transition-all hover:bg-[#d4c9a8]">
                            Operating Focus
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/health-safety-esg.jpg"
                                alt="Professional in hard hat and mask at construction site"
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
