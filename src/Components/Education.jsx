import "../App.css"
import "../Css Component/education.css"

function Education(){
    return(
        <div className="education">
                <h1 className="dream_font text-5xl mt-5 ml-10 underline text-center"><span className="text-green-600 underline">Education</span> Journey</h1>
            <div className="flex my-6 xl:flex-row flex-col justify-center ">
                <div className="poppins_font w-4/5 mx-auto px-10 my-6 text-gray-300">
                    <h2 className="text-green-500 text-2xl underline mb-3 flex"> <img src="/public/icons/mortarboard.png" alt="Education" className="h-10 w-10 rounded-full bg-white mr-2" /> Saylani Mass IT Training</h2>
                    <p><b>Passing Year :</b> Study Continue...</p>
                    <p><b>Institute :</b> Saylani Mass IT Training (SMIT).</p>
                    <p><b>Facilty :</b> Web and App Development.</p>
                    <p className="w-11/12 "><b>Description :</b> I completed a Web and App Development course at Saylani Mass IT Training (SMIT), where I gained expertise in front-end. Here I learned various programming languages, frameworks, and tools for developing responsive websites.</p>
                </div>
                <div className="poppins_font w-4/5 mx-auto px-10 my-6 text-gray-300">
                    <h2 className="text-green-500 text-2xl underline mb-3 flex"> <img src="/public/icons/mortarboard.png" alt="Education" className="h-10 w-10 rounded-full bg-white mr-2" /> Intermediate</h2>
                    <p><b>Passing Year :</b> 2024</p>
                    <p><b>College :</b> Govt College Permier Boys Degree Collage</p>
                    <p><b>Facilty :</b> Business Commerce.</p>
                    <p className="w-3/4 "><b>Grade :</b> C</p>
                </div>
                <div className="poppins_font w-4/5 mx-auto px-10 my-6 text-gray-300">
                    <h2 className="text-green-500 text-2xl underline mb-3 flex"> <img src="/public/icons/mortarboard.png" alt="Education" className="h-10 w-10 rounded-full bg-white mr-2" /> Matriculation</h2>
                    <p><b>Passing Year :</b> 2022</p>
                    <p><b>School :</b> Tameer-e-Millat Schooling System.</p>
                    <p><b>Facilty :</b> Science</p>
                    <p className="w-3/4 "><b>Description :</b> A+</p>
                </div>
            </div>
        </div>
    )
}

export default Education