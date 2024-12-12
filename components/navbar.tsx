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
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-black/30 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-customBeige ${router === item.link && 'hover:bg-customBeige'}`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>

        {/* Botón para cambiar de idioma */}
        <div className="mt-4">
          <button 
            onClick={toggleLanguage} 
            className="px-3 py-2 bg-blue-500 text-white rounded-full"
          >
            {i18n.language === 'en' ? 'Español' : 'English'}
          </button>
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;