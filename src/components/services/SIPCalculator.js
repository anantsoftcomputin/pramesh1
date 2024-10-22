import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CurrencyRupee, Calendar, TrendingUp, HelpCircle } from 'lucide-react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [chartData, setChartData] = useState([]);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = expectedReturnRate / 12 / 100;
    const months = investmentPeriod * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return Math.round(futureValue);
  };

  const totalInvestment = monthlyInvestment * investmentPeriod * 12;
  const estimatedReturns = calculateSIP() - totalInvestment;

  useEffect(() => {
    const data = [];
    for (let year = 0; year <= investmentPeriod; year++) {
      const monthlyRate = expectedReturnRate / 12 / 100;
      const months = year * 12;
      const invested = monthlyInvestment * months;
      const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      data.push({
        year,
        invested: Math.round(invested),
        totalValue: Math.round(futureValue)
      });
    }
    setChartData(data);
  }, [monthlyInvestment, investmentPeriod, expectedReturnRate]);

  const InputRange = ({ value, setValue, min, max, step, icon: Icon, label, tooltip }) => (
    <div className="mb-8 relative">
      <label className="block text-sm font-medium text-primary-700 mb-2 flex items-center">
        <Icon className="w-5 h-5 mr-2 text-primary-500" />
        {label}: {typeof value === 'number' ? value.toLocaleString() : value}
        {tooltip && (
          <HelpCircle
            className="w-4 h-4 ml-2 text-primary-400 cursor-help"
            onMouseEnter={() => setActiveTooltip(label)}
            onMouseLeave={() => setActiveTooltip(null)}
          />
        )}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
      />
      <AnimatePresence>
        {activeTooltip === label && tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-10 p-2 mt-1 text-sm text-white bg-primary-700 rounded-md shadow-lg"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const ResultCard = ({ title, value, color }) => (
    <motion.div 
      className={`bg-${color}-100 p-6 rounded-xl shadow-md`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-lg font-semibold mb-2 text-primary-700">{title}</h3>
      <p className={`text-2xl font-bold text-${color}-600`}>₹{value.toLocaleString()}</p>
    </motion.div>
  );

  return (
    <div className="bg-white p-8 rounded-2xl shadow-soft">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">SIP Calculator</h2>
      
      <InputRange
        value={monthlyInvestment}
        setValue={setMonthlyInvestment}
        min={500}
        max={100000}
        step={500}
        icon={CurrencyRupee}
        label="Monthly Investment (₹)"
        tooltip="The amount you plan to invest each month in your SIP."
      />

      <InputRange
        value={investmentPeriod}
        setValue={setInvestmentPeriod}
        min={1}
        max={30}
        step={1}
        icon={Calendar}
        label="Investment Period (years)"
        tooltip="The total duration for which you plan to continue your SIP."
      />

      <InputRange
        value={expectedReturnRate}
        setValue={setExpectedReturnRate}
        min={1}
        max={30}
        step={0.5}
        icon={TrendingUp}
        label="Expected Return Rate (%)"
        tooltip="The annual rate of return you expect on your investments."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ResultCard title="Total Investment" value={totalInvestment} color="primary" />
        <ResultCard title="Estimated Returns" value={estimatedReturns} color="secondary" />
        <ResultCard title="Total Value" value={calculateSIP()} color="primary" />
      </div>

      <div className="h-80 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="year" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#F3F4F6', border: 'none', borderRadius: '8px' }}
              itemStyle={{ color: '#374151' }}
            />
            <Line type="monotone" dataKey="invested" stroke="#8E7CC3" strokeWidth={2} name="Invested Amount" />
            <Line type="monotone" dataKey="totalValue" stroke="#C3A47C" strokeWidth={2} name="Total Value" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <motion.button 
        className="btn btn-primary w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Your SIP Journey
      </motion.button>
    </div>
  );
};

export default SIPCalculator;