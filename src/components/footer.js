import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaLinkedin, FaMailBulk, FaGit, FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center relative">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-sm">
           <span className="font-bold">&copy;Copyright. All Rights Reserved</span>
        </p>

        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/kajalkachhwaha91" className="border border-gray-400 p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaGithub />
          </a>
          <a
            href="https://kachhwahakajal91@gmail.com
"
            className="border border-gray-400 p-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaMailBulk />
          </a>
          <a
            href="https://www.instagram.com/kajall__k_/"
            className="border border-gray-400 p-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kajal-kachhwaha-3a1918249/"
            className="border border-gray-400 p-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <p className="text-sm">
          Designed by <a href="https://www.linkedin.com/in/kajal-kachhwaha-3a1918249/" className="text-green-400 hover:underline"><span className="font-bold">Kajal_Kachhwaha</span></a>
        </p>
      </div>

      {/* Scroll to top button */}
      <a
  href="#top"
  className="z-50 bg-green-600 text-white p-3 rounded-full fixed bottom-6 right-6 shadow-md hover:bg-green-700 transition focus:outline-none"
  aria-label="Scroll to top"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
</a>

    </footer>
  );
};

export default Footer;
