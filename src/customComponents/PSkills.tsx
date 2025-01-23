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
    { name: "Shadcn/ui" },
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
    p-3 border border-pinkShade 
    bg-pinkShade bg-opacity-5 
    flex-1 gap-2 min-w-[290px]
    flex flex-col
`
const titleStyle = `
    text-xl
`
const paragraph = `
    text:base md:text-lg px-5 py-1 
    border border-green
`
const boxItem = `
    flex w-fit gap-2 flex-wrap
`

const TechnologySection = ({ title, technologies }: { title: string, technologies: TechnologyType[] }) => {
    return (
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={titleStyle}>{title}</h2>
            <div className={boxItem}>
                {technologies.map((item) => {
                    return (
                        <p className={paragraph} key={item.name}>{item.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

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
        <TechnologySection title='Frontend Technologies:' technologies={frontendTechnologies} />
        <TechnologySection title='Styling & Design:' technologies={stylingDesign} />
        <TechnologySection title='Backend & Databases:' technologies={backend} />
        <TechnologySection title='Tools:' technologies={tools} />
        <TechnologySection title='Other:' technologies={other} />
    </div>
  )
}
