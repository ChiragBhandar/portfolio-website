import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className="min-h-screen relative bg-black text-foreground py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-20 text-center reveal reveal-delay-0">
          <div className="relative inline-block">
            {/* Animated background glow */}
            <div className="absolute inset-0 blur-3xl bg-accent/20 animate-pulse-slow"></div>
            
            {/* Main heading */}
            <h2 className="relative text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground via-accent to-foreground animate-gradient-x">
                About Me
              </span>
            </h2>
            
            {/* Decorative underline */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-12 bg-accent/40 animate-pulse-slow"></div>
              <div className="h-1 w-1 rounded-full bg-accent animate-dot-pulse"></div>
              <div className="h-0.5 w-24 bg-linear-to-r from-accent/40 to-purple-500/40 animate-line-pulse"></div>
              <div className="h-1 w-1 rounded-full bg-purple-500 animate-dot-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="h-0.5 w-12 bg-purple-500/40 animate-pulse-slow"></div>
            </div>
            
            {/* Floating dots decoration */}
            <div className="absolute -top-8 -left-8 w-2 h-2 rounded-full bg-accent/60 animate-float-1"></div>
            <div className="absolute -top-4 -right-6 w-3 h-3 rounded-full bg-purple-500/60 animate-float-2"></div>
            <div className="absolute -bottom-6 left-12 w-2 h-2 rounded-full bg-accent/40 animate-float-3"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 reveal reveal-delay-0">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Hi there
            </h2>
            
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I&apos;m Chirag Bhandar, currently I live in India pursuing BTech in Information Technology from {' '}
                <Link 
                  href="https://dtu.ac.in/" 
                  target="_blank"
                  className="text-accent hover:underline transition-all"
                >
                  Delhi Technological University (DTU)
                </Link>
                . My projects include Modern Frontend design, UI animations, and Creative Approach. Being comfortable with code allows me to rapidly prototype and validate experiences. If you&apos;re interested in my work, check out my{' '}
                <Link 
                  href="#uses" 
                  className="text-accent hover:underline transition-all"
                >
                    projects
                </Link>
                .
              </p>
              
              <p>
                In my spare time I like to do GYM, enhancing my limits in physical activities and listening to music
                . I&apos;m always down for hearing about new projects and available for the work, so feel free to drop me a line.
              </p>
            </div>

            {/* CTA Link */}
            <Link 
              href="#contact"
              className="inline-flex items-center gap-2 text-accent text-lg font-medium mt-8 group hover:gap-4 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <FiArrowRight className="text-xl" />
                Send me a message
              </span>
            </Link>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative reveal reveal-delay-2">
            

            {/* Image Container */}
            <div className="relative">
              {/* Large Vertical Name Text */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-0">
                <h3 
                  className="text-[180px] md:text-[220px] font-bold text-white/5 tracking-tighter"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  TYLER
                </h3>
              </div>

              {/* Profile Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-3/4 bg-linear-to-br from-gray-800 to-gray-900 relative flex items-center justify-center">
                  {/* Placeholder - Replace with your actual image */}
                  {/* Uncomment and use Image component when you have your profile image */}
                  <Image 
                    src="/myimg.jpeg" 
                    alt="Profile" 
                    fill
                    className="object-cover"
                    priority
                  />                  
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
    </section>
  )
}

export default About
