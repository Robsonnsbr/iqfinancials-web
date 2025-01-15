import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
} from "react";

type ISectionRef = React.RefObject<HTMLDivElement | null>;

interface IFnUpdate {
  (ref: HTMLDivElement | null): void;
}

interface ScrollContextProps {
  sectionAboutSummaryRef: ISectionRef;
  sectionTopHomeRef: ISectionRef;
  sectionListServicesRef: ISectionRef;
  sectionTestimonialsHomeRef: ISectionRef;
  updateAboutSummaryRef: IFnUpdate;
  updateSectionTopHomeRef: IFnUpdate;
  updateSectionListServicesRef: IFnUpdate;
  updateSectionTestimonialsHomeRef: IFnUpdate;
}

const ScrollContext = createContext<ScrollContextProps | null>(null);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const sectionAboutSummaryRef = useRef<HTMLDivElement | null>(null);
  const sectionTopHomeRef = useRef<HTMLDivElement | null>(null);
  const sectionListServicesRef = useRef<HTMLDivElement | null>(null);
  const sectionTestimonialsHomeRef = useRef<HTMLDivElement | null>(null);

  const updateAboutSummaryRef = useCallback((ref: HTMLDivElement | null) => {
    sectionAboutSummaryRef.current = ref;
  }, []);

  const updateSectionTopHomeRef = useCallback((ref: HTMLDivElement | null) => {
    sectionTopHomeRef.current = ref;
  }, []);

  const updateSectionListServicesRef = useCallback(
    (ref: HTMLDivElement | null) => {
      sectionListServicesRef.current = ref;
    },
    []
  );
  const updateSectionTestimonialsHomeRef = useCallback(
    (ref: HTMLDivElement | null) => {
      sectionTestimonialsHomeRef.current = ref;
    },
    []
  );

  const contextValue: ScrollContextProps = {
    sectionAboutSummaryRef,
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionTestimonialsHomeRef,
    updateAboutSummaryRef,
    updateSectionTopHomeRef,
    updateSectionListServicesRef,
    updateSectionTestimonialsHomeRef,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      "useScrollContext deve ser usado dentro de um ScrollProvider"
    );
  }
  return context;
};
