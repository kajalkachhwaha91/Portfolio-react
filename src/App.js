// Required Dependencies:
// npm install framer-motion react-router-dom gsap react-scroll react-intersection-observer
// Styling: Tailwind CSS setup

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
// import img1 from './img/img1.png';
import Footer from "./components/footer";
import html from './img/icons8-html-48.png';
import css from './img/icons8-css3-48.png';
import js from './img/icons8-js-48.png';
import react from './img/icons8-react-24.png';
import tw from './img/icons8-tailwindcss-48.png';
import mysql from './img/icons8-mysql-24.png';
import php from './img/icons8-php-64.png';
import boot from './img/icons8-bootstrap-48.png';
import node from './img/icons8-node-js-48.png';
import { Typewriter } from 'react-simple-typewriter';
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";


// import jsIcon from './img/js.png';
// import reactIcon from './img/react.png';

const FloatingIcons = () => {
  const icons = [html , css ,js ,node ,mysql ,tw , react, php ,boot];
  const getRandomPosition = () => ({
    top: Math.random() * 90 + '%',
    left: Math.random() * 90 + '%'
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {icons.map((icon, index) => {
        const position = getRandomPosition();
        const animationDuration = Math.random() * 5 + 5;

        return (
          <motion.img
            key={index}
            src={icon}
            alt="tech-icon"
            className="w-15 h-15 absolute opacity-15"
            style={{ top: position.top, left: position.left }}
            animate={{ y: [0, -20, 0], rotate: [0, 90] }}
            transition={{ repeat: Infinity, duration: animationDuration, ease: "easeIn" }}
          />
        );
      })}

      
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  // const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  // const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const texts = ["Web Developer", "UI/UX Designer","Frontend Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.from(".hero-text", { opacity: 0, y: 50, duration: 1.2, delay: 0.5 });
      gsap.from(".cta-button", { opacity: 0, y: 30, duration: 1, delay: 0.5 });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden">
        <div className="relative w-full h-full">
           <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-white animate-split-top transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-0.5 h-1/2 bg-white animate-split-bottom transform -translate-x-1/2"></div>
        </div>
        <style>
          {`
            @keyframes splitTop {
            0% { height: 0; top: 50%; }
            100% { height: 50%; top: 0; }
          }
          @keyframes splitBottom {
            0% { height: 0; bottom: 50%; }
            100% { height: 50%; bottom: 0; }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-split-top {
            animation: splitTop 0.7s ease-in-out forwards;
          }
          .animate-split-bottom {
            animation: splitBottom 0.7s ease-in-out forwards;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-in-out forwards;
            
          `}
        </style>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-white font-serif">
      <FloatingIcons />

      {/* Overlay */}
      <div className="absolute top-0 left-0  bg-black bg-opacity-10 z-10"></div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-30 px-6 py-4 flex justify-between items-center bg-black">
        <div className="text-xl font-bold tracking-wide ">Kajal Kachhwaha</div>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          ☰
        </button>
        <nav className="hidden md:flex gap-6 text-lg">
          <Link to="home" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Home</Link>
          <Link to="about" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">About</Link>
          <Link to="projects" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Projects</Link>
          <Link to="contact" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Contact</Link>
        </nav>
        {navOpen && (
          <div className="absolute top-16 right-6 bg-black bg-opacity-90 rounded-lg px-4 py-3 text-white flex flex-col gap-4 md:hidden">
            <Link onClick={() => setNavOpen(false)} to="home" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Home</Link>
            <Link onClick={() => setNavOpen(false)} to="about" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">About</Link>
            <Link onClick={() => setNavOpen(false)} to="projects" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">projects</Link>
            <Link onClick={() => setNavOpen(false)} to="contact" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Contact</Link>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div name="home" id="top" className=" relative z-20 flex flex-col items-center justify-center h-screen px-4 text-center">
      <motion.h1
  className="text-5xl md:text-7xl font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <Typewriter
    words={['Web Developer', 'UI/UX Designer', 'Frontend Developer']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={100}
    deleteSpeed={60}
    delaySpeed={1200}
  />
</motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
         Highly motivated Fresher Software Developer with a strong foundation
in HTML, CSS, JAVASCRIPT, and intermediate in REACT. Proven ability to collaborate with
 team members to deliver user-friendly WEB applications,
improve system reliability, and increase customer
satisfaction.
        </motion.p>

       <motion.div
  className="cta-button mt-10"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 1 }}
>
  <Link
    to="projects" // This matches the id="projects"
    smooth={true}
    duration={800}
    className="cursor-pointer bg-green-700 text-black px-6 py-3 text-lg font-semibold rounded-full hover:bg-gray-200 transition"
  >
    Explore Projects
  </Link>
</motion.div>

      </div>

      {/* Courses Section */}
      < About/>
      <div className="relative z-20">
   < Projects />
</div>
      <div className="relative z-20">
   < Contact />
</div>
      < Footer />
    </div>
  );
};

export default Home;