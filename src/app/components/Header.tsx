"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <ul className='flex items-center justify-between py-4 px-6 bg-lime-300 text-white font-bold'>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-24">
          <li><Link href="/" className='hover:underline'>Home</Link></li>
          <li><Link href="/about" className='hover:underline'>About</Link></li>
          <li><Link href="/skills" className='hover:underline'>Skills</Link></li>
          <li><Link href="/register" className='hover:underline'>Register</Link></li>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </ul>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-lime-300`}>
        <ul className="flex flex-col items-center py-4 text-white font-bold">
          <li><Link href="/" className='hover:underline'>Home</Link></li>
          <li><Link href="/about" className='hover:underline'>About</Link></li>
          <li><Link href="/skills" className='hover:underline'>Skills</Link></li>
          <li><Link href="/register" className='hover:underline'>Register</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
