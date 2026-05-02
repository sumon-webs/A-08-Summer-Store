"use client";

import { Avatar, Button } from "@heroui/react";
import NavLink from "../NavLink";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { FaSpinner, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    const { data, isPending } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = async () => {
        await authClient.signOut();
        window.location.reload();
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-sm">
            <header className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">

                <Link
                    href="/"
                    className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"
                >
                    Summer Store
                </Link>

                <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink href="/products">Products</NavLink>
                    </li>

                    <li>
                        <NavLink href="/profile">Profile</NavLink>
                    </li>
                </ul>

                <div className="flex items-center gap-3">

                    {isPending ? (
                        <FaSpinner className="animate-spin text-lg" />
                    ) : data?.user ? (
                        <div className="hidden md:flex items-center gap-3">
                            <Avatar
                                src={data?.user?.image}
                                name={data?.user?.name}
                                className="cursor-pointer"
                            />

                            <Button
                                onClick={handleLogOut}
                                radius="full"
                                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-5"
                            >
                                Log Out
                            </Button>
                        </div>
                    ) : (
                        <div className="hidden md:flex gap-3 items-center">
                            <Link href="/log-in">
                                <Button
                                    variant="bordered"
                                    radius="full"
                                    className="font-semibold px-5"
                                >
                                    Log in
                                </Button>
                            </Link>

                            <Link href="/sign-up">
                                <Button
                                    radius="full"
                                    className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-5"
                                >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    )}

                    <button
                        className="md:hidden text-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="md:hidden  px-8 pb-5 pt-2 bg-white/95 dark:bg-black/80 backdrop-blur-xl border-t border-white/10">

                    <div className="flex flex-col gap-4 text-sm font-medium">

                        <NavLink
                            href="/"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            href="/products"
                            onClick={() => setMenuOpen(false)}
                        >
                            Products
                        </NavLink>

                        <NavLink
                            href="/profile"
                            onClick={() => setMenuOpen(false)}
                        >
                            Profile
                        </NavLink>

                        {/* Mobile Auth */}
                        {isPending ? (
                            <div className="flex justify-center py-3">
                                <FaSpinner className="animate-spin text-lg" />
                            </div>
                        ) : data?.user ? (
                            <div className="flex flex-col gap-3 pt-2">

                                <div className="flex items-center gap-3">
                                    <Avatar
                                        src={data?.user?.image}
                                        name={data?.user?.name}
                                    />

                                    <span className="text-sm font-medium">
                                        {data?.user?.name}
                                    </span>
                                </div>

                                <Button
                                    onClick={handleLogOut}
                                    className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white"
                                >
                                    Log Out
                                </Button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 pt-2">

                                <Link
                                    href="/log-in"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Button
                                        variant="bordered"
                                        className="w-full"
                                    >
                                        Log in
                                    </Button>
                                </Link>

                                <Link
                                    href="/sign-up"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white">
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;