const ProfileLoading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center animate-pulse">

                <div className="flex justify-center mb-4">
                    <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
                </div>

                <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mb-3"></div>

                <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>

                <div className="mt-6 h-10 bg-gray-300 rounded"></div>

            </div>
        </div>
    );
};

export default ProfileLoading;