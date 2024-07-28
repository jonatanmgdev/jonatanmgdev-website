import React from "react";

function IconClose(size: number) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="-0.5 0 25 25"
    >
            <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 21.32l18-18M3 3.32l18 18"
      ></path>
    </svg>
  );
}

export default IconClose;
