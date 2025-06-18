// src/components/HeroSection.jsx
import React from 'react';


const HeroSection = () => {
  return (
    <section id='home'
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white" 
      style={{ backgroundImage: `url('/home_ill.png') ` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Find Your Dream Home on EstateFlow
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Explore homes, apartments, and land for sale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Enter a city, address, or zip code"
            className=" bg-white  p-4 rounded-lg w-full max-w-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;