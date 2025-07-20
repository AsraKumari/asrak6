"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Cpu } from 'lucide-react';

// --- Data for the approach cards ---
const approachData = [
    {
        icon: <User className="w-8 h-8" />,
        title: "Pixel-Perfect, Human-First Design",
        description: "My process begins and ends with the user. I translate design concepts into responsive, accessible, and intuitive interfaces that are not only beautiful but also a delight to use on any device."
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Modern & Performant Code",
        description: "I build with a foundation of clean, efficient, and scalable code using modern technologies like React and Next.js. My focus is on creating fast, reliable web experiences that are easy to maintain."
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "AI-Enhanced Development",
        description: "I leverage Generative AI as a creative partner. From accelerating brainstorming and prototyping to optimizing code and generating dynamic content, AI helps me build smarter and more innovative solutions."
    }
];


// --- Main Component ---
const MyApproach = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5
            }
        }
    };

    return (
        <section id="approach" className="relative bg-black text-white pt-0 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            {/* Animated Spotlight Effect */}
            <motion.div
                className="absolute -top-40 -left-1/2 w-[200%] h-[200%] -z-10"
                animate={{ transform: ['translateX(-10%)', 'translateX(10%)', 'translateX(-10%)'] }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0) 50%)' }}
            />

            <div className="max-w-7xl mx-auto">
                {/* --- Section Header --- */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                        My Development Philosophy
                    </h2>
                    <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto">
                        A blend of creative design, robust engineering, and intelligent technology to craft exceptional digital experiences.
                    </p>
                </motion.div>

                {/* --- Approach Cards Grid --- */}
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {approachData.map((item) => (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                className="group relative bg-gray-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-lg overflow-hidden transition-colors duration-300 hover:border-white/20"
                            >
                                {/* Modern Animated Top Border - Modified to be always visible */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent transform-gpu scale-x-100" />

                                {/* Card Content */}
                                <div className="text-purple-400 mb-5 inline-block bg-gray-800/60 p-3 rounded-lg">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                    ))}
                </motion.div>

                {/* --- "Start a Project" Section --- */}
                <motion.div 
                    className="mt-28 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                        Let's Start a Project Together
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Have an idea you're passionate about? I'm here to help you bring it to life.
                    </p>
                    {/* --- Original button style --- */}
                    <a
                        href="mailto:asrakumari6@gmail.com"
                        className="group relative inline-block rounded-full px-8 py-4 text-lg font-bold
                                    bg-gradient-to-r from-purple-600 to-gray-300 text-black
                                    transition-all duration-500 ease-in-out
                                    hover:from-gray-300 hover:to-purple-600 hover:text-white
                                    bg-[length:200%_auto] hover:bg-right
                                    shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-400/30"
                    >
                        Send me an Email
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default MyApproach;