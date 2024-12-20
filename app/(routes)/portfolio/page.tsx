"use client";

import { useTranslation } from "react-i18next";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";

import PortfolioBox from "@/components/porfolio-box";
import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/ TransitionPage";

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <div className="transition-colors duration-500"> {/* Solo la transición de colores sin darkMode */}
      <header className="navbar__h">
        {/* Aquí iría el contenido del header */}
      </header>
      <ContainerPage>
        <TransitionPage /> {/* Aquí la transición no afecta al fondo */}
        <CircleImage />
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 text-creem">
            {t("portfolioPage.title")} {/* Traducción del título */}
            <span className="font-bold text-Coffe">
              {t("portfolioPage.projects")}
            </span>{" "}
            {/* Traducción de "Proyectos" */}
          </h1>

          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4 text-creem text-sm ">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </div>
  );
};

export default PortfolioPage;