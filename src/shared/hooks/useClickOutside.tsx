import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (e: any) => {
      if (!elementRef.current?.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  });

  return elementRef;
};

export default useClickOutside;
