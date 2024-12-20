"use client";

import TransitionPage from "@/components/ TransitionPage";
import Coverparticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";


export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <Coverparticles />
        <Introduction />
      </div>
    </main>
  );
}