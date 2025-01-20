import { useEffect, useState } from "react";

export default function useIsVisible(
  ref?: React.RefObject<HTMLElement | null>
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [ref]);
  return isVisible;
}
