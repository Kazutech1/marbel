import Image from 'next/image';
import Link from 'next/link';

const focusAreas = [
    "Infrastructure development initiatives",
    "Construction requirements linked to industrial, logistics, and resource-based operations",
    "Third-party construction and contracts engagements",
];

export default function PositionWithinGroup() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
                            Position within Marble Group
                        </h2>

                        <p className="mb-8 text-sm leading-relaxed text-gray-500">
                            Within Marble Group, Marble & Grove Nigeria Ltd serves as the construction and contracts arm, supporting
                        </p>

                        <div className="mb-8 space-y-4">
                            {focusAreas.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C4B896]" />
                                    <span className="text-sm text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="mb-8 text-sm leading-relaxed text-gray-500">
                            The company operates with operational autonomy while adhering to Group-wide governance, compliance, and reporting standards.
                        </p>

                        <div>
                            <Link
                                href="#"
                                className="inline-block rounded-full bg-[#E3D5B9] px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-[#d8c6a0]"
                            >
                                Operating Focus
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative w-full overflow-hidden aspect-[4/3]">
                            <Image
                                src="/position-group.jpg"
                                alt="Team reviewing blueprints"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
