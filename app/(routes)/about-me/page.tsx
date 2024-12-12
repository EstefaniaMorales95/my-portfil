"use client"
import TransitionPage from "@/components/ TransitionPage";
import Avatar from "@/components/avatar";
import AvatarPortfolio from "@/components/avatar-porfolio";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import { useTranslation } from "react-i18next";


const PageAboutMe = () => {
  const { t } = useTranslation();
  return (
   
      <>
       <TransitionPage/>
       <ContainerPage>
        <AvatarPortfolio/>
       <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-creem ">{t('aboutMe.title')}{''} 
       <span className="font-bold text-Coffe">{t('aboutMe.subtitle')}</span>
       </h1>

       <CounterServices />
       <TimeLine />
       </ContainerPage>
      </>
   
  )
}
export default PageAboutMe;