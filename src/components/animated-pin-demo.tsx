"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

// Icon components
const GitHubIcon = () => <svg height="16" width="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.683-.233.683-.518 0-.256-.007-1.05-.01-2.062-2.787.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.087 2.91.83.09-.645.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.949 0-1.091.39-1.984 1.029-2.682-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.378.202 2.397.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.847-2.339 4.695-4.566 4.942.359.31.678.921.678 1.855 0 1.337-.012 2.419-.012 2.747 0 .288.213.608.688.502C20.147 20.198 23 16.443 23 12.017 23 6.484 18.522 2 13 2h-1z"/></svg>;
const ExternalLinkIcon = () => <svg height="16" width="16" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>;

const AnimatedPinDemo = ({ title, liveLink, githubLink, imageUrl }) => {
  return (
    // Reduced height to remove extra top/bottom space
    <div className="h-auto w-full flex items-start justify-center">
      <PinContainer title={liveLink} href={liveLink}>
        {/* Reduced overall padding from p-4 to p-3 */}
        <div className="flex flex-col p-3 w-[22rem] h-[22rem] bg-gray-950">
          <div className="flex-grow w-full rounded-lg p-px bg-gradient-to-br from-purple-700 via-slate-800 to-slate-900">
             <div className="w-full h-full bg-black rounded-[7px] overflow-hidden p-2">
                <img
                   src={imageUrl}
                   alt={`Screenshot of ${title}`}
                   className="w-full h-full object-contain"
                />
             </div>
          </div>
          {/* Reduced margin-top from mt-4 to mt-3 */}
          <div className="flex items-center justify-between mt-3">
            <h3 className="font-bold text-lg text-slate-200">
              {title}
            </h3>
            <div className="flex items-center gap-2">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors text-xs">
                    <ExternalLinkIcon /> Live
                </a>
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-xs">
                    <GitHubIcon /> Code
                  </a>
                )}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};
export default AnimatedPinDemo;