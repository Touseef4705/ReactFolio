import "../App.css"
import "../Css Component/skills.css"
import { FaHtml5, FaCss3, FaBootstrap, FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";


function Skills() {

    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="h-16 w-16 " /> },
        { name: "CSS3", icon: <FaCss3 className="h-16 w-16 " /> },
        { name: "Bootstrap", icon: <FaBootstrap className="h-16 w-16 " /> },
        { name: "Tailwind", icon: <RiTailwindCssFill className="h-16 w-16 " /> },
        { name: "JavaScript", icon: <IoLogoJavascript className="h-16 w-16 " /> },
        { name: "TypeScript", icon: <BiLogoTypescript className="h-16 w-16 " /> },
        { name: "Firebase", icon: <RiFirebaseFill className="h-16 w-16 " /> },
        { name: "React", icon: <FaReact className="h-16 w-16 " /> },
        { name: "Next.js", icon: <RiNextjsFill className="h-16 w-16 " /> },
        { name: "Redux", icon: <TbBrandRedux className="h-16 w-16 " /> },
    ];

    return (
        <div className="skills">
            <h1 className="dream_font text-5xl mt-5 ml-10 underline text-center"><span className="text-green-500 underline">Ski</span>lls</h1>
            <div className="skills_box">
                {skills.map((skill, index) => (
                    <div key={index} className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                        {skill.icon}
                        <b>{skill.name}</b>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;
