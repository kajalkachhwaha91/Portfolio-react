import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Skill icons
import html from '../img/icons8-html-48.png';
import css from '../img/icons8-css3-48.png';
import js from '../img/icons8-js-48.png';
import react from '../img/icons8-react-24.png';
import tw from '../img/icons8-tailwindcss-48.png';
import mysql from '../img/icons8-mysql-24.png';
import php from '../img/icons8-php-64.png';
import boot from '../img/icons8-bootstrap-48.png';
import node from '../img/icons8-node-js-48.png';
import profile from '../img/women-portfolio.avif'

import cert1 from '../img/tech-axion.jpeg'; // Replace with actual certificate
import cert2 from '../img/certificate.jpeg';
import cert3 from '../img/Screenshot 2025-05-23 192424.png';

// SkillCircle Component
const SkillCircle = ({ percentage, label, icon }) => {
  const circleStyle = {
    background: `conic-gradient(#22c55e ${percentage * 3.6}deg, #333 ${percentage * 3.6}deg)`,
  };

  return (
    <div className="flex flex-col items-center text-white">
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center text-lg font-bold relative"
        style={circleStyle}
      >
        <div className="absolute w-20 h-20 bg-black rounded-full flex flex-col items-center justify-center">
          <img src={icon} alt={label} className="w-6 h-6 mb-1" />
          {percentage}%
        </div>
      </div>
      <p className="mt-2 text-sm text-center">{label}</p>
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const icons = [html, css, js, react, tw, php, mysql, boot, node];

  return (
    <div name="about" className="about-page bg-black text-white">
      {/* Hero Section */}
      <section className="about-hero py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
       

      </section>

    

      {/* Main About Section */}
      <div className="relative bg-black text-white py-16 px-6 lg:px-20">
        <div ref={ref} className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Column */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-green-500">Hello, I'm Kajal Kachhwaha</h2>
            <p className="text-lg leading-relaxed">
              I am a detail-oriented and analytical individual with a strong passion for problem-solving and critical thinking. My ability to manage time effectively and prioritize tasks allows me to stay organized and meet deadlines with precision. I adapt quickly to new environments and challenges, showing flexibility in the face of change. 
            </p>
           
           <a
  href="/Kajalkachhwaha_webdeveloper.resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hire-btn bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded mt-3">
    View Resume
  </button>
</a>

            
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img src={profile} alt="Kajal Kachhwaha" className="rounded-2xl w-full  h-86 shadow-xl" />
          </motion.div>
        </div>
      </div>

       {/* Education Section */}
<motion.div
  className="mt-16 max-w-6xl mx-auto px-6 lg:px-20 mb-5"
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 1 }}
>
  <h3 className="text-3xl font-bold text-center mb-10 text-green-400">Education</h3>
  <div className="space-y-6">
    {/* College */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg ">
      <h4 className="text-xl font-semibold text-white">Master of Computer Applications (MCA)</h4>
      <p className="text-gray-400">K.D.K College of Engineering</p>
      <p className="text-gray-500">2024 – Present</p>
      <p className="mt-2 text-gray-300">
        learning core concepts in programming, web development, database systems, and software engineering.
        Participated in tech fests and national-level coding competitions.
      </p>
    </div>

    <div className="bg-gray-800 p-6 rounded-lg shadow-lg ">
      <h4 className="text-xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h4>
      <p className="text-gray-400">V.M.V College,Nagpur</p>
      <p className="text-gray-500">2021 – 2024</p>
      <p className="mt-2 text-gray-300">
        Learned core concepts in web development, database systems, and software testing.
        Participated in College level competitions.
      </p>
    </div>
  </div>
</motion.div>

      {/* Skill Circle Section */}
      <motion.div
        className="bg-gray-900 py-12 px-6 lg:px-20"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-center mb-10 text-green-400">Skill Proficiency</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
          <SkillCircle percentage={89} label="HTML" icon={html} />
          <SkillCircle percentage={80} label="CSS" icon={css} />
          <SkillCircle percentage={75} label="JavaScript" icon={js} />
          <SkillCircle percentage={50} label="React" icon={react} />
          <SkillCircle percentage={50} label="Tailwind CSS" icon={tw} />
          <SkillCircle percentage={50} label="PHP" icon={php} />
          <SkillCircle percentage={55} label="MySQL" icon={mysql} />
          <SkillCircle percentage={65} label="Bootstrap" icon={boot} />
        </div>
      </motion.div>

   
      {/* Certificates */}
      <motion.div
        className="mt-16 max-w-6xl mx-auto px-6 lg:px-20 pb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-center mb-8 text-green-400">Certificates of Participation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg">
            <img src={cert1} alt="Certificate 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">Web Craft competition</h4>
              <p className="text-sm">Issued by: Gayakwad patil College</p>
            </div>
          </div>
          <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg">
            <img src={cert2} alt="Certificate 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">Gpt Sprint competition</h4>
              <p className="text-sm">Issued by: KDK College</p>
            </div>
          </div>
          <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg">
            <img src={cert3} alt="Certificate 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">AL ML COURSE</h4>
              <p className="text-sm">Issued by: ISRO IRIS</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
