import React from "react";
import { IconSVGProps } from "../services/typeProps";

export const studentSVG: React.FC<IconSVGProps> = ({
  width,
  height,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.3542 35.6252H10.6458C8.17206 35.6252 6.16667 33.6198 6.16667 31.146C6.16667 23.8347 16.9167 23.9794 20.5 23.9794C24.0833 23.9794 34.8333 23.8347 34.8333 31.146C34.8333 33.6198 32.8279 35.6252 30.3542 35.6252Z"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 17.7083C24.458 17.7083 27.6667 14.4997 27.6667 10.5417C27.6667 6.58363 24.458 3.375 20.5 3.375C16.542 3.375 13.3333 6.58363 13.3333 10.5417C13.3333 14.4997 16.542 17.7083 20.5 17.7083Z"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const homeSVG: React.FC<IconSVGProps> = ({
  width,
  height,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3.33333L3.33333 20H10V36.6667H16.6667V26.6667H23.3333V36.6667H30V20H36.6667L20 3.33333Z"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export {};
