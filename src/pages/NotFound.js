// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Go to Homepage
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;