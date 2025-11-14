import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Check if window is defined (so it only runs on the client)
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };

      mql.addEventListener("change", onChange);
      
      // Set the initial value
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

      // Cleanup
      return () => mql.removeEventListener("change", onChange);
    }
  }, []);

  return isMobile;
}
