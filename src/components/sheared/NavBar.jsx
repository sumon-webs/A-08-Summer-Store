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
            <header className="container mx-auto flex h-16 items-center justify-between px-6">

                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    Summer Store
                </Link>

                <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/products">Products</NavLink></li>
                    <li><NavLink href="/profile">Profile</NavLink></li>
                </ul>

                <div className="flex items-center gap-3">

                    {isPending ? (
                        <FaSpinner className="animate-spin" />
                    ) : data?.user ? (
                        <div className="hidden md:flex items-center gap-3">
                            <Avatar>
                                <Avatar.Image
                                    referrerPolicy="no-referrer"
                                    src={data?.user?.image}
                                />
                                <Avatar.Fallback>
                                    {data?.user?.name?.[0]}
                                </Avatar.Fallback>
                            </Avatar>

                            <Button
                                onClick={handleLogOut}
                                radius="full"
                                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-5 py-2 shadow-md"
                            >
                                Log Out
                            </Button>
                        </div>
                    ) : (
                        <Link href="/log-in" className="hidden md:block">
                            <Button
                                radius="full"
                                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-5 py-2 shadow-md"
                            >
                                Log in
                            </Button>
                        </Link>
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
                <div className="md:hidden  space-x-2.5 px-6 pb-4 space-y-3 bg-white/90 dark:bg-black/60 backdrop-blur">
                    <NavLink href="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink href="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
                    <NavLink href="/profile" onClick={() => setMenuOpen(false)}>Profile</NavLink>

                    {!data?.user ? (
                        <Link href="/log-in" onClick={() => setMenuOpen(false)}>
                            <Button className="w-full mt-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white">
                                Log in
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            onClick={handleLogOut}
                            className="w-full mt-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white"
                        >
                            Log Out
                        </Button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default NavBar;