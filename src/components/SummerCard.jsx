import React from "react";

const SummerCareTips = () => {
    const tips = [
        {
            id: 1,
            title: "Stay Hydrated",
            desc: "Drink at least 8–10 glasses of water daily to keep your skin fresh.",
        },
        {
            id: 2,
            title: "Use Sunscreen",
            desc: "Always apply SPF 30+ sunscreen before going outside.",
        },
        {
            id: 3,
            title: "Light Skincare",
            desc: "Use lightweight and oil-free skincare products in summer.",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                Summer Care Tips
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className="p-5 border rounded-xl shadow hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
                        <p className="text-gray-600">{tip.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SummerCareTips;