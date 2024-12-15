"use client";

import AvatarPortfolio from "@/components/avatar-porfolio";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "@/contexts/darkModeContext";


import TransitionPage from "@/components/ TransitionPage";

const PageAboutMe = () => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode(); // Obtén el estado del modo oscuro



  return (
   
<div className={`${darkMode ? "bg-black" : ""}`}> {/* Cambia el fondo solo en modo oscuro */}
      <TransitionPage />
      <ContainerPage>
        <AvatarPortfolio />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-creem">
          {t("aboutMe.title")}
          <span className="font-bold text-coffe">{t("aboutMe.subtitle")}</span>
        </h1>
        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </div>
  );
  
  
};

export default PageAboutMe;