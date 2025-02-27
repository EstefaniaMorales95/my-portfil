"use client"
import Image  from "next/image";
import {MotionTransition }from "../components/transition-components";


const Avatar = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image src="/avatarpc.png"
      width={350}
      height={350}
      className="w-full h-full" alt="Avatar" />

    </MotionTransition>
  );
}

export default Avatar;