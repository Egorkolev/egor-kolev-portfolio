import React, { ReactNode } from 'react'
import { Button } from "@/components/ui/button"

interface ButtonType {
    label?: string;
    children?: ReactNode;
}

export default function PButton({label, children}: ButtonType) {
  return (
    <Button className='
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
    '>
        {label || children}
    </Button>
  )
}
