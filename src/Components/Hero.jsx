import "../Css Component/hero.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import AnimatedText from "./AnimatedText/AnimatedText"
import "../App.css"

function Hero() {
    return (
        <div className="hero">
            <div className="hero_social_icon">
                <a href="https://www.facebook.com/profile.php?id=100084803561855" className="px-2 my-4 mx-2">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/mrtouseef09/" className="px-2 my-4 mx-2">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/Touseef4705" className="px-2 my-4 mx-2">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/touseefabid/" className="px-2 my-4 mx-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            <div>
                <h1 className="text-3xl py-3 text-gray-400 poppins_font">Hello I'm <span className="text-green-600 catRegular_font">Touseef </span><span className="catRegular_font text-white">Abid</span> </h1>
                <AnimatedText />
                <h1 className="w-2/4 mx-auto mt-2 text-gray-400">
                    A passionate Front-end Developer 🚀 having an experience of building Websites with JavaScript / Reactjs and some other outstanding libraries and frameworks.
                </h1>
                <a href="/TouseefAbidCv.pdf" download="TouseefAbidCv.pdf" class="btn mx-auto mt-3">
                    <strong className="poppins_font text-md"><FontAwesomeIcon icon={faDownload} /> Download CV</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </a>


            </div>

        </div>
    )

}

export default Hero