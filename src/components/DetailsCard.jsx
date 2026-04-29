import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const DetailsCard = ({ product }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            <div className="mb-6">
                <Link href="/products">
                    <Button className="flex items-center gap-2">
                        <FaArrowLeft /> Go back
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6 md:p-10">

                <div className="flex justify-center items-center bg-gray-50 rounded-xl p-6 h-[450px]">
                    <Image
                        src={product.image}
                        height={450}
                        width={450}
                        alt={product.name}
                        className="rounded-xl overflow-hidden object-contain w-full h-full"
                    />
                </div>

                <div className="flex flex-col justify-center space-y-4">

                    <h2 className="text-3xl font-bold text-gray-800">
                        {product.name}
                    </h2>

                    <p className="text-gray-500">
                        Brand:{" "}
                        <span className="font-medium text-gray-700">
                            {product.brand}
                        </span>
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-6">
                        <p className="text-2xl font-bold text-green-600">
                            ${product.price}
                        </p>

                        <p className="text-yellow-500 font-medium">
                            ⭐ {product.rating}
                        </p>
                    </div>

                    <p className="text-sm text-gray-500">
                        Stock:{" "}
                        <span className="font-medium text-gray-700">
                            {product.stock}
                        </span>
                    </p>

                    <span className="w-fit px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                        {product.category}
                    </span>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">

                        <Link href={"/products"}>
                            <Button className="hover:-translate-x-0.5"> <FaArrowLeft /> Go back</Button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsCard;