const TopBrands = () => {
    const brands = [
        { id: 1, name: "Nike", logo: "https://res.cloudinary.com/dyrgvsedy/image/upload/v1777484585/download_3_hweqf2.png" },
        { id: 2, name: "Adidas", logo: "https://res.cloudinary.com/dyrgvsedy/image/upload/v1777484585/download_1_woas3b.png" },
        { id: 3, name: "Puma", logo: "https://res.cloudinary.com/dyrgvsedy/image/upload/v1777484586/download_rrj1hi.png" },
        { id: 4, name: "Reebok", logo: "https://res.cloudinary.com/dyrgvsedy/image/upload/v1777484585/download_2_acczyd.png" },
    ];

    return (
        <div className="container mx-auto px-4 py-14">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Top Brands</h1>
                <p className="text-gray-500 mt-2">
                    Trusted brands you love for quality products
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {brands.map((brand) => (
                    <div
                        key={brand.id}
                        className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 text-center hover:-translate-y-2"
                    >
                        <div className="flex justify-center">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-20 h-20 object-contain group-hover:scale-110 transition"
                            />
                        </div>

                        <h2 className="mt-4 text-lg font-semibold">{brand.name}</h2>

                        <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            Official Brand
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBrands;