"use client";
import React, { useEffect } from 'react';
import iseehear from '../../public/iseehear.png';
import randonizer from '../../public/randonizer.avif';
import AOS from "aos";
import 'aos/dist/aos.css';
import Image, { StaticImageData } from 'next/image';
import { PTooltip } from './PTooltip';
import { Button } from '@/components/ui/button';

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

const boxStyle = `
    p-3 border border-pinkShade 
    bg-pinkShade bg-opacity-5 
    flex-1 gap-6 min-w-[290px]
    flex flex-col
`
const titleStyle = `
    text-xl text-center lg:text-start
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
    flex flex-wrap
    justify-between gap-4 
    items-start text-balance 
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

const ProjectSection = ({ title, paragraph, tooltip, hrefLink, technologies, projImg }: {
    title: string, 
    paragraph: string, 
    tooltip?: string,
    hrefLink?: string,
    technologies: TechnologyType[], 
    projImg: StaticImageData }) => {
    return (
        <div data-aos="fade-up" className={boxStyle}>
            <h2 className={titleStyle}>{title}</h2>
            <div className={cart}>
                <PTooltip label={tooltip}>
                    <Button 
                        disabled={!hrefLink?.length}
                        className='w-fiy h-full m-auto lg:m-0 flex-1 p-0'>
                        <a  
                            rel="preload"
                            style={{borderRadius: "5px"}}
                            href={hrefLink} 
                            target={"_blank"}
                        > 
                            <Image
                                style={{borderRadius: "5px"}}
                                data-aos="fade-up"
                                className={imgStyle}
                                src={projImg}
                                alt="Picture project" 
                                priority
                            />
                        </a>
                    </Button>
                </PTooltip>
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
            </div>
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
    <div className='relative'>
        <span className='absolute top-0 left-40 shadow-[400px_130px_360px_180px_rgba(150,1,130,0.1)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 left-40 shadow-[200px_180px_360px_100px_rgba(100,1,130,0.3)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 left-40 shadow-[100px_130px_360px_120px_rgba(120,1,130,0.1)] z-[-1] rounded-full'></span>
        <span className='absolute bottom-20 right-20 w-80 h-80 -z-10 opacity-10'
            style={{
                background: 'url(/typescript.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
         }}></span>
         <ProjectSection 
            technologies={iseehearTech} 
            projImg={iseehear}
            hrefLink='https://www.linkedin.com/company/iseehear-inc./'
            title='Frontend Developer - Iseehear Inc. (Toronto, ON, Canada): Jun 2022 - Oct 2024'
            tooltip='Visit LinkedIn'
            paragraph='Record Builder - Designed and developed a custom solution for creating and managing user-defined data records.
            Implemented dynamic forms, ensuring scalability and reusability.
            Delivered a modular and maintainable codebase, improving development efficiency for future updates.'
        />
         <ProjectSection 
            technologies={randonizerTech} 
            projImg={randonizer}
            hrefLink='https://www.linkedin.com/company/randonizer/'
            title='Frontend Developer - Randonizer (Kharkiv, Ukraine): Apr 2020 - Mar 2022'
            tooltip='Visit LinkedIn'
            paragraph='Influencers ad platform - Created a mapping app that lets users interact with real-world containers and see real-time data for a more engaging experience. 
            Built a platform for influencers to easily organize events and connect with their audience.
            Developed an ad platform where advertisers can track and manage the performance of influencer campaigns.'
        />
    </div>
  )
}
