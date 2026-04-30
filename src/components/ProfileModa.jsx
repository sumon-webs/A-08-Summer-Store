"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";



export function ProfileModal() {
    const [pending, setPending] = useState(false)

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setPending(true)
        const formData = new FormData(e.target);

        const name = formData.get("name");
        const image = formData.get("image");

        await authClient.updateUser({
            name,
            image,
        });
        setPending(false)
    };

    return (
        <Modal>
            <Button variant="outline">Edit Profile</Button>

            <Modal.Backdrop >
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <FaUser />
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">

                                    <TextField className="w-full">
                                        <Label>Name</Label>
                                        <Input
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                    </TextField>

                                    <TextField className="w-full">
                                        <Label>Image URL</Label>
                                        <Input
                                            name="image"
                                            placeholder="Enter your image URL"
                                        />
                                    </TextField>

                                    <Button  type="submit">
                                        {pending ? "Submiting" : "Submit"}
                                    </Button>

                                </form>

                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}