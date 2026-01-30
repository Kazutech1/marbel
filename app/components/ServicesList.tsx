import Image from 'next/image';

const servicesData = [
    {
        title: "Civil & Structural Construction",
        description: "Marble & Grove Nigeria Ltd undertakes civil and structural works across a range of project types.",
        listTitle: "Services include:",
        items: [
            "Site preparation and earthworks",
            "Concrete and reinforced concrete structures",
            "Structural steel works",
            "Foundations and substructures",
            "Associated civil infrastructure works",
        ],
        footer: "Works are executed in accordance with engineering designs, quality standards, and applicable regulations.",
        image: "/service-7.jpg" // Civil & Structural Construction
    },
    {
        title: "Industrial & Commercial Construction",
        description: "The company delivers construction services for industrial and commercial facilities requiring controlled execution and coordination.",
        listTitle: "Services include:",
        items: [
            "Industrial buildings and facilities",
            "Warehousing and logistics facilities",
            "Commercial structures and support buildings",
            "Ancillary infrastructure and utilities",
        ],
        footer: "Projects are managed to meet functional requirements, safety standards, and delivery timelines.",
        image: "/service-1.jpg" // Industrial & Commercial Construction
    },
    {
        title: "Infrastructure Projects",
        description: "Marble & Grove Nigeria Ltd undertakes infrastructure-related construction works that support broader development initiatives.",
        listTitle: "Services include:",
        items: [
            "Access roads and site infrastructure",
            "Utilities and support services",
            "Enabling works for industrial and logistics operations",
        ],
        footer: "Infrastructure projects are executed with consideration for operational interfaces and regulatory requirements.",
        image: "/service-5.jpg" // Infrastructure Projects
    },
    {
        title: "Contracts Execution",
        description: "The company provides end-to-end contracts execution services, managing projects from mobilization through completion.",
        listTitle: "Capabilities include:",
        items: [
            "Project planning and scheduling",
            "Coordination of subcontractors and suppliers",
            "Cost, quality, and schedule control",
            "Compliance with contractual obligations",
            "Progress monitoring and reporting",
        ],
        footer: "Contracts are executed within defined approval and control frameworks to support accountability and performance.",
        image: "/service-6.jpg" // Contracts Execution
    },
    {
        title: "Project Support Services",
        description: "Marble & Grove Nigeria Ltd provides construction support services linked to industrial, logistics, and resource-based operations.",
        listTitle: "Support services include:",
        items: [
            "Construction support for operational facilities",
            "Interface management with technical and regulatory stakeholders",
            "On-site coordination and supervision",
        ],
        footer: "", // No footer text visible in image or obscured
        image: "/service-4.jpg" // Project Support Services
    },
    {
        title: "Service Delivery Approach",
        description: "All services are delivered in alignment with the company's Execution Approach, which emphasizes:",
        listTitle: "", // No explicit list title visible, text flows directly
        items: [
            "Structured planning and controls",
            "Health and safety management",
            "Quality assurance and inspections",
            "Schedule and cost discipline",
        ],
        footer: "",
        image: "/service-2.jpg" // Service Delivery Approach
    },
    {
        title: "Sector Experience",
        description: "Marble & Grove Nigeria Ltd delivers services across:",
        listTitle: "",
        items: [
            "Public sector projects",
            "Private sector and commercial developments",
            "Industrial and infrastructure environments",
        ],
        footer: "Project engagement is determined by scope, readiness, and alignment with operational capabilities.",
        image: "/service-3.jpg" // Sector Experience
    }
];

export default function ServicesList() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-24">
                    {servicesData.map((service, index) => (
                        <div key={index} className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

                            {/* Left Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-sm">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="flex w-full flex-col justify-center lg:w-1/2 lg:pt-2">
                                <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                                    {service.title}
                                </h2>

                                <p className="mb-6 text-sm leading-relaxed text-gray-500 md:text-base">
                                    {service.description}
                                </p>

                                {service.listTitle && (
                                    <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                                        {service.listTitle}
                                    </p>
                                )}

                                <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {service.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-700"
                                        >
                                            <div className="h-2 w-2 shrink-0 rounded-full bg-[#8B7D5B]" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {service.footer && (
                                    <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                                        {service.footer}
                                    </p>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
