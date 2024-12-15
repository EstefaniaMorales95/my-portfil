"use client";

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";
import { useDarkMode } from "@/contexts/darkModeContext"; 

const TransitionPage = () => {
  const { darkMode } = useDarkMode(); // Obtén el estado del modo oscuro

  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className={`fixed top-0 bottom-0 right-full w-screen z-30 ${
            darkMode ? "bg-darkBg" : "bg-[#e3d5ca]"
          }`} // Alternar colores según el estado de darkMode
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        >
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPage;