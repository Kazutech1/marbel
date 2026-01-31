import React from 'react';
import Image from 'next/image';

export default function ProjectRelatedUpdates() {
    const items = [
        "Project category or type",
        "General scope of work",
        "Execution phase or milestone",
    ];

    return (
        <section className="bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Content */}
                <div className="flex w-full flex-col justify-center px-6 py-24 lg:w-1/2 lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl leading-tight">
                            Project-Related Updates
                        </h2>

                        <p className="mb-8 text-sm text-gray-400 md:text-base leading-relaxed opacity-90">
                            Where appropriate, updates on project activities may be shared at a high level, subject to contractual permissions.
                        </p>

                        <p className="mb-6 text-sm font-medium text-gray-500">
                            Project disclosures are limited to:
                        </p>

                        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-full border border-gray-800 bg-white px-5 py-3 text-xs text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#8B7D5B]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm leading-relaxed text-gray-400 opacity-90">
                            Client identities and commercial terms are disclosed only where permitted.
                        </p>
                    </div>
                </div>

                {/* Right Image - End on the right edge */}
                <div className="relative w-full lg:w-1/2 py-12 lg:py-24 pr-0">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-lg">
                        <img
                            src="/project-news.jpg"
                            alt="Bird-eye view of professionals working at a desk"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
