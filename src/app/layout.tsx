import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import Header from "@/components/Header";

import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { currentUser } from "@clerk/nextjs/server";

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
  let username = loggedInUser?.username;
  if (!username) {
    username = loggedInUser?.firstName + " " + loggedInUser?.lastName;
  }
  username = username?.replace("null", "");

  return (
    <ClerkProvider localization={esES}>
      <html lang="es" className="h-full">
        <body className="min-h-screen">
          <Header />
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
