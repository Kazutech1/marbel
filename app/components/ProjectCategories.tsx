import React from 'react';

const categories = [
    {
        title: "Civil & Structural Projects",
        items: [
            "Structural construction works",
            "Concrete and reinforced concrete structures",
            "Foundations and substructures",
            "Associated civil infrastructure",
        ]
    },
    {
        title: "Industrial & Commercial Projects",
        items: [
            "Industrial buildings and facilities",
            "Warehousing and logistics infrastructure",
            "Commercial and support facilities",
        ]
    },
    {
        title: "Infrastructure Projects",
        items: [
            "Access roads and site infrastructure",
            "Utilities and ancillary works",
            "Enabling infrastructure supporting industrial and logistics operations",
        ]
    }
];

export default function ProjectCategories() {
    return (
        <section className="bg-[#3D3A33] py-24 text-white">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
                <h2 className="mb-12 text-3xl font-semibold md:text-4xl">Project Categories</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-6 rounded-[2rem] bg-[#47433B] p-8 lg:p-10"
                        >
                            <h3 className="text-xl font-medium text-white/90">
                                {cat.title}
                            </h3>

                            <div className="flex flex-col items-start gap-4">
                                {cat.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-sm"
                                    >
                                        <div className="h-2 w-2 shrink-0 rounded-full bg-[#D4C9A8]" />
                                        <span className="text-xs font-medium text-gray-800 lg:text-sm">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
