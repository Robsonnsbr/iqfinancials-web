import { FaWhatsapp } from "react-icons/fa";

const WppButton = () => {
  return (
    <button
      id="whatsapp-button"
      aria-label="whatsapp button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-fit rounded-full bg-green  hover:bg-light-green hover:-translate-y-1 animate-pulse text-white shadow-md transition-all duration-300"
    >
      <FaWhatsapp className="size-12 p-2" />
    </button>
  );
};

export default WppButton;
