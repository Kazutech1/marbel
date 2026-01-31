import React from 'react';
import Image from 'next/image';

export default function EqualOpportunity() {
    return (
        <section className="bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Content */}
                <div className="flex w-full flex-col justify-center px-6 py-24 lg:w-1/2 lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl leading-tight">
                            Equal Opportunity
                        </h2>

                        <p className="text-sm text-gray-400 md:text-base leading-relaxed opacity-90">
                            Marble Group is committed to fair and equitable employment practices. Recruitment and advancement decisions are based on merit, qualifications, and role requirements.
                        </p>
                    </div>
                </div>

                {/* Right Image - End on the right edge */}
                <div className="relative w-full lg:w-1/2 pt-12 lg:pt-24 lg:pb-10">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-sm">
                        <Image
                            src="/equal-opportunity.jpg"
                            alt="Woman looking through a magnifying glass"
                            fill
                            className="object-cover object-center"
                            unoptimized
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
