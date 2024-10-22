import React, { useState } from 'react';
import { IndianRupee } from 'lucide-react';

const InputField = ({ label, value, onChange, min, max, step, tooltip }) => (
  <div className="mb-4 relative">
    <label className="block text-sm font-medium text-primary-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IndianRupee className="h-5 w-5 text-primary-400" />
      </span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="pl-10 mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
      />
    </div>
  </div>
);

const ResultDisplay = ({ label, value }) => (
  <div className="bg-white p-4 rounded-xl shadow-soft">
    <p className="text-lg font-semibold text-primary-800">{label}: <span className="text-secondary-600">₹{value.toLocaleString()}</span></p>
  </div>
);

export const MutualFundCalculator = () => {
  const [investment, setInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  const calculateReturns = () => {
    const monthlyRate = returnRate / 12 / 100;
    const months = years * 12;
    const futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return Math.round(futureValue);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">Mutual Fund Calculator</h4>
      <InputField
        label="Monthly Investment"
        value={investment}
        onChange={setInvestment}
        min={500}
        max={1000000}
        step={500}
      />
      <InputField
        label="Investment Period (Years)"
        value={years}
        onChange={setYears}
        min={1}
        max={40}
        step={1}
      />
      <InputField
        label="Expected Return Rate (%)"
        value={returnRate}
        onChange={setReturnRate}
        min={1}
        max={30}
        step={0.5}
      />
      <ResultDisplay label="Estimated Returns" value={calculateReturns()} />
    </div>
  );
};

export const FixedDepositCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [tenure, setTenure] = useState(5);

  const calculateMaturityAmount = () => {
    const maturityAmount = principal * Math.pow((1 + rate / 100), tenure);
    return Math.round(maturityAmount);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">Fixed Deposit Calculator</h4>
      <InputField
        label="Principal Amount"
        value={principal}
        onChange={setPrincipal}
        min={1000}
        max={10000000}
        step={1000}
      />
      <InputField
        label="Interest Rate (%)"
        value={rate}
        onChange={setRate}
        min={1}
        max={15}
        step={0.1}
      />
      <InputField
        label="Tenure (Years)"
        value={tenure}
        onChange={setTenure}
        min={1}
        max={20}
        step={1}
      />
      <ResultDisplay label="Maturity Amount" value={calculateMaturityAmount()} />
    </div>
  );
};

export const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);

  const calculateCorpusNeeded = () => {
    const years = retirementAge - currentAge;
    const inflationAdjustedExpense = monthlyExpense * Math.pow((1 + inflation / 100), years);
    const corpusNeeded = inflationAdjustedExpense * 12 * 20; // Assuming 20 years post-retirement
    return Math.round(corpusNeeded);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">Retirement Calculator</h4>
      <InputField
        label="Current Age"
        value={currentAge}
        onChange={setCurrentAge}
        min={18}
        max={100}
        step={1}
      />
      <InputField
        label="Retirement Age"
        value={retirementAge}
        onChange={setRetirementAge}
        min={45}
        max={100}
        step={1}
      />
      <InputField
        label="Monthly Expense"
        value={monthlyExpense}
        onChange={setMonthlyExpense}
        min={10000}
        max={1000000}
        step={1000}
      />
      <InputField
        label="Expected Inflation (%)"
        value={inflation}
        onChange={setInflation}
        min={1}
        max={15}
        step={0.5}
      />
      <ResultDisplay label="Retirement Corpus Needed" value={calculateCorpusNeeded()} />
    </div>
  );
};

export const TaxSavingCalculator = () => {
  const [income, setIncome] = useState(1000000);
  const [investment, setInvestment] = useState(150000);

  const calculateTaxSaved = () => {
    // Simplified tax calculation for demonstration
    const taxWithoutInvestment = income > 1000000 ? (income - 1000000) * 0.3 + 112500 : (income - 500000) * 0.2 + 12500;
    const taxableIncomeAfterInvestment = Math.max(income - investment, 500000);
    const taxWithInvestment = taxableIncomeAfterInvestment > 1000000 ? 
      (taxableIncomeAfterInvestment - 1000000) * 0.3 + 112500 : 
      (taxableIncomeAfterInvestment - 500000) * 0.2 + 12500;
    return Math.round(Math.max(taxWithoutInvestment - taxWithInvestment, 0));
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">Tax Saving Calculator</h4>
      <InputField
        label="Annual Income"
        value={income}
        onChange={setIncome}
        min={250000}
        max={10000000}
        step={10000}
      />
      <InputField
        label="Section 80C Investment"
        value={investment}
        onChange={(value) => setInvestment(Math.min(value, 150000))}
        min={0}
        max={150000}
        step={1000}
      />
      <ResultDisplay label="Estimated Tax Saved" value={calculateTaxSaved()} />
    </div>
  );
};