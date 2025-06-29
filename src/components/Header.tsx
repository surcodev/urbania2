"use client";

import { usePathname } from "next/navigation";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";

import { GetCurrentUserFromMongoDB } from "@/actions/users";
import { message } from "antd";
import { useEffect, useState } from "react";

type User = {
    username: string;
};

export default function Header() {
    const pathname = usePathname();
    const [currentUserData, setCurrentUserData] = useState<User | null>(null);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response: any = await GetCurrentUserFromMongoDB();
                if (response.error) {
                    console.warn("No hay usuario en MongoDB");
                    return; // <- ya no lanzamos error
                }
                setCurrentUserData(response.data);
            } catch (error: any) {
                console.error(error);
                message.error("Ocurrió un error al cargar el usuario");
            }
        };

        getCurrentUser();
    }, []);

    const hideHeader =
        pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up");

    if (hideHeader) return null;

    return (
        <div className="lg:px-20 px-5">
            <div className="flex items-center justify-between bg-primary p-4 rounded-b h-3">
                {/* Logo a la izquierda */}
                <h1 className="text-xl text-white font-bold">Urbania 2.0</h1>

                {/* Botones a la derecha */}
                <div className="flex items-center space-x-4">
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton>
                            <button className="">Sign Up</button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        {currentUserData ? (
                            <div className="flex items-center bg-white rounded px-3 py-1 space-x-2 my-auto h-6">
                                <span className="text-black font-medium text-sm">
                                    {currentUserData.username}
                                </span>
                                <UserButton
                                    signInUrl="/sign-in"
                                    appearance={{
                                        elements: {
                                            userButtonAvatarBox: "h-6 w-6",
                                        },
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center">
                                {/* Carga mínima si no hay datos aún */}
                                <UserButton
                                    signInUrl="/sign-in"
                                    appearance={{
                                        elements: {
                                            userButtonAvatarBox: "h-6 w-6",
                                        },
                                    }}
                                />
                            </div>
                        )}
                    </SignedIn>
                </div>
            </div>
        </div>
    );
}
