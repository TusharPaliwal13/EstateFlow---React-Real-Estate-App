// src/pages/HomePage.jsx
import React from 'react';
import PropertyCard from '../components/PropertyCard';
import HeroSection from '../components/HeroSection'; // New Import
import HowItWorks from '../components/HowItWorks'; // New Import
import FeaturedCategories from '../components/FeaturedCategories'; // New Import
import CallToAction from '../components/CallToAction'; // New Import


// Dummy data for properties (using your provided image URLs)
const properties = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: '123 Main St, City, State',
    price: '$550,000',
    beds: 4,
    baths: 3,
    sqft: 2500,
    imageUrl: 'https://media.istockphoto.com/id/1987087979/photo/new-sustainable-single-family-home-with-a-garden.jpg?s=612x612&w=0&k=20&c=azws-eApZn892aOPcN3UEFBNjEhRgRGkR9RBVPEkYgc=',
  },
  {
    id: 2,
    title: 'Luxury Downtown Apartment',
    location: '456 Oak Ave, City, State',
    price: '$800,000',
    beds: 2,
    baths: 2,
    sqft: 1200,
    imageUrl: 'https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE=',
  },
  {
    id: 3,
    title: 'Cozy Suburban House',
    location: '789 Pine Ln, City, State',
    price: '$320,000',
    beds: 3,
    baths: 2,
    sqft: 1800,
    imageUrl: 'https://media.istockphoto.com/id/1354034882/photo/3d-rendering-of-modern-cozy-bungalow.jpg?s=612x612&w=0&k=20&c=u0o6GDSYFTnaEBp84nas7tHxUoLjDB0dBuw79KhUxHU=',
  },
  {
    id: 4,
    title: 'Elegant Villa with Pool',
    location: '101 Cedar Rd, City, State',
    price: '$1,200,000',
    beds: 5,
    baths: 4,
    sqft: 4000,
    imageUrl: 'https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs=',
  },
];

const HomePage = () => {
  return (
    // Using a React Fragment <> </> to wrap multiple top-level elements
    <>
      {/* Hero Section with Search Bar */}
      <HeroSection />
      
      {/* How It Works / Key Features Section */}
      <HowItWorks />

      {/* Featured Categories / Explore By Section */}
      <FeaturedCategories />

      {/* Existing "Featured Properties" Section */}
      <section className="container mx-auto px-4 py-16"> {/* Increased padding */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Featured Properties for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
};

export default HomePage;