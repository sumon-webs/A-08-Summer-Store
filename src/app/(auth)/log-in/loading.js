import { FaSpinner } from "react-icons/fa";

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <FaSpinner className="text-3xl animate-spin text-[#7b5a45]" />
            <p className="mt-3 text-gray-600 text-sm">
                Loading login page...
            </p>
        </div>
    );
}