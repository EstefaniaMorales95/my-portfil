'use client';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useDarkMode } from '@/contexts/darkModeContext';

const Introduction = () => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode(); // Obtener el estado y la función para alternar el modo oscuro

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`z-20 w-full ${darkMode ? 'dark' : ''} bg-Gradient-cover`}> {/* Fondo con gradiente no se ve afectado por el modo oscuro */}
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/estefamr.png"
          priority
          width="450"
          height="300"
          alt="Profile pic"
          className="rounded-md border-4 border-white shadow-lg"
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1
            className={`mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 ${darkMode ? 'text-White' : 'text-Coffe'}`} // Color de texto para modo oscuro y claro
          >
            {t('intro.title')}{' '}
            <TypeAnimation
              sequence={[t('intro.subTitle'), 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-creem"
            />
          </h1>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            {/* Botón Contáctame con menú desplegable */}
            <div className="relative">
              <button
                onClick={toggleDropdown} // Cambia el modo oscuro
                className="px-3 py-2 transition-all border-2 cursor-pointer text-coffe text-md w-fit rounded-xl hover:shadow-xl hover:shadow-creem no-underline text-customBeige"
              >
                {t('intro.contactMe')}
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 z-5 w-40 p-2 mt-2 bg-White border rounded-md shadow-lg">
                  <Link
                    href="https://wa.me/50762786640?text=Hola%20Estefania,%20me%20gustaría%20hablar%20contigo."
                    target="_blank"
                    className="block px-4 py-2 text-sm text-Coffe hover:bg-gray-100 rounded-md line-none"
                  >
                    {t('intro.whatsapp')}
                  </Link>
                  <Link
                    href="mailto:estefamorales1995@gmail.com"
                    className="block px-4 py-2 text-sm text-Coffe hover:bg-gray-100 rounded-md"
                  >
                    {t('intro.email')}
                  </Link>
                </div>
              )}
            </div>
          </div>
          <p
            className={`mx-auto mb-2 text-xl md:mx-0 md:mb-8 ${darkMode ? 'text-White' : 'text-Coffe'}`} // Cambia el color del texto en modo oscuro
          >
            {t('intro.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;