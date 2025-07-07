'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`glass-nav ${scrolled ? 'bg-black/90' : 'bg-black/80'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold text-gradient">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-10 border border-white/20"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 bg-white/10 backdrop-blur-20 rounded-xl p-4 border border-white/20">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white transition-colors duration-300 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white/80 hover:text-white transition-colors duration-300 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;