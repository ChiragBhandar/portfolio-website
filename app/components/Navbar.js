'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TbCircleLetterC } from 'react-icons/tb';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile (425px and below) */}
      <nav className="hidden min-[426px]:flex fixed left-0 top-0 h-screen w-28 flex-col items-center justify-between py-8 z-50" style={{ background: 'var(--background)', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
        {/* Logo at top */}
        <div className="flex flex-col items-center gap-12">
          <Link 
            href="/" 
            className="group flex items-center justify-center"
          >
            <TbCircleLetterC 
              className="nav-icon"
              size={56}
            />
          </Link>

          {/* Vertical Navigation Items */}
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
                style={{ 
                  writingMode: 'sideways-lr', 
                  textOrientation: 'sideways',
                  letterSpacing: '0.08em',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons at bottom */}
        <div className="flex flex-col items-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chirag-bhandar/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <svg className="w-5 h-5 nav-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ChiragBhandar"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <svg className="w-6 h-6 nav-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button - Only visible on 425px and below */}
      <button
        onClick={toggleSidebar}
        className="flex min-[426px]:hidden fixed top-4 left-4 z-50 p-2 rounded-lg transition-all duration-300"
        style={{ 
          background: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)'
        }}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span 
            className={`block h-0.5 w-full transition-all duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}`}
            style={{ background: 'var(--accent)' }}
          ></span>
          <span 
            className={`block h-0.5 w-full transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}
            style={{ background: 'var(--accent)' }}
          ></span>
          <span 
            className={`block h-0.5 w-full transition-all duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ background: 'var(--accent)' }}
          ></span>
        </div>
      </button>

      {/* Mobile Sidebar - Only visible on 425px and below */}
      <aside
        className={`block min-[426px]:hidden fixed top-0 left-0 h-screen w-64 z-40 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ 
          background: 'var(--background)',
          borderRight: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="flex flex-col h-full py-20 px-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex mb-12"
            onClick={closeSidebar}
          >
            <TbCircleLetterC 
              className="nav-icon"
              size={48}
            />
          </Link>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-6 mb-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-lg font-bold tracking-wide"
                onClick={closeSidebar}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 mt-auto">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chirag-bhandar/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <svg className="w-6 h-6 nav-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ChiragBhandar"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <svg className="w-7 h-7 nav-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay - Only visible on mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="block min-[426px]:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
}
