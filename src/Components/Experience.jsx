import "../App.css";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
    return (
        <div className="experience pt-5">
            <h1 className="dream_font text-5xl ml-10 underline text-center">
                <span className="text-green-600 underline">Experience</span> Journey
            </h1>
            <div className="flex my-6 xl:flex-row flex-col justify-center">
                <div className="poppins_font w-4/5 mx-auto px-10 my-6 text-gray-300">
                    <h2 className="text-green-500 text-2xl underline mb-3 flex">
                        <FaBriefcase className="h-10 w-10 bg-black border rounded-full mr-2 p-2" /> NubIT
                    </h2>
                    <p><b>Role :</b> Frontend Developer</p>
                    <p><b>Duration :</b> 3-Month Internship & 3-Month Job</p>
                    <p className="w-11/12">
                        <b>Description :</b> Worked on web development projects using HTML, CSS, JavaScript, and React.js. Gained valuable industry experience by contributing to dynamic UI components and implementing responsive designs.
                    </p>
                </div>
                <div className="poppins_font w-4/5 mx-auto px-10 my-6 text-gray-300">
                    <h2 className="text-green-500 text-2xl underline mb-3 flex">
                        <FaBriefcase className="h-10 w-10 bg-black border rounded-full mr-2 p-2" /> Vehware
                    </h2>
                    <p><b>Role :</b> Frontend Developer</p>
                    <p><b>Duration :</b> Currently Working</p>
                    <p className="w-11/12">
                        <b>Description :</b> Enhancing frontend features for innovative projects using React.js, Next.js, and modern UI frameworks. Collaborating with a team to deliver scalable and user-friendly web applications.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
