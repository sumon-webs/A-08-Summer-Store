import React from "react";

const DataCard = ({ data }) => {
    console.log(data);

    return (
        <div className="border rounded-xl p-4 shadow-md w-96">
            <img
                src={data.image}
                alt={data.name}
                className="w-full h-40 object-cover rounded-lg"
            />

            <h2 className="text-lg font-semibold mt-2">{data.name}</h2>

            
            <p className="text-sm text-gray-600">⭐ Rating: {data.rating}</p>

          
            <p className="text-md font-bold text-green-600">
                ${data.price}
            </p>

            
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Details
            </button>
        </div>
    );
};

export default DataCard;