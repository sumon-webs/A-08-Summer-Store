import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const DetailsCard = ({ product }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-10">

                <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-4 sm:p-6 h-[300px] sm:h-[400px] md:h-[500px]">

                    <Image
                        src={product.image}
                        height={500}
                        width={500}
                        alt={product.name}
                        className="object-contain w-full h-full rounded-xl"
                    />

                </div>

                <div className="flex flex-col justify-center space-y-4">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        {product.name}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-500">
                        Brand:{" "}
                        <span className="font-medium text-gray-700">
                            {product.brand}
                        </span>
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">

                        <p className="text-2xl sm:text-3xl font-bold text-green-600">
                            ${product.price}
                        </p>

                        <p className="text-base sm:text-lg text-yellow-500 font-medium">
                            ⭐ {product.rating}
                        </p>

                    </div>

                    <p className="text-sm sm:text-base text-gray-500">
                        Stock:{" "}
                        <span className="font-medium text-gray-700">
                            {product.stock}
                        </span>
                    </p>

                    <div>
                        <span className="inline-block px-4 py-1.5 text-xs sm:text-sm bg-blue-100 text-blue-600 rounded-full">
                            {product.category}
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">

                        <Link href="/products">
                            <Button className="w-full sm:w-auto">
                                <FaArrowLeft />
                                Go Back
                            </Button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsCard;