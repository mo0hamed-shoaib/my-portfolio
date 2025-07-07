'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import TechIcon from './TechIcon';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, real-time inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express.js'],
      category: 'fullstack',
      features: [
        'User Authentication & Authorization',
        'Payment Processing with Stripe',
        'Real-time Inventory Management',
        'Admin Dashboard with Analytics',
        'Responsive Design',
        'Search & Filter Functionality'
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and multi-platform integration.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Tailwind CSS', 'Vercel'],
      category: 'frontend',
      features: [
        'Real-time Data Visualization',
        'Multi-platform Integration',
        'Custom Chart Components',
        'Export Reports to PDF/Excel',
        'Dark/Light Theme Toggle',
        'Responsive Dashboard Layout'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      tech: ['React', 'Socket.io', 'MongoDB', 'JWT', 'Express.js', 'Material-UI'],
      category: 'fullstack',
      features: [
        'Real-time Collaboration',
        'Drag & Drop Task Management',
        'Team Member Management',
        'Progress Tracking & Analytics',
        'File Attachments',
        'Email Notifications'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'Vercel', 'REST APIs'],
      category: 'frontend',
      features: [
        'Location-based Weather',
        'Interactive Weather Maps',
        '7-day Forecast',
        'Weather Alerts',
        'Beautiful Animations',
        'Responsive Design'
      ],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Modern blog platform with rich text editor, comment system, and SEO optimization.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Vercel', 'REST APIs'],
      category: 'fullstack',
      features: [
        'Rich Text Editor',
        'Comment System',
        'SEO Optimization',
        'Tag-based Categorization',
        'Social Media Integration',
        'Admin Content Management'
      ],
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'API Documentation Tool',
      description: 'Interactive API documentation tool with live testing capabilities and beautiful UI.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Docker'],
      category: 'backend',
      features: [
        'Interactive API Testing',
        'Auto-generated Documentation',
        'Authentication Examples',
        'Code Snippets',
        'Version Control',
        'Export to Multiple Formats'
      ],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-white mb-4">My Projects</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore my latest work and see how I bring ideas to life
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-medium font-medium transition-all duration-normal ${
                activeFilter === filter.id
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                  <div className="flex space-x-2">
                    <a
                      href={project.demoUrl}
                      className="p-2 bg-white/20 backdrop-blur-10 rounded-full hover:bg-white/30 transition-all duration-normal"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-10 rounded-full hover:bg-white/30 transition-all duration-normal"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-card">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                {/* Technology Stack with Icons */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-white/60 mb-2 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center space-x-2 bg-white/10 backdrop-blur-10 rounded-lg px-3 py-2 border border-white/20 hover:bg-white/15 transition-all duration-300"
                      >
                        <TechIcon name={tech} size={16} />
                        <span className="text-xs font-medium text-white">{tech}</span>
                      </div>
                    ))}
                    {project.tech.length > 4 && (
                      <div className="flex items-center justify-center bg-white/10 backdrop-blur-10 rounded-lg px-3 py-2 border border-white/20">
                        <span className="text-xs font-medium text-white/80">
                          +{project.tech.length - 4} more
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="flex-1 text-center py-2 btn-primary text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center py-2 btn-secondary text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;