"use client";
import React, { useEffect } from 'react';
import Avatar from "../../public/avatar.png";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function PAvatar() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    })
  }, []);

  return (
    <div className='relative m-auto'>
        <span className='absolute top-0 left-0 shadow-[80px_30px_460px_120px_rgba(10,140,240,0.1)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 left-0 shadow-[80px_70px_460px_120px_rgba(120,1,230,0.2)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 left-0 shadow-[80px_120px_460px_120px_rgba(10,140,240,0.3)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 -left-20 w-52 h-52 -z-10 opacity-40'
            style={{
                background: 'url(/javascriptbg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
        }}></span>
        <Image
            data-aos="fade-right"
            className="lg:max-w-[450px] max-w-[300px] w-[100%] flex-1"
            src={Avatar}
            alt="Picture of the author" 
        />
    </div>
  )
}
