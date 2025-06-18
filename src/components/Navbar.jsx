import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Use Link for internal navigation */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          EstateFlow
        </Link>
        <div className="flex items-center space-x-6">
          {/* Update NavLink to use Link as well for consistency */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/properties">Properties</NavLink> {/* Assuming you'll create a /properties page later */}
          <NavLink to="/how-it-works">About Us</NavLink> {/* Or change this to /about */}
          {/* Changed 'a' tag to Link for internal routing */}
          <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Helper component for animated links - updated to use Link internally
const NavLink = ({ to, children }) => ( // Changed 'href' prop to 'to'
  <Link to={to} className=" // Use Link here
    relative text-gray-600 hover:text-gray-900 py-1
    group
    text-lg font-medium
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