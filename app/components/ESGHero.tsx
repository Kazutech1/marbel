import React from 'react';
import Image from 'next/image';

export default function ESGHero() {
    return (
        <section className="bg-white pt-40 pb-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
                <div className="flex flex-col gap-12">

                    {/* Top Content Area */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl">
                            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl lg:leading-[1.1] text-[#1a1a1a]">
                                Environmental, Social, and Governance responsibility in project delivery
                            </h1>
                        </div>

                        <div className="max-w-xl space-y-6 lg:pt-2">
                            <p className="text-sm font-medium text-gray-500 leading-relaxed md:text-base">
                                Marble & Grove Nigeria Ltd recognises that responsible construction requires attention to environmental management, workforce welfare, and governance discipline.
                            </p>
                            <p className="text-sm font-medium text-gray-500 leading-relaxed md:text-base">
                                ESG considerations are integrated into project planning and execution in a manner appropriate to project scope, regulatory requirements, and operating environment.
                            </p>
                        </div>
                    </div>

                    {/* Wide Image */}
                    <div className="relative mt-12 w-full">
                        <div className="relative aspect-[21/9] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/esg-hero.jpg"
                                alt="Professionals collaborating outdoors"
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
