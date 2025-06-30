"use client";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
    className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
    const [storageTheme, setStorageTheme] = useState<string | null>(null);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');

        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            setStorageTheme(savedTheme);
        }

        if (theme) {
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const currentTheme = storageTheme && theme;
    
    return (
        <button
            onClick={toggleTheme}
            className={`theme-toggle ${className || ''}`}
            aria-label="Toggle theme"
        >
            {currentTheme === 'light' ? (
                <MdDarkMode className="h-4 w-4" />
            ) : (
                <MdLightMode className="h-4 w-4" />
            )}
        </button>
    );
};

export default ThemeToggle;