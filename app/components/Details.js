'use client'
import React, { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import Image from 'next/image'

const Details = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('your.email@example.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[200px]">
          
          {/* Row 1 - Three small cards at top */}
          {/* Card 1 - Animated About Card */}
          <div className="detail-card md:col-span-3 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm p-4 md:p-5 lg:p-6 hover:border-cyan-500/30 transition-all duration-500 group">
            {/* Animated particle background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-700"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Animated decorative lines */}
              <div className="space-y-2 mb-4">
                <div className="h-1 bg-gradient-to-r from-cyan-500/40 to-transparent rounded animate-pulse-slow w-2/3"></div>
                <div className="h-1 bg-gradient-to-r from-blue-500/40 to-transparent rounded animate-pulse-slow w-3/4" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              {/* Main text with typing animation effect */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 absolute"></div>
                  <span className="text-cyan-400 text-[10px] font-bold tracking-widest card-subtitle">ABOUT</span>
                </div>
                
                <p className="text-white text-sm md:text-sm lg:text-lg font-bold leading-tight group-hover:text-cyan-50 transition-colors duration-300">
                  Tech enthusiast with a passion for development.
                </p>
              </div>

              {/* Bottom accent line that grows on hover */}
              <div className="mt-auto pt-4">
                <div className="h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              </div>
            </div>

            {/* Corner accent decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"></div>
              <div className="absolute top-5 right-5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Card 2 - Resume Download Card */}
          <a 
            href="/Chirag-Resume.pdf" 
            download="Chirag-Resume.pdf"
            className="detail-card md:col-span-3 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/40 via-slate-900/50 to-slate-950/50 backdrop-blur-sm p-4 md:p-5 lg:p-6 hover:border-cyan-400/50 transition-all duration-500 group cursor-pointer"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating document icon */}
            <div className="absolute top-4 right-4 resume-float">
              <svg className="w-8 h-8 text-cyan-400/60 group-hover:text-cyan-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span className="text-cyan-300 text-[10px] font-medium tracking-wide card-subtitle">AVAILABLE</span>
                </div>
                
                <h4 className="text-white text-sm md:text-sm lg:text-lg font-bold leading-tight group-hover:text-cyan-100 transition-colors duration-300">
                  Resume
                </h4>
                
                <p className="text-gray-400 text-[10px] md:text-[10px] lg:text-xs leading-relaxed">
                  View my experience & skills
                </p>
              </div>

              {/* Download button with arrow animation */}
              <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                <span className="text-[10px] md:text-[10px] lg:text-xs font-semibold tracking-wide">Download</span>
                <svg className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Animated shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 resume-shine"></div>
            </div>
          </a>

          {/* Card 3 - Tech Stack Animation */}
          <div className="detail-card md:col-span-6 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-500">
            <div className="relative z-10 h-full flex items-center justify-between gap-6">
              {/* Left side - Text */}
              <div className="flex-1 min-w-0">
                <p className="text-slate-400 text-[10px] md:text-[10px] lg:text-sm mb-2 font-medium tracking-wide">I constantly try to improve</p>
                <h3 className="text-white text-lg md:text-xl lg:text-3xl font-bold leading-tight">
                  My tech stack
                </h3>
              </div>
              
              {/* Right side - Floating Tech Boxes */}
              <div className="relative w-[240px] md:w-[280px] h-[160px] flex-shrink-0">
                {/* React Box - Top Right */}
                <div className="tech-box absolute top-0 right-0 bg-slate-800/80 backdrop-blur-md border border-slate-600/40 rounded-lg px-2 md:px-2 lg:px-3 py-1.5 md:py-1.5 lg:py-2 shadow-xl animate-float-1 hover:border-cyan-400/60 group cursor-pointer">
                  <span className="text-white font-semibold text-[10px] md:text-[10px] lg:text-sm tracking-wide group-hover:text-cyan-400 transition-colors duration-300">React</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                </div>
                
                {/* JavaScript Box - Top Left */}
                <div className="tech-box absolute top-4 right-28 bg-slate-800/80 backdrop-blur-md border border-slate-600/40 rounded-lg px-2 md:px-2 lg:px-3 py-1.5 md:py-1.5 lg:py-2 shadow-xl animate-float-2 hover:border-yellow-400/60 group cursor-pointer">
                  <span className="text-white font-semibold text-[10px] md:text-[10px] lg:text-sm tracking-wide group-hover:text-yellow-400 transition-colors duration-300">JavaScript</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-orange-500/5 transition-all duration-300"></div>
                </div>
                
                {/* ThreeJS Box - Middle Right */}
                <div className="tech-box absolute top-[55%] -translate-y-1/2 right-2 bg-slate-800/80 backdrop-blur-md border border-slate-600/40 rounded-lg px-2 md:px-2 lg:px-3 py-1.5 md:py-1.5 lg:py-2 shadow-xl animate-float-3 hover:border-purple-400/60 group cursor-pointer">
                  <span className="text-white font-semibold text-[10px] md:text-[10px] lg:text-sm tracking-wide group-hover:text-purple-400 transition-colors duration-300">Framer</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>
                </div>
                
                {/* NextJS Box - Bottom Center-Left */}
                <div className="tech-box absolute bottom-2 right-24 bg-slate-800/80 backdrop-blur-md border border-slate-600/40 rounded-lg px-2 md:px-2 lg:px-3 py-1.5 md:py-1.5 lg:py-2 shadow-xl animate-float-4 hover:border-slate-300/60 group cursor-pointer">
                  <span className="text-white font-semibold text-[10px] md:text-[10px] lg:text-sm tracking-wide group-hover:text-slate-300 transition-colors duration-300">NextJS</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-400/0 to-slate-400/0 group-hover:from-slate-400/5 group-hover:to-slate-500/5 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Large Bento card */}
          {/* Main Bento Card - Spans 2 rows */}
          <div className="detail-card md:col-span-6 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/img1.jpeg" 
                alt="Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Combined Design Elements Card */}
          <div className="detail-card md:col-span-3 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-500 group">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-600/0 to-gray-900/0 group-hover:from-cyan-500/10 group-hover:via-cyan-600/5 group-hover:to-gray-900/10 transition-all duration-700"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Top section - Number with pulse effect */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <span className="text-3xl md:text-3xl lg:text-5xl font-black text-white group-hover:text-cyan-50 transition-colors duration-300 animate-number-pulse">01</span>
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"></div>
                </div>
                
                {/* Dots indicator - animated */}
                <div className="flex flex-col gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 border border-cyan-400 shadow-lg shadow-cyan-500/50 animate-dot-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-400 border border-cyan-300 shadow-lg shadow-cyan-400/50 animate-dot-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 rounded-full bg-gray-500 border border-gray-400 shadow-lg shadow-gray-500/50 animate-dot-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>

              {/* Middle section - Typography */}
              <div className="flex-1 flex items-center justify-center py-6">
                <div className="relative">
                  <span className="text-2xl md:text-2xl lg:text-4xl font-black text-white group-hover:scale-110 transition-transform duration-500 inline-block">Quality &gt; Quantity</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Bottom section - Decorative lines */}
              <div className="space-y-2">
                <div className="h-2 bg-gradient-to-r from-cyan-500/60 via-cyan-400/40 to-transparent rounded-full animate-line-pulse"></div>
                <div className="h-2 bg-gradient-to-r from-cyan-400/60 via-gray-500/40 to-transparent rounded-full animate-line-pulse w-4/5" style={{animationDelay: '0.3s'}}></div>
                <div className="h-2 bg-gradient-to-r from-gray-500/60 via-cyan-500/40 to-transparent rounded-full animate-line-pulse w-3/5" style={{animationDelay: '0.6s'}}></div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gray-500/30 rounded-br-lg"></div>
          </div>

          {/* New Interactive Projects Card */}
          <div className="detail-card md:col-span-3 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-500 group">
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-600/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '4s'}}></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span className="text-cyan-400 text-[10px] font-bold tracking-widest card-subtitle">PROJECTS</span>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col justify-center space-y-6 py-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="text-white text-3xl md:text-3xl lg:text-5xl font-black group-hover:text-cyan-50 transition-colors duration-300">5+</span>
                  </div>
                  <p className="text-gray-400 text-xs md:text-xs lg:text-base">Completed Projects</p>
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full animate-progress-1"></div>
                  </div>
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-gray-500 rounded-full animate-progress-2"></div>
                  </div>
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-cyan-500 rounded-full animate-progress-1" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>

              {/* Footer icon */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 border-2 border-slate-900 animate-bounce-slow shadow-lg shadow-cyan-500/30"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-400 border-2 border-slate-900 animate-bounce-slow shadow-lg shadow-cyan-400/30" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 border-2 border-slate-900 animate-bounce-slow shadow-lg shadow-gray-500/30" style={{animationDelay: '0.4s'}}></div>
                </div>
                <svg className="w-6 h-6 text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Corner decorations matching the left card */}
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-gray-500/30 rounded-bl-lg"></div>
          </div>

          

        </div>
      </div>
    </section>
  )
}

export default Details