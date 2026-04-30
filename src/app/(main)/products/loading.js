import React from 'react';

export const metadata = {
    title: "Summer store | Products",
    description: "You can by your summer products",
};
const PrductsLoading = () => {
    return (
        <div className="animate-pulse">


            <div className="container mx-auto mt-10 px-4">
                <div className="h-6 w-40 bg-gray-300 mx-auto mb-6 rounded"></div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="p-4 border rounded-xl">
                            <div className="h-40 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 w-3/4 bg-gray-300 mb-2 rounded"></div>
                            <div className="h-4 w-1/2 bg-gray-300 mb-4 rounded"></div>
                            <div className="h-8 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrductsLoading;