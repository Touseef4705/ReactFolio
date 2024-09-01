import "../App.css"
import "../Css Component/skills.css"

function Skills() {
    return (
        <div className="skills">
            <h1 className="dream_font text-5xl mt-5 ml-10 underline text-center"><span className="text-green-500 underline">Ski</span>lls</h1>
            <div className="skills_box">
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/skills/html.png" className="h-16 w-16" alt="" />
                    <b>HTML 5</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/skills/css.png" className="h-16 w-16" alt="" />
                    <b>CSS3</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/skills/bootstrap.png" className="h-16 w-16" alt="" />
                    <b>BOOTSTRAP</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/skills/tailwind.png" className="h-16 w-22" alt="" />
                    <b>TAILWIND</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/skills/js.png" className="h-16 w-22" alt="" />
                    <b>JAVASCRIPT</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/skills/ts.png" className="h-16 w-22" alt="" />
                    <b>TYPESCRIPT</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/skills/firebase.png" className="h-16 w-22" alt="" />
                    <b>FIREBASE</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/skills/atom.png" className="h-16 w-22" alt="" />
                    <b>REACT</b>
                </div>
            </div>
        </div>
    )
}

export default Skills;