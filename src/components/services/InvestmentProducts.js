import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, PiggyBank, Clock, Calculator, ArrowRight, HelpCircle, IndianRupee } from 'lucide-react';

const CalculatorWrapper = ({ title, children }) => (
  <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
    <h4 className="text-xl font-semibold mb-4 text-primary-800">{title}</h4>
    {children}
  </div>
);

const InputField = ({ label, value, onChange, min, max, step, tooltip }) => (
  <div className="mb-4 relative">
    <label className="block text-sm font-medium text-primary-700 mb-1 flex items-center">
      {label}
      {tooltip && (
        <HelpCircle
          className="w-4 h-4 ml-2 text-primary-400 cursor-help"
          onMouseEnter={() => {/* Show tooltip */}}
          onMouseLeave={() => {/* Hide tooltip */}}
        />
      )}
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

const MutualFundCalculator = () => {
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
    <CalculatorWrapper title="Mutual Fund Calculator">
      <InputField
        label="Monthly Investment"
        value={investment}
        onChange={setInvestment}
        min={500}
        max={1000000}
        step={500}
        tooltip="The amount you plan to invest each month"
      />
      <InputField
        label="Investment Period (Years)"
        value={years}
        onChange={setYears}
        min={1}
        max={40}
        step={1}
        tooltip="The total duration of your investment"
      />
      <InputField
        label="Expected Return Rate (%)"
        value={returnRate}
        onChange={setReturnRate}
        min={1}
        max={30}
        step={0.5}
        tooltip="The annual rate of return you expect on your investments"
      />
      <ResultDisplay label="Estimated Returns" value={calculateReturns()} />
    </CalculatorWrapper>
  );
};

const FixedDepositCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [tenure, setTenure] = useState(5);

  const calculateMaturityAmount = () => {
    const maturityAmount = principal * Math.pow((1 + rate / 100), tenure);
    return Math.round(maturityAmount);
  };

  return (
    <CalculatorWrapper title="Fixed Deposit Calculator">
      <InputField
        label="Principal Amount"
        value={principal}
        onChange={setPrincipal}
        min={1000}
        max={10000000}
        step={1000}
        tooltip="The initial amount you want to deposit"
      />
      <InputField
        label="Interest Rate (%)"
        value={rate}
        onChange={setRate}
        min={1}
        max={15}
        step={0.1}
        tooltip="The annual interest rate offered by the bank"
      />
      <InputField
        label="Tenure (Years)"
        value={tenure}
        onChange={setTenure}
        min={1}
        max={20}
        step={1}
        tooltip="The duration for which you want to keep your deposit"
      />
      <ResultDisplay label="Maturity Amount" value={calculateMaturityAmount()} />
    </CalculatorWrapper>
  );
};

const RetirementCalculator = () => {
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
    <CalculatorWrapper title="Retirement Calculator">
      <InputField
        label="Current Age"
        value={currentAge}
        onChange={setCurrentAge}
        min={18}
        max={100}
        step={1}
        tooltip="Your current age"
      />
      <InputField
        label="Retirement Age"
        value={retirementAge}
        onChange={setRetirementAge}
        min={45}
        max={100}
        step={1}
        tooltip="The age at which you plan to retire"
      />
      <InputField
        label="Monthly Expense"
        value={monthlyExpense}
        onChange={setMonthlyExpense}
        min={10000}
        max={1000000}
        step={1000}
        tooltip="Your estimated monthly expenses after retirement"
      />
      <InputField
        label="Expected Inflation (%)"
        value={inflation}
        onChange={setInflation}
        min={1}
        max={15}
        step={0.5}
        tooltip="The expected average inflation rate"
      />
      <ResultDisplay label="Retirement Corpus Needed" value={calculateCorpusNeeded()} />
    </CalculatorWrapper>
  );
};

const TaxSavingCalculator = () => {
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
    <CalculatorWrapper title="Tax Saving Calculator">
      <InputField
        label="Annual Income"
        value={income}
        onChange={setIncome}
        min={250000}
        max={10000000}
        step={10000}
        tooltip="Your total taxable income for the year"
      />
      <InputField
        label="Section 80C Investment"
        value={investment}
        onChange={(value) => setInvestment(Math.min(value, 150000))}
        min={0}
        max={150000}
        step={1000}
        tooltip="Your investments eligible for tax deduction under Section 80C"
      />
      <ResultDisplay label="Estimated Tax Saved" value={calculateTaxSaved()} />
    </CalculatorWrapper>
  );
};

