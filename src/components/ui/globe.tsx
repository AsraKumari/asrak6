// src/components/ui/globe.jsx
import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

// Note: The 'cn' utility has been removed to resolve path alias errors.

export const Globe = ({ className }) => {
  const canvasRef = useRef(null);
  const globeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // PERFORMANCE: Use Intersection Observer to only render the globe when it's visible.
  // This stops it from using CPU/GPU resources when off-screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }
    const currentCanvas = canvasRef.current;
    return () => {
      if (currentCanvas) {
        observer.unobserve(currentCanvas);
      }
    };
  }, []);

  // Effect to create and control the globe animation based on visibility
  useEffect(() => {
    if (!isVisible) {
      // If not visible, destroy the globe instance to free up memory and stop animation.
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
      return;
    }

    if (!globeRef.current && canvasRef.current) {
      // If it is visible and the globe doesn't exist, create it.
      let phi = 0;
      globeRef.current = createGlobe(canvasRef.current, {
        devicePixelRatio: 1.5,
        width: 800,
        height: 800,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 12000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
          { location: [28.6139, 77.2090], size: 0.05 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.007;
        },
      });
    }

    // This cleanup function will run when visibility changes from true to false
    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
    };
  }, [isVisible]); // Re-run this effect whenever 'isVisible' changes

  return (
    <canvas
      ref={canvasRef}
      className={`block ${className || ''}`}
      style={{ width: '100%', height: '100%', aspectRatio: 1 }}
    />
  );
};
