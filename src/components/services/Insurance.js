import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Heart, Car, ArrowRight } from 'lucide-react';

const Insurance = () => {
  const [activeTab, setActiveTab] = useState('life');

  const tabContent = {
    life: {
      title: "Life Insurance",
      icon: <Shield className="w-12 h-12 mb-4 text-primary-600" />,
      description: "Secure your family's future with our comprehensive life insurance policies. We offer tailored solutions to protect your loved ones financially, no matter what life brings.",
      items: [
        { name: "Pure Term Plan", description: "Maximum coverage at affordable premiums" },
        { name: "Whole Life Plan", description: "Lifelong protection with savings benefit" },
        { name: "Endowment Plan", description: "Dual benefit of insurance and savings" },
        { name: "Unit-Linked Insurance Plans (ULIPs)", description: "Combine insurance with market-linked investments" }
      ],
      cta: "Get a Life Insurance Quote"
    },
    health: {
      title: "Health Insurance",
      icon: <Heart className="w-12 h-12 mb-4 text-secondary-600" />,
      description: "Protect yourself and your loved ones with our comprehensive health insurance plans. Ensure access to quality healthcare without financial stress.",
      items: [
        { name: "Individual Health Plans", description: "Tailored coverage for your personal health needs" },
        { name: "Family Health Plans", description: "Comprehensive protection for your entire family" },
        { name: "Senior Citizen Plans", description: "Specialized coverage for elderly care" },
        { name: "Critical Illness Cover", description: "Financial support for serious health conditions" }
      ],
      cta: "Explore Health Coverage Options"
    },
    general: {
      title: "General Insurance",
      icon: <Car className="w-12 h-12 mb-4 text-primary-600" />,
      description: "Safeguard your valuable assets with our range of general insurance products. Protect what matters most to you against unexpected events.",
      items: [
        { name: "Motor Insurance", description: "Comprehensive coverage for your vehicles" },
        { name: "Home Insurance", description: "Protect your home and belongings" },
        { name: "Travel Insurance", description: "Worry-free journeys with comprehensive coverage" },
        { name: "Personal Accident Insurance", description: "Financial protection against accidental injuries" }
      ],
      cta: "Secure Your Assets Now"
    }
  };

  return (
    <section className="mb-12 bg-gradient-to-b from-primary-50 to-white p-8 rounded-2xl shadow-soft">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Comprehensive Insurance Solutions</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(tabContent).map((tab) => (
          <motion.button
            key={tab}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-white text-primary-600 hover:bg-primary-100'
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-soft"
        >
          <div className="text-center mb-6">
            {tabContent[activeTab].icon}
            <h3 className="text-3xl font-semibold mb-4 text-primary-800">{tabContent[activeTab].title}</h3>
            <p className="text-primary-600 mb-6">{tabContent[activeTab].description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {tabContent[activeTab].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300"
              >
                <h4 className="font-semibold text-lg mb-2 text-primary-700">{item.name}</h4>
                <p className="text-primary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <motion.button
              className="btn btn-primary text-lg px-8 py-3 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tabContent[activeTab].cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Insurance;