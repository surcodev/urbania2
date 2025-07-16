export const propertyTypes = [
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
        name: "Básico",
        price: 0,
        propertiesLimit: 3,
        imagesPerPropertyLimit: 3,
        features: [
            "Gratis de por vida",
            "Listado de propiedades",
            "Detalles de la propiedad",
            "3 imágenes por propiedad",
            "Límite de 3 propiedades",
            "Búsqueda de propiedades",

        ],
    },
    {
        name: "Estándar",
        price: 10,
        propertiesLimit: 10,
        imagesPerPropertyLimit: 5,
        features: [
            "Listado de propiedades",
            "Detalles de la propiedad",
            "5 imágenes por propiedad",
            "Límite de 10 propiedades",
            "Búsqueda de propiedades",
            "Soporte con IA",
            "Soporte 24/7 por correo electrónico",

        ],
    },
    {
        name: "Premium",
        price: 25,
        propertiesLimit: 100,
        imagesPerPropertyLimit: 15,
        features: [
            "Listado de propiedades",
            "Detalles de la propiedad",
            "15 imágenes por propiedad",
            "Límite de 100 propiedades",
            "Búsqueda de propiedades",
            "Soporte con IA",
            "Soporte 24/7 por correo electrónico",
            "Soporte 24/7 por teléfono",
            "Gerente de cuenta personal",

        ],
    },
];