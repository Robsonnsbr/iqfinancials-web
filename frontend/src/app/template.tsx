"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

function Template({ children }: PropsWithChildren) {
  const initial = { y: -20, opacity: 0 };
  const animate = { y: 0, opacity: 1 };
  const transition = { ease: "easeInOut", duration: 0.3 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      id="motion-layout-wrapper-container-app"
      className="flex flex-col max-w-[1920px] overflow-y-hidden"
    >
      {children}
    </motion.div>
  );
}

export default Template;
