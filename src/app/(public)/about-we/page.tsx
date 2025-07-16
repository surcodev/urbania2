"use client";

import { useState } from "react";
import { Brain } from "lucide-react";

export default function AboutWe() {
    const [showVideo, setShowVideo] = useState(true);

    return (
        <div className="w-full">
            {/* HERO */}
            <div
                className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/aboutwe.png')" }}
            >
                <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0" />
                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="text-3xl md:text-5xl font-light">
                        Conoce a <span className="font-bold">Bienes Raíces Santa Clara</span>
                    </h2>
                    <p className="mt-2 text-lg md:text-xl">
                        Construyendo sueños para las familias peruanas
                    </p>
                </div>
            </div>

            {/* QUIÉNES SOMOS */}
            <section className="py-16 px-6 md:px-20 bg-white flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="lg:w-1/2">
                    <div className="mb-4">
                        <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full font-semibold">
                            NOSOTROS
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                        QUIÉNES <span className="text-black">SOMOS</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Somos una empresa peruana <strong>constructora y desarrolladora inmobiliaria</strong>, con más de 22 años de experiencia, diferenciándonos por la innovación en nuestros conceptos, diseños y acabados en cada uno de nuestros proyectos, que van desde Edificios Residenciales, Condominios de Town House hasta lujosos Centros Empresariales. Nuestra labor principal es la satisfacción de nuestros clientes en cada proyecto entregado.
                    </p>
                </div>

                {/* VIDEO / MINIATURA */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-full aspect-video max-w-xl rounded-xl shadow-lg overflow-hidden bg-black">
                        {!showVideo ? (
                            <>
                                {/* ✅ Miniatura oficial de YouTube */}
                                <img
                                    src="https://img.youtube.com/vi/BXPM5LwrTUA/maxresdefault.jpg"
                                    alt="Miniatura del video"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    className="absolute inset-0 flex items-center justify-center z-10"
                                    onClick={() => setShowVideo(true)}
                                >
                                    <div className="bg-white bg-opacity-70 rounded-full p-4 hover:scale-110 transition">
                                        <svg
                                            className="w-10 h-10 text-red-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M6 4l10 6-10 6V4z" />
                                        </svg>
                                    </div>
                                </button>
                            </>
                        ) : (
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/BXPM5LwrTUA?autoplay=1&mute=1"
                                title="YouTube video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-20 bg-white text-center">
                <div className="mb-6">
                    <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full font-semibold">
                        NOSOTROS
                    </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-12">
                    POR QUÉ <span className="text-black">CONFIAR EN NOSOTROS</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
                    {/* CARD 1 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                            <Brain className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                            NUESTRO <br />
                            <span className="font-black">COMPROMISO</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-justify max-w-xs">
                            Entregar nuestros proyectos en tiempo y calidad ofrecida es nuestra mayor
                            satisfacción, asumimos los retos y trabajamos para lograr la eficiencia
                            en nuestras entregas.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                            <Brain className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                            EXCELENCIA <br />
                            <span className="font-black">OPERACIONAL</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-justify max-w-xs">
                            Nos adelantamos a las necesidades del cliente mejorando continuamente,
                            somos muy cuidadosos con los costos y los recursos para poder obtener un
                            excelente producto al mejor precio. Proponemos soluciones innovadoras.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                            <Brain className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                            <span className="font-black">INTEGRIDAD</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-justify max-w-xs">
                            Hacer lo correcto y ser honestos en nuestras relaciones comerciales y
                            laborales es uno de nuestros atributos como empresa.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
