"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";



export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = e.currentTarget;

        const userData = {
            email: form.email.value,
            password: form.password.value,
        };

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
        });

        if (error) {
            setError(error.message);
            return;
        }

        if (data) {
            router.push("/")
            router.refresh()
        }
    };

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center  px-4">

            <div className="w-full max-w-5xl  rounded-3xl shadow-2xl overflow-hidden flex">

                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                    <h2 className="text-sm tracking-widest text-gray-500 mb-6">
                        Summer Store
                    </h2>

                    <h1 className="text-2xl font-semibold mb-2">Login</h1>
                    <p className="text-gray-500 text-sm mb-6">
                        Choose from 10,000+ products across 400+ categories
                    </p>

                    <button onClick={handleGoogleLogin} className=" cursor-pointer w-full flex items-center justify-center gap-2 border rounded-full py-2 mb-4 hover:bg-gray-50 transition">
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
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="enter pasword"
                                className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                                required
                            />
                        </div>

                        <button
                            disabled={loading}
                            type="submit" className="w-full flex justify-center items-center bg-[#7b5a45] text-white py-2 rounded-full mt-2 hover:opacity-90 transition cursor-pointer">
                            {loading ? <FaSpinner className="animate-spin " /> : "Log in"}
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