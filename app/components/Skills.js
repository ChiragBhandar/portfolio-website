'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaSass, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaDocker,
  FaDatabase,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaBootstrap
} from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { 
  SiFirebase, 
  SiMongodb, 
  SiNextdotjs, 
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiJest,
  SiFramer
} from 'react-icons/si';

// Generate particle configurations
const generateParticles = () => {
  return [...Array(15)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    x: Math.random() * 20 - 10,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2
  }));
};

// Generate sparkle positions
const generateSparkles = () => {
  return [...Array(6)].map((_, i) => ({
    left: 20 + Math.random() * 60,
    top: 20 + Math.random() * 60,
    y: -20 - Math.random() * 20,
    x: (Math.random() - 0.5) * 20
  }));
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Generate particles only on client side to avoid hydration mismatch
  // This is intentional to prevent SSR/CSR mismatch with Math.random()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoize particles to avoid regenerating on every render
  const particles = useMemo(() => isMounted ? generateParticles() : [], [isMounted]);
  const sparkles = useMemo(() => isMounted ? generateSparkles() : [], [isMounted]);

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "#E34F26", level: 95 },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6", level: 90 },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", level: 94 },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 92 },
        { name: "React", icon: FaReact, color: "#61DAFB", level: 93 },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 89 },
        { name: "Framer", icon: SiFramer, color: "#0055FF", level: 86 },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 87 }
      ]
    },
    // {
    //   name: "Backend & Database",
    //   skills: [
    //     { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 88 },
    //     { name: "Express", icon: SiExpress, color: "#FFFFFF", level: 85 },
    //     { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 90 },
    //     { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 87 },
    //     { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 82 },
    //     { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: 80 },
    //     { name: "Redis", icon: SiRedis, color: "#DC382D", level: 78 },
    //     { name: "SQL", icon: FaDatabase, color: "#00758F", level: 84 }
    //   ]
    // },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032", level: 91 },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF", level: 93 },
        { name: "VS Code", icon: VscCode, color: "#007ACC", level: 83 },
        { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 88 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen relative py-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating particles - only render on client */}
      {isMounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.x, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="text-yellow-400 text-5xl">✨</span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Tech Stack
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              {/* Category Title with animated underline */}
              <div className="mb-8 relative">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-white mb-2 inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  {category.name}
                </motion.h3>
                <motion.div
                  className="h-1 bg-linear-to-r from-cyan-400 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  style={{ maxWidth: "200px" }}
                />
              </div>

              {/* Skills Cards Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredSkill === `${categoryIndex}-${index}`;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.08,
                        y: -10,
                        rotateY: 5,
                        rotateX: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredSkill(`${categoryIndex}-${index}`)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative group"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div
                        className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 overflow-hidden transition-all duration-300"
                        style={{
                          boxShadow: isHovered
                            ? `0 20px 60px ${skill.color}33, 0 0 40px ${skill.color}22`
                            : "0 4px 20px rgba(0,0,0,0.3)"
                        }}
                      >
                        {/* Animated border gradient */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${skill.color}22, transparent)`,
                          }}
                          animate={isHovered ? {
                            rotate: [0, 360],
                          } : {}}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />

                        {/* Glowing orb effect */}
                        <motion.div
                          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle, ${skill.color}, transparent)`
                          }}
                        />

                        {/* Icon */}
                        <motion.div
                          className="relative z-10 flex flex-col items-center"
                          animate={isHovered ? {
                            rotateY: [0, 360],
                          } : {}}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut"
                          }}
                        >
                          <motion.div
                            className="mb-4 text-6xl"
                            style={{ color: skill.color }}
                            animate={isHovered ? {
                              scale: [1, 1.2, 1],
                              filter: [
                                `drop-shadow(0 0 0px ${skill.color})`,
                                `drop-shadow(0 0 20px ${skill.color})`,
                                `drop-shadow(0 0 0px ${skill.color})`
                              ]
                            } : {}}
                            transition={{
                              duration: 0.4,
                              ease: "easeInOut"
                            }}
                          >
                            <Icon />
                          </motion.div>

                          <h4 className="text-white font-semibold text-lg mb-3 text-center">
                            {skill.name}
                          </h4>

                          {/* Skill level bar */}
                          <div className="w-full">
                            <div className="flex justify-between items-center mb-1 text-xs text-gray-400">
                              <span>Proficiency</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.1 * index,
                                  duration: 1,
                                  ease: "easeOut"
                                }}
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Sparkle effect on hover */}
                        {isHovered && isMounted && (
                          <>
                            {sparkles.map((sparkle, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                  backgroundColor: skill.color,
                                  left: `${sparkle.left}%`,
                                  top: `${sparkle.top}%`,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                  scale: [0, 1.5, 0],
                                  opacity: [0, 1, 0],
                                  y: [0, sparkle.y],
                                  x: [0, sparkle.x]
                                }}
                                transition={{
                                  duration: 0.8,
                                  delay: i * 0.1,
                                  ease: "easeOut"
                                }}
                              />
                            ))}
                          </>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;
