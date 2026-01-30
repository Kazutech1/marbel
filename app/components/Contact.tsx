import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="bg-white pb-20 pt-10">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] py-24 text-center text-white md:py-32">

                    {/* Video Background */}
                    <div className="absolute inset-0 z-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover opacity-40"
                        >
                            <source src="/contactbg.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Overlay Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center px-6">
                        <h2 className="mb-4 text-4xl font-normal text-white md:text-5xl">
                            Contact
                        </h2>

                        <p className="mb-10 text-sm text-gray-400 max-w-lg mx-auto">
                            For project enquiries, partnerships, or corporate correspondence
                        </p>

                        <Link
                            href="#"
                            className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition hover:bg-gray-200"
                        >
                            Contact Us
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}
