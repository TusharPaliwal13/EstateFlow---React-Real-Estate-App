import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PropertiesPage from './pages/PropertiesPage';
import AboutUsPage from './pages/AboutUsPage'; 
import './index.css';

function App() {
  return (
    // Wrap your entire application with Router
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <main className="flex-grow">
         
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} /> {/* Route for Properties */}
            <Route path="/how-it-works" element={<AboutUsPage />} /> {/* Route for About Us (using the Navbar's "About Us" link) */}
            <Route path="/contact" element={<ContactPage />} />
            {/* You can add a 404 Not Found page here later if desired */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;