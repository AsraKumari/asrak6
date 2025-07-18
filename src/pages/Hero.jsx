// src/pages/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiVercel, SiFramer } from 'react-icons/si';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  const skills = [
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
    { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = '/Asrak6-FrontendDev-Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Asra_Kumari_Frontend_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      // FIX: Reduced top padding on mobile (pt-36) and kept original for desktop (md:pt-48)
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden pt-36 md:pt-48 pb-24 px-6 md:px-12"
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(ellipse at bottom, rgba(50,0,100,0.05) 0%, transparent 70%)',
      }}
    >
      {/* Background ethereal glows (blobs) */}
      <div className="absolute inset-0 z-0 opacity-4">
        <div className="force-gpu top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-0"></div>
        <div className="force-gpu top-1/2 right-1/4 w-[350px] h-[350px] bg-indigo-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="force-gpu bottom-1/4 left-1/3 w-[600px] h-[600px] bg-fuchsia-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="force-gpu top-1/3 left-1/2 w-[300px] h-[300px] bg-violet-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-1000"></div>
        <div className="force-gpu bottom-1/2 right-1/3 w-[550px] h-[550px] bg-blue-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-3000"></div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.005]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}></div>

      {/* Content container */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-7 tracking-tight"
          variants={headingVariants}
          style={{
            backgroundImage: 'linear-gradient(to right, #FFFFFF, #9933FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: '#FFFFFF',
          }}
        >
          Crafting Digital Experiences, Pixel by Pixel.
        </motion.h1>

        {/* Sub-headline/Tagline */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Hi, I'm <span className="font-bold text-white">Asra Kumari</span>, a passionate Frontend Developer crafting engaging and responsive web experiences.
        </motion.p>

        {/* Key Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-10 mb-16"
          variants={itemVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="relative flex flex-col items-center justify-center p-3 rounded-xl group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.1, filter: `drop-shadow(0 0 8px ${skill.color})` }}
              whileTap={{ scale: 0.9 }}
            >
              <skill.icon
                size={50}
                style={{ color: skill.color }}
                className="transition-all duration-300 group-hover:brightness-125"
              />
              <span className="absolute bottom-[-20px] text-xs text-gray-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            View My Projects
          </motion.a>
          <motion.button
            onClick={handleDownloadResume}
            className="inline-block bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out border border-white/20"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;