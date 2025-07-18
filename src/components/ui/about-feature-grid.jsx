// src/components/ui/about-feature-grid.jsx
import React from "react";
import { motion } from "framer-motion";
import { Globe } from "./globe";
import WorldMap from "./world-map";

// --- Card 1: About Me ---
export const AboutMeContent = () => (
  <div className="relative flex flex-col md:flex-row items-center justify-between h-full p-6">
    <div className="flex-grow md:pr-10">
      <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">My Professional Journey</h4>
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        As a dedicated Frontend Developer, I craft intuitive and visually compelling web experiences that bridge the gap between complex technology and human-centered design. My journey is fueled by a passion for turning ambitious concepts into seamless, responsive, and engaging user interfaces.
      </p>
    </div>
    <div className="w-full md:w-1/2 h-48 md:h-full flex-shrink-0 mt-6 md:mt-0">
      <WorldMap />
    </div>
    <div className="absolute inset-0 w-full h-full opacity-10 rounded-md" style={{ backgroundImage: 'linear-gradient(to top right, rgba(128,0,128,0.1), transparent)' }}></div>
  </div>
);


// --- Card 2: Education ---
export const EducationContent = () => {
  const educationData = [
    { degree: 'Craft Instructor Training Scheme - Computer Software Application', institution: 'National Skill Training Institute for Women, Indore', years: '2020-2021' },
    { degree: 'Bachelor of Science (B.Sc.) - Biology', institution: 'Dr. Rammanohar Lohia Avadh University, Ayodhya', years: '2019-2022' },
    { degree: 'Computer Operator and Programming Assistant (COPA)', institution: 'Industrial Training Institute for Women, Lucknow', years: '2018-2019' },
  ];
  return (
    <div className="relative p-6 h-full">
      <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">My Academic Path</h4>
      <div className="flex flex-col space-y-4">
        {educationData.map((edu, idx) => (
          <div key={idx} className="border-l-2 border-purple-500 pl-4">
            <p className="text-base font-medium text-white">{edu.degree}</p>
            <p className="text-sm text-gray-300">{edu.institution}</p>
            <p className="text-xs text-gray-400">{edu.years}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 w-full h-full opacity-10 rounded-md" style={{ backgroundImage: 'linear-gradient(to top right, rgba(128,0,128,0.1), transparent)' }}></div>
    </div>
  );
};

// --- Card 3: Experience ---
export const ExperienceContent = () => (
  <div className="relative p-6 h-full">
    <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">Impactful Experience</h4>
    <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-3">
      <p>
        <strong className="text-white">
          <span className="text-purple-400 font-semibold">TechCognita</span> - Frontend Developer Intern (July 2025 - Present)
        </strong>
      </p>
      <p>
        I spearheaded the design and development of the company's flagship{' '}
        <span className="text-purple-400 font-semibold">TechCognita Suite landing page</span>, creating a{' '}
        <span className="text-purple-400 font-semibold">fully responsive</span> and pixel-perfect interface from the ground up.
      </p>
      <p>
        To accelerate development, I architected a{' '}
        <span className="text-purple-400 font-semibold">custom component system</span> featuring{' '}
        <span className="text-purple-400 font-semibold">scroll-based parallax animations</span>. This initiative boosted team efficiency by an estimated 40% and improved site performance by over 30% after deployment on Vercel, all managed through a rigorous{' '}
        <span className="text-purple-400 font-semibold">Git-based version control</span> workflow.
      </p>
    </div>
    <div className="absolute inset-0 w-full h-full opacity-10 rounded-md" style={{ backgroundImage: 'linear-gradient(to top right, rgba(128,0,128,0.1), transparent)' }}></div>
  </div>
);

// --- Card 4: Skills ---
export const SkillsContent = () => {
  const skillCategories = {
    "Languages & Frameworks": ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap 5'],
    "Tools & Platforms": ['Vite', 'Git', 'GitHub', 'Vercel', 'VS Code', 'Chrome DevTools', 'Figma'],
    "Libraries & APIs": ['shadcn/ui', 'Framer Motion', 'REST APIs', 'Fetch API', 'JSON'],
    "Concepts & AI": ['UI/UX Principles', 'Component Reusability', 'Generative AI', 'Prompt Engineering', 'Vertex AI', 'PaLM']
  };
  return (
    <div className="relative p-6 h-full">
      <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">My Toolkit</h4>
      <div className="space-y-4">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h5 className="text-sm font-semibold text-purple-300 mb-2">{category}</h5>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 w-full h-full opacity-10 rounded-md" style={{ backgroundImage: 'linear-gradient(to top right, rgba(128,0,128,0.1), transparent)' }}></div>
    </div>
  );
};

// --- Card 5: Generative AI ---
export const GenerativeAIContent = () => (
  <div className="relative h-full p-6">
    <div className="w-full h-px bg-white/90 mb-6"></div>
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex-grow md:pr-10">
        <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">Future Forward: Generative AI</h4>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          My passion for cutting-edge technology led me to earn a verified Introduction to Generative AI badge from **Google Cloud (July 2025). This exploration into Large Language Models (LLMs), prompt engineering, and tools like Vertex AI and PaLM has fundamentally shaped my approach to development. I am now equipped to build next-generation web solutions that leverage the power of AI to create truly intelligent and dynamic user experiences.
        </p>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mt-8 md:mt-0 opacity-80">
        <Globe className="w-full h-full" />
      </div>
    </div>
    <div className="absolute inset-0 w-full h-full opacity-10 rounded-md" style={{ backgroundImage: 'linear-gradient(to top right, rgba(128,0,128,0.1), transparent)' }}></div>
  </div>
);

// --- Main Grid Component ---
function AboutFeatureGrid() {
  const features = [
    { content: <AboutMeContent />, className: "col-span-1 lg:col-span-4 border-b lg:border-r" },
    { content: <EducationContent />, className: "border-b col-span-1 lg:col-span-2" },
    { content: <ExperienceContent />, className: "col-span-1 lg:col-span-3 lg:border-r" },
    { content: <SkillsContent />, className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
    { content: <GenerativeAIContent />, className: "col-span-1 lg:col-span-6 border-b lg:border-none" },
  ];

  return (
    // FIX: Top padding set to zero
    <div className="relative z-20 pt-0 pb-0 lg:pb-24 max-w-7xl mx-auto">
      <div className="px-8 mb-16">
        {/* FIX: Gradient added to heading */}
        <h4
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-extrabold"
          style={{
            backgroundImage: 'linear-gradient(to right, #FFFFFF, #9933FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          A Glimpse Into My World
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-400 text-center font-normal">
          Explore my journey, expertise, and the technologies that drive my passion for frontend development.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-800">
          {features.map((feature, index) => (
            <FeatureCard key={index} className={feature.className}>
              <div className="h-full w-full">{feature.content}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component
const FeatureCard = ({ children, className }) => {
  const cardClasses = `relative overflow-hidden bg-black/30 backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-purple-950/20 ${className || ''}`;
  
  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AboutFeatureGrid;
