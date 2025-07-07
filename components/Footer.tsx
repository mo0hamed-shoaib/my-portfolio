'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card-subtle p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code size={24} className="text-blue-400" />
              <span className="text-xl font-bold text-gradient">Portfolio</span>
            </div>
            
            <p className="text-white/80 mb-4">
              Thank you for visiting my portfolio. Let's create something amazing together!
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-white/60">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>using React, Next.js & Tailwind CSS</span>
            </div>
            
            <div className="mt-4 text-sm text-white/50">
              © {currentYear} Your Name. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;