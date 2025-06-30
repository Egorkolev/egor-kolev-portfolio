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
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { ChromaGrid, ChromaItem } from '@/components/ChromaGrid/ChromaGrid';
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
// Преобразуем StaticImageData в строку URL для ChromaGrid
const getImageUrl = (image: StaticImageData): string => {
    return image.src;
};

const ProjectData: ChromaItem[] = [
    {
        image: getImageUrl(labAssist1),
        title: "Lab Assist",
        subtitle: "Fullstack Laboratory Management",
        handle: "Lab Management System",
        borderColor: "#4F46E5",
        gradient: "linear-gradient(145deg, #4F46E5, #1e293b)",
        url: "https://lab-rador-assist.vercel.app/"
    },
    {
        image: getImageUrl(cryptoLottery),
        title: "Crypto Lottery",
        subtitle: "Blockchain Lottery Platform",
        handle: "Blockchain Technology",
        borderColor: "#10B981",
        gradient: "linear-gradient(210deg, #10B981, #1e293b)",
        url: ""
    },
    {
        image: getImageUrl(taskManager),
        title: "Task Manager",
        subtitle: "Modern Task Management",
        handle: "Productivity Tool",
        borderColor: "#F59E0B",
        gradient: "linear-gradient(165deg, #F59E0B, #1e293b)",
        url: "https://semicolon-task-management.vercel.app/"
    }
];

const ProjectDetails = ({ 
    title, 
    paragraph, 
    technologies, 
    imgGallery, 
    hrefLink 
}: {
    title: string;
    paragraph: string;
    technologies: TechnologyType[];
    imgGallery: StaticImageData[];
    hrefLink?: string;
}) => {
    const [showDialog, setShowDialog] = useState<boolean>(false);

    return (
        <>
            <div data-aos="fade-up" className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 mb-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">
                        {title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {paragraph}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech.name}
                                className="px-3 py-1.5 bg-slate-800/60 text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-700/70 hover:text-white transition-all duration-200 border border-slate-600/20"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button
                            onClick={() => setShowDialog(true)}
                            className="theme-toggle bg-purple-500/20 text-white"
                        >
                            View Gallery
                        </button>
                        {hrefLink && (
                            <a
                                href={hrefLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="theme-toggle bg-blue-500/20 text-white"
                            >
                                Visit Project
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <PDialog 
                imgGalery={imgGallery} 
                hrefLink={hrefLink} 
                dialogSwitcher={showDialog} 
                onChangeDialog={setShowDialog} 
            />
        </>
    );
};

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
        <div className='max-w-5xl mx-auto space-y-8'>
            {/* ChromaGrid для визуального отображения проектов */}
            <div data-aos="fade-up" className="flex justify-center backdrop-blur-sm">
                <ChromaGrid 
                    items={ProjectData}
                    className="w-full max-w-4xl"
                    radius={250}
                    columns={3}
                    rows={1}
                    damping={0.4}
                    fadeOut={0.5}
                />
            </div>

            {/* Детальная информация о проектах */}
            <div className="space-y-6">
                <ProjectDetails 
                    title="Lab Assist"
                    paragraph="Lab Assist - is an early-stage project, comprehensive fullstack solution for laboratory process management and scientific research automation. The application includes experiment management systems, data analysis, and workflow digitization. As a Fullstack Developer, I am responsible for the complete development cycle - from server-side logic and database architecture to user interface implementation."
                    technologies={labAssistTech}
                    imgGallery={labAssistImages}
                    hrefLink="https://lab-rador-assist.vercel.app/"
                />
                
                <ProjectDetails 
                    title="Crypto Lottery"
                    paragraph="Crypto Lotteria - is an early-stage startup leveraging blockchain technology for innovative lottery solutions, with a backend built in Rust and Web3.js. As a Frontend Developer, I am responsible for building and optimizing the user-facing interface using modern tools."
                    technologies={cryptoLotteryTech}
                    imgGallery={cryptoImages}
                    hrefLink=""
                />
                
                <ProjectDetails 
                    title="Task Manager"
                    paragraph="Task Manager - is a web application for task management, built using Next.js, React, TypeScript, and Prisma. It allows users to create, edit, and organize tasks, filter them by dates, and manage users and access rights. The project is developed with modern technologies and deployed on Vercel."
                    technologies={taskManagerTech}
                    imgGallery={taskImages}
                    hrefLink="https://semicolon-task-management.vercel.app/"
                />
            </div>
        </div>
    )
}
