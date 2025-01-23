"use client";
import React, { useEffect } from "react";
import HTML5 from "../../public/html5.svg";
import CSS3 from "../../public/css3.svg";
import JavaScript from "../../public/javascript.svg";
import TypeScript from "../../public/typescript.svg";
import Reactjs from "../../public/react.svg";
import Next from "../../public/nextdotjs.svg";
import Redux from "../../public/redux.svg";
import Git from "../../public/git.svg";
import Figma from "../../public/figma.svg";
import SASS from "../../public/sass.svg";
import Tailwind from "../../public/tailwindcss.svg";
import Bootstrap from "../../public/bootstrap.svg";
import MUI from "../../public/mui.svg";
import shadcn from "../../public/shadcnui.svg";
import PostgreSQL from "../../public/postgresql.svg";
import Prisma from "../../public/prisma.svg";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import AOS from "aos";
import 'aos/dist/aos.css';

interface TechnologyType {
    name: string;
    svg: StaticImageData;
}

const technologyT: TechnologyType[] = [
    { name: "HTML5", svg: HTML5 },
    { name: "CSS3", svg: CSS3 },
    { name: "JavaScript", svg: JavaScript },
    { name: "TypeScript", svg: TypeScript },
    { name: "React", svg: Reactjs },
    { name: "Next.js", svg: Next },
    { name: "Redux", svg: Redux },
    { name: "Git", svg: Git },
];

const technologyB: TechnologyType[] = [
    { name: "Figma", svg: Figma },
    { name: "SASS", svg: SASS },
    { name: "Tailwind CSS", svg: Tailwind },
    { name: "Bootstrap", svg: Bootstrap },
    { name: "MUI", svg: MUI },
    { name: "shadcn/ui", svg: shadcn },
    { name: "PostgreSQL", svg: PostgreSQL },
    { name: "Prisma", svg: Prisma },
];

const carousel = `
    w-full max-w-full cursor-pointer
`
const carouselItem = `   
    basis-1/2.5 sm:basis-1/4 md:basis-1/3 lg:basis-1/5 xl:basis-11/1 py-2
`
const card = `
    border border-gray-500 w-max h-fit p-2 bg-zinc-900 rounded-lg flex md:gap-4 gap-2 md:text-lg text-sm animate-glow
`
const paragraph = `
    whitespace-nowrap
`
const imgStyle = `
    md:w-10 w-5
`

export default function PSkillsCarousel() {

    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        offset: 120,
        easing: 'ease-in-out',
        })
    }, []);

  return (
    <div className="relative">
        <span className='absolute top-0 right-1/2 shadow-[500px_30px_360px_180px_rgba(12,1,230,0.1)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 right-1/2 shadow-[200px_80px_360px_100px_rgba(12,1,230,0.3)] z-[-1] rounded-full'></span>
        <span className='absolute top-0 right-1/2 shadow-[000px_30px_360px_120px_rgba(12,1,230,0.1)] z-[-1] rounded-full'></span>
        <span className='absolute bottom-20 right-1/2 w-80 h-80 -z-10 opacity-15'
            style={{
                background: 'url(/redux.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
         }}></span>
         <div  data-aos="fade-up" className="flex flex-col gap-4 relative">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    AutoScroll({
                        speed: 0.5,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                        direction: "backward",
                    }),
                ]}
                className={carousel}
            >
                <CarouselContent>
                    {technologyT.map((icon, index) => (
                        <CarouselItem
                            key={index}
                            className={carouselItem}
                        >
                            <Card
                                className={card}
                                key={icon.name}
                            >
                                <Image
                                className={imgStyle}
                                width={60}
                                height={60}
                                src={icon.svg.src}
                                alt={`${icon.name} icon`}
                                />
                                <p className={paragraph}>{icon.name}</p>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    AutoScroll({
                        speed: 0.5,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,

                    }),
                ]}
                className={carousel}
            >
                <CarouselContent>
                    {technologyB.map((icon, index) => (
                        <CarouselItem
                            key={index}
                            className={carouselItem}
                        >
                            <Card
                                className={card}
                                key={icon.name}
                            >
                                <Image
                                className={imgStyle}
                                width={60}
                                height={60}
                                src={icon.svg.src}
                                alt={`${icon.name} icon`}
                                />
                                <p className={paragraph}>{icon.name}</p>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    </div>
  );
}
