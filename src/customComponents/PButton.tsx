import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ButtonType {
  label?: string;
  children?: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function PButton({
  label,
  children,
  className,
  type,
}: ButtonType) {
  return (
    <Button
      type={type}
      className={`
        ${className}
        animate-glow
        py-2 px-4
        uppercase
        border
        bg-pink
        bg-opacity-20
        dark:bg-dark
        border-pink 
        shadow-pink
        hover:bg-pink 
        dark:hover:bg-pink 
        hover:text-black 
        hover:shadow-pinkShade
        shadow-sm
        text-base
        font-bold dark:font-normal
    `}
    >
      {label || children}
    </Button>
  );
}
