import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className="bg-white py-20">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-8 flex flex-col justify-between items-start gap-6 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-4xl font-semibold text-black mb-6">Projects</h2>
                        <p className="max-w-4xl text-sm leading-relaxed text-gray-600">
                            Marble & Grove Nigeria Ltd undertakes projects across civil, industrial, and infrastructure categories. Project information is presented selectively and in line with contractual and confidentiality requirements.
                        </p>
                    </div>

                    <Link
                        href="#"
                        className="whitespace-nowrap rounded-full bg-[#E3D5B9] px-8 py-3.5 text-sm font-medium text-black transition hover:bg-[#d8c6a0]"
                    >
                        View Projects
                    </Link>
                </div>

                {/* Banner Image */}
                <div className="relative mt-12 w-full overflow-hidden">
                    <div className="relative aspect-[21/9] w-full min-h-[300px]">
                        <Image
                            src="/projects.jpg"
                            alt="Construction Blueprints and Safety Helmet"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
