import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ButtonType {
  label?: string;
  children?: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

export default function PButton({
  label,
  children,
  className,
  type,
  onClick,
}: ButtonType) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`btn-primary ${className || ''}`}
    >
      {label || children}
    </Button>
  );
}
