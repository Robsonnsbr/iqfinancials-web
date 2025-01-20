"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "@public/avatar.jpg";

const WppButton = () => {
  return (
    <div id="whatsapp-button" className="opacity-0 animate-fade-in absolute">
      <FloatingWhatsApp
        accountName="Robson"
        phoneNumber="5541995398003"
        avatar={avatar.src}
        chatMessage="Olá! Tudo bem? Eu sou o Robson, consultor da IQ Financials. Como posso ajudar você hoje?"
        statusMessage="Normalmente responde dentro de 1 hora"
        placeholder="Escrever mensagem..."
        chatboxHeight={360}
      />
    </div>
  );
};

export default WppButton;
