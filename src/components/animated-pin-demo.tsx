// components/animated-pin-demo.tsx
"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

// Define props for reusability
interface ProjectPinProps {
  title: string;
  description: string;
  livePreviewLink: string; // This will be the main link for the pin
  githubLink?: string; // Optional, as it might not fit the minimal pin content
}

export default function AnimatedPinDemo({
  title,
  description,
  livePreviewLink,
  githubLink, // Kept for potential future use or if you want to add it outside the pin
}: ProjectPinProps) {
  return (
    // The PinContainer itself dictates the size and alignment within the grid cell
    <div className="flex items-center justify-center w-full h-[25rem] sm:h-[30rem]"> {/* Adjusted wrapper height */}
      <PinContainer
        title={title} // Project title on the pin's flag
        href={livePreviewLink} // Main link for the pin (e.g., Live Preview)
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] justify-between"> {/* Added justify-between */}
          <div>
            <h3 className="max-w-xs pb-2 font-bold text-base text-slate-100">
              {title}
            </h3>
            <div className="text-base font-normal">
              <span className="text-slate-500">
                {description}
              </span>
            </div>
          </div>
          {/* This gradient div mimics the visual block in the Aceternity demo */}
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          {/* Removed image and separate buttons to match Aceternity demo's minimalism */}
        </div>
      </PinContainer>
    </div>
  );
}
