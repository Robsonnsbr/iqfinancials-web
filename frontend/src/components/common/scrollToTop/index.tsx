//TODO: corrigir...

"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Adiciona o evento ao trocar de rota
    router.events.on("routeChangeComplete", handleRouteChange);

    // Remove o evento ao desmontar
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default ScrollToTop;
