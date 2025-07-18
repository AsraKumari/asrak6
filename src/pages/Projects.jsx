// src/pages/Projects.jsx
"use client";

import React from 'react';
import AnimatedPinDemo from '@/components/animated-pin-demo';

// Define the project data - 3 projects
const projects = [
  {
    id: 1,
    title: 'FinRef',
    description: 'A comprehensive financial reference application designed to provide quick and clear access to financial terms, concepts, and market insights.',
    githubLink: 'https://github.com/AsraKumari/FinRef.git',
    livePreview: 'https://fin-ref.vercel.app',
  },
  {
    id: 2,
    title: 'Hexora UI',
    description: 'A cutting-edge, modular user interface library built with React, showcasing a wide array of reusable and highly customizable UI components.',
    githubLink: 'https://github.com/AsraKumari/hexora-ui.git',
    livePreview: 'https://hexora-ui.vercel.app',
  },
  {
    id: 3,
    title: 'TaskFlow Dashboard',
    description: 'An intuitive task management dashboard for teams, featuring drag-and-drop functionality, progress tracking, and user collaboration.',
    githubLink: 'https://github.com/yourusername/taskflow-dashboard.git', // Replace with actual link
    livePreview: 'https://taskflow-dashboard.vercel.app', // Replace with actual link
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 p-6 sm:p-10 font-inter antialiased">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
          My Creative Works
        </h1>

        {/* Responsive Flex container for cards and links */}
        <div className="flex flex-col items-center gap-y-12 md:flex-row md:flex-nowrap md:gap-x-8 md:justify-center pb-4 md:overflow-x-auto">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center"> {/* Wrapper for pin and links */}
              <AnimatedPinDemo
                title={project.title}
                description={project.description}
                livePreviewLink={project.livePreview} // This is the main link for the pin
              />
              {/* Direct text links below the 3D pin */}
              <div className="flex gap-6 mt-4 justify-center"> {/* Adjusted margin-top to ensure visibility */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-base font-medium transition-colors duration-200 flex items-center"
                >
                  {/* GitHub Icon (inline SVG) */}
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.683-.233.683-.518 0-.256-.007-1.05-.01-2.062-2.787.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.087 2.91.83.09-.645.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.949 0-1.091.39-1.984 1.029-2.682-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.378.202 2.397.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.847-2.339 4.695-4.566 4.942.359.31.678.921.678 1.855 0 1.337-.012 2.419-.012 2.747 0 .288.213.608.688.502C20.147 20.198 23 16.443 23 12.017 23 6.484 18.522 2 13 2h-1z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-base font-medium transition-colors duration-200 flex items-center"
                >
                  {/* External Link Icon (inline SVG) */}
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
