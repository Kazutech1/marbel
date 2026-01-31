import Image from 'next/image';
import Link from 'next/link';

const strengths = [
    "Structured project planning and controls",
    "Safety-first site management",
    "Quality assurance throughout project lifecycles",
    "Schedule and cost discipline",
    "Clear reporting and accountability",
];

export default function HowWeDeliver() {
    return (
        <section id="execution-approach" className="bg-white pb-0">
            <div className="flex flex-col lg:flex-row w-full items-stretch">
                {/* Left Content Section */}
                <div className="flex w-full flex-col justify-center px-6 py-20 lg:w-1/2 lg:pl-32 lg:pr-16">
                    <div className="max-w-xl ml-auto">
                        <h2 className="mb-6 text-4xl font-semibold text-black">How We Deliver</h2>

                        <p className="mb-8 text-base leading-relaxed text-gray-600">
                            Execution at Marble & Grove Nigeria Ltd is guided by structured planning, defined controls, and clear accountability.
                        </p>

                        <h3 className="mb-6 text-sm font-medium text-gray-500">
                            Execution Strengths
                        </h3>

                        <div className="mb-10 flex flex-wrap gap-4">
                            {strengths.map((strength, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm"
                                >
                                    <div className="h-2 w-2 rounded-full bg-[#E3D5B9]"></div>
                                    <span>{strength}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mb-6">
                            <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                This approach supports consistent delivery across varying project scopes and operating environments
                            </p>
                            <Link
                                href="#"
                                className="inline-block rounded-full bg-[#E3D5B9] px-8 py-3.5 text-sm font-medium text-black transition hover:bg-[#d8c6a0]"
                            >
                                How We Operate
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Image Section - Full Bleed */}
                <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-0">
                    <div className="relative h-full w-full">
                        <Image
                            src="/services-woman.jpg"
                            alt="Engineers planning on site"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
