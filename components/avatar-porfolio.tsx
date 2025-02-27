"use client";

import Image from 'next/image';
import MotionTransition from './transition-components';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image 
                src="/avatarpc.png" 
                width="300" 
                height="300" 
                className="w-full h-full border-4 border-transparent dark:border-coffe" 
                alt="Particles"
            />
        </MotionTransition>
    );
}

export default AvatarPortfolio;