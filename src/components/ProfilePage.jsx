"use client";

import { ProfileModal } from "@/components/ProfileModa";
import { useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";


const ProfilePage = () => {
    const { data, pending } = useSession();

    return (
        <div className="md:min-h-screen flex items-center justify-center bg-gray-100 p-6">

            {pending
                ?
                <Button type="submit" disabled={pending}>
                    {pending ? (
                        <span className="flex items-center gap-2">
                            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Submitting...
                        </span>
                    ) : (
                        "Submit"
                    )}
                </Button>
                : <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">

                    <div className="flex justify-center mb-4">
                        <Avatar>
                            <Avatar.Image
                                referrerPolicy="no-referrer"
                                alt="John Doe" src={data?.user?.image} />
                            <Avatar.Fallback>{data?.user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-800">
                        {data?.user?.name || "No Name"}
                    </h1>

                    <p className="text-gray-500 my-3">
                        {data?.user?.email}
                    </p >
                    <ProfileModal />
                </div>}
        </div>
    );
};

export default ProfilePage;