import Image from 'next/image';

const focusItems = [
    "Clearly defined project scopes and deliverables",
    "Structured planning and execution controls",
    "Compliance with safety, environmental, and regulatory requirements",
    "Accountability for quality, cost, and timelines",
];

export default function OperatingFocus() {
    return (
        <section className="relative w-full bg-[#0a0a0a] overflow-hidden text-white">
            <div className="flex flex-col lg:flex-row lg:items-stretch">

                {/* Left Image - Full bleed left and bottom */}
                <div className="relative w-full lg:w-[45%]">
                    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
                        <Image
                            src="/operating-focus.jpg"
                            alt="Construction worker looking through tube"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Content - with padding */}
                <div className="flex w-full flex-col justify-center lg:w-[55%] px-8 py-16 md:px-12 lg:px-16 lg:py-20">
                    <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl">
                        Operating Focus
                    </h2>

                    <p className="mb-5 text-sm text-gray-400">
                        Marble & Grove Nigeria Ltd prioritises
                    </p>

                    <div className="mb-5 flex flex-col gap-3">
                        {focusItems.map((item, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center gap-3 self-start rounded-full border border-gray-300 bg-white/95 px-5 py-2.5 text-xs text-gray-700"
                            >
                                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8B7D5B]" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400">
                        This operating focus enables consistent performance across varying project environments.
                    </p>
                </div>

            </div>
        </section>
    );
}
