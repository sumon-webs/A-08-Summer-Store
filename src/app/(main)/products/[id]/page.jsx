import Image from "next/image";
import { getSummerData } from "@/lib/DataFetch";
import DetailsCard from "@/components/DetailsCard";


 export const  generateMetadata = async ({params}) => {
    const { id } = await params;

    const datas = await getSummerData();

    const product = datas.find(data => data.id == id)

    return {
        title: `Summer Store | ${product?.name || "Product Details"}`,
        description: product?.description,
    };
}


const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const datas = await getSummerData();

    const product = datas.find(data => data.id == id);


    if (!product) {
        return (
            <div className="text-center mt-10 text-red-500">
                Product not found
            </div>
        );
    }

    return (
        <div className=" container mx-auto p-6">

            <DetailsCard product={product} />
        </div>
    );
};

export default DetailsPage;