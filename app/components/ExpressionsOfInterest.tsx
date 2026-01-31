import React from 'react';
import Image from 'next/image';

export default function ExpressionsOfInterest() {
    const items = [
        "A current curriculum vitae",
        "A brief cover note outlining area of expertise or interest",
    ];

    return (
        <section className="bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Image - Starts from left and bottom edge */}
                <div className="relative w-full lg:w-1/2 pt-12 lg:pt-24 lg:pb-0">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-sm">
                        <Image
                            src="/expressions-interest.jpg"
                            alt="Group of professionals in a line"
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
                            Expressions of Interest
                        </h2>

                        <p className="mb-8 text-sm text-gray-400 md:text-base leading-relaxed opacity-90">
                            Professionals who wish to be considered for future opportunities may submit an expression of interest.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-400">
                            Expressions of interest should include:
                        </p>

                        <div className="mb-10 flex flex-col gap-4">
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

                        <div className="space-y-6 text-sm text-gray-400 md:text-base leading-relaxed opacity-90">
                            <p>
                                Submissions can be sent to: <span className="text-white font-medium">careers@marbleandgrove.com</span>
                            </p>
                            <p>
                                All submissions are reviewed as part of our ongoing talent assessment process. Only shortlisted candidates will be contacted.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
