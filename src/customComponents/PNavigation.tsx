"use client";
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavigationItem {
    href: string;
    label: string;
}



const NAVIGATION_ITEMS: NavigationItem[] = [
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const ANIMATION_VARIANTS = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.05
            }
        }
    },
    item: {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 }
        }
    }
};

export default function PNavigation() {
    const [activeSection, setActiveSection] = useState('skills');

    const handleNavClick = (href: string) => {
        const sectionId = href.substring(1); // убираем #
        setActiveSection(sectionId);
        
        // Плавная прокрутка к секции
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav 
            className="w-full"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            animate="visible"
        >
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center py-4">
                {/* Logo */}
                <motion.div
                    variants={ANIMATION_VARIANTS.item}
                    className="flex items-center"
                >
                    <Link href="#main" className="text-2xl font-bold portfolio-logo">
                        Portfolio
                    </Link>
                </motion.div>

                {/* Desktop Navigation Links */}
                <div className="flex items-center gap-2">
                    {NAVIGATION_ITEMS.map((item) => (
                        <motion.button
                            key={item.href}
                            variants={ANIMATION_VARIANTS.item}
                            onClick={() => handleNavClick(item.href)}
                            className={`theme-toggle ${
                                activeSection === item.href.substring(1) 
                                    ? 'bg-purple-500/30 text-white' 
                                    : ''
                            }`}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </div>

                {/* Theme Toggle */}
                <motion.div variants={ANIMATION_VARIANTS.item}>
                    <ThemeToggle />
                </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden flex-col py-2 gap-2">
                {/* Top Row: Logo and Theme Toggle */}
                <div className="flex justify-between items-center">
                    <motion.div
                        variants={ANIMATION_VARIANTS.item}
                        className="flex items-center"
                    >
                        <Link href="#main" className="text-xl font-bold portfolio-logo">
                            Portfolio
                        </Link>
                    </motion.div>
                    
                    <motion.div variants={ANIMATION_VARIANTS.item}>
                        <ThemeToggle className="scale-90" />
                    </motion.div>
                </div>

                {/* Bottom Row: Navigation Links */}
                <div className="flex items-center justify-center gap-1 w-full flex-wrap">
                    {NAVIGATION_ITEMS.map((item) => (
                        <motion.button
                            key={item.href}
                            variants={ANIMATION_VARIANTS.item}
                            onClick={() => handleNavClick(item.href)}
                            className={`theme-toggle text-xs px-3 py-1.5 ${
                                activeSection === item.href.substring(1) 
                                    ? 'bg-purple-500/30 text-white' 
                                    : ''
                            }`}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.nav>
    )
}
