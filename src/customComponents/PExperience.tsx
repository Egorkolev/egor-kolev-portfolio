"use client";
import React, { useEffect } from 'react';
import iseehear from '../../public/iseehear.png';
import randonizer from '../../public/randonizer.avif';
import AOS from "aos";
import 'aos/dist/aos.css';
import Image, { StaticImageData } from 'next/image';
import SpotlightCard from '@/components/SpotlightCard/SpotlightCard';

interface TechnologyType {
    name: string;
}
const iseehearTech: TechnologyType[] = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Redux" },
    { name: "Next.js" },
    { name: "Material UI" },
    { name: "SASS" },

];
const randonizerTech: TechnologyType[] = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Redux" },
    { name: "Ant Design" },
];

const ExperienceSection = ({ title, paragraph, hrefLink, technologies, projImg }: {
    title: string, 
    paragraph: string, 
    hrefLink?: string,
    technologies: TechnologyType[], 
    projImg: StaticImageData 
}) => {
    return (
        <div data-aos="fade-up">
            <SpotlightCard 
                className="backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300"
                spotlightColor="rgba(99, 102, 241, 0.15)"
            >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full lg:w-80">
                        <a 
                            href={hrefLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        > 
                            <Image
                                className="w-full h-48 lg:h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer border border-slate-600/30"
                                src={projImg}
                                alt="Company image" 
                                priority
                            />
                        </a>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4">
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
                    </div>
                </div>
            </SpotlightCard>
        </div>
    )
}

export default function PExperience() {

      useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 120,
          easing: 'ease-in-out',
        })
      }, []);

  return (
    <div className='max-w-5xl mx-auto space-y-6'>
         <ExperienceSection 
            technologies={iseehearTech} 
            projImg={iseehear}
            hrefLink='https://www.linkedin.com/company/iseehear-inc./'
            title='Frontend Developer - Iseehear Inc. (Toronto, ON, Canada): Jun 2022 - Oct 2024'
            paragraph='Record Builder - Designed and developed a custom solution for creating and managing user-defined data records. Implemented dynamic forms, ensuring scalability and reusability. Delivered a modular and maintainable codebase, improving development efficiency for future updates.'
        />
         <ExperienceSection 
            technologies={randonizerTech} 
            projImg={randonizer}
            hrefLink='https://www.linkedin.com/company/randonizer/'
            title='Frontend Developer - Randonizer (Kharkiv, Ukraine): Apr 2020 - Mar 2022'
            paragraph='Influencers ad platform - Created a mapping app that lets users interact with real-world containers and see real-time data for a more engaging experience. Built a platform for influencers to easily organize events and connect with their audience. Developed an ad platform where advertisers can track and manage the performance of influencer campaigns.'
        />
    </div>
  )
}
