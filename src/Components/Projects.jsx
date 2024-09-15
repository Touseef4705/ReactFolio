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
                            src="/Project1.PNG"
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
                            src="/Project3.PNG"
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
                            src="/Project.PNG"
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
                            src="/Project5.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 5th Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">Attendence Portal</h1>
                        <p className="text-gray-300">
                            I developed a student attendance portal using HTML, CSS, and JavaScript. This portal allows for seamless tracking of student attendance, showcasing my ability to create functional and user-friendly web applications with front-end technologies.
                        </p>
                        <a href="https://attendance-portal-theta.vercel.app/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/Project2.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 6th Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">Text Editor</h1>
                        <p className="text-gray-300">
                            I created a text editor app using HTML, CSS, and JavaScript. This app provides a smooth and user-friendly experience for writing and editing text, demonstrating my skills in developing functional web applications with front-end technologies.
                        </p>
                        <a href="https://text-editor-six-livid.vercel.app/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/Project4.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 7th Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">Calculator App</h1>
                        <p className="text-gray-300">
                            I developed a calculator using HTML, CSS, and JavaScript. This calculator offers a user-friendly interface for performing basic arithmetic operations, showcasing my ability to create interactive and functional web applications using front-end technologies.
                        </p>
                        <a href="https://touseef4705.github.io/Calculator/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/Project6.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 8th Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">Todo With React</h1>
                        <p className="text-gray-300">
                            I developed a Todo app using React, designed for easy task management. The app features a clean and modern user interface, allowing users to add, delete, and toggle tasks with seamless interactivity. This project demonstrates my proficiency in React and front-end development, with a focus on creating functional and user-friendly applications.
                        </p>
                        <a href="https://react-todo-zeta-rouge.vercel.app/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/Project7.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 9th Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">React Quiz App</h1>
                        <p className="text-gray-300">
                            I built a Quiz App using React with an interactive UI. It allows users to answer questions, track their score, and get instant feedback, showcasing my skills in React and user-friendly web development.
                        </p>
                        <a href="https://react-quiz-app-two-chi.vercel.app/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/Project8.PNG"
                            className="w-full rounded-md h-full object-cover object-center"
                            alt="Portfolio Preview"
                        />
                    </div>
                </div>

                {/* 10th Project */}
                <div className="project_content border border-white my-2 w-11/12 mx-auto rounded-md h-54">
                    <div className="lg:w-2/4 md:w-3/4 p-6 poppins_font">
                        <h1 className="text-3xl py-4 font-bold">Git Finder App</h1>
                        <p className="text-gray-300">
                            A React.js app to search GitHub profiles and view repo details, followers, and stats. It uses the GitHub API for real-time data and highlights my skills in API integration and web development.
                        </p>
                        <a href="https://git-finder-nine-olive.vercel.app/" target="blank" class="Download-button my-3">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Live Preview</span>
                        </a>
                    </div>
                    <div className="border border-green-500 rounded-md w-full lg:w-2/4 h-80 flex justify-center items-center">
                        <img
                            src="/Project9.PNG"
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