import Image from 'next/image';

export default function ConfidentialityDisclosure() {
    const limits = [
        "Project type and category",
        "General scope of works",
        "Execution approach",
    ];

    return (
        <section className="bg-[#0a0a0a] pt-24 pb-0 text-white overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch w-full min-h-[500px]">

                {/* Left Image - Full Bleed Left and Bottom */}
                <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-0">
                    <Image
                        src="/confidentiality.jpg"
                        alt="Person holding a security shield icon"
                        fill
                        className="object-cover object-left-bottom"
                    />
                </div>

                {/* Right Content */}
                <div className="flex w-full flex-col justify-center px-6 py-20 lg:w-1/2 lg:pl-16 lg:pr-32">
                    <div className="max-w-xl">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl">
                            Confidentiality and Disclosure
                        </h2>

                        <div className="space-y-6 text-sm leading-relaxed text-gray-400 md:text-base">
                            <p>
                                In line with contractual obligations and standard industry practice, detailed project information may be disclosed selectively.
                            </p>
                            <p>
                                Project descriptions presented publicly are limited to:
                            </p>
                        </div>

                        <div className="my-8 flex flex-wrap gap-4">
                            {limits.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs text-gray-800 shadow-sm"
                                >
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#8B7D5B]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                            Client identities, commercial terms, and sensitive project details are disclosed only where permitted.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
