import React from 'react';
import Image from 'next/image';

export default function AnnouncementsSection() {
    return (
        <section className="bg-white py-24 text-gray-900 font-sans">
            <div className=" w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Image */}
                    <div className="relative w-full ">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/announcements.jpg"
                                alt="Man with a megaphone at a desk"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
                            Announcements
                        </h2>

                        <div className="space-y-6 text-sm text-gray-400 md:text-base leading-relaxed opacity-90">
                            <p>
                                Official announcements issued by Marble & Grove Nigeria Ltd are made available for reference by clients, partners, and stakeholders.
                            </p>
                            <p>
                                Only information published through this page or issued directly by authorised representatives of the company should be considered official.
                            </p>
                            <p>
                                The company does not comment on market speculation or unverified information.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
