// src/components/FeaturedCategories.jsx
import React from 'react';

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Homes for Sale',
      description: 'Find your perfect home to buy.',
      imageUrl: 'https://img.freepik.com/free-vector/real-estate-agent-offering-house-young-family-couple-wife-husband-choosing-new-suburb-home-living_575670-754.jpg?semt=ais_hybrid&w=740',
      link: '#',
    },
    {
      title: 'Homes for Rent',
      description: 'Discover great rental properties.',
      imageUrl: 'https://img.freepik.com/free-vector/family-moving-countryside-area-realtor-shows-townhouse-house-rent-booking-hose-online-best-rental-property-real-estate-services-concept-bright-vibrant-violet-isolated-illustration_335657-1129.jpg',
      link: '#',
    },
    {
      title: 'Recently Sold',
      description: 'See what homes are selling for in your area.',
      imageUrl: 'https://assets.designtemplate.io/thu-jan-12-2023-9-55-am54083.webp',
      link: '#',
    },
    {
      title: 'New Construction',
      description: 'Explore brand new homes and developments.',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/005/051/176/non_2x/the-construction-team-working-on-a-new-project-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg',
      link: '#',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Explore By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.link} 
              className="block bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <img 
                src={category.imageUrl} 
                alt={category.title} 
                className="w-full h-48 object-cover group-hover:brightness-90 transition duration-300" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;