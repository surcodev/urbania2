import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { esES } from '@clerk/localizations'
import { currentUser } from '@clerk/nextjs/server'

export const metadata: Metadata = {
  title: "Venta de departamentos, casas y terrenos",
  description: "Una sola parada para todas sus necesidades inmobiliarias",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedInUser = await currentUser();
  let username = loggedInUser?.username
  if (!username) {
    username = loggedInUser?.firstName + " " + loggedInUser?.lastName;
  }
  username = username.replace("null", "")

  return (
    <ClerkProvider localization={esES}>
      <html lang="es">
        <body>
          <header className="flex justify-end items-center p-4 gap-4 h-3 bg-[#1b4242]">
            <SignedOut>
              <SignInButton />
              <SignUpButton >
                <button className="">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton signInUrl="/sign-in" />
              <h1>Clerk user id : {loggedInUser?.id}</h1>
              <h1>Username : {username}</h1>
              <h1>Email : {loggedInUser?.emailAddresses[0].emailAddress}</h1>
            </SignedIn>
          </header>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
