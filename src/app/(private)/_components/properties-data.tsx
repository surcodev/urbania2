import prisma from "@/config/db";
import { Property } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoogleMapHome from "@/components/google-map-home";
import Contact from "@/components/contact";

async function PropertiesData({ searchParams }: { searchParams: any }) {
  searchParams.age && (searchParams.age = parseInt(searchParams.age));

  const properties: Property[] = await prisma.property.findMany({
    where: searchParams,
    orderBy: {
      updatedAt: "desc",
    },
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {properties.map((property) => (
          <div className="border rounded border-solid border-gray-300 overflow-hidden">
            <Image
              src={property.images[0]}
              alt="Imagen de la propiedad"
              width={800} // puedes ajustar esto
              height={240} // 800x240 da una relación similar a w-full h-60
              className="w-full h-60 object-cover rounded-t property-main-image"
              style={{ objectFit: "cover" }}
              priority={true} // si quieres que cargue inmediatamente
            />

            <div className="p-3 flex flex-col">
              <span className="text-sm text-primary font-bold">
                {property.name}
              </span>
              <span className="text-gray-700 text-xs">
                {property.city} , {property.landmark}
              </span>
            </div>

            <div className="p-3 bg-gray-100 flex justify-between items-center rounded-b">
              <span className="text-primary text-xl font-bold">
                $ {property.price}
              </span>
              <Link
                className="text-sm text-primary font-semibold no-underline"
                href={`/property/${property.id}`}
              >
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <GoogleMapHome
          listing={properties}
        />
        <Contact />
      </div>
    </div>
  );
}

export default PropertiesData;