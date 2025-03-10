"use client";
import Link from "next/link";
import {MotionTransition }from "../components/transition-components";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition position="bottom" className="absolute z-40 incline-block w-full top-5 md:top-10 px-20">
      <header className="bg-#f2e9e4 transition-colors duration-300"> 
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/" className="no-underline">
            <h1 className="text-coffe my-3 text-4xl font-bold text-center md:text-left"> 
              Estefanía
              <span className="text-customBeige">
                Morales
              </span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-2 text-xs">
            {socialNetworks.map(({ logo, src, id }) => (
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
  );
};

export default Header;