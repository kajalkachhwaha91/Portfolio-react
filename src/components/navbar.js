// import 


// {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full z-30 px-6 py-4 flex justify-between items-center">
//         <div className="text-xl font-bold tracking-wide">Kajal Kachhwaha</div>
//         <button
//           className="text-white md:hidden focus:outline-none"
//           onClick={() => setNavOpen(!navOpen)}
//         >
//           ☰
//         </button>
//         <nav className="hidden md:flex gap-6 text-lg">
//           <Link to="/home" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Home</Link>
//           <Link to="/projects" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Projects</Link>
//           <Link to="/about" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">About</Link>
//           <Link to="/contact" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Contact</Link>
//         </nav>
//         {navOpen && (
//           <div className="absolute top-16 right-6 bg-black bg-opacity-90 rounded-lg px-4 py-3 text-white flex flex-col gap-4 md:hidden">
//             <Link onClick={() => setNavOpen(false)} to="home" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Home</Link>
//             <Link onClick={() => setNavOpen(false)} to="courses" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Projects</Link>
//             <Link onClick={() => setNavOpen(false)} to="about" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">About</Link>
//             <Link onClick={() => setNavOpen(false)} to="contact" smooth={true} duration={600} className="cursor-pointer hover:text-gray-400">Contact</Link>
//           </div>
//         )}
//       </div>