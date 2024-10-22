import React from 'react';
import { Link } from 'react-router-dom';

const CTA = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{subtitle}</p>
        <Link to={buttonLink} className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CTA;