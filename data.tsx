import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const socialNetworks = [
    
  
    {
        id: 1,
        logo: <FaLinkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/notifications/?filter=all",
    },

    {
        id: 2,
        logo:  <BsWhatsapp size={30} strokeWidth={1} />,
        src: "https://wa.me/50762786640?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20tus%20proyectos.",
    },

    {
        id: 3,
        logo:  <BiLogoGmail  size={30} strokeWidth={1} />,
        src: "mailto:estefamorales1995@gmail.com?subject=Consulta%20sobre%20proyectos&body=Hola%2C%20me%20interesa%20saber%20más%20sobre%20tus%20proyectos.",
    },

    {
        id: 4,
        logo:  <FaGithub  size={30} strokeWidth={1} />,
        src: "https://github.com/EstefaniaMorales95",
    },
    
    
  
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#000000" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#000000" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#000000" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#000000" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollo Full-stack",
     
        description: "Soy una profesional integral capaz de trabajar en todas las capas de una aplicación web, desde la interfaz de usuario hasta el manejo de datos en el servidor.",
        date: "Agosto 2024"
       
      
    },
    {
        id: 2,
        title: "Frontend ",
        description: "Especializada en crear la interfaz de usuario de una aplicación o sitio web, asegurándome de que sea atractiva, funcional y fácil de usar.",
         date: "Novi 2024"
       
    },
    {
        id: 3,
        title: "Backend  ",
        description: "Manejo la lógica, la base de datos y el rendimiento del servidor para asegurar que una aplicación funcione correctamente detrás de escena.",
         date: "Enero 2024"
       
    },
    {
        id: 4,
        title: "Integración y DevOps",
        description: " Estas son áreas claves que combinan el desarrollo de software (Dev) con las operaciones de TI (Ops) para acelerar los ciclos de desarrollo, mejorar la calidad del software y garantizar un despliegue eficiente ",
        date: "Agosto 2024"
    },
    
    
   
]



export const serviceData = [
    {
        icon: <Crop />,
        title: "Pensamiento Crítico",
        description: "Capacidad para analizar situaciones desde diferentes perspectivas y tomar decisiones informadas.",
    },
    {
        icon: <Pencil />,
        title: "Creatividad:",
        description: "Ser capaz de proponer soluciones innovadoras que mejoren la experiencia del usuario o la eficiencia del código.",
    },
    {
        icon: <Computer />,
        title: "Empatía",
        description: "Entender las necesidades de los usuarios y las preocupaciones del equipo, y ser capaz de colaborar de manera armoniosa.",
    },
   
    {
        icon: <Rocket />,
        title: "Adaptabilidad:",
        description: "Capacidad para aprender y adaptarse a nuevas tecnologías y frameworks de manera rápida. ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Pokedex",
        image: "/pokemon.png",
        urlGithub: "https://github.com/EstefaniaMorales95/Pokedex",
        urlDemo: "https://pokedexemr.netlify.app",
    },
    {
        id: 2,
        title: "Rick and Morty App",
        image: "/rickandmorty.png",
        urlGithub: "https://github.com/EstefaniaMorales95/Rick-and-Morty ",
        urlDemo: "https://chimerical-trifle-9f7832.netlify.app ",
    },
    {
        id: 3,
        title: "Aplicación del clima",
        image: "/weader.png",
        urlGithub: "https://github.com/EstefaniaMorales95/weather ",
        urlDemo: "https://weather-appem.netlify.app/",
    },
    {
        id: 4,
        title: "Users Crud",
        image: "/usuarios.png",
        urlGithub: "https://github.com/EstefaniaMorales95/Users-Crud",
        urlDemo: "https://users-crudemr.netlify.app/",
    },
    
   
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];