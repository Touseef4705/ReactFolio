import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


import '../Css Component/navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const [navShow, setNavShow] = useState(false);

    const handleShowNavbar = () => {
        setNavShow(!navShow);
    };

    return (
        <div className="mb-20">
            <nav className="fixed top-0 z-20 w-full bg-black border-b-2 border-green-600 text-green-600 px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-white py-2 px-4 flex-grow lg:flex-grow-0 text-start">
                    <h2 className="catRegular_font font-bold text-3xl select-none">
                        <span className="text-green-600">{`< Touseef `}</span>Abid {`/>`}
                    </h2>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-7  text-lg items-center flex-grow justify-end vegan_font">
                    <Link to="/" className="nav-link items-center hover:text-green-400 px-2">
                        <HomeOutlinedIcon className="text-white" /> Home
                    </Link>
                    <Link to="/About" className="nav-link hover:text-green-400 px-2">
                        <AccountCircleOutlinedIcon className="text-white" /> About Me
                    </Link>
                    <Link to="/Projects" className="nav-link hover:text-green-400 px-2">
                        <EditNoteOutlinedIcon className="text-white" /> Projects
                    </Link>
                    <Link to="/Experience" className="nav-link hover:text-green-400 px-2">
                        <BusinessCenterIcon className="text-white" /> Experience
                    </Link>
                    <Link to="/Contact" className="nav-link hover:text-green-400 px-2">
                        <ContactsOutlinedIcon className="text-white" /> Contact
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden flex-grow text-right">
                    <FontAwesomeIcon
                        icon={navShow ? faTimes : faBars}
                        className="text-green-600 text-2xl cursor-pointer select-none focus:outline-none bg-transparent border-green-400 border p-2 px-3 rounded-lg transition-all duration-300 ease-linear"
                        onClick={handleShowNavbar}
                    />
                </div>
            </nav>

            {/* Responsive Navbar */}
            <div className={`fixed top-20 z-10 border-b-2 border-green-600 lg:hidden w-full vegan_font bg-black text-green-600 px-6 py-4 flex flex-col items-center justify-center space-y-4 transition-all duration-300 ease-linear ${navShow ? "max-h-screen opacity-100 scale-100" : "max-h-0 opacity-0 scale-50 pointer-events-none overflow-hidden"}`}>
                <Link to="/" className="nav-link hover:text-green-500 px-2 py-3">
                    <HomeOutlinedIcon className="text-white" /> Home
                </Link>
                <Link to="/About" className="nav-link hover:text-green-500 px-2 py-3">
                    <AccountCircleOutlinedIcon className="text-white" /> About Me
                </Link>
                <Link to="/Projects" className="nav-link hover:text-green-500 px-2 py-3">
                    <EditNoteOutlinedIcon className="text-white" /> Projects
                </Link>
                <Link to="/Experience" className="nav-link hover:text-green-400 px-2">
                    <BusinessCenterIcon className="text-white" /> Experience
                </Link>
                <Link to="/Contact" className="nav-link hover:text-green-500 px-2 py-3">
                    <ContactsOutlinedIcon className="text-white" /> Contact
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
