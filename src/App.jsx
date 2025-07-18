// src/App.jsx
"use client"; // Crucial for client-side features

import React from 'react';
import { cn } from './lib/utils'; // Correct import for cn utility

// Import main section components from their respective modular locations
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';

// Placeholder Section Component (kept for Projects/Contact)
const Section = ({ id, title, color }) => (
  <section id={id} className={cn("h-screen flex items-center justify-center", color)}>
    <h1 className="text-5xl font-bold text-white">{title} Section</h1>
  </section>
);

// Main App Component
export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Placeholder sections for Projects and Contact */}
        <Section id="projects" title="Projects" color="bg-gradient-to-br from-purple-900/30 to-black" />
        <Section id="contact" title="Contact" color="bg-gradient-to-br from-green-900/30 to-black" />
      </main>

      {/* Tailwind CSS keyframes and performance optimization class (defined once in the main App component) */}
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

        /* * Performance Optimization: 
         * This class forces the animated blobs onto their own GPU layer,
         * preventing "jank" or "glitching" during scrolling.
        */
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