const InvestmentProducts = () => {
  const [activeProduct, setActiveProduct] = useState('mutualFunds');

  const products = {
    mutualFunds: {
      title: "Mutual Funds",
      icon: <TrendingUp className="w-12 h-12 mb-4 text-primary-600" />,
      description: "Diversify your portfolio with our range of mutual funds. Professional management and diversification help you achieve your financial goals.",
      items: [
        { name: "Equity Funds", description: "Invest in stocks for potential high returns" },
        { name: "Debt Funds", description: "Stable returns through fixed-income securities" },
        { name: "Hybrid Funds", description: "Balance of equity and debt for moderate risk" },
        { name: "Index Funds", description: "Track market indices for passive investing" },
        { name: "International Funds", description: "Global exposure to diversify your portfolio" }
      ],
      calculator: <MutualFundCalculator />,
      cta: "Start Investing in Mutual Funds"
    },
    fixedDeposits: {
      title: "Fixed Deposits",
      icon: <PiggyBank className="w-12 h-12 mb-4 text-secondary-600" />,
      description: "Secure your savings with our fixed deposit options. Enjoy guaranteed returns and the safety of your principal amount.",
      items: [
        { name: "Attractive Interest Rates", description: "Competitive rates for better returns" },
        { name: "Flexible Tenures", description: "Choose from short to long-term options" },
        { name: "Cumulative & Non-Cumulative Options", description: "Reinvest or receive periodic payouts" },
        { name: "Tax Saver FD", description: "Save tax under Section 80C with a 5-year lock-in" }
      ],
      calculator: <FixedDepositCalculator />,
      cta: "Open a Fixed Deposit Account"
    },
    retirementPlans: {
      title: "Retirement Plans",
      icon: <Clock className="w-12 h-12 mb-4 text-primary-600" />,
      description: "Plan for your golden years with our retirement solutions. Ensure financial independence and peace of mind post-retirement.",
      items: [
        { name: "Pension Plans", description: "Regular income stream after retirement" },
        { name: "Deferred Annuity", description: "Start receiving payments at a future date" },
        { name: "Immediate Annuity", description: "Begin receiving payments right away" },
        { name: "Gratuity Plans", description: "Employer-provided retirement benefit" }
      ],
      calculator: <RetirementCalculator />,
      cta: "Secure Your Retirement"
    },
    taxSaving: {
      title: "Tax-saving Instruments",
      icon: <Calculator className="w-12 h-12 mb-4 text-secondary-600" />,
      description: "Maximize your savings with tax-efficient investments. Reduce your tax liability while growing your wealth.",
      items: [
        { name: "ELSS Funds", description: "Equity-linked savings with tax benefits" },
        { name: "Public Provident Fund (PPF)", description: "Long-term savings with tax-free returns" },
        { name: "National Pension System (NPS)", description: "Government-backed retirement scheme" },
        { name: "Fixed Deposits (Tax Saver)", description: "FDs with tax deduction under Section 80C" }
      ],
      calculator: <TaxSavingCalculator />,
      cta: "Optimize Your Tax Savings"
    }
  };

  return (
    <section className="mb-12 bg-gradient-to-b from-primary-50 to-white p-8 rounded-2xl shadow-soft">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Investment Products</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(products).map((product) => (
          <motion.button
            key={product}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeProduct === product
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-white text-primary-600 hover:bg-primary-100'
            }`}
            onClick={() => setActiveProduct(product)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {products[product].title}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-soft"
        >
          <div className="text-center mb-6">
            {products[activeProduct].icon}
            <h3 className="text-3xl font-semibold mb-4 text-primary-800">{products[activeProduct].title}</h3>
            <p className="text-primary-600 mb-6">{products[activeProduct].description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary-700">Key Features</h4>
              <ul className="space-y-4">
                {products[activeProduct].items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-primary-50 p-4 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300"
                  >
                    <h5 className="font-semibold text-lg mb-2 text-primary-700">{item.name}</h5>
                    <p className="text-primary-600">{item.description}</p>
                  </motion.li>
                  ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary-700">Calculator</h4>
                  {products[activeProduct].calculator}
                </div>
              </div>
              <div className="text-center">
                <motion.button
                  className="btn btn-primary text-lg px-8 py-3 inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {products[activeProduct].cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      );
    };
    
    export default InvestmentProducts;