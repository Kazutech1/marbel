import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    { name: "Home", path: "/" },
    { name: "What We Do", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Execution Approach", path: "/execution-approach" },
    { name: "ESG", path: "/#governance" },
    { name: "News", path: "#" },
    { name: "Careers", path: "#" },
    { name: "Contact", path: "/contact" }
];

export default function SubFooter() {
    return (
        <section className="bg-white py-6 border-t border-gray-100">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 lg:flex-row lg:px-6">

                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/footerlogo.png"
                        alt="Marble & Grove Nigeria Ltd"
                        width={120}
                        height={30}
                        className="object-contain"
                    />
                </div>

                {/* Right: Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:justify-end">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

            </div>
        </section>
    );
}
