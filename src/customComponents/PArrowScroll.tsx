"use client"
import React, { useEffect, useState } from 'react';
import { MdArrowCircleUp } from "react-icons/md";


export default function PArrowScroll({className}: {className?: string}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if(window.scrollY >= window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const handleScrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            {isVisible && <MdArrowCircleUp 
                onClick={handleScrolltoTop} 
                className={
                    `${className} md:w-14 
                    md:h-14 w-12 h-12
                    text-pinkShade hover:bg-pink opacity-80
                    hover:opacity-100 hover:bg-opacity-20 bg-pinkShade 
                    bg-opacity-10 rounded-full bottom-4 right-2
                    cursor-pointer fixed z-20
                `} 
            />}
        </>
    )
}
