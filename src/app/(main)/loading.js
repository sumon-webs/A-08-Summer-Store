export default function Loading() {
    return (
        <div className="animate-pulse">


            {/* Hero */}
            <div className="container mx-auto mt-6 px-4">
                <div className="h-[300px] bg-gray-300 rounded-xl"></div>
            </div>

            <div className="max-w-5xl mx-auto mt-10 px-4">
                <div className="h-6 w-40 bg-gray-300 mx-auto mb-6 rounded"></div>

                <div className="container grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 border rounded-xl">
                            <div className="h-40 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 w-3/4 bg-gray-300 mb-2 rounded"></div>
                            <div className="h-4 w-1/2 bg-gray-300 mb-4 rounded"></div>
                            <div className="h-8 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto mt-10 px-4">
                <div className="h-6 w-40 bg-gray-300 mx-auto mb-6 rounded"></div>

                <div className="grid md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 border rounded-lg">
                            <div className="h-4 w-1/2 bg-gray-300 mb-2 rounded"></div>
                            <div className="h-3 w-full bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-10 px-4 mb-10">
                <div className="h-6 w-40 bg-gray-300 mx-auto mb-6 rounded"></div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-6 border rounded-xl flex flex-col items-center">
                            <div className="h-10 w-20 bg-gray-300 mb-3 rounded"></div>
                            <div className="h-4 w-16 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}