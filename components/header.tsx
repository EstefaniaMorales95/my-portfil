import  Link  from "next/link";
import MotionTransition from "./transition-components";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition position="bottom" className="absolute z-40 incline-block w-full top-5 md:top-10 px-20">
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
        <Link href="/" className="no-underline">
          <h1 className="my-3 text-4xl font-bold text-Coffe text-center md:text-left">
       Estefanía
        <span className="text-customBeige">
            Morales
        </span>
          </h1>
         </Link>
         <div className="flex items-center justify-center gap-7">
          {socialNetworks.map(({logo, src, id}) => (
            <Link 
             key={id}
            href={src}
            className="transition-all duration-300 text-Coffe hover:text-creem"
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