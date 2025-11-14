import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M168.32 175.83l-71.07-3.23-14.3-33.88 71.07 3.23z" />
        <path d="M128 24a104 104 0 10104 104A104.12 104.12 0 00128 24zm46.51 161.41l-16.71-4.73-3.8-9-19.12-45.28-44.17 2L76 182.23l-16.59-4.7-5.54-13.11L128 92.68l74.12 71.74z" />
        <path d="M196.85 186.27h-21.34l-37-87.67h21.33z" />
      </g>
    </svg>
  );
}
