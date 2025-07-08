'use client'
import React, { useState } from 'react';

export default function HeroSearch() {
    const [tab, setTab] = useState('alquilar');

    const tabs = ['Alquilar', 'Comprar', 'Proyectos'];

    return (
        <div className='mt-4'>
            <div className="relative bg-cover bg-center min-h-[400px]" style={{ backgroundImage: "url('/portada3.png')" }}>
                <div className="absolute inset-0 bg-black/25"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Construye tu futuro, empieza por el lugar correcto</h1>

                    <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-4 w-full max-w-4xl shadow-lg">
                        {/* Tabs */}
                        <div className="flex gap-4">
                            {tabs.map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t.toLowerCase())}
                                    className={`font-medium text-sm px-2 pb-1 border-b-2 ${tab === t.toLowerCase()
                                        ? 'border-green-700 text-green-700'
                                        : 'border-transparent text-gray-600 hover:text-black'
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>

                        {/* Filtros */}
                        <div className="flex flex-1 flex-wrap sm:flex-nowrap items-center gap-2">
                            {/* Select */}
                            <select className="border rounded px-4 py-2 w-full sm:w-40 text-sm">
                                <option>Departamento</option>
                                <option>Casa</option>
                                <option>Oficina</option>
                            </select>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Ingresa ubicaciones o características (ej: piscina)"
                                className="border rounded px-4 py-2 flex-1 text-sm"
                            />

                            {/* Botón */}
                            <button className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900 transition">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
