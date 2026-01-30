import Image from 'next/image';

export default function LookingAhead() {
    return (
        <section className="relative w-full bg-[#595146] overflow-hidden py-20 text-white">
            {/* Background Diagonal Stripes - Right Side */}
            <div className="absolute inset-y-0 right-0 w-1/3 overflow-hidden pointer-events-none">
                <div
                    className="absolute h-[200%] w-[200px] bg-white/5 top-[-50%]"
                    style={{ left: '20%', transform: 'rotate(25deg)' }}
                />
                <div
                    className="absolute h-[200%] w-[100px] bg-white/5 top-[-50%]"
                    style={{ left: '60%', transform: 'rotate(25deg)' }}
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
                <div className="mb-12 w-full">
                    <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
                        Looking Ahead
                    </h2>

                    <div className="space-y-4 text-sm leading-relaxed text-gray-200 md:text-base">
                        <p>
                            Marble & Grove Nigeria Ltd remains focused on strengthening its execution capability, building operational credibility, and delivering projects that meet defined standards and stakeholder expectations.
                        </p>
                        <p>
                            Growth is approached deliberately, with emphasis on operational readiness, governance alignment, and long-term performance.
                        </p>
                    </div>
                </div>

                {/* Bottom Image */}
                <div className="relative w-full overflow-hidden">
                    <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
                        <Image
                            src="/looking-ahead.jpg"
                            alt="Team working together on project plans, overhead view"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
