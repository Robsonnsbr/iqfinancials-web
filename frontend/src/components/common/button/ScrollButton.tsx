"use client";
// import useFooterVisibility from "@hooks/useVisibleFooter";
import { FiArrowUp } from "react-icons/fi";

const ScrollButton = () => {
  // const { isVisibleFooter } = useFooterVisibility();
  // console.log(isVisibleFooter);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // if (!isVisibleFooter) return null;

  return (
    <button
      id="scrollButton"
      title="Voltar ao Topo"
      aria-label="Voltar ao Topo"
      onClick={scrollToTop}
      className="fixed z-50 bottom-28 right-12  bg-blue text-white w-[30px] h-[30px] rounded-full shadow-md hover:bg-blue-light hover:scale-110 active:scale-100 active:text-red"
    >
      <FiArrowUp className="size-5 m-auto" />
    </button>
  );
};

export default ScrollButton;
