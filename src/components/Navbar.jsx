import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const observer = useRef(null);

  // --- START: Updated logic for scroll-based visibility ---
  const [showNav, setShowNav] = useState(true); // Start with nav visible
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeout = useRef(null);

  // Check if the screen is mobile-sized (less than 768px)
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Handle scroll behavior on mobile devices
  useEffect(() => {
    if (!isMobile) {
      setShowNav(true);
      return;
    }

    // This function now checks the scroll position
    const handleScroll = () => {
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const isAtTop = window.scrollY < 50; // Check if user is in the hero section

      if (isAtTop) {
        // If in the hero section, always show the navbar
        setShowNav(true);
      } else {
        // If scrolled down, show the navbar and set a timeout to hide it
        setShowNav(true);
        scrollTimeout.current = setTimeout(() => {
          setShowNav(false);
        }, 1500);
      }
    };

    // The navbar is visible on load, no need for an initial hide timeout
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isMobile]);
  // --- END: Updated logic for scroll-based visibility ---

  // Intersection Observer for highlighting the active link
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.current.observe(section);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  // Animation variants for the navbar
  const navVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    hidden: { y: '-100%', opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        animate={isMobile ? (showNav ? 'visible' : 'hidden') : 'visible'}
        initial="visible"
        // FIX: Increased z-index from z-50 to z-[100] to ensure it's above other elements
        className="fixed top-0 left-0 right-0 z-[100] py-4 px-6 md:px-12 flex justify-center"
      >
        <div className="relative p-2 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg w-fit flex items-center justify-center">
          <div className="flex items-center space-x-1 sm:space-x-4 md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              const linkClasses = `
                text-gray-300 hover:text-white tracking-wider font-medium transition-all duration-300 relative text-sm sm:text-base px-2 sm:px-3 py-2 rounded-full
                ${isActive ? 'text-white' : 'hover:bg-white/10'}
              `;
              return (
                <a key={link.title} href={link.href} className={linkClasses}>
                  {link.title}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full -z-10 shadow-md"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
