// src/pages/About.jsx
import React from 'react';
import AboutFeatureGrid from '../components/ui/about-feature-grid';

const About = () => {
  // Section background styles consistent with Hero section
  const sectionStyle = {
    backgroundColor: '#000000',
    backgroundImage: 'radial-gradient(ellipse at bottom, rgba(50,0,100,0.05) 0%, transparent 70%)',
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-6 md:px-12 text-white flex flex-col items-center justify-center overflow-hidden" // Added overflow-hidden for safety
      style={sectionStyle}
    >
      {/* Background ethereal glows (blobs) - OPTIMIZED
        - Added 'force-gpu' class to enable hardware acceleration.
        - Reduced blur from 'blur-3xl' to 'blur-2xl' for significant performance gain.
      */}
      <div className="absolute inset-0 z-0 opacity-4">
        <div className="force-gpu top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-0"></div>
        <div className="force-gpu top-1/2 right-1/4 w-[350px] h-[350px] bg-indigo-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="force-gpu bottom-1/4 left-1/3 w-[600px] h-[600px] bg-fuchsia-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="force-gpu top-1/3 left-1/2 w-[300px] h-[300px] bg-violet-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-1000"></div>
        <div className="force-gpu bottom-1/2 right-1/3 w-[550px] h-[550px] bg-blue-900 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-3000"></div>
      </div>

      {/* Subtle Grid Overlay - consistent with Hero */}
      <div className="absolute inset-0 z-0 opacity-[0.005]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}></div>

      {/* Render the main AboutFeatureGrid component */}
      <AboutFeatureGrid />
    </section>
  );
};

export default About;
