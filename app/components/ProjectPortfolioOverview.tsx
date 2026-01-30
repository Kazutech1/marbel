import Image from 'next/image';

export default function ProjectPortfolioOverview() {
    const categories = [
        "Civil and structural construction works",
        "Industrial and commercial facilities",
        "Infrastructure and enabling works",
        "Contract-based project delivery engagements",
    ];

    return (
        <section className="bg-white py-24">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/project-portfolio.jpg"
                                alt="Blueprints and Yellow Hard Hat"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
                            Project Portfolio Overview
                        </h2>

                        <p className="mb-8 text-sm text-gray-500 md:text-base">
                            The company&apos;s project portfolio includes:
                        </p>

                        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2.5 rounded-full border border-gray-100 bg-white px-5 py-3 text-xs text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#D4C9A8]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs leading-relaxed text-gray-400 sm:text-sm italic">
                            Project selection is aligned with operational capability, execution readiness, and risk considerations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
