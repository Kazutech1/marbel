import React from 'react';
import Image from 'next/image';

export default function ScheduleCostControl() {
    const items = [
        "Progress tracking against approved schedules",
        "Monitoring of resource utilisation",
        "Management of variations and changes",
        "Reporting of performance and potential risks",
    ];

    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-semibold md:text-4xl lg:text-5xl">
                            Schedule and Cost Control
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base leading-relaxed">
                            Marble & Grove Nigeria Ltd applies schedule and cost controls appropriate to project scope.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-600">
                            This includes:
                        </p>

                        <div className="mb-10 flex flex-wrap gap-4">
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
                            Controls support transparency and accountability throughout execution.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/schedule-cost-control.jpg"
                                alt="Person using calculator over charts and documents"
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
