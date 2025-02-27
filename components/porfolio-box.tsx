"use client";

import { useTranslation } from 'react-i18next';  // Importa el hook
import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data
    const { t } = useTranslation();  

    return (
        <div className="flex flex-wrap justify-center gap-8"
            key={id}
            
        >
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={220} height={220} className="w-full md:w-[200px] rounded-2xl h-auto"
            />

            <div className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="px-3 py-2 transition-all border-2 border-coffe cursor-pointer text-lg font-bold w-fit rounded-xl hover:shadow-xl hover:shadow-creem no-underline text-Coffe"
                >
                    {t('portfolio.github')}  
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="px-3 py-2 transition-all border-2 border-coffe cursor-pointer text-lg font-bold w-fit rounded-xl hover:shadow-xl hover:shadow-creem no-underline text-Coffe"
                >
                    {t('portfolio.liveDemo')}  
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox;