import { getSummerData } from "@/lib/DataFetch";
import DataCard from "./DataCard";

const Populer = async () => {
    const datas = await getSummerData();

    return (
        <div className="container mx-auto px-4 py-10">
            
            <h1 className="text-3xl font-bold text-center mb-8">
                Popular Products
            </h1>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                {datas.slice(0, 3).map((data) => (
                    <DataCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Populer;