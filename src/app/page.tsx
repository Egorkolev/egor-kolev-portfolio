import PSkillsCarousel from "@/customComponents/PSkillsCarousel";
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
                <div className="md:py-18 py-12 flex flex-col md:gap-16 gap-4 max-w-5xl m-auto px-4">
                    <h1 className="uppercase text-2xl md:text-3xl text-pinkShade [text-shadow:_2px_2px_2px_rgba(120,1,230,1)]
                        border border-gray-500 h-fit p-2 bg-zinc-900 rounded- w-fit mx-auto md:m-0
                    ">About me</h1>
                    <div className="flex justify-between md:gap-10 gap-2 items-start flex-wrap">
                        <PAvatar />
                        <PTerminal />
                    </div>
                </div>
            </main>
            <section id="skills" className="border-b border-gray-500 xl:h-[100vh] 2xl:h-auto pb-12 md:pb-0">
                <div className="md:py-6 py-12 flex flex-col md:gap-4 gap-4 max-w-5xl m-auto px-4">
                    <h1 className="uppercase text-2xl md:text-3xl text-pinkShade [text-shadow:_2px_2px_2px_rgba(120,1,230,1)]
                        border border-gray-500 h-fit p-2 bg-zinc-900 rounded-lg w-fit m-auto md:m-0
                    ">Skills</h1>
                    <h1 className="md:text-2xl text-green font-semibold [text-shadow:_2px_2px_2px_rgba(120,1,230,1)] w-fit m-auto text-center
                    ">The skills, tools and technology I use:</h1>
                    <PSkills />
                </div>
                <PSkillsCarousel />
            </section>
            <section id="projects" className="border-b border-gray-500 xl:h-[100vh] 2xl:h-auto">
                <div className="md:py-6 py-12 flex flex-col md:gap-4 gap-4 max-w-5xl m-auto px-4">
                    <h1 className="uppercase text-2xl md:text-3xl text-pinkShade [text-shadow:_2px_2px_2px_rgba(120,1,230,1)]
                        border border-gray-500 h-fit p-2 bg-zinc-900 rounded-lg w-fit m-auto md:m-0
                    ">Projects</h1>
                    <h1 className="md:text-2xl text-green font-semibold [text-shadow:_2px_2px_2px_rgba(120,1,230,1)] w-fit m-auto text-center
                    ">The Projects I am currently working on:</h1>
                    <PProjects />
                </div>
            </section>
        </>
    );
}
