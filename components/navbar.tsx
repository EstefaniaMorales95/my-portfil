"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-components";
import { useDarkMode } from "@/contexts/darkModeContext"; // Importar el hook de modo oscuro
import "../utils/i18n";

const Navbar = () => {
  const router = usePathname();
  const { i18n } = useTranslation(); // Hook para i18next
  const { darkMode, toggleDarkMode } = useDarkMode(); // Hook para el contexto de modo oscuro

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang); // Cambia el idioma
  };

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav>
      <div className="mt-4 flex gap-4">
  {/* Botón para cambiar de idioma */}
  <button onClick={toggleLanguage} className="btn-shared">
    {i18n.language === "en" ? "Español" : "English"}
  </button>

  {/* Botón para cambiar entre modo oscuro y claro */}
  <button onClick={toggleDarkMode} className="btn-shared">
    {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
  </button>

  {/* Botón para descargar el CV */}
  <a href="/estefacv.pdf" download className="btn-shared">
    {i18n.language === "en" ? "Download CV" : "Descargar CV"}
  </a>
</div>
        <div className="flex items-center justify-center gap-0 px-0 py-0 rounded-full bg-black/10 background-blur-sm mt-4">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-customBeige ${
                router === item.link && "hover:bg-customBeige"
              }`}
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