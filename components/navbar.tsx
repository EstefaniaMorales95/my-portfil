"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-components";
import '../utils/i18n'

const Navbar = () => {
  const router = usePathname();
  const { i18n } = useTranslation();  // Hook para i18next

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);  // Cambia el idioma
  };

  return (
    <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="mt-4 flex gap-4">
          {/* Botón para cambiar de idioma */}
          <button 
            onClick={toggleLanguage} 
            className="px-3 py-2 transition-all border-2 cursor-pointer text-coffe border-coffe text-md w-fit rounded-xl hover:shadow-xl hover:shadow-creem no-underline text-customBeige"
          >
            {i18n.language === 'en' ? 'Español' : 'English'}
          </button>

          {/* Botón para descargar el CV */}
          <a 
            href="/estefacv.pdf"  // Asegúrate de colocar la ruta correcta del archivo en 'public'
            download
           className="px-3 py-2 transition-all border-2 cursor-pointer text-coffe border-coffe text-md w-fit rounded-xl hover:shadow-xl hover:shadow-creem no-underline text-customBeige"
          >
            {i18n.language === 'en' ? 'Download CV' : 'Descargar CV'}
          </a>
        </div>
        <div className="flex items-center justify-center gap-0 px-0 py-0 rounded-full bg-black/10 background-blur-sm mt-4">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-customBeige ${router === item.link && 'hover:bg-customBeige'}`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;