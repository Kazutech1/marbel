import Image from 'next/image';

const mandateItems = [
    "Civil and structural construction",
    "Industrial and commercial facilities",
    "Infrastructure and enabling works",
    "Contract-based project delivery",
];

export default function OurMandate() {
    return (
        <section className="relative w-full bg-[#111111] overflow-hidden py-20 text-white">
            {/* Diagonal Stripes Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Large diagonal stripe */}
                <div
                    className="absolute bg-[#1a1a1a]"
                    style={{
                        width: '150px',
                        height: '200%',
                        top: '-50%',
                        left: '5%',
                        transform: 'rotate(-15deg)',
                    }}
                />
                {/* Medium diagonal stripe */}
                <div
                    className="absolute bg-[#222222]"
                    style={{
                        width: '80px',
                        height: '200%',
                        top: '-50%',
                        left: '15%',
                        transform: 'rotate(-15deg)',
                    }}
                />
                {/* Thin diagonal stripe */}
                <div
                    className="absolute bg-[#1d1d1d]"
                    style={{
                        width: '40px',
                        height: '200%',
                        top: '-50%',
                        left: '22%',
                        transform: 'rotate(-15deg)',
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

                    {/* Left Image */}
                    <div className="relative w-full lg:w-[50%]">
                        <div className="relative w-full overflow-hidden aspect-[16/9]">
                            <Image
                                src="/our-mandate.jpg"
                                alt="Construction Worker looking up"
                                fill
                                className="object-cover grayscale"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex w-full flex-col lg:w-[50%]">
                        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
                            Our Mandate
                        </h2>

                        <p className="mb-6 text-sm leading-relaxed text-gray-400">
                            The mandate of Marble & Grove Nigeria Ltd is to execute construction projects reliably and responsibly, in accordance with approved specifications, contractual obligations, and applicable regulations.
                        </p>

                        <p className="mb-6 text-sm text-gray-400">
                            The company undertakes work across
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2 mb-6">
                            {mandateItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-xs text-gray-800 shadow-sm"
                                >
                                    <div className="h-2 w-2 rounded-full bg-[#C4B896]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-gray-400">
                            Projects are approached with a focus on execution discipline rather than scale for its own sake
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
