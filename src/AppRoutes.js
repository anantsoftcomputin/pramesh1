import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FinancialPlanning from './pages/FinancialPlanning';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/financial-planning" element={<FinancialPlanning />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;