// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: 'fas fa-search', // Font Awesome icon class
      title: 'Find Your Home',
      description: 'Browse thousands of listings tailored to your preferences.',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Connect with Agents',
      description: 'Get in touch with top local real estate professionals.',
    },
    {
      icon: 'fas fa-key',
      title: 'Move In',
      description: 'Secure your new property and start your next chapter.',
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">How EstateFlow Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 text-5xl mb-6">
                <i className={step.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;