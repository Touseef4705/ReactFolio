import "../App.css"
import "../Css Component/about.css"

function About() {
    return (
        <div className="about_container">
            <h1 className="dream_font text-5xl mt-5 ml-10 underline text-center"> <span className="text-green-500 underline">About</span> Me</h1>
            <div className="about_content mt-10 poppins_font  ">
                <div className=" md:w-2/5 lg:w-2/5 lg:text-xl md:text-lg md:pl-2 text-gray-400">
                    <h1>I am a Front-End Developer with expertise in JavaScript, TypeScript, React, and Firebase, and I have a strong command of modern libraries and frameworks. My primary focus is on building intuitive and responsive user interfaces, leveraging the latest technologies to deliver seamless and efficient web applications. While my expertise lies in frontend development, I am currently expanding my skill set by learning backend technologies to become a more versatile developer. I am dedicated to continuous learning and staying updated with industry trends to ensure high-quality solutions.</h1>
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