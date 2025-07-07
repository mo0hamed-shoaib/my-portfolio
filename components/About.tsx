'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react';
import TechIcon from './TechIcon';

const About = () => {
  const skills = {
    frontend: [
      { name: 'React', description: 'Component-based UI library' },
      { name: 'Next.js', description: 'React framework for production' },
      { name: 'TypeScript', description: 'Typed JavaScript at scale' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      { name: 'Redux', description: 'Predictable state container' },
      { name: 'Material-UI', description: 'React UI components' },
    ],
    backend: [
      { name: 'Node.js', description: 'JavaScript runtime environment' },
      { name: 'Express.js', description: 'Fast web framework for Node.js' },
      { name: 'MongoDB', description: 'NoSQL document database' },
      { name: 'PostgreSQL', description: 'Advanced open source database' },
      { name: 'GraphQL', description: 'Query language for APIs' },
      { name: 'REST APIs', description: 'RESTful web services' },
    ],
    tools: [
      { name: 'Git', description: 'Version control system' },
      { name: 'Docker', description: 'Containerization platform' },
      { name: 'AWS', description: 'Cloud computing services' },
      { name: 'Vercel', description: 'Frontend deployment platform' },
      { name: 'Figma', description: 'Collaborative design tool' },
      { name: 'VS Code', description: 'Source code editor' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-accent-gradient mr-4">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              With over 3 years of experience in full-stack development, I specialize in building 
              modern web applications using the MERN stack. My passion lies in creating seamless 
              user experiences backed by robust and scalable architectures.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              industry trends. When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-white/10 backdrop-blur-10 rounded-full px-4 py-2 border border-white/20">
                <Globe size={16} className="mr-2" style={{ color: '#6366f1' }} />
                <span className="text-sm text-white">Remote Work</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-10 rounded-full px-4 py-2 border border-white/20">
                <Zap size={16} className="mr-2" style={{ color: '#10b981' }} />
                <span className="text-sm text-white">Fast Learner</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-10 rounded-full px-4 py-2 border border-white/20">
                <Smartphone size={16} className="mr-2" style={{ color: '#f59e0b' }} />
                <span className="text-sm text-white">Mobile First</span>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Frontend Skills */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#6366f1' }}></div>
                Frontend Development
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.frontend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <TechIcon name={skill.name} size={24} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{skill.name}</p>
                      <p className="text-xs text-white/60 truncate">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#10b981' }}></div>
                Backend Development
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.backend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <TechIcon name={skill.name} size={24} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{skill.name}</p>
                      <p className="text-xs text-white/60 truncate">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#f59e0b' }}></div>
                Tools & Technologies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <TechIcon name={skill.name} size={24} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{skill.name}</p>
                      <p className="text-xs text-white/60 truncate">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;