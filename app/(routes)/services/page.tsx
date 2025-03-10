"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next"; 
import SliderServices from "@/components/slider-services";
import AvatarPortfolio from "@/components/avatar-porfolio";
const ServicesPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { t } = useTranslation();  

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <AvatarPortfolio />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">
                    <br /><br />
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        <span className="font-bold text-Coffe text-l"> {t('servicesPage.title')}</span> 
                    </h1>
                    <br />
                    <p className="mb-3 text-sm text-gray-300">
                        {t('servicesPage.description')} 
                    </p>

                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-coffe border-coffe text-md w-fit rounded-xl hover:shadow-xl hover:shadow-creem no-underline text-customBeige"
                        >
                            {t('servicesPage.contactMe')}
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute left-0 z-5 w-40 p-2 mt-2 bg-White border rounded-md shadow-lg">
                                <a
                                    href="https://wa.me/50762786640?text=Hola%20Estefania,%20me%20gustaría%20hablar%20contigo."
                                    target="_blank"
                                    className="block px-4 py-2 text-sm text-Coffe hover:bg-gray-100 rounded-md line-none"
                                >
                                    {t('servicesPage.whatsapp')} 
                                </a>
                                <a
                                    href="mailto:estefamorales1995@gmail.com"
                                    className="block px-4 py-2 text-sm text-Coffe hover:bg-gray-100 rounded-md"
                                >
                                    {t('servicesPage.email')} 
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
};

export default ServicesPage;

