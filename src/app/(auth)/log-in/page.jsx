"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {

    const handleLogin = (e) => {
        e.preventDefault();

    }
    return (
        <div className="min-h-screen flex items-center justify-center  px-4">

            <div className="w-full max-w-5xl  rounded-3xl shadow-2xl overflow-hidden flex">

                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

                    <h2 className="text-sm tracking-widest text-gray-500 mb-6">
                        Summer Store
                    </h2>

                    <h1 className="text-2xl font-semibold mb-2">Login</h1>
                    <p className="text-gray-500 text-sm mb-6">
                        Choose from 10,000+ products across 400+ categories
                    </p>

                    <button className="w-full flex items-center justify-center gap-2 border rounded-full py-2 mb-4 hover:bg-gray-50 transition">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            className="w-5 h-5"
                        />
                        Sign in with Google
                    </button>

                    {/* OR */}
                    <div className="text-center text-sm text-gray-400 mb-4">OR</div>

                    <form className="space-y-4" onSubmit={handleLogin}>

                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="johncanny@gmail.com"
                                className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                            />
                        </div>

                        <button type="submit" className="w-full bg-[#7b5a45] text-white py-2 rounded-full mt-2 hover:opacity-90 transition cursor-pointer">
                            Login
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Don't have an account?{" "}
                        <Link href="/sign-up" className="hover:underline">
                            Register
                        </Link>
                    </p>
                </div>

                <div className="hidden md:block w-1/2 relative ">

                    <Image
                        src="/hero1.jpg"
                        alt="chair"
                        fill
                        className="object-contain p-10"
                    />

                </div>
            </div>
        </div>
    );
}