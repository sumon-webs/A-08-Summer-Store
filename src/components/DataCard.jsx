import Image from "next/image";
import Link from "next/link";

const DataCard = ({ data = {} }) => {
    const { id, image, name, rating, price } = data;

    return (
        <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition w-full max-w-sm mx-auto">

            <div className="relative w-full h-40">
                <Image
                    src={image || "/placeholder.jpg"}
                    alt={name || "Product image"}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
            </div>

            <h2 className="text-lg font-semibold mt-2">
                {name || "No Name"}
            </h2>

            <p className="text-sm text-gray-600">
                ⭐ Rating: {rating ?? "N/A"}
            </p>

            <p className="text-md font-bold text-green-600">
                ${price ?? 0}
            </p>
            <Link href={`/products/${id}`}>
                <button
                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    type="button"
                >

                    View Details
                </button>
            </Link>
        </div>
    );
};

export default DataCard;