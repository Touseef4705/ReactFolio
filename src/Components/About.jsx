import "../App.css"
import "../Css Component/about.css"

function About() {
    return (
        <div className="about_container">
            <h1 className="dream_font text-5xl mt-5 ml-10 underline text-center"> <span className="text-green-500 underline">About</span> Me</h1>
            <div className="about_content mt-10 poppins_font capitalize ">
                <div className=" md:w-2/5 lg:w-2/5 lg:text-xl md:text-lg md:pl-2 text-gray-400">
                    <h1>I am a Front-End Developer with expertise in JavaScript, TypeScript, React, and Firebase, along with a strong understanding of various modern libraries and frameworks. My focus is on crafting intuitive and responsive user interfaces, utilizing the latest technologies to create seamless and efficient web applications. I am committed to continuous learning and staying up-to-date with the latest industry trends to deliver high-quality solutions.</h1>
                </div>
                <div>
                    <div class="card">
                        <div class="card2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;