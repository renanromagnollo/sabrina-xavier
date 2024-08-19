import { RefObject, useEffect, useState } from "react";

// interface useObserverProps {
//   element: ReactNode;
// }
type ElementRef = RefObject<HTMLElement>;

export function useObserver() {
  const [element, setElement] = useState<ElementRef | null>();
  const [isVisibled, setIsVisibled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 1) {
          setIsVisibled(true);
        } else if (entry.intersectionRatio > 0) {
          setIsVisibled(true);
        } else {
          setIsVisibled(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.5, 1],
      }
    );

    if (element?.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element?.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(element.current);
      }
    };
  }, [element]);

  return { isVisibled, setElement };
}
