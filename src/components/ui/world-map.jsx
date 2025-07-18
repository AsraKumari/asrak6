// src/components/ui/world-map.jsx
"use client";

import React, { useMemo } from "react";
import DottedMap from "dotted-map";

// This is a more robust version of the component that fixes the visibility bug.
// It uses useMemo to ensure the map is generated reliably on the first render.
export default function WorldMap() {
  // useMemo computes the map SVG once and "memoizes" (remembers) the result.
  // This is a more stable pattern for this kind of one-off calculation.
  const svgMap = useMemo(() => {
    try {
      const map = new DottedMap({ height: 100, grid: "diagonal" });

      // Generate the SVG with solid white dots for maximum visibility.
      return map.getSVG({
        radius: 0.3, // Slightly larger dots
        color: "#FFFFFF", // Solid white color
        shape: "circle",
        backgroundColor: "transparent",
      });
    } catch (error) {
      console.error("Failed to generate dotted map:", error);
      return ""; // Return an empty string on error
    }
  }, []); // Empty dependency array ensures this runs only once.

  // If the map generation failed, don't render the image.
  if (!svgMap) {
    return <div className="text-neutral-500 text-xs">Map could not be loaded.</div>;
  }

  return (
    <div className="w-full h-full relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        // The complex mask-image has been removed to ensure visibility.
        className="h-full w-full object-contain pointer-events-none select-none"
        alt="Dotted World Map"
        draggable={false}
      />
    </div>
  );
}
