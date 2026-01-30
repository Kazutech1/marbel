import Image from 'next/image';
import Link from 'next/link';

const disciplineItems = [
    "Project planning and scheduling",
    "Site supervision and safety management",
    "Quality assurance and inspections",
    "Progress monitoring and reporting",
];

export default function ExecutionDiscipline() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
                            Execution Discipline
                        </h2>

                        <p className="mb-6 text-sm leading-relaxed text-gray-500">
                            Construction activities are managed through defined processes that support control and accountability, including:
                        </p>

                        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {disciplineItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-2.5 self-start rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-700"
                                >
                                    <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8B7D5B]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="mb-6 text-sm leading-relaxed text-gray-500">
                            Execution discipline is treated as a core operational requirement.
                        </p>

                        <div>
                            <Link
                                href="#"
                                className="inline-block rounded-full bg-[#E3D5B9] px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-[#d8c6a0]"
                            >
                                Governance and Responsibility
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative w-full overflow-hidden rounded-lg aspect-[4/3]">
                            <Image
                                src="/execution-discipline.jpg"
                                alt="Construction worker reviewing blueprints"
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
