"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";

interface ContactLinkData {
    href?: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    isEmail?: boolean;
}

const CONTACT_LINKS: ContactLinkData[] = [
    {
        href: "https://www.linkedin.com/in/iegor-koliev-834759233/",
        icon: SiLinkedin,
        label: "LinkedIn"
    },
    {
        href: "https://github.com/Egorkolev",
        icon: FaGithub,
        label: "GitHub"
    },
    {
        icon: SiGmail,
        label: "kolevegor@gmail.com",
        isEmail: true
    }
];

const ANIMATION_VARIANTS = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    },
    item: {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    }
};

export default function PContactLinks() {
    const renderContactLink = (link: ContactLinkData, index: number) => {
        const IconComponent = link.icon;
        
        const content = (
            <div className="contact-info">
                <IconComponent className="social-icon" />
                <span className="text-sm font-medium">{link.label}</span>
            </div>
        );

        return (
            <motion.li key={index} variants={ANIMATION_VARIANTS.item}>
                {link.isEmail ? (
                    content
                ) : (
                    <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        {content}
                    </a>
                )}
            </motion.li>
        );
    };

    return (
        <div className="space-y-6">
            {/* Status Badge */}
            <div className="text-center">
                <div className="status-badge">
                    <div className="status-dot"></div>
                    Available for work
                </div>
            </div>

            {/* Contact Links */}
            <motion.ul 
                className="space-y-4"
                variants={ANIMATION_VARIANTS.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {CONTACT_LINKS.map(renderContactLink)}
            </motion.ul>

            {/* Additional Info */}
            <div className="text-center">
                <p className="text-muted-sm">
                    Feel free to reach out for collaborations or just a friendly hello!
                </p>
            </div>
        </div>
    );
}
