import Image from 'next/image';

const benefits = [
    "Group-level governance and compliance frameworks",
    "Risk management and performance oversight",
    "Financial and operational discipline",
];

export default function MarbleGroup() {
    return (
        <section className="bg-[#111111] text-white">
            <div className="flex flex-col lg:flex-row w-full min-h-[600px] lg:h-auto lg:items-stretch">

                {/* Left Image Section - Full Bleed */}
                <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full">
                    <div className="relative h-full w-full">
                        <Image
                            src="/marblegroup.jpg"
                            alt="Team Meeting Overhead View"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="flex w-full flex-col justify-center px-6 py-20 lg:w-1/2 lg:pl-16 lg:pr-20 xl:pr-32">
                    <div className="max-w-xl">
                        <h2 className="mb-6 text-4xl font-semibold text-white">Part of Marble Group</h2>

                        <p className="mb-10 text-base leading-relaxed text-gray-300">
                            Marble & Grove Nigeria Ltd operates as the construction and contracts arm of Marble Group, benefiting from:
                        </p>

                        <div className="mb-10 flex flex-col gap-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-medium text-black w-fit transition hover:bg-gray-100"
                                >
                                    <div className="h-3 w-3 flex-shrink-0 rounded-full bg-[#8B7E58]"></div>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                                This affiliation strengthens execution capability while maintaining operational focus at project level.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
