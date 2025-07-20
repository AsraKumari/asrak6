"use client";

import React from 'react';
import { cn } from './lib/utils';

// Import all your section components
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import MyApproach from './pages/MyApproach'; // Added import for the new section
import Contact from './pages/Contact';

export default function App() {
  return (
    // FIX: Added 'overflow-x-hidden' to prevent horizontal scrolling
    <div className="bg-black min-h-screen text-gray-100 font-inter overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        {/* --- NEW SECTION ADDED HERE --- */}
        <section id="approach">
          <MyApproach />
        </section>
        
        {/* The <Contact /> component already has its own <section id="contact"> tag */}
        <Contact />
        
      </main>

      {/* Tailwind CSS keyframes and performance optimization class */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .force-gpu {
          position: absolute;
          will-change: transform;
          transform: translateZ(0);
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-0 {
          animation-delay: 0s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
