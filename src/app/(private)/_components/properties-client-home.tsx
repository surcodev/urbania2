"use client";

import { useEffect, useRef, useState } from "react";
import { Property } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import {
    Bath,
    BedDouble,
    MapPin,
    LandPlot,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function PropertiesClientHome({
    properties,
}: {
    properties: Property[];
}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollIndex, setScrollIndex] = useState(0);

    const visibleCards = 4;

    // Scroll automático
    useEffect(() => {
        if (properties.length <= visibleCards) return;

        const interval = setInterval(() => {
            handleScroll("right");
        }, 4000);

        return () => clearInterval(interval);
    }, [properties.length, scrollIndex]);

    const handleScroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;

        const cardWidth = 320; // ancho aprox. de tarjeta (incluye padding y margen)
        const maxIndex = Math.ceil(properties.length - visibleCards);

        let newIndex = scrollIndex;

        if (direction === "right") {
            newIndex = Math.min(scrollIndex + 1, maxIndex);
        } else {
            newIndex = Math.max(scrollIndex - 1, 0);
        }

        container.scrollTo({
            left: newIndex * cardWidth,
            behavior: "smooth",
        });

        setScrollIndex(newIndex);
    };

    return (
        <div className="relative py-8 overflow-hidden">
            {/* Botones de navegación */}
            {properties.length > visibleCards && (
                <>
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 border border-gray-300 rounded-full p-2 shadow-md transition"
                        onClick={() => handleScroll("left")}
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 border border-gray-300 rounded-full p-2 shadow-md transition"
                        onClick={() => handleScroll("right")}
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                </>
            )}

            {/* Contenedor de tarjetas */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6 px-6"
            >
                {properties.map((property) => (
                    <Link
                        key={property.id}
                        href={`/property/${property.id}`}
                        className="min-w-[300px] max-w-[300px] flex-shrink-0 border rounded-lg shadow hover:shadow-xl bg-white flex flex-col transition"
                    >
                        <Image
                            src={property.images[0]}
                            alt="Imagen de la propiedad"
                            width={800}
                            height={240}
                            className="w-full h-48 object-cover rounded-t-lg"
                            priority
                        />

                        <div className="p-4 flex-1 space-y-1">
                            <h3 className="font-semibold text-base md:text-lg">
                                {property.name}
                            </h3>
                            <p className="text-sm text-gray-600 truncate">
                                {property.landmark}
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-700 mt-2">
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" /> {property.city}
                                </span>
                                <span className="flex items-center gap-1">
                                    <BedDouble className="h-4 w-4" /> {property.bedrooms}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Bath className="h-4 w-4" /> {property.bathrooms}
                                </span>
                                <span className="flex items-center gap-1">
                                    <LandPlot className="h-4 w-4" /> {property.area} m²
                                </span>
                            </div>
                        </div>

                        <div className="px-4 py-flex justify-between items-center border-t">
                            <span className="text-lg font-bold text-primary">
                                $ {property.price}
                            </span>
                            <span className="text-sm text-blue-600 font-medium">
                                Ver detalles
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
