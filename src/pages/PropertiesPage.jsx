// src/pages/PropertiesPage.jsx
import React from 'react';
import PropertyCard from '../components/PropertyCard'; // Make sure this path is correct

// Dummy data for properties (can be moved to a central data file later if needed)
const properties = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: '123 Main St, City, State',
    price: '$550,000',
    beds: 4,
    baths: 3,
    sqft: 2500,
    imageUrl: 'https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=',
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
  {
    id: 5,
    title: 'Spacious Countryside Estate',
    location: '567 Rural Route, Farmville, State',
    price: '$950,000',
    beds: 5,
    baths: 3,
    sqft: 3800,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFuiYLgsp7nr2yLRQI257dt6NMa_KesXUwQ&s',
  },
  {
    id: 6,
    title: 'Charming Urban Loft',
    location: '10 Loft St, Metropoli, State',
    price: '$620,000',
    beds: 1,
    baths: 1,
    sqft: 900,
    imageUrl: 'https://www.urbanlofthotels.com/fileadmin//_processed_/3/5/csm_urban_loft_cologne_loft_galery_steve_herud__4__ffd7139971.jpg',
  },
];

const PropertiesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-160px)]">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12 animate-fadeIn">
        All Available Properties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;