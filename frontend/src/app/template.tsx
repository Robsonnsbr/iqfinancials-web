"use client";
import { motion } from "framer-motion";

type TemplatesProps = {
  children: React.ReactNode;
};

function Template({ children }: TemplatesProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      id="motion-layout-wrapper-container-app"
      className="flex flex-col max-w-[1920px] overflow-y-hidden"
    >
      {children}
    </motion.div>
  );
}

export default Template;
