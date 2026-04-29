"use client";

import { Button } from "@heroui/react";
import NavLink from "../NavLink";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-sm">
            <header className="container mx-auto flex h-16 items-center justify-between px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                        Summer Store
                    </span>
                </Link>

                {/* Nav Links */}
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

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* Login Button */}
                    <Button
                        radius="full"
                        className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-5 py-2 shadow-md hover:scale-105 transition-all duration-300"
                    >
                        Log in
                    </Button>

                </div>
            </header>
        </nav>
    );
};

export default NavBar;