"use client";
import  Link  from "next/link";
import MotionTransition from "./transition-components";
import { socialNetworks } from "@/data";
import { useDarkMode } from "@/contexts/darkModeContext";

const Header = () => {
  const { darkMode } = useDarkMode(); // Obtener el estado del modo oscuro
  return (
    <MotionTransition position="bottom" className="absolute z-40 incline-block w-full top-5 md:top-10 px-20">
      <header className={`${darkMode ? 'bg-black' : ''} transition-colors duration-300`}>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/" className="no-underline">
            <h1 className={`${darkMode ? 'text-coffe' : 'text-Coffe'} my-3 text-4xl font-bold text-center md:text-left`}>
              Estefanía
              <span className="text-customBeige">
                Morales
              </span>
            </h1>
          </Link>
         <div className="flex items-center justify-center gap-2 text-xs
         ">
          {socialNetworks.map(({logo, src, id}) => (
            <Link 
             key={id}
            href={src}
            className="transition-all duration-300 text-Coffe hover:text-creem text-lg"
            target="_blank"
            >
              {logo}
            </Link>
          ))}

         </div>
        </div>
      </header>
    </MotionTransition>
  )
}
export default Header;