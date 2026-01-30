import Image from 'next/image';

const activities = [
    {
        title: "Civil & Structural Construction",
        description: "Site works, concrete structures, and civil infrastructure",
    },
    {
        title: "Industrial & Commercial Construction",
        description: "Industrial facilities, warehouses, and support infrastructure",
    },
    {
        title: "Infrastructure Projects",
        description: "Utilities, access roads, and enabling infrastructure",
    },
    {
        title: "Contracts Execution",
        description: "End-to-end project delivery under defined contractual frameworks",
    },
];

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="bg-white py-20">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-start lg:gap-20 lg:px-8">
                {/* Left Image Section */}
                <div className="relative w-full overflow-hidden md:w-5/12 lg:w-1/2 aspect-[4/3]">
                    <div className="relative h-full w-full">
                        <Image
                            src="/whatdowedo.jpg"
                            alt="Engineering Team Collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="flex w-full flex-col justify-center md:w-7/12 lg:w-1/2">
                    <h2 className="mb-6 text-4xl font-semibold text-black">What We Do</h2>

                    <p className="mb-10 text-base leading-relaxed text-gray-600">
                        Marble & Grove Nigeria Ltd undertakes construction and contracts services across sectors where execution discipline, technical competence, and regulatory compliance are critical.
                    </p>

                    <h3 className="mb-6 text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Core Areas of Activity
                    </h3>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-2xl p-6 transition hover:bg-gray-200"
                            >
                                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                                    {activity.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {activity.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Projects are executed in alignment with approved specifications, safety standards, and contractual requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
