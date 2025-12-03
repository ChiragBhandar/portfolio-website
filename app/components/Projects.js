'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Project Number */}
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-20 bg-linear-to-r from-accent to-transparent"></div>
            <span className="text-6xl md:text-7xl font-bold text-accent opacity-60">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* View Project Button */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-black font-semibold text-lg rounded-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>

          {/* Tech Stack Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-3 pt-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-foreground/80 hover:border-accent/50 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right Content - Project Preview */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-accent/20 via-purple-500/10 to-transparent rounded-3xl blur-3xl opacity-40"></div>
          
          {/* Image Container */}
          <div className="relative bg-linear-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm">
            {/* Top Bar - Browser-like */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 bg-white/5 rounded-lg"></div>
              </div>
            </div>

            {/* Project Image/Preview */}
            <div className="aspect-video relative overflow-hidden bg-black/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Floating Accent Element */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "Code&Canvas — Modern Agency Landing Page",
      description: "A visually clean, modern digital agency landing page created with Next.js, React, and Framer Motion. Focused on minimal design, fluid animations, and responsive layouts, this project showcases attention to UI/UX, scroll-based motion effects, and performance-driven frontend development.",
      link: "https://agency-landing-page-chirag.vercel.app/",
      image: "/project1.png", 
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
    },
    
    {
      title: "Alienware - 3D Product Showcase",
      description: "A sleek and minimalistic 3D product showcase built using React Three Fiber, Three.js, and Next.js. Features interactive 3D model rendering, smooth camera transitions, and multi-page navigation demonstrating full routing capabilities. Designed with a modern, futuristic UI to highlight performance and design aesthetics.",
      link: "https://3d-alienware-product-showcase-chirag.vercel.app/",
      image: "/project2.png",
      tags: ["React Three Fiber", "Three.js", "NextJS" , "Framer Motion"]
    }
  ];

  return (
    <section id="projects" className="relative w-full bg-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 hero-grid opacity-30"></div>

      {/* Projects Container */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="pt-20 pb-10 px-6 md:px-12 lg:px-20 text-center overflow-hidden">
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold inline-flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              className="text-foreground"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              My
            </motion.span>
            
            <motion.span
              className="relative"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              <span className="relative z-10 bg-linear-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent animate-gradient-x bg-size-[200%_auto]">
                Projects
              </span>
              {/* Glowing underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-2xl opacity-30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-accent">Projects</span>
              </motion.div>
            </motion.span>
          </motion.h2>
          
          {/* Decorative elements */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="h-px w-12 bg-linear-to-r from-transparent to-accent"
              animate={{ width: ["0px", "48px"] }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-accent"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="h-px w-12 bg-linear-to-l from-transparent to-accent"
              animate={{ width: ["0px", "48px"] }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
