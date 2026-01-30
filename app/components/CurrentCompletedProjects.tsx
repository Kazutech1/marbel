import Image from 'next/image';

export default function CurrentCompletedProjects() {
    return (
        <section className="bg-[#0a0a0a] py-24 text-white">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

                    {/* Left Content */}
                    <div className="flex w-full flex-col lg:w-1/2">
                        <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl">
                            Current and Completed Projects
                        </h2>

                        <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
                            Information on current and completed projects is updated periodically and in line with contractual and disclosure considerations.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative aspect-[16/10] w-full overflow-hidden shadow-sm">
                            <Image
                                src="/current-projects.jpg"
                                alt="Team presenting analytics summary on a screen"
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
