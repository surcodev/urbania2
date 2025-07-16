import React from "react";
import { FaFacebookF, FaTiktok, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contacto 1 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                    <p className="mb-1">+51 945 071 190</p>
                    <p className="mb-1">
                        Av. Armendariz 480 Segundo piso,<br />Centro Empresarial Armendariz Miraflores
                    </p>
                    <p className="mb-1">maritzarincon@perubienesraices.com</p>
                </div>

                <div></div>

                {/* Contacto 2 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                    <p className="mb-1">+51 999 447 302</p>
                    <p className="mb-1">
                        Av. Armendariz 480 segundo piso,<br />Centro Empresarial Armendariz, Miraflores
                    </p>
                    <p className="mb-1">cesargaldos@perubienesraices.com</p>
                </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-10 text-center">
                <div className="flex justify-center space-x-6 text-2xl">
                    <a href="#" className="hover:text-blue-500 transition text-green-500" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-pink-500 transition text-green-500" aria-label="TikTok">
                        <FaTiktok />
                    </a>
                    <a href="#" className="hover:text-red-500 transition text-green-500" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                    <a href="#" className="hover:text-blue-300 transition text-green-500" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 text-center text-sm text-gray-400">
                © 2025 Peru, Lima - San Isidro; Bienes Raíces Santa Clara SAC - Derechos reservados
            </div>
        </footer>
    );
}

export default Footer;
