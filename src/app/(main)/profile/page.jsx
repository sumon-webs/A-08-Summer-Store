"use client";

import { ProfileModal } from "@/components/ProfileModa";
import { useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";

const ProfilePage = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="flex justify-center items-center min-h-screen">
                Loading...
            </div>
        );
    }

    if (!session) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500">You are not logged in</p>
            </div>
        );
    }

    const user = session?.user;



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">

                <div className="flex justify-center mb-4">
                    <Avatar>
                        <Avatar.Image
                            referrerPolicy="no-referrer"
                            alt="John Doe" src={user?.image} />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                </div>

                <h1 className="text-2xl font-bold text-gray-800">
                    {user?.name || "No Name"}
                </h1>

                <p className="text-gray-500 my-3">
                    {user?.email}
                </p >
                <ProfileModal />
            </div>
        </div>
    );
};

export default ProfilePage;