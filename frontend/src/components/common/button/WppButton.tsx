// import { FaWhatsapp } from "react-icons/fa";
// import Link from "next/link";

// const LINK_WHATSAPP =
//   "https://wa.me/5541995398003?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20dados%20econômicos,%20financeiros%20e%20contábeis.";

// const WppButton = () => {
//   return (
//     <div className="relative group">
//       <Link
//         id="whatsapp-link"
//         title="Botão link WhatsApp"
//         aria-label="whatsapp button"
//         className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-fit rounded-full bg-green hover:bg-light-green hover:-translate-y-1 animate-pulse text-white shadow-md transition-all duration-300"
//         href={LINK_WHATSAPP}
//         target="_blank"
//         passHref
//       >
//         <FaWhatsapp className="text-4xl p-2" />
//       </Link>
//       {/* Caixa de mensagem exibida ao passar o mouse */}
//       <div className="absolute bottom-20 right-0 hidden px-3 py-2 text-sm text-white bg-black rounded-md shadow-lg group-hover:block transition-opacity duration-300">
//         Entre em contato agora conosco
//       </div>
//     </div>
//   );
// };

// export default WppButton;

"use client";
import { useState, useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "@public/avatar.jpg";

const WppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  //Evita que apareça o conflito entre o btn de wpp e o efeito de pageDown
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FloatingWhatsApp
        accountName="Robson"
        phoneNumber="5541995398003"
        avatar={avatar.src}
        chatMessage="Olá, tudo bem? Me chamo Robson e sou um dos consultores da IQFinancials. Como posso lhe ajudar hoje?"
        statusMessage="Normalmente responde dentro de 1 hora"
      />
    </div>
  );
};

export default WppButton;
