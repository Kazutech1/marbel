import React from 'react';
import Image from 'next/image';

export default function CurrentVacancies() {
    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-2xl shadow-sm">
                            <Image
                                src="/vacancies.jpg"
                                alt="Person holding a tablet with JOBS text"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
                            Current Vacancies
                        </h2>

                        <p className="text-sm text-gray-400 md:text-base leading-relaxed opacity-90">
                            There are currently no open positions
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
