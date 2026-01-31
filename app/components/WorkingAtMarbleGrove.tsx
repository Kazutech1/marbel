import React from 'react';
import Image from 'next/image';

export default function WorkingAtMarbleGrove() {
    const items = [
        "Professional and structured",
        "Safety-focused",
        "Performance-driven",
        "Aligned with applicable laws and industry standards",
    ];

    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-2xl shadow-sm">
                            <Image
                                src="/working-at.jpg"
                                alt="Professionals reviewing documents"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
                            Working at Marble & Grove Nigeria Ltd
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base leading-relaxed">
                            Careers at Marble & Grove Nigeria Ltd offer the opportunity to contribute to projects that require technical competence, execution discipline, and regulatory awareness.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-400">
                            The working environment is:
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

                        <p className="text-sm leading-relaxed text-gray-400">
                            Employees are expected to operate responsibly and in accordance with company policies and procedures.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
