// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const observer = useRef(null);

  // PERFORMANCE: Replaced the 'scroll' event listener with the more efficient Intersection Observer API.
  // This stops the browser from running code on every single pixel of scroll.
  useEffect(() => {
    // Create a single observer instance.
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      // Options: trigger when a section is 50% in view.
      { rootMargin: '-50% 0px -50% 0px' }
    );

    // Observe each section referred to by the nav links.
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.current.observe(section);
      }
    });

    // Cleanup: disconnect the observer when the component unmounts.
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -25, transition: { duration: 0.3, ease: 'easeOut' } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeIn', staggerChildren: 0.1 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-center"
      >
        <div className="relative p-2 md:p-4 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg w-fit flex items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-6 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              // FIX: Replaced 'cn' utility with a template literal to avoid import errors.
              const linkClasses = `
                text-gray-300 hover:text-white tracking-wider font-medium transition-all duration-300 relative px-3 py-2 rounded-full
                ${isActive ? 'text-white' : 'hover:bg-white/10'}
              `;
              return (
                <a key={link.title} href={link.href} className={linkClasses}>
                  {link.title}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill" // Animates the active state smoothly
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full -z-10 shadow-md"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center"
            onClick={toggleMenu}
          >
            <button onClick={toggleMenu} className="absolute top-8 right-8 text-white focus:outline-none">
              <X size={28} />
            </button>
            <motion.div className="flex flex-col items-center space-y-10">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                const mobileLinkClasses = `
                  text-4xl font-semibold text-gray-300 hover:text-white transition-colors duration-300
                  ${isActive ? 'text-purple-400' : ''}
                `;
                return (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    variants={linkVariants}
                    onClick={toggleMenu}
                    className={mobileLinkClasses}
                  >
                    {link.title}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
