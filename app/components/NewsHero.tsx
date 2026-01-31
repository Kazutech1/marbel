import React from 'react';
import Image from 'next/image';

export default function NewsHero() {
    return (
        <section className="bg-white pt-40 pb-24 text-gray-900 font-sans">
            <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
                <div className="flex flex-col gap-12">

                    {/* Header Split */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl">
                            <h1 className="text-3xl font-semibold md:text-4xl lg:text-6xl lg:leading-[1.1] text-[#1a1a1a]">
                                Company updates and official announcements
                            </h1>
                        </div>

                        <div className="max-w-xl space-y-6 lg:pt-2">
                            <p className="text-sm text-gray-400 md:text-base leading-relaxed">
                                The News page provides access to official updates and announcements relating to Marble & Grove Nigeria Ltd.
                            </p>
                            <p className="text-sm text-gray-400 md:text-base leading-relaxed">
                                Information published here reflects the company's commitment to accuracy, consistency, and responsible communication, and is released in line with internal approval processes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Image - Outside max-width container for edge-to-edge effect */}
            <div className="relative mt-12 w-full">
                <div className="relative aspect-[21/9] w-full overflow-hidden shadow-sm">
                    <Image
                        src="/news-hero.jpg"
                        alt="Official announcements and company updates"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
}
