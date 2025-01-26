import {mainCaption, subCaption, subSection} from "@/styles/tailwindClasses";
import PSkillsCarousel from "@/customComponents/PSkillsCarousel";
import PArrowScroll from "@/customComponents/PArrowScroll";
import PNavigation from "@/customComponents/PNavigation";
import PProjects from "@/customComponents/PProjects";
import PTerminal from "@/customComponents/PTerminal";
import PAvatar from "@/customComponents/PAvatar";
import PSkills from "@/customComponents/PSkills";

export default function Home() {
    return (
        <>
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
        </>
    );
}
