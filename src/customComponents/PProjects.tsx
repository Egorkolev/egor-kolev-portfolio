"use client";
import React, { useEffect } from 'react';
import taskManager from '../../public/taskManager.png';
import cryptoLottery from '../../public/cryptoLottery.png';
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from 'next/image';
import { PTooltip } from './PTooltip';

interface TechnologyType {
    name: string;
}
const taskManagerTech: TechnologyType[] = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "next-intl" },
    { name: "Tailwind CSS" },
    { name: "shadcn/ui" },
    { name: "PostgreSQL" },
    { name: "Prisma (ORM)" },
    { name: "Vercel" },
];
const cryptoLotteryTech: TechnologyType[] = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "shadcn/ui" },
    { name: "PostgreSQL" },
    { name: "Prisma (ORM)" },
    { name: "Vercel" },
];

const boxStyle = `
    p-3 border border-pinkShade 
    bg-pinkShade bg-opacity-5 
    flex-1 gap-2 min-w-[290px]
    flex flex-col
`
const title = `
    text-xl whitespace-nowrap
`
const paragraphTech = `
    text-sm md:text-base px-2 
    border border-green flex-1
    whitespace-nowrap
`
const paragraph = `
    text-pretty
`
const boxItem = `
    flex w-fit gap-2 flex-wrap flex-1
`
const cart = `
    flex flex-wrap-reverse 
    justify-between gap-4 
    items-end text-balance 
    lg:text-left text-center
`
const cartItem = `
    max-w-xl flex 
    flex-col gap-2 
    m-auto lg:m-0
`
const imgStyle = `
    max-w-[400px] w-[100%] 
    flex-1 hover:shadow-md m-auto lg:m-0
    hover:shadow-blueText cursor-pointer
`

export default function PProjects() {

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
        <span className='absolute top-0 -left-40 shadow-[400px_130px_360px_180px_rgba(150,1,130,0.1)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 -left-40 shadow-[200px_180px_360px_100px_rgba(100,1,130,0.3)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 -left-40 shadow-[100px_130px_360px_120px_rgba(120,1,130,0.1)] z-[-1] rounded-full'></span>
        <span className='absolute bottom-20 -left-20 w-80 h-80 -z-10 opacity-25'
            style={{
                background: 'url(/nextdotjs.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
         }}></span>
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={title}>Task Manager:</h2>
            <div className={cart}>
                <div className={cartItem}>     
                    <p className={paragraph}>
                        Task Manager - is a web application for task management, built using Next.js, React, TypeScript, and Prisma. 
                        It allows users to create, edit, and organize tasks, filter them by dates, and manage users and access rights. 
                        The project is developed with modern technologies and deployed on Vercel.
                    </p>
                    <div className={boxItem}>
                        {taskManagerTech.map((item) => {
                            return (
                                <p className={paragraphTech} key={item.name}>{item.name}</p>
                            )
                        })}
                    </div>
                </div>
                <a 
                    className="m-auto lg:m-0"
                    style={{borderRadius: "5px"}}
                    href="https://semicolon-task-management.vercel.app/" 
                    target='_blank'
                >
                    <PTooltip label='Visit website'>
                        <Image
                            style={{borderRadius: "5px"}}
                            data-aos="fade-left"
                            className={imgStyle}
                            src={taskManager}
                            alt="Picture project" 
                        />
                    </PTooltip>
                </a>
            </div>
        </div>
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={title}>Crypto Lottery:</h2>
            <div className={cart}>
                <div className={cartItem}>     
                    <p className={paragraph}>
                        Crypto Lotteria - is an early-stage startup leveraging blockchain technology for innovative lottery solutions, 
                        with a backend built in Rust and Web3.js. As a Frontend Developer, I am responsible for building and optimizing the user-facing interface using modern tools.
                    </p>
                    <div className={boxItem}>
                        {cryptoLotteryTech.map((item) => {
                            return (
                                <p className={paragraphTech} key={item.name}>{item.name}</p>
                            )
                        })}
                    </div>
                </div>
                <PTooltip label='The website is not live yet'>
                    <Image
                        style={{borderRadius: "5px"}}
                        data-aos="fade-left"
                        className={imgStyle}
                        src={cryptoLottery}
                        alt="Picture project" 
                    />
                </PTooltip>
            </div>
        </div>
    </div>
  )
}