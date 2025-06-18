// src/components/CallToAction.jsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-700 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Ready to Sell Your Home?</h2>
        <p className="text-xl mb-8">
          Get a free home valuation and connect with top agents in your area.
        </p>
        <button className="
          bg-white text-blue-700 font-bold py-4 px-10 rounded-full shadow-lg text-lg
          transform transition duration-300 ease-in-out
          hover:bg-gray-100 hover:scale-105 hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75
          animate-slideInFromBottom
          backface-hidden translate-z-0 /* ADD THESE CLASSES */
        ">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;