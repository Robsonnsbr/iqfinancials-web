import React, { createContext, useContext, useRef, ReactNode } from "react";

// Contexto com a referência para o elemento (footer)
type IRefContext = {
  footerRef: React.RefObject<HTMLElement | null>; // Usando uma RefObject para o footer
};

interface RefProviderProps {
  children: ReactNode;
  initialRef?: HTMLElement | null; // Permite passar uma ref inicial do tipo HTMLElement
}

// Criando o contexto
const RefContext = createContext<IRefContext | undefined>(undefined);

// Componente RefProvider, agora simplificado
export const RefProvider = ({ children, initialRef }: RefProviderProps) => {
  const footerRef = useRef<HTMLElement | null>(initialRef || null); // A ref do tipo HTMLElement

  const contextValue: IRefContext = {
    footerRef, // Passando a ref diretamente para o contexto
  };

  return (
    <RefContext.Provider value={contextValue}>{children}</RefContext.Provider>
  );
};

// Hook para consumir o contexto e acessar a ref
export const useRefContext = (): IRefContext => {
  const context = useContext(RefContext);
  if (!context) {
    throw new Error("useRefContext deve ser usado dentro de um RefProvider");
  }
  return context;
};
