"use client";

import VariableProximity from "@/components/VariableProximity/VariableProximity";
import UseJsForm from "@/customComponents/PEmailForm/useForm";
import PContactLinks from "@/customComponents/PContactLinks";
import PNavigation from "@/customComponents/PNavigation";
import PExperience from "@/customComponents/PExperience";
import PProjects from "@/customComponents/PProjects";
import { Analytics } from "@vercel/analytics/react";
import PAvatar from "@/customComponents/PAvatar";
import PSkills from "@/customComponents/PSkills";
import { Toaster } from "sonner";
import { useRef } from 'react';

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <Analytics />
            <Toaster 
                className="w-[-webkit-fill-available] max-w-full" 
                position="top-center" 
            />
            
            {/* Navigation */}
            <header className="nav-container">
                <PNavigation />
            </header>
            
            {/* Hero Section */}
            <main id="main" className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-200 dark:from-slate-900 dark:via-purple-900/25 dark:to-slate-800 pt-20 pb-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-200/60 via-transparent to-transparent dark:from-purple-800/25 dark:via-transparent dark:to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-300/60 via-transparent to-transparent dark:from-cyan-800/25 dark:via-transparent dark:to-transparent"></div>
                <div className="relative py-12 md:py-18 flex flex-col md:gap-16 gap-8 container-full">
                    <div
                        ref={containerRef}
                        style={{position: 'relative', margin: '0 auto', textAlign: 'center'}}
                    >
                    <VariableProximity
                        label={'Welcome to My Portfolio'}
                        className={'text-5xl md:text-7xl font-bold text-slate-900 dark:text-white text-center'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef as React.RefObject<HTMLElement>}
                        radius={100}
                        falloff='linear'
                    />
                    </div>
                    <div className="relative flex justify-between md:gap-10 gap-4 items-center flex-wrap">
                        <PAvatar />
                        <div className="flex-1 text-center md:text-left min-w-[300px]">
                            <div
                                ref={containerRef}
                                style={{position: 'relative'}}
                            >
                                <VariableProximity
                                    label={'Full Stack Developer & UI/UX Enthusiast'}
                                    className={'text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white'}
                                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                    containerRef={containerRef as React.RefObject<HTMLElement>}
                                    radius={100}
                                    falloff='linear'
                                />
                            </div>
                            <div
                                ref={containerRef}
                                style={{position: 'relative'}}
                            >
                                <VariableProximity
                                    label={'Passionate about building scalable web applications and creating exceptional user experiences with modern technologies'}
                                    className={'text-xl md:text-2xl mt-6 text-slate-700 dark:text-gray-200'}
                                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                    containerRef={containerRef as React.RefObject<HTMLElement>}
                                    radius={100}
                                    falloff='linear'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            
            {/* Skills Section */}
            <section id="skills" className="relative py-20 md:py-28 bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 dark:from-slate-900 dark:via-indigo-900/40 dark:to-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-blue-200/40 dark:from-purple-400/20 dark:via-transparent dark:to-cyan-400/20"></div>
                <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl opacity-60 dark:bg-purple-400/25 dark:opacity-45"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl opacity-60 dark:bg-cyan-400/25 dark:opacity-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-200/45 rounded-full blur-3xl opacity-55 dark:bg-indigo-400/20 dark:opacity-35"></div>
                <div className="relative container-full content-spacing">
                    <div className="text-center content-spacing-sm">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                            Skills
                        </h1>
                        <h2 className="text-lg md:text-xl text-indigo-700 dark:text-indigo-300">
                            The skills, tools and technology I use:
                        </h2>
                    </div>
                    <PSkills />
                </div>
            </section>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            
            {/* Experience Section */}
            <section id="experience" className="relative py-20 md:py-28 bg-gradient-to-br from-pink-50 via-rose-100 to-purple-100 dark:from-slate-900 dark:via-blue-900/30 dark:to-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-200/45 via-transparent to-purple-200/45 dark:from-blue-600/15 dark:via-transparent dark:to-purple-600/15"></div>
                <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-pink-200/55 rounded-full blur-3xl opacity-65 dark:bg-blue-500/20 dark:opacity-35"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-rose-200/55 rounded-full blur-3xl opacity-65 dark:bg-purple-500/20 dark:opacity-35"></div>
                <div className="relative container-full content-spacing">
                    <div className="text-center content-spacing-sm">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                            Experience
                        </h1>
                        <h2 className="text-lg md:text-xl text-blue-700 dark:text-blue-300">
                            Experience in product companies and startups:
                        </h2>
                    </div>
                    <PExperience />
                </div>
            </section>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            
            {/* Projects Section */}
            <section id="projects" className="relative py-20 md:py-28 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 dark:from-slate-900 dark:via-cyan-900/40 dark:to-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-teal-200/40 dark:from-cyan-400/20 dark:via-transparent dark:to-blue-400/20"></div>
                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl opacity-60 dark:bg-cyan-400/30 dark:opacity-55"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200/50 rounded-full blur-3xl opacity-60 dark:bg-blue-400/30 dark:opacity-55"></div>
                <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-teal-200/45 rounded-full blur-3xl opacity-55 dark:bg-indigo-400/25 dark:opacity-40"></div>
                <div className="relative container-full content-spacing">
                    <div className="text-center content-spacing-sm">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                            Projects
                        </h1>
                        <h2 className="text-lg md:text-xl text-cyan-700 dark:text-cyan-300">
                            The Projects I am currently working on:
                        </h2>
                    </div>
                    <PProjects />
                </div>
            </section>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            
            {/* Contact Section */}
            <footer id="contact" className="relative py-20 md:py-28 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-900/40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,_var(--tw-gradient-stops))] from-indigo-200/45 via-transparent to-pink-200/40 dark:from-purple-500/25 dark:via-transparent dark:to-cyan-500/20"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-200/60 rounded-full blur-3xl opacity-70 dark:bg-purple-400/35 dark:opacity-65"></div>
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-200/50 rounded-full blur-3xl opacity-60 dark:bg-cyan-400/30 dark:opacity-55"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-200/50 rounded-full blur-3xl opacity-60 dark:bg-purple-400/30 dark:opacity-55"></div>
                <div className="absolute top-1/3 right-1/2 w-60 h-60 bg-violet-200/45 rounded-full blur-3xl opacity-55 dark:bg-indigo-400/25 dark:opacity-45"></div>
                <div className="relative container-full content-spacing">
                    <div className="text-center content-spacing-sm">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                            Contact
                        </h1>
                        <h2 className="text-lg md:text-xl text-purple-700 dark:text-purple-300">
                            Let&apos;s connect and work together:
                        </h2>
                    </div>
                    <div className="contact-form">
                        <UseJsForm />
                        <PContactLinks />
                    </div>
                </div>
            </footer>
        </>
    );
}
