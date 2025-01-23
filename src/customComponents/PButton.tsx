import React, { ReactNode } from 'react'
import { Button } from "@/components/ui/button"

interface ButtonType {
    label?: string;
    children?: ReactNode;
    className?: string;
}

export default function PButton({label, children, className}: ButtonType) {
  return (
    <Button className={`
       ${className}
        animate-glow
        py-2
        px-4
        uppercase
        border 
        bg-dark 
        text-greenText 
        border-pink 
        shadow-pink
        hover:bg-pink 
        hover:text-black 
        hover:shadow-pinkShade
        shadow-sm
        text-base
    `}>
        {label || children}
    </Button>
  )
}
