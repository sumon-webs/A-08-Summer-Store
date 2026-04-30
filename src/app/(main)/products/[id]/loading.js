const DetailsLoading = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6 md:p-10">

                <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6 h-[450px]">
                    <div className="w-full h-full bg-gray-200 rounded-xl"></div>
                </div>

                <div className="flex flex-col justify-center space-y-4">

                    <div className="h-10 w-3/4 bg-gray-200 rounded-lg"></div>

                    <div className="h-5 w-1/3 bg-gray-200 rounded"></div>

                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="h-8 w-24 bg-gray-200 rounded"></div>
                        <div className="h-6 w-20 bg-gray-200 rounded"></div>
                    </div>

                    <div className="h-5 w-32 bg-gray-200 rounded"></div>

                    <div className="h-8 w-24 bg-gray-200 rounded-full"></div>

                    <div className="pt-4">
                        <div className="h-10 w-32 bg-gray-200 rounded-xl"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsLoading;