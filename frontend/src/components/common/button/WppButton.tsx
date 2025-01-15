import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const LINK_WHATSAPP =
  "https://wa.me/5541995398003?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20dados%20econômicos,%20financeiros%20e%20contábeis.";
const WppButton = () => {
  return (
    <Link
      id="whatsapp-link"
      title="Botão link WhatsApp"
      aria-label="whatsapp button"
      type="button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-fit rounded-full bg-green  hover:bg-light-green hover:-translate-y-1 animate-pulse text-white shadow-md transition-all duration-300"
      href={LINK_WHATSAPP}
      target="_blank"
      passHref
    >
      <FaWhatsapp className="size-12 p-2" />
    </Link>
  );
};

export default WppButton;
