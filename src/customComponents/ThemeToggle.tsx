"use client";
import { Button } from "@/components/ui/button";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [storageTheme, setStorageTheme] = useState<string | null>(null);

    const [theme, setTheme] = useState(() => {
        if(typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    })

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');

        if(typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            setStorageTheme(savedTheme);
        }

        if(theme) {
            localStorage.setItem("theme", theme)
        }

    }, [theme])

    const currentTheme = storageTheme && theme;
    
    return (
        <Button
            onClick={toggleTheme}
            className="
                dark:bg-dark
                dark:hover:bg-slate-30
                0 w-fit p-2  
                animate-glow
                uppercase
                border
                hover:bg-pink
                dark:hover:bg-pink
                text-greenText 
                border-pink 
                shadow-pink
                hover:shadow-pinkShade
                shadow-sm
                text-base"
        >
            {currentTheme === 'light' ? (<MdDarkMode />) : (<MdLightMode className="text-gray" />)}
        </Button>
    )
}

export default ThemeToggle;