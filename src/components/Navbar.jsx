// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          EstateFlow
        </Link>
        {/*
          Refined spacing:
          - gap-y-3: More vertical space when items wrap (12px)
          - gap-x-4: Default horizontal space between items (16px)
          - sm:gap-x-6: Larger horizontal space for small screens and up (24px)
          - mt-2 sm:mt-0: Margin top for wrapped items on mobile
        */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-y-3 gap-x-4 sm:gap-x-6 mt-2 sm:mt-0">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/how-it-works">About Us</NavLink>
          <Link to="/contact" className="
            bg-blue-600 text-white px-4 py-2 rounded-md
            hover:bg-blue-700 transition duration-300 ease-in-out
            whitespace-nowrap
          ">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Helper component for animated links
const NavLink = ({ to, children }) => (
  <Link to={to} className="
    relative text-gray-600 hover:text-gray-900 py-1
    group
    text-lg font-medium
    whitespace-nowrap
  ">
    {children}
    <span className="
      absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600
      transition-all duration-300 ease-in-out
      group-hover:w-full
    "></span>
  </Link>
);

export default Navbar;