import "../Css Component/projects.css"
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";


function Projects() {
    return (
        <div className="projects_container">
            <h1 className="dream_font text-5xl mt-5 ml-10 underline text-center"><span className="text-green-500 underline">Projects</span> Gallery</h1>
            <div className="projects_details">

                {/* 1st Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">Noon.com Clone</h1>
                        <p className="text-gray-300">
                            I developed a responsive clone of the noon.com website, replicating its user-friendly interface and extensive product catalog. The project features a fully responsive design, ensuring a seamless shopping experience across all devices. This clone demonstrates my ability to recreate complex e-commerce platforms with attention to detail and functionality.
                        </p>
                        <a href="https://touseef4705.github.io/noon/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/public/Project1.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 2nd Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">Old Portfolio</h1>
                        <p className="text-gray-300">
                            I developed a single-page portfolio using JavaScript, designed to
                            showcase my skills and projects in a clean and modern interface. The
                            portfolio emphasizes simplicity and efficiency, providing an intuitive
                            user experience while highlighting my expertise in front-end development.
                        </p>
                        <a href="https://touseef4705.github.io/New-Portfolio/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/public/Project3.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 3rd Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">Salt'n Pepper - Clone</h1>
                        <p className="text-gray-300">
                            I developed a clone of the Salt'n Pepper website, capturing its vibrant and stylish design. The project showcases a fully responsive layout, ensuring an optimal user experience on all devices. This clone highlights my ability to replicate intricate design elements and create a seamless, visually appealing interface.
                        </p>
                        <a href="https://touseef4705.github.io/salt-n-pepper-/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/public/Project.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 4th Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">E-Commerce</h1>
                        <p className="text-gray-300">
                            I built an e-commerce website using JavaScript and Firebase, featuring product upload, user signup, login, add to cart, and order processing. The site is designed for a seamless user experience, demonstrating my skills in front-end development and backend integration.
                        </p>
                        <a href="https://dreamdazzle.vercel.app/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/public/Project5.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;