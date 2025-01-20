"use client";
import { useRefContext } from "@contexts/refs";
import useIsVisible from "@hooks/useIsVisible";
import { FiArrowUp } from "react-icons/fi";

const ScrollButton = () => {
  const { footerRef } = useRefContext();
  const isVisible = useIsVisible(footerRef);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="scroll-button"
      title="Voltar ao Topo"
      aria-label="Voltar ao Topo"
      onClick={scrollToTop}
      className="fixed z-50 bottom-28 right-12 bg-blue-light text-white w-[30px] h-[30px] rounded-full shadow-md hover:bg-black hover:scale-110 active:scale-100 active:text-red opacity-0 animate-fade-in"
    >
      <FiArrowUp className="size-5 m-auto" />
    </button>
  );
};

export default ScrollButton;
