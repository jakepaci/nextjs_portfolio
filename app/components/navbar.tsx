'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
        
          <Link href="/" className="flex items-center">
            <img 
              src="/images/j.svg.svg" 
              alt="J Logo" 
              className="h-17 w-17" 
            />
          </Link>

          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="#tech" 
              className="text-black text-2xl underline decoration-transparent underline-offset-10 transition-colors hover:text-blue-700 hover:decoration-blue-700"
            >
              Tech
            </Link>
            <Link 
              href="#projects" 
              className="text-black text-2xl underline decoration-transparent underline-offset-10 transition-colors hover:text-blue-700 hover:decoration-blue-700"
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="text-black text-2xl underline decoration-transparent underline-offset-10 transition-colors hover:text-blue-700 hover:decoration-blue-700"
            >
              Contact
            </Link>
          </div>

      
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`flex justify-end md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          <Link 
            href="#tech" 
            onClick={() => setIsOpen(false)}
            className="block text-black text-xl py-2 underline decoration-transparent underline-offset-8 transition-colors hover:text-blue-700 hover:decoration-blue-700"
          >
            Tech
          </Link>
          <Link 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="block text-black text-xl py-2 underline decoration-transparent underline-offset-8 transition-colors hover:text-blue-700 hover:decoration-blue-700"
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block text-black text-xl py-2 underline decoration-transparent underline-offset-8 transition-colors hover:text-blue-700 hover:decoration-blue-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}