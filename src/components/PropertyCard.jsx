// src/components/PropertyCard.jsx
import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div id='properties' className="
      bg-white rounded-lg shadow-lg overflow-hidden
      transform transition duration-300 ease-in-out
      hover:scale-105 hover:shadow-xl
      backface-hidden translate-z-0 /* ADD THESE CLASSES */
      group
    ">
      <img
        src={property.imageUrl || 'https://via.placeholder.com/400x250?text=Property+Image'}
        alt={property.title}
        className="w-full h-48 object-cover transition duration-300 group-hover:brightness-90"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <p className="text-2xl font-bold text-blue-600 mb-4">{property.price}</p>
        <div className="flex justify-between text-gray-700 text-sm">
          <span className="flex items-center">
            <i className="fas fa-bed mr-1 text-blue-500"></i> {property.beds} Beds
          </span>
          <span className="flex items-center">
            <i className="fas fa-bath mr-1 text-blue-500"></i> {property.baths} Baths
          </span>
          <span className="flex items-center">
            <i className="fas fa-ruler-combined mr-1 text-blue-500"></i> {property.sqft} sqft
          </span>
        </div>
        <button className="
          mt-4 w-full bg-blue-500 text-white py-2 rounded-md
          hover:bg-blue-600 transition duration-200 ease-in-out
          font-semibold
        ">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;