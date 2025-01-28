"use client";

import React, { useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import AOS from "aos";
import 'aos/dist/aos.css';

const linkStyle = `
    text-lg dark:text-blueText text-blue-500 flex gap-2
`
const iconStyle = `
    w-8 h-8 text-pinkShade
`

export default function PContactLinks() {

    useEffect(() => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 120,
        easing: 'ease-in-out',
    })
    }, []);

    return (
        <div className='relative'>
            <span className='absolute top-0 left-40 shadow-[400px_130px_360px_180px_rgba(150,1,130,0.1)] z-[-1] rounded-full'></span>
            <span className='absolute top-0 left-40 shadow-[200px_180px_360px_100px_rgba(100,1,130,0.3)] z-[-1] rounded-full'></span>
            <span className='absolute top-0 left-40 shadow-[100px_130px_360px_120px_rgba(120,1,130,0.1)] z-[-1] rounded-full'></span>
            <span className='absolute bottom-20 right-20 w-80 h-80 -z-10 opacity-10'
                style={{
                    background: 'url(/git.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
            }}></span>
            <ul data-aos="fade-left" className='flex flex-col gap-4'>
                <li><a rel="preload" className={linkStyle} href="https://www.linkedin.com/in/iegor-koliev-834759233/" target='_blank'><SiLinkedin className={iconStyle} />LinkedIn</a></li>
                <li><a rel="preload" className={linkStyle} href="https://github.com/Egorkolev" target='_blank'><FaGithub className={iconStyle} />GitHub</a></li>
                <li className={linkStyle}><SiGmail className={iconStyle} />kolevegor@gmail.com</li>
            </ul>
        </div>
    )
}
