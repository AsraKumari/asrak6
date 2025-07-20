"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPinDemo from '@/components/animated-pin-demo';

// --- DATA FOR YOUR PROJECTS ---
const projectData = [
    {
        id: 1,
        title: "Techcognita Corporate Suite",
        image: "/TechcognitaSuite.png",
        highlights: [
            "Led the end-to-end frontend development for a major corporate web suite.",
            "Collaborated directly with backend teams to integrate APIs in a professional environment.",
            "Maintained full ownership of the user interface architecture under a strict NDA.",
        ],
        techStack: ["React", "JavaScript (ES6+)", "CSS3", "REST APIs", "Figma"],
        liveLink: "https://suite.techcognita.com/",
        githubLink: null,
    },
    {
        id: 2,
        title: "FinRef Trade Tracker",
        image: "/FinRef.png",
        highlights: [
            "Empowers users to track their financial portfolio with an interactive, responsive interface.",
            "Features real-time data visualization using Recharts, updating graphs instantly without refreshes.",
            "Full CRUD functionality with data persistence handled via Local Storage.",
        ],
        techStack: ["React", "Recharts", "Data Visualization", "Local Storage", "CSS"],
        liveLink: "https://fin-ref.vercel.app/",
        githubLink: "https://github.com/AsraKumari/FinRef.git",
    },
    {
        id: 3,
        title: "Hexora UI Learning Lab",
        image: "/HexoraUI.png",
        highlights: [
            "Serves as my active development journal for mastering new frontend technologies.",
            "Implemented advanced techniques like parallax scrolling based on daily tasks from my mentor.",
            "Showcases a commitment to continuous growth and translating knowledge into polished features.",
        ],
        techStack: ["React", "Next.js", "GSAP", "Parallax", "UI/UX"],
        liveLink: "https://hexora-ui.vercel.app/",
        githubLink: "https://github.com/AsraKumari/hexora-ui.git",
    },
    { // --- NEW PROJECT: Orchid Aura ---
        id: 4,
        title: "Orchid Aura – Flower Shop Landing Page",
        image: "/OrchidAura0.png", // Assuming you'll add this image to your public folder
        highlights: [
            "Implemented real-time theme and font size customization, enhancing user personalization.",
            "Designed a fully responsive, modern UI/UX with smooth transitions for an engaging experience.",
            "Built with React and Tailwind CSS, powered by Vite for fast development and deployment.",
        ],
        techStack: ["React", "Tailwind CSS", "Vite", "React Icons", "GitHub Pages"],
        liveLink: "https://asrakumari.github.io/react-tailwind/",
        githubLink: "https://github.com/AsraKumari/react-tailwind.git",
    },
];


// --- Helper Icon Components ---
const HighlightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5 8.5L9.5 12.5L7 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


// --- Animation Variants for Staggered Effect ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- The Main Projects Component ---
const Projects = () => {
    return (
        <div className="relative bg-black text-white p-4 md:p-8">
            {/* FIX: Top padding (pt-0) bilkul hata di gayi hai. */}
            <div className="max-w-7xl mx-auto pt-0 pb-24">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-20 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    My Creative Works
                </h1>
                
                <div className="flex flex-col gap-24 md:gap-32">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className={`absolute top-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-900 rounded-full opacity-10 blur-3xl -z-10 ${index % 2 === 0 ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'}`} />
                            
                            <div className={`flex flex-col md:gap-10 items-center md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                
                                <motion.div className="w-full md:w-1/2 md:-translate-y-10" variants={itemVariants}>
                                    <AnimatedPinDemo
                                        title={project.title}
                                        imageUrl={project.image}
                                        liveLink={project.liveLink}
                                        githubLink={project.githubLink}
                                    />
                                </motion.div>
                                
                                <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
                                    <motion.div className="hidden md:block absolute -top-16 right-0 md:left-0 text-[6rem] md:text-[8rem] font-black text-white/5 -z-10" variants={itemVariants}>
                                        0{project.id}
                                    </motion.div>
                                    <motion.h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" variants={itemVariants}>
                                        {project.title}
                                    </motion.h2>
                                    
                                    <motion.ul className="space-y-4 mb-8" variants={itemVariants}>
                                        {project.highlights.map((highlight, i) => (
                                            <motion.li key={i} className="flex items-start gap-3" variants={itemVariants}>
                                                <span className="text-purple-500 mt-1 flex-shrink-0">
                                                    <HighlightIcon />
                                                </span>
                                                <span className="text-white">
                                                    {highlight}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="bg-gray-800 border border-gray-700 text-purple-500 text-sm font-medium px-4 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;