import React from 'react';
import Image from 'next/image';

export default function CorporateEnquiries() {
    return (
        <section className="bg-[#0a0a0a] text-white font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Content */}
                <div className="flex w-full flex-col justify-center px-6 py-24 lg:w-1/2 lg:px-16 xl:px-24">
                    <div className="max-w-xl">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl leading-tight">
                            Corporate Enquiries
                        </h2>

                        <div className="space-y-6 text-sm leading-relaxed text-gray-400 md:text-base opacity-90">
                            <p>
                                For general corporate enquiries, partnerships, and business development matters:
                            </p>
                            <p className="text-white">
                                Email: info@marbleandgroove.com (placeholder)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image - Flush with right edge */}
                <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] py-12 lg:py-24 pr-0">
                    <div className="relative h-full w-full overflow-hidden shadow-lg">
                        <Image
                            src="/corporate-enquiries.jpg"
                            alt="Bird-eye view of professionals shaking hands"
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
