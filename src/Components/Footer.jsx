import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../App.css"
import "../Css Component/footer.css"

function Footer() {
    return (
        <footer className="poppins_font">
            <div>
                <p>Designed & Developed By <span className="text-green-500">Touseef Abid</span> </p>
            </div>
            <div className="flex">
                <a href="https://www.facebook.com/profile.php?id=100084803561855" target="blank"><FontAwesomeIcon icon={faFacebook} className="text-2xl mx-2 text-white hover:text-green-500 cursor-pointer" /></a>
                <a href="https://www.instagram.com/mrtouseef09/" target="blank"><FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2 text-white hover:text-green-500 cursor-pointer" /></a>
                <a href="https://github.com/Touseef4705" target="blank"><FontAwesomeIcon icon={faGithub} className="text-2xl mx-2 text-white hover:text-green-500 cursor-pointer" /></a>
                <a href="https://www.linkedin.com/in/touseefabid/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2 text-white hover:text-green-500 cursor-pointer" /></a>
            </div>
        </footer>
    )
}

export default Footer