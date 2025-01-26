"use client"
import React from 'react';
import { MdArrowCircleUp } from "react-icons/md";


export default function PArrowScroll({className}: {className?: string}) {
    const handleScrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <MdArrowCircleUp 
            onClick={handleScrolltoTop} 
            className={
                `${className} md:w-14 
                md:h-14 w-12 h-12
                text-pinkShade hover:bg-pink opacity-30
                hover:opacity-100 hover:bg-opacity-20 bg-pinkShade 
                bg-opacity-10 rounded-full bottom-4 right-2
                cursor-pointer fixed z-20
            `} 
        />
    )
}
