import React from 'react';
import project1Img from '../img/anamika.png';
import project2Img from '../img/journal.png';
import project4Img from '../img/chilli.png';
import project6Img from '../img/shetivala.png';
import project9Img from '../img/forum.png';


const projects = [
  {
    title: 'Healthy Bites',
    description: 'A fully functional, responsive, and optimized website built for Dr. Anamika. Developed using HTML, CSS, and JavaScript, this project highlights clean UI design, mobile responsiveness, and an excellent user experience.Creadted in intership period with the group of 3 member where i lead the project.',
    techStack: 'HTML, CSS, JavaScript',
    live: 'https://dietician-website-bqmz.vercel.app/',
    code: 'https://github.com/kajalkachhwaha91/Dietician_website',
    image: project1Img,
  },
  
  {
    title: 'Chilli Tadka Restaurant Site',
    description: 'React-based restaurant site with a modern UI and menu.A resturant website which serve spicy and indian style food menu.Created using react-router-dom for routing in multiple pages.',
    techStack: 'React,React-Bootstrap,Firebase',
    live: 'https://chilli-tadka.vercel.app/',
    code: 'https://github.com/kajalkachhwaha91/Chilli_tadka',
    image: project4Img,
  },
  
 
  {
    title: 'Shetivala - Food Ecommerce website',
    description: 'Website created for local farmers to sell organic farms produce.',
    techStack: 'HTML, CSS, JavaScript,Bootstrap',
    live: 'https://organic-fresh-e-commerce-website.vercel.app/',
    code: 'https://github.com/kajalkachhwaha91/Shetivala-organic-fresh-farms-produces',
    image: project6Img,
  },
  
  {
    title: 'Forum club-College website',
    description: 'A user-authenticated platform for college forums where users can: Register/login with verification,View activities & programs,dark mode and responsive design.I present this website in "GPT WEBSITE SPRINT COMPETITION" and won 2nd price.',
    techStack: 'HTML, CSS, JavaScript,Mysql,Php',
    live: 'https://github.com/kajalkachhwaha91/Forum_club_website',
    code: 'https://github.com/kajalkachhwaha91/Forum_club_website',
    image: project9Img,
  },
   {
    title: 'Healing Journal -Mobile Devices',
    description: 'Its healing todo website build speacily for mobile device.Its also store realtime data in firestore database.',
    techStack: 'HTML, CSS, Firebase',
    live: 'https://healing-journal.netlify.app/',
    code: 'https://github.com/kajalkachhwaha91/Healing-journal',
    image: project2Img,
  }
  
];

const Projects = () => {
  return (
    
    <section className="bg-gray-950 py-16 px-6 lg:px-20"  id="projects" >
        
      <h3 className="text-3xl font-bold text-center text-green-400 mb-12">Projects</h3>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 bg-gray-900 p-6 rounded-xl shadow-lg`}
          >
            <div className="md:w-1/2 text-white">
              <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-400 mb-4"><span className="font-semibold text-white">Tech Stack:</span> {project.techStack}</p>
              <div className="flex gap-4">
             <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-400 underline"
>
  Live Preview
</a>
<a
  href={project.code}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 underline"
>
  View Code
</a>


              </div>
            </div>
            <div className="md:w-1/2">
              <img src={project.image} alt={project.title} className="w-full rounded-xl shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
