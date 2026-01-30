import Image from 'next/image';
import Link from 'next/link';

const commitmentItems = [
    "Responsible business conduct",
    "Regulatory compliance",
    "Health and safety management",
    "Environmental and community considerations appropriate to project scope",
];

export default function GovernanceResponsibility() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

                    {/* Left Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative w-full overflow-hidden aspect-[4/3]">
                            <Image
                                src="/governance.jpg"
                                alt="Team collaboration meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
                            Governance and Responsibility
                        </h2>

                        <p className="mb-6 text-sm leading-relaxed text-gray-500">
                            Marble & Grove Nigeria Ltd operates within governance and compliance frameworks aligned with Marble Group standards.
                        </p>

                        <p className="mb-4 text-sm text-gray-500">
                            The company is committed to:
                        </p>

                        <div className="mb-6 flex flex-wrap gap-2.5">
                            {commitmentItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-700"
                                >
                                    <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8B7D5B]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="mb-6 text-sm leading-relaxed text-gray-500">
                            Governance arrangements support transparency, risk management, and sustainable operations.
                        </p>

                        <div>
                            <Link
                                href="#"
                                className="inline-block rounded-full bg-[#E3D5B9] px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-[#d8c6a0]"
                            >
                                Looking Ahead
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
