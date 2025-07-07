'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'MERN Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card max-w-4xl mx-auto p-8 md:p-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Hello, I'm{' '}
              <span className="text-gradient">Your Name</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            >
              Crafting modern web experiences with MongoDB, Express.js, React, and Node.js. 
              I build scalable applications with beautiful user interfaces and robust backend systems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center space-x-6 mt-8"
            >
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 backdrop-blur-10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 backdrop-blur-10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 backdrop-blur-10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-10 border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;