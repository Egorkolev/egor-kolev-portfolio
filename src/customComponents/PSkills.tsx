"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

interface TechnologyType {
    name: string;
}
const frontendTechnologies: TechnologyType[] = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Redux" },
    { name: "Next.js" },
];
const stylingDesign: TechnologyType[] = [
    { name: "SASS" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Material UI" },
    { name: "shadcn/ui" },
];
const backend: TechnologyType[] = [
    { name: "PostgreSQL" },
    { name: "Prisma (ORM)" },
];
const tools: TechnologyType[] = [
    { name: "Git" },
    { name: "Figma" },
    { name: "Vercel" },
    { name: "Supabase" },
];
const other: TechnologyType[] = [
    { name: "Agile/Scrum" },
    { name: "REST APIs" },
    { name: "Responsive Design" },
];
const boxStyle = `
    p-5 border border-pinkShade 
    bg-pinkShade bg-opacity-5 
    flex-1 gap-2 min-w-[290px]
    flex flex-col
`
const title = `
    text-xl
`
const paragraph = `
    text:base md:text-lg px-5 py-1 
    border border-green
`
const boxItem = `
    flex w-fit gap-2 flex-wrap
`

export default function PSkills() {

      useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 120,
          easing: 'ease-in-out',
        })
      }, []);

  return (
    <div className='flex flex-wrap max-w-5xl m-auto'>
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={title}>Frontend Technologies:</h2>
            <div className={boxItem}>
                {frontendTechnologies.map((item) => {
                    return (
                        <p className={paragraph} key={item.name}>{item.name}</p>
                    )
                })}
            </div>
        </div>
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={title}>Styling & Design:</h2>
            <div className={boxItem}>
                {stylingDesign.map((item) => {
                    return (
                        <p className={paragraph} key={item.name}>{item.name}</p>
                    )
                })}
            </div>
        </div>
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={title}>Backend & Databases:</h2>
            <div className={boxItem}>
                {backend.map((item) => {
                    return (
                        <p className={paragraph} key={item.name}>{item.name}</p>
                    )
                })}
            </div>
        </div>
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={title}>Tools:</h2>
            <div className={boxItem}>
                {tools.map((item) => {
                    return (
                        <p className={paragraph} key={item.name}>{item.name}</p>
                    )
                })}
            </div>
        </div>
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={title}>Other:</h2>
            <div className={boxItem}>
                {other.map((item) => {
                    return (
                        <p className={paragraph} key={item.name}>{item.name}</p>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
