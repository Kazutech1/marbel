import React from 'react';
import Image from 'next/image';

export default function CareerOpportunities() {
    const roles = [
        "Construction and site management",
        "Engineering and technical support",
        "Health, safety, and quality functions",
        "Project coordination and administration",
        "Finance and corporate support",
    ];

    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
                            Career Opportunities
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base leading-relaxed">
                            From time to time, opportunities arise in line with project requirements and operational needs.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-400">
                            Roles may include
                        </p>

                        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-4">
                            {roles.map((role, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-full border border-gray-100 bg-white px-5 py-3 text-xs text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#E5DCC3]" />
                                    <span className="font-medium">{role}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm leading-relaxed text-gray-400">
                            Roles may be site-based or office-based, depending on project scope.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/career-opportunities.jpg"
                                alt="Team meeting bird eye view"
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
