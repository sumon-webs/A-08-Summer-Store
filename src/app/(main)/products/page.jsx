import DataCard from "@/components/DataCard";
import { getSummerData } from "@/lib/DataFetch";

export const metadata = {
    title: "Summer store | Products",
    description: "You can by your summer products",
};

const ProductsPage = async () => {
    const datas = await getSummerData();
    return (
        <div className="container mx-auto px-4 py-10">

            <h1 className="text-3xl font-bold text-center mb-8">Available Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                {datas.map((data) => (
                    <DataCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;