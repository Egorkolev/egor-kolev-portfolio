import {mainCaption, subCaption, subSection} from "@/styles/tailwindClasses";
import PSkillsCarousel from "@/customComponents/PSkillsCarousel";
import UseJsForm from "@/customComponents/PEmailForm/useForm";
import PContactLinks from "@/customComponents/PContactLinks";
import PArrowScroll from "@/customComponents/PArrowScroll";
import PNavigation from "@/customComponents/PNavigation";
import PExperience from "@/customComponents/PExperience";
import PProjects from "@/customComponents/PProjects";
import PTerminal from "@/customComponents/PTerminal";
import { Analytics } from "@vercel/analytics/react";
import PAvatar from "@/customComponents/PAvatar";
import PSkills from "@/customComponents/PSkills";
import { Toaster } from "sonner";

export default function Home() {
    return (
        <>
            <Analytics />
            <Toaster position="top-center" />
            <header className="px-4"><PNavigation /></header>
            <main className="border-b border-gray-500 xl:h-[94vh] 2xl:h-auto">
                <div className="relative md:py-18 py-12 flex flex-col md:gap-16 gap-4 max-w-5xl m-auto px-4">
                    <h1 className={mainCaption}>About me</h1>
                    <div className="relative flex justify-between md:gap-10 gap-2 items-start flex-wrap">
                        <PAvatar />
                        <PTerminal />
                        <PArrowScroll />
                    </div>
                </div>
            </main>
            <section id="skills" className="border-b border-gray-500 xl:h-[100vh] 2xl:h-auto pb-12 md:pb-0">
                <div className={subSection}>
                    <h1 className={mainCaption}>Skills</h1>
                    <h2 className={subCaption}>The skills, tools and technology I use:</h2>
                    <PSkills />
                </div>
                <PSkillsCarousel />
            </section>
            <section id="projects" className="border-b border-gray-500 xl:h-[100vh] 2xl:h-auto">
                <div className={subSection}>
                    <h1 className={mainCaption}>Projects</h1>
                    <h2 className={subCaption}>The Projects I am currently working on:</h2>
                    <PProjects />
                </div>
            </section>
            <section id="experience" className="border-b border-gray-500 xl:h-[100vh] 2xl:h-auto">
                <div className={subSection}>
                    <h1 className={mainCaption}>Experience</h1>
                    <h2 className={subCaption}>Experience in product companies and startups:</h2>
                    <PExperience />
                </div>
            </section>
            <footer id="contact" className="xl:h-[100vh] 2xl:h-auto">
                <div className={subSection}>
                    <h1 className={mainCaption}>Contact</h1>
                    <h2 className={subCaption}>Contact information:</h2>
                    <div className="flex flex-wrap gap-10 justify-center mt-10">
                        <UseJsForm />
                        <PContactLinks />
                    </div>
                </div>
            </footer>
        </>
    );
}
