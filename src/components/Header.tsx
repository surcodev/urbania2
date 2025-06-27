// src/components/Header.tsx
"use client";

import { usePathname } from "next/navigation";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";

export default function Header() {
    const pathname = usePathname();

    // Oculta header en /sign-in, /sign-up y cualquier ruta anidada de sign-in
    const hideHeader =
        pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up");

    if (hideHeader) return null;

    return (
        <header className="flex justify-end items-center p-4 gap-4 h-3 bg-[#1b4242]">
            <SignedOut>
                <SignInButton />
                <SignUpButton>
                    <button className="">Sign Up</button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton signInUrl="/sign-in" />
            </SignedIn>
        </header>
    );
}
