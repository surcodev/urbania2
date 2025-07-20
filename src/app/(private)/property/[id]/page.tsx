import LinkButton from "@/components/link-button";
import prisma from "@/config/db";
import { Property } from "@prisma/client";
import React from "react";
import { Carousel } from "antd";
import QueryModal from "../_components/query-modal";
import { Bath, BedDouble, CarFront, LandPlot, MapPin } from "lucide-react";
import { GoogleMap } from "@react-google-maps/api";
import GoogleMapHome from "@/components/google-map-home";

interface Props {
  params: {
    id: string;
  };
}

async function PropertyPage({ params: { id } }: Props) {
  const property: Property = (await prisma.property.findUnique({
    where: {
      id: id,
    },
  })) as Property;

  const getAttributeDetails = ({
    name,
    value,
  }: {
    name: string;
    value: any;
  }) => {
    return (
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">{name}</span>
        <span className="text-sm text-gray-600">{value}</span>
      </div>
    );
  };

  const getSectionTitle = (title: string) => (
    <div>
      <h1 className="text-xl font-bold text-gray-700">{title}</h1>
      <hr className="border border-solid border-gray-300" />
    </div>
  );

  return (
    <div className="py-5 lg:px-20 px-5">
      <LinkButton title="Volver a Propiedades" path="/" />

      <h1 className="text-2xl font-bold text-primary my-5">{property.name}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <Carousel autoplay>
            {property.images.map((image) => (
              <div key={image}>
                <img
                  src={image}
                  alt={image}
                  className="w-full h-96 lg:h-[450px] object-cover rounded-md"
                />
              </div>
            ))}
          </Carousel>

          <h1 className="text-2xl font-bold text-gray-700 mt-7">
            $ {property.price} / {property.status}
          </h1>

          <span className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="h-4 w-4" /> {property.city}, {property.landmark}
          </span>

          {/* --- Estilo para características --- */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
            <div className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-md">
              <BedDouble className="h-4 w-4" />
              <span>{property.bedrooms} Habitaciones</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-md">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} baños</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-md">
              <LandPlot className="h-4 w-4" />
              <span>{property.area} m²</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-md">
              <CarFront className="h-4 w-4" />
              <span>{property.parking}</span>
            </div>

            {/* Puedes agregar más campos como Built In, amenities, etc. */}
          </div>

          <p className="text-sm text-gray-600 mt-7">{property.description}</p>


        </div>

        <div className="border border-solid border-gray-300 rounded p-5">
          <div className="flex flex-col gap-1">
            {getSectionTitle("Comodidades")}
            {getAttributeDetails({
              name: "Habitaciones",
              value: property.bedrooms,
            })}
            {getAttributeDetails({
              name: "Baños",
              value: property.bathrooms,
            })}
            {getAttributeDetails({ name: "Area", value: property.area })}
            {getAttributeDetails({ name: "Parking", value: property.parking })}
            {getAttributeDetails({
              name: "Mobiliario",
              value: property.furnishing,
            })}
            {getAttributeDetails({ name: "Pisos", value: property.floors })}
            {getAttributeDetails({ name: "Antiguedad", value: property.age })}
          </div>

          <div className="flex flex-col gap-1 mt-7">
            {getSectionTitle("Address")}
            {getAttributeDetails({ name: "Ciudad", value: property.city })}
            {getAttributeDetails({
              name: "Landmark",
              value: property.landmark,
            })}
            {getAttributeDetails({ name: "Zipcode", value: property.pincode })}
            {getAttributeDetails({ name: "Address", value: property.address })}
          </div>

          {property.showOwnerContact && (
            <div className="flex flex-col gap-1 mt-7">
              {getSectionTitle("Owner Details")}
              {getAttributeDetails({
                name: "Owner name",
                value: property.ownerName,
              })}
              {getAttributeDetails({
                name: "Email",
                value: property.ownerEmail,
              })}
              {getAttributeDetails({
                name: "Phone",
                value: property.ownerPhone,
              })}
            </div>
          )}

          <QueryModal propertyId={property.id} />
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;