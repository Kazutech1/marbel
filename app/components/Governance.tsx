import Image from 'next/image';
import Link from 'next/link';

export default function Governance() {
    return (
        <section id="governance" className="bg-white py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:gap-20 lg:items-center">

                {/* Left Image Section */}
                <div className="relative w-full lg:w-1/2 aspect-[4/3]">
                    <div className="relative h-full w-full">
                        <Image
                            src="/governance.jpg"
                            alt="Team Collaborating on Project Governance"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="flex w-full flex-col justify-center lg:w-1/2">
                    <h2 className="mb-6 text-4xl font-semibold text-black leading-tight">
                        Governance, Safety & Responsibility
                    </h2>

                    <p className="mb-6 text-base leading-relaxed text-gray-600">
                        The company operates within structured governance and compliance frameworks aligned with Marble Group standards.
                    </p>

                    <p className="mb-10 text-base leading-relaxed text-gray-600">
                        Safety, regulatory compliance, and responsible operations are treated as operational priorities across all project activities.
                    </p>

                    <div className="hidden lg:block">
                        <Link
                            href="#"
                            className="inline-block rounded-full bg-[#E3D5B9] px-8 py-3.5 text-sm font-medium text-black transition hover:bg-[#d8c6a0]"
                        >
                            Learn More
                        </Link>
                    </div>
                    {/* Mobile button visible on smaller screens if needed, otherwise hidden block is fine or just standard block */}
                    <div className="lg:hidden">
                        <Link
                            href="#"
                            className="inline-block rounded-full bg-[#E3D5B9] px-8 py-3.5 text-sm font-medium text-black transition hover:bg-[#d8c6a0]"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
