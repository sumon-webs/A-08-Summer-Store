"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function SignUpPage() {

    const [error, setError] = useState("")

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;

        const userData = {
            name: form.name.value,
            image: form.image.value,
            email: form.email.value,
            password: form.password.value,
        };

        const { data, error } = await authClient.signUp.email({
            email: userData.email, // user email address
            password: userData.password, // user password -> min 8 characters by default
            name: userData.name, // user display name
            image: userData.image, // User image URL (optional)
        })
        if (error) {
            setError(error.message)
        }
        if (data) {
            router.push("/log-in")
        }
        setLoading(false)
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 ">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">

                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                    <h2 className="text-sm tracking-widest text-gray-500 mb-6">
                        Summer Store
                    </h2>

                    <h1 className="text-2xl font-semibold mb-2">
                        Create Account
                    </h1>

                    <p className="text-gray-500 text-sm mb-6">
                        Join us and start shopping today
                    </p>

                    <button className="w-full flex items-center justify-center gap-2 border rounded-full py-2 mb-4 hover:bg-gray-50 transition">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            className="w-5 h-5"
                        />
                        Sign up with Google
                    </button>

                    <div className="text-center text-sm text-gray-400 mb-4">
                        OR
                    </div>

                    <form className="space-y-4" onSubmit={handleSignUp}>

                        <div>
                            <label className="text-sm text-gray-600">Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                Image URL
                            </label>
                            <input
                                name="image"
                                type="text"
                                placeholder="https://example.com/photo.jpg"
                                className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="john@gmail.com"
                                className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="********"
                                className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                                required
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full flex items-center justify-center bg-[#7b5a45] text-white py-2 rounded-full mt-2 hover:opacity-90 transition"
                        >
                            {loading ? <FaSpinner className=" animate-spin" /> : "Sign Up"}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already have an account?{" "}
                        <Link href="/log-in" className="hover:underline">
                            Login
                        </Link>
                    </p>
                </div>

                <div className="hidden md:block w-1/2 relative rounded-2xl overflow-hidden">

                    <Image
                        src="/hero3.jpg"
                        alt="signup"
                        fill
                        className="object-cover p-5"
                    />

                </div>
            </div>
        </div>
    );
}