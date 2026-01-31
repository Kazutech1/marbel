import React from 'react';
import Image from 'next/image';

export default function CommunitySocialConsiderations() {
    const items = [
        "Respect for local communities and stakeholders",
        "Compliance with applicable community engagement requirements",
        "Responsible conduct by employees and contractors",
    ];

    return (
        <section className="bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Image - Starts from left and bottom edge */}
                <div className="relative w-full lg:w-1/2 pt-12 lg:pt-24 lg:pb-0">
                    <div className="relative aspect-[16/10] w-full lg:h-[600px] lg:aspect-auto">
                        <Image
                            src="/community-social.jpg"
                            alt="Group of diverse people looking at a smartphone"
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
                            Community and Social Considerations
                        </h2>

                        <p className="mb-8 text-sm text-gray-400 md:text-base leading-relaxed opacity-90">
                            Where projects interact with local communities, Marble & Grove Nigeria Ltd seeks to operate responsibly and with awareness of social considerations.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-500">
                            This includes:
                        </p>

                        <div className=" flex flex-col gap-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex w-fit items-center gap-3 rounded-full border border-gray-800 bg-white px-5 py-3 text-xs text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#8B7D5B]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm leading-relaxed text-gray-400 opacity-90">
                            Community considerations are managed in alignment with project scope and contractual obligations.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
