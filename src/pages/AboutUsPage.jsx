// src/pages/AboutUsPage.jsx
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-160px)]">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12 animate-fadeIn">
        About EstateFlow
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          At EstateFlow, our mission is to simplify the real estate journey for everyone. We believe that finding or selling a home should be an exciting and seamless experience, not a stressful one. We leverage cutting-edge technology and a deep understanding of the market to connect buyers with their dream properties and sellers with the right opportunities.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are committed to transparency, integrity, and providing personalized support every step of the way. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your cherished property, EstateFlow is your trusted partner.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>
            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
            Customer Centricity: Our clients are at the heart of everything we do.
          </li>
          <li>
            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
            Innovation: Continuously improving our platform and services.
          </li>
          <li>
            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
            Transparency:Clear and honest communication always.
          </li>
          <li>
            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
            Excellence: Striving for the highest standards in service and results.
          </li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevd6-bj_82IxESeyxgv2HyX58FBHcJokiIw&s" alt="John Doe" className="rounded-full w-24 h-24 object-cover mb-4 shadow-md" />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-blue-600 text-sm">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://thumb.photo-ac.com/e0/e0376ffeb22a830e38b9696b8000a4e1_t.jpeg" alt="Jane Smith" className="rounded-full w-24 h-24 object-cover mb-4 shadow-md" />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-blue-600 text-sm">Head of Sales</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cgfaces.com/collection/preview/e736cbc2-5359-4f54-a94a-b668fbd9e93a.jpg" alt="Mike Johnson" className="rounded-full w-24 h-24 object-cover mb-4 shadow-md" />
            <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
            <p className="text-blue-600 text-sm">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;