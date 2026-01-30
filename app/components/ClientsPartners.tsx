import React from 'react';

export default function ClientsPartners() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] py-24 text-center text-white md:py-32">

                    {/* Video Background */}
                    <div className="absolute inset-0 z-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover opacity-40"
                        >
                            <source src="/contactbg.mp4" type="video/mp4" />
                        </video>
                        {/* Subtle dark overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Overlay Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center px-6">
                        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                            Working with Clients and Partners
                        </h2>

                        <p className="max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
                            The company works collaboratively with clients, consultants, subcontractors, and partners to deliver projects safely, efficiently, and in accordance with agreed requirements.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
