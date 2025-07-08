export const propertyTypes = [
    { value: "house", label: "Casa" },
    { value: "apartment", label: "Departamento" },
    { value: "land", label: "Terreno" },
];

export const propertyStatuses = [
    { value: "rent", label: "Alquiler" },
    { value: "sale", label: "Venta" },
];

export const cities = [
    "Amazonas",
    "Áncash",
    "Apurímac",
    "Arequipa",
    "Ayacucho",
    "Cajamarca",
    "Callao",       // Provincia Constitucional
    "Cusco",
    "Huancavelica",
    "Huánuco",
    "Ica",
    "Junín",
    "La Libertad",
    "Lambayeque",
    "Lima",         // Departamento (no incluye Lima Metropolitana)
    "Loreto",
    "Madre de Dios",
    "Moquegua",
    "Pasco",
    "Piura",
    "Puno",
    "San Martín",
    "Tacna",
    "Tumbes",
    "Ucayali"
];

export const parkingTypes = [
    { value: "covered", label: "Cubierto" },
    { value: "open", label: "Abierto" },
    { value: "none", label: "Ninguno" },
];

export const furnishingTypes = [
    { value: "furnished", label: "Amueblado" },
    { value: "semi-furnished", label: "Semi-amueblado" },
    { value: "unfurnished", label: "Sin amueblar" },
];

export const facingTypes = [
    { value: "east", label: "Este" },
    { value: "west", label: "Oeste" },
    { value: "north", label: "Norte" },
    { value: "south", label: "Sur" },
    { value: "north-east", label: "Nordeste" },
    { value: "north-west", label: "Noroeste" },
    { value: "south-east", label: "Sudeste" },
    { value: "south-west", label: "Suroeste" },
];

export const subscriptionPlans = [
    {
        name: "Basic",
        price: 0,
        propertiesLimit: 3,
        imagesPerPropertyLimit: 3,
        features: [
            "Free for lifetime",
            "Property Listing",
            "Property Details",
            "3 Images per Property",
            "3 Properties Limit",
            "Property Search",
        ],
    },
    {
        name: "Standard",
        price: 10,
        propertiesLimit: 10,
        imagesPerPropertyLimit: 5,
        features: [
            "Property Listing",
            "Property Details",
            "5 Images per Property",
            "10 Properties Limit",
            "Property Search",
            "AI Support",
            "24/7 Support on Email",
        ],
    },
    {
        name: "Premium",
        price: 25,
        propertiesLimit: 100,
        imagesPerPropertyLimit: 15,
        features: [
            "Property Listing",
            "Property Details",
            "15 Images per Property",
            "100 Properties Limit",
            "Property Search",
            "AI Support",
            "24/7 Support on Email",
            "24/7 Support on Phone",
            "Personal Account Manager",
        ],
    },
];