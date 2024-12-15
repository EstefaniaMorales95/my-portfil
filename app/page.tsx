"use client";

import { useDarkMode } from "@/contexts/darkModeContext";

import Coverparticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/ TransitionPage";

export default function Home() {
  const { darkMode } = useDarkMode(); 

  return (
    <main className={`${darkMode ? 'bg-black text-coffe' : ''}`}>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <Coverparticles />
        <Introduction />
      </div>
    </main>
  );
}