import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Systematic Investment Plans (SIPs)', description: 'Disciplined investing for long-term growth' },
  { title: 'Insurance', description: 'Protect your assets and loved ones' },
  { title: 'Mutual Funds', description: 'Diversified investments managed by experts' },
  { title: 'Financial Planning', description: 'Customized strategies for your financial goals' },
];

const ServicesOverview = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <Link to="/services" className="text-blue-600 hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;