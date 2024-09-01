import React, { useState } from "react";
import Modal from "react-modal";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import "../Css Component/contact.css";

// Set the app element for accessibility
Modal.setAppElement("#root");

const Contact = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // // const handleContactForm = (e) => {
  // //   e.preventDefault();
  // //   setModalIsOpen(true); // Open the modal on form submission
  // // };

  // const closeModal = () => {
  //   setModalIsOpen(false); // Close the modal
  // };

  return (
    <div className="contact poppins_font">
      <h1 className="dream_font text-5xl mt-5 ml-10 underline text-center">
        <span className="text-green-600 underline">Contact</span> Me
      </h1>
      <div className="contact_container py-7">
        <div className="contact_content">
          <h1>
            I'd Love To Hear From You.{" "}
            <FontAwesomeIcon icon={faHeart} className="text-red-600" />{" "}
          </h1>
          <h3 className="text-gray-300 p-4">
            Feel free to drop me a message and let's start a conversation that
            matters. Your feedback makes a world of difference!
          </h3>
        </div>
        <div className="contact_form">
          <form
            action="https://api.web3forms.com/submit" method="POST"
            
            className="max-w-lg mx-auto p-6 rounded-lg shadow-lg">

            <input type="hidden" name="access_key" value="01a63042-f3e1-4267-aa70-f988f72fcc94" />

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-300 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-sm text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-green-300"
              >
                Your Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-300 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-green-300"
              >
                Your Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_subject"
                id="floating_subject"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-300 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_subject"
                className="peer-focus:font-medium absolute text-sm text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-green-300"
              >
                Subject
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                name="floating_description"
                id="floating_description"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-300 peer h-32 resize-none"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_description"
                className="peer-focus:font-medium absolute text-sm text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-green-300"
              >
                Description
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-black hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Modal Component */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="error-modal"
        overlayClassName="error-modal-overlay"
        closeTimeoutMS={300}>
        <h2 className="modal-title">Error</h2>
        <p className="modal-message">
          An error has occurred. Please try again later.
        </p>
        <button onClick={closeModal} className="close-button">
          Close
        </button>
      </Modal> */}
    </div>
  );
};

export default Contact;
