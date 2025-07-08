'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { GetCurrentUserFromMongoDB } from "@/actions/users";
import { User } from "@/interfaces";
import Loader from "@/components/Loader";
import { Button, Dropdown, message } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";

const userMenu = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Propiedades",
    path: "/user/properties",
  },
  {
    name: "Cuenta",
    path: "/user/account",
  },
  {
    name: "Suscripción",
    path: "/user/subscriptions",
  },
  {
    name: "Consultas",
    path: "/user/queries",
  },
];
const adminMenu = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Propiedades",
    path: "/admin/properties",
  },
  {
    name: "Users",
    path: "/admin/users",
  },
];

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [menuToShow = userMenu, setMenuToShow] = useState<any>(userMenu);
  const pathname = usePathname();
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);
  const isAdminRoute = pathname.split("/")[1] === "admin";

  const hideHeader =
    pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up");

  useEffect(() => {
    const getCurrentUser = async () => {
      setLoading(true);
      try {
        const response = await GetCurrentUserFromMongoDB();
        if (response?.error) throw new Error(response.error.message);
        setCurrentUserData(response.data);
        if (response.data.isAdmin) {
          setMenuToShow(adminMenu)
        }
      } catch (error: any) {
        message.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();
  }, []);

  const getHeader = () => {
    if (hideHeader) return null;

    return (
      <div className="lg:px-20 mt-4">
        <div className="flex items-center justify-between bg-white p-4 h-3">
          <h1 className="text-xl text-black font-bold cursor-pointer" onClick={() => { router.push("/") }}>
            <Image
              src="/logo.png"
              alt="Urbania 2.0 Logo"
              width={143}  // Ajusta el tamaño a tu gusto
              height={52}
              priority
            />
          </h1>

          <div className="flex items-center space-x-4">
            <div>
              Inicio
            </div>
            <div>
              Quienes somos
            </div>
            <SignedOut>
              <SignInButton>
                <button className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition">
                  Ingresar
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition">Registro</button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center bg-white rounded px-3 py-1 space-x-2 h-6">
                {currentUserData && (
                  <Dropdown
                    menu={{
                      items: menuToShow.map((item: any) => ({
                        label: item.name,
                        onClick: () => {
                          router.push(item.path);
                        },
                      })),
                    }}
                  >
                    <Button className="text-primary hover:text-primary" type="link">{currentUserData?.username}</Button>
                  </Dropdown>
                )}
                <UserButton
                  signInUrl="/sign-in"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-6 w-6",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    );
  };

  const getContent = () => {
    if (isPublicRoute) return children;
    if (loading) return <Loader />;
    if (isAdminRoute && !currentUserData?.isAdmin)
      return (
        <div className="py-20 lg:px-20 px-5 text-center text-gray-600 text-sm">
          No estás autorizado para ver esta página.
        </div>
      );
    return <div className="py-5 lg:px-20 px-5">{children}</div>;
  };

  return (
    <div>
      {getHeader()}
      {getContent()}
      {/* <div>
        {loading ? (
          <Loader />
        ) : (
          <div>{children}</div>
        )}
      </div> */}
    </div>
  );

}

export default LayoutProvider;
