"use client";

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import { Mail, Phone, Linkedin, Github } from 'lucide-react'; // Changed from individual SVGs for consistency if you prefer lucide

// NOTE: The GlobeBackground component and its export would be in its own file
// For brevity, it's assumed to be available for import.
const GlobeBackground = () => {
    const mountRef = useRef(null);
    useEffect(() => {
        if (!mountRef.current) return;
        const currentMount = mountRef.current;
        let animationFrameId;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z = 5;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);
        const geometry = new THREE.IcosahedronGeometry(2.5, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.3, roughness: 0.4, wireframe: true, transparent: true, opacity: 0.2 });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);
        const handleResize = () => {
            if (currentMount) {
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
            }
        };
        window.addEventListener('resize', handleResize);
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            globe.rotation.x += 0.0005;
            globe.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };
        animate();
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, []);
    return <div ref={mountRef} className="absolute inset-0 z-0 opacity-50" />;
};
export { GlobeBackground };

const LazyGlobe = React.lazy(() => Promise.resolve({ default: GlobeBackground }));

const useCurrentTime = (timezone) => {
  const [time, setTime] = useState('3:30 PM IST');
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { timeZone: timezone, hour: '2-digit', minute: '2-digit', hour12: true });
      setTime(timeString);
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000 * 60);
    return () => clearInterval(timerId);
  }, [timezone]);
  return time;
};

// Now importing icons from lucide-react and react-icons/fa
// You can use these or stick to your custom SVGs if you prefer them for Mail, Phone, etc.
// For consistency, I've updated Mail, Phone, LinkedIn, GitHub to use lucide-react if they match your aesthetic.
// If your custom SVGs look different and you prefer them, you can revert MailIcon, PhoneIcon, etc.
// But FaWhatsapp is used as requested.

const contactMethods = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "asrakumari6@gmail.com", href: "mailto:asrakumari6@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 83186 88501", href: "tel:+918318688501" },
    { icon: <FaWhatsapp className="w-6 h-6" />, label: "WhatsApp", value: "+91 83186 88501", href: "https://wa.me/918318688501" } // Using FaWhatsapp
];

const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com/in/asra-k-6b6648206', name: 'LinkedIn' }, // Using Lucide LinkedIn
    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/AsraKumari', name: 'GitHub' },     // Using Lucide GitHub
];

const Contact = () => {
    const istTime = useCurrentTime('Asia/Kolkata');
    const headline = "Let's Connect";
    const headlineVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="contact" className="relative w-full bg-black text-white flex flex-col items-center justify-center p-4 py-24 overflow-hidden">
            <Suspense fallback={null}>
                <LazyGlobe />
            </Suspense>
            <div className="absolute inset-0 bg-black/50 z-10" />

            <div className="relative z-20 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                    className="space-y-8 text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={headlineVariants}
                >
                    <motion.h1 className="text-6xl md:text-8xl font-black tracking-tighter" variants={headlineVariants}>
                        {headline.split(" ").map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className={`inline-block mr-4 ${word === "Connect" ? 'text-purple-400' : ''}`}
                            >
                                {word.split("").map((char, charIndex) => (
                                    <motion.span key={charIndex} className="inline-block" variants={letterVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </motion.h1>
                    <motion.p className="text-lg text-gray-400 max-w-md" variants={letterVariants}>
                        You can reach me directly through any of these channels. I'm looking forward to hearing from you.
                    </motion.p>
                    <motion.div className="text-sm text-gray-500" variants={letterVariants}>
                        Based in Lucknow, Uttar Pradesh, India &bull; Current Time: {istTime}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl shadow-purple-900/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="space-y-6">
                        {contactMethods.map((method) => (
                            <a key={method.label} href={method.href} target="_blank" rel="noopener noreferrer" className="group block">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">{method.label}</p>
                                        <p className="text-white font-semibold text-lg">{method.value}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="my-8 h-px bg-white/10" />
                    <div className="flex justify-between items-center">
                        <p className="text-gray-400">Find me on social media</p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" title={link.name} className="text-gray-500 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;