import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-160px)]"> {/* min-h adjustment for footer */}
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        Contact Us 
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl animate-fadeIn">
        <p className="text-lg text-gray-700 mb-8 text-center">
          Have questions or need assistance? Reach out to us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Details</h2>
            <p className="text-gray-600 mb-2">
              <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
              123 Real Estate Blvd, Property City, ST 98765
            </p>
            <p className="text-gray-600 mb-2">
              <i className="fas fa-phone-alt text-blue-600 mr-2"></i>
              +1 (123) 456-7890
            </p>
            <p className="text-gray-600 mb-2">
              <i className="fas fa-envelope text-blue-600 mr-2"></i>
              info@estateflow.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Contact Form (Dummy) */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" placeholder="your@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;