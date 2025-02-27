import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaCss3, FaLinkedin, FaReact } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { LiaNode } from "react-icons/lia";


export const socialNetworks = [
    
  
    {
        id: 1,
        logo: <FaLinkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/estefania-morales-a5a399332/",
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
        icon: <HomeIcon size={25} color="#e6b8a2" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#e6b8a2" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#e6b8a2" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#e6b8a2" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollo Full-stack",
     
        description: "Soy una profesional integral capaz de trabajar en todas las capas de una aplicación web, desde la interfaz de usuario hasta el manejo de datos en el servidor.",
        date: ""
       
      
    },
    {
        id: 2,
        title: "Frontend ",
        description: "Especializada en crear la interfaz de usuario de una aplicación o sitio web, asegurándome de que sea atractiva, funcional y fácil de usar.",
         date: ""
       
    },
    {
        id: 3,
        title: "Backend  ",
        description: "Manejo la lógica, la base de datos y el rendimiento del servidor para asegurar que una aplicación funcione correctamente detrás de escena.",
         date: ""
       
    },
    {
        id: 4,
        title: "Integración y DevOps",
        description: " Estas son áreas claves que combinan el desarrollo de software (Dev) con las operaciones de TI (Ops) para acelerar los ciclos de desarrollo, mejorar la calidad del software y garantizar un despliegue eficiente ",
        date: ""
    },
    
    
   
]



export const serviceData = [
    {
        icon: <IoLogoJavascript />,
        title: "Pensamiento Crítico",
        description: "Capacidad para analizar situaciones desde diferentes perspectivas y tomar decisiones informadas.",
    },
    {
        icon: <LiaNode />,
        title: "Creatividad:",
        description: "Ser capaz de proponer soluciones innovadoras que mejoren la experiencia del usuario o la eficiencia del código.",
    },
    {
        icon:  <FaReact />,
        title: "Empatía",
        description: "Entender las necesidades de los usuarios y las preocupaciones del equipo, y ser capaz de colaborar de manera armoniosa.",
    },
   
    {
        icon: <FaCss3 />,
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
        image: "/public/weather.png",
        urlGithub: "https://github.com/EstefaniaMorales95/weather ",
        urlDemo: "https://weather-appem.netlify.app/",
    },
    {
        id: 4,
        title: "Users Crud",
        image: "/public/users.png",
        urlGithub: "https://github.com/EstefaniaMorales95/Users-Crud",
        urlDemo: "https://users-crudemr.netlify.app/",
    },
    
   
];


export const dataCounter = [
    {
        id: 0,
        endCounter: "",
        text: "",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: "",
        text: "",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: "",
        text: "",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: "",
        text: "",
        lineRight: false,
        lineRightMobile: false,
    },
];