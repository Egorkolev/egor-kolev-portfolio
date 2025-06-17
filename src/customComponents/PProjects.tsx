"use client";
import labAssist1 from '../../public/labAssist/labAssist1.png';
import labAssist2 from '../../public/labAssist/labAssist2.png';
import labAssist3 from '../../public/labAssist/labAssist3.png';
import labAssist4 from '../../public/labAssist/labAssist4.png';
import labAssist5 from '../../public/labAssist/labAssist5.png';
import labAssist6 from '../../public/labAssist/labAssist6.png';
import cryptoLottery2 from '../../public/crypto/crypto2.png';
import cryptoLottery3 from '../../public/crypto/crypto3.png';
import cryptoLottery4 from '../../public/crypto/crypto4.png';
import cryptoLottery5 from '../../public/crypto/crypto5.png';
import cryptoLottery from '../../public/crypto/crypto1.png';
import taskManager2 from '../../public/task/task1.png';
import taskManager3 from '../../public/task/task3.png';
import taskManager4 from '../../public/task/task4.png';
import taskManager5 from '../../public/task/task5.png';
import taskManager from '../../public/task/task2.png';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PTooltip } from './PTooltip';
import PDialog from './PDialog';
import 'aos/dist/aos.css';
import AOS from "aos";
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
const labAssistTech: TechnologyType[] = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "PostgreSQL" },
    { name: "Prisma (ORM)" },
    { name: "shadcn/ui" },
    { name: "Tailwind CSS" },
    { name: "Vercel" },
    { name: "Railway" },
];
const cryptoImages = [
    cryptoLottery,
    cryptoLottery2,
    cryptoLottery3,
    cryptoLottery4,
    cryptoLottery5,
];
const taskImages = [
    taskManager,
    taskManager2,
    taskManager3,
    taskManager4,
    taskManager5,
];
const labAssistImages = [
    labAssist1,
    labAssist2,
    labAssist3,
    labAssist4,
    labAssist5,
    labAssist6,
];
const boxStyle = `
    p-3 border border-pinkShade 
    bg-pinkShade bg-opacity-5 
    flex-1 gap-2 min-w-[290px]
    flex flex-col
`
const titleStyle = `
    text-xl whitespace-nowrap
`
const paragraphTech = `
    text-sm md:text-base px-2 
    border border-green flex-1
    whitespace-nowrap bg-pink
    bg-opacity-20 dark:bg-opacity-5
`
const paragraphStyle = `
    text-pretty
`
const boxItem = `
    flex w-fit gap-2 flex-wrap flex-1
`
const cart = `
    flex flex-wrap-reverse 
    justify-between gap-4 
    items-end text-balance 
    text-justify
`
const cartItem = `
    max-w-xl flex 
    flex-col gap-2 
    m-auto lg:m-0
`
const imgStyle = `
    max-w-[400px] min-w-[264px] w-[100%]
    flex-1 hover:shadow-md m-auto lg:m-0
    hover:shadow-blueText cursor-pointer
`

const ProjectSection = ({ title, paragraph, tooltip, hrefLink, technologies, projImg, imgGalery }: {
    title: string, 
    paragraph: string, 
    tooltip?: string,
    hrefLink?: string,
    technologies: TechnologyType[], 
    imgGalery: StaticImageData[],
    projImg: StaticImageData }) => {
    const [showDialog, setShowDialog] = useState<boolean>(false);

    return (
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={titleStyle}>{title}</h2>
            <div className={cart}>
                <div className={cartItem}>     
                    <p className={paragraphStyle}>
                        {paragraph}
                    </p>
                    <div className={boxItem}>
                        {technologies.map((item) => {
                            return (
                                <p className={paragraphTech} key={item.name}>{item.name}</p>
                            )
                        })}
                    </div>
                </div>
                <PTooltip label={tooltip}>
                    <Button 
                        className='w-fit h-full m-auto lg:m-0 flex-1 p-0'
                        onClick={() => setShowDialog(true)}
                    >
                        <Image
                            style={{borderRadius: "5px"}}
                            data-aos="fade-up"
                            className={imgStyle}
                            src={projImg}
                            alt="Picture project" 
                            priority
                        />
                    </Button>
                </PTooltip>
                <PDialog imgGalery={imgGalery} hrefLink={hrefLink} dialogSwitcher={showDialog} onChangeDialog={setShowDialog} />
            </div>
        </div>
    )
}

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
        <ProjectSection 
            technologies={labAssistTech} 
            projImg={labAssist1}
            imgGalery={labAssistImages}
            hrefLink='https://lab-rador-assist.vercel.app/'
            title='Lab Assist:'
            tooltip='Visit website'
            paragraph='Lab Assist - is an early-stage project, comprehensive fullstack solution for laboratory process management and scientific research automation. 
            The application includes experiment management systems, data analysis, and workflow digitization. As a Fullstack Developer, I am responsible for 
            the complete development cycle - from server-side logic and database architecture to user interface implementation.'
        />
        <ProjectSection 
            technologies={cryptoLotteryTech} 
            projImg={cryptoLottery}
            imgGalery={cryptoImages}
            hrefLink=''
            title='Crypto Lottery:'
            tooltip='The website is not live yet'
            paragraph='Crypto Lotteria - is an early-stage startup leveraging blockchain technology for innovative lottery solutions, 
            with a backend built in Rust and Web3.js. As a Frontend Developer, I am responsible for building and optimizing the user-facing interface using modern tools.'
        />
         <ProjectSection 
            technologies={taskManagerTech} 
            projImg={taskManager}
            imgGalery={taskImages}
            hrefLink='https://semicolon-task-management.vercel.app/'
            title='Task Manager:'
            tooltip='Visit website'
            paragraph='Task Manager - is a web application for task management, built using Next.js, React, TypeScript, and Prisma. 
            It allows users to create, edit, and organize tasks, filter them by dates, and manage users and access rights. 
            The project is developed with modern technologies and deployed on Vercel.'
        />
    </div>
  )
}
