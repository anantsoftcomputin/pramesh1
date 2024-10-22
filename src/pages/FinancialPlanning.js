// src/pages/FinancialPlanning.js
import React from 'react';
import Layout from '../components/layout/Layout';
import GoalsAssessment from '../components/financial-planning/GoalsAssessment';
import RiskProfiling from '../components/financial-planning/RiskProfiling';
import CustomizedPlans from '../components/financial-planning/CustomizedPlans';
import PortfolioManagement from '../components/financial-planning/PortfolioManagement';

const FinancialPlanning = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Financial Planning</h1>
        <GoalsAssessment />
        <RiskProfiling />
        <CustomizedPlans />
        <PortfolioManagement />
      </div>
    </Layout>
  );
};

export default FinancialPlanning;