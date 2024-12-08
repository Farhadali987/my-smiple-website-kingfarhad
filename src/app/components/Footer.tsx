import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-bold py-12 px-10">
      <div className="flex flex-col items-center">
        <ul className="flex space-x-6 mb-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/skills" className="hover:underline">Skills</a></li>
          <li><a href="/register" className="hover:underline">Register</a></li>
        </ul>
        <p className="text-center">
          &copy; 2024 Farhad Ali. All rights reserved. Thanks for visiting!
        </p>
    <p id="03248834244">03248834244</p>
    <p id="kingfarhadalilaghari@gmail.com">kingfarhadalilaghari@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
