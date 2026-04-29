"use client";

import { Avatar, Button } from "@heroui/react";
import NavLink from "../NavLink";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter()

    const { data, isPending } = useSession()

    const handleLogOut = async () => {
        await authClient.signOut();
        window.location.reload()
    }
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-sm">
            <header className="container mx-auto flex h-16 items-center justify-between px-6">


                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                        Summer Store
                    </span>
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

                {
                    isPending ? <FaSpinner className="animate-spin" />
                        : <div className="flex items-center gap-3">
                            {data?.user
                                ? <div className=" flex justify-center items-center gap-3">
                                    <Avatar>
                                        <Avatar.Image
                                            referrerPolicy="no-referrer"
                                            alt="John Doe" src={data?.user?.image} />
                                        <Avatar.Fallback>{data?.user?.name[0]}</Avatar.Fallback>
                                    </Avatar>
                                    <Button
                                        onClick={handleLogOut}
                                        radius="full"
                                        className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-5 py-2 shadow-md hover:scale-105 transition-all duration-300"
                                    >
                                        Log Out
                                    </Button>
                                </div>
                                : <Link href={"/log-in"}>
                                    <Button
                                        radius="full"
                                        className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-5 py-2 shadow-md hover:scale-105 transition-all duration-300"
                                    >
                                        Log in
                                    </Button>
                                </Link>
                            }


                        </div>
                }
            </header>
        </nav>
    );
};

export default NavBar;