import React from 'react';
import Image from 'next/image';

export default function HeadOffice() {
    return (
        <section className="bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Image - Full bleed to left and bottom */}
                <div className="relative w-full lg:w-1/2 pt-12 lg:pt-24">
                    <div className="relative aspect-[16/10] w-full lg:h-[600px] lg:aspect-auto">
                        <Image
                            src="/head-office.jpg"
                            alt="Blue glass skyscraper"
                            fill
                            className="object-cover object-left-bottom"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex w-full flex-col justify-center px-6 py-24 lg:w-1/2 lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl leading-tight">
                            Head Office
                        </h2>

                        <div className="space-y-6 text-sm leading-relaxed text-gray-400 md:text-base opacity-90">
                            <p className="font-semibold text-white">
                                Marble Group
                            </p>
                            <div className="space-y-1">
                                <p>[Head Office Address Line 1]</p>
                                <p>[City, State, Nigeria]</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
