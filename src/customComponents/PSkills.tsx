"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import SpotlightCard from '@/components/SpotlightCard/SpotlightCard';

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
    { name: "Node.js" },
    { name: "Express" },
    { name: "PostgreSQL" },
    { name: "Prisma (ORM)" },
];

const tools: TechnologyType[] = [
    { name: "Git" },
    { name: "Figma" },
    { name: "Vercel" },
    { name: "Railway" },
    { name: "Supabase" },
    { name: "Postman" },
    { name: "Insomnia" },
];

const other: TechnologyType[] = [
    { name: "REST APIs" },
    { name: "NEXT APIs" },
    { name: "Agile/Scrum" },
    { name: "Responsive Design" },
];

const TechnologySection = ({ title, technologies }: { title: string, technologies: TechnologyType[] }) => {
    return (
        <div data-aos="fade-up">
            <SpotlightCard 
                className="backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300"
                spotlightColor="rgba(99, 102, 241, 0.15)"
            >
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {technologies.map((tech) => (
                        <span
                            key={tech.name}
                            className="px-3 py-1.5 bg-slate-800/60 text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-700/70 hover:text-white transition-all duration-200 border border-slate-600/20"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </SpotlightCard>
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
        <div className='max-w-5xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TechnologySection title='Frontend Technologies' technologies={frontendTechnologies} />
                <TechnologySection title='Backend & Databases' technologies={backend} />
                <TechnologySection title='Styling & Design' technologies={stylingDesign} />
                <TechnologySection title='Tools' technologies={tools} />
            </div>
            <div className="mt-6">
                <TechnologySection title='Other' technologies={other} />
            </div>
        </div>
    )
}
