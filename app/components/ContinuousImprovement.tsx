import React from 'react';

export default function ContinuousImprovement() {
    return (
        <section className="bg-white py-24 font-sans">
            <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[40px] bg-black shadow-2xl">
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover opacity-60"
                        src="/continuous-improvement.mp4"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Centered Content */}
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white">
                        <h2 className="mb-6 text-3xl font-semibold md:text-4xl lg:text-5xl">
                            Continuous Improvement
                        </h2>

                        <div className="max-w-3xl space-y-4 text-sm leading-relaxed opacity-90 md:text-base lg:text-lg">
                            <p>
                                The company reviews ESG-related practices periodically to ensure they remain appropriate for the scale, nature, and risk profile of its operations.
                            </p>
                            <p>
                                As project complexity increases, ESG practices are strengthened accordingly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
