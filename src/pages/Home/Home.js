import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart2,
  Shield,
  Users,
  TrendingUp,
  PiggyBank,
  Clock,
  Calculator,
  IndianRupee,
} from "lucide-react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsTicker from "./Home/NewsTicker";
import Contact from "../Contact/Contact";

// Styles for the stock ticker
const tickerStyles = `
  @keyframes ticker {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-ticker {
    animation: ticker 30s linear infinite;
  }

  .animate-ticker:hover {
    animation-play-state: paused;
  }
`;

// Hero Component
const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  // const images = [
  //   'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1600&h=600&q=80',
  //   'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&h=600&q=80',
  //   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&h=600&q=80',
  //   'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1600&h=600&q=80',
  // ];

  return (
    <div className="relative overflow-hidden h-[50vh] md:h-[60vh]">
      {/* Adjusted height */}
      {/* <Slider {...sliderSettings} className="h-full">
        {images.map((img, index) => (
          <div key={index} className="h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        ))}
      </Slider> */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 via-primary-600/50 to-primary-700/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white" /* Adjusted font sizes and margin */
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6 text-primary-100" /* Adjusted font sizes and margin */
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to={ctaLink}
                className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-bold text-base hover:bg-primary-100 transition duration-300 shadow-lg hover:shadow-xl" /* Adjusted padding and font size */
              >
                {ctaText}
                <ArrowRight className="ml-2 w-4 h-4" />{" "}
                {/* Adjusted icon size */}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stock Ticker Component
const StockTicker = () => {
  const [stockData, setStockData] = useState([
    { symbol: "SENSEX", price: "60,000.00", change: "+1.2%" },
    { symbol: "NIFTY", price: "18,000.00", change: "+0.8%" },
    { symbol: "RELIANCE", price: "2,500.00", change: "+2.1%" },
    { symbol: "TCS", price: "3,200.00", change: "-0.5%" },
    { symbol: "HDFC", price: "1,500.00", change: "+1.5%" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStockData((prevData) =>
        prevData.map((stock) => ({
          ...stock,
          price: (
            parseFloat(stock.price.replace(",", "")) +
            (Math.random() - 0.5) * 10
          ).toFixed(2),
          change: `${((Math.random() - 0.5) * 4).toFixed(1)}%`,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary-800 text-white py-2 overflow-hidden">
      <style>{tickerStyles}</style>
      <div className="flex animate-ticker">
        {stockData.concat(stockData).map((stock, index) => (
          <div key={index} className="flex items-center mx-4 whitespace-nowrap">
            <span className="font-bold">{stock.symbol}</span>
            <span className="ml-2">{stock.price}</span>
            <span
              className={`ml-2 ${
                stock.change.startsWith("-") ? "text-red-400" : "text-green-400"
              }`}
            >
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <motion.div
    className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={link} className="block">
      <Icon className="w-12 h-12 text-primary-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </Link>
  </motion.div>
);

// Calculator Components
const InputField = ({ label, value, onChange, min, max, step }) => (
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
    <p className="text-lg font-semibold text-primary-800">
      {label}:{" "}
      <span className="text-secondary-600">₹{value.toLocaleString()}</span>
    </p>
  </div>
);

const MutualFundCalculator = () => {
  const [investment, setInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  const calculateReturns = () => {
    const monthlyRate = returnRate / 12 / 100;
    const months = years * 12;
    const futureValue =
      investment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    return Math.round(futureValue);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">
        Mutual Fund Calculator
      </h4>
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

const FixedDepositCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [tenure, setTenure] = useState(5);

  const calculateMaturityAmount = () => {
    const maturityAmount = principal * Math.pow(1 + rate / 100, tenure);
    return Math.round(maturityAmount);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">
        Fixed Deposit Calculator
      </h4>
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
      <ResultDisplay
        label="Maturity Amount"
        value={calculateMaturityAmount()}
      />
    </div>
  );
};

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);

  const calculateCorpusNeeded = () => {
    const years = retirementAge - currentAge;
    const inflationAdjustedExpense =
      monthlyExpense * Math.pow(1 + inflation / 100, years);
    const corpusNeeded = inflationAdjustedExpense * 12 * 20; // Assuming 20 years post-retirement
    return Math.round(corpusNeeded);
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">
        Retirement Calculator
      </h4>
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
      <ResultDisplay
        label="Retirement Corpus Needed"
        value={calculateCorpusNeeded()}
      />
    </div>
  );
};

const TaxSavingCalculator = () => {
  const [income, setIncome] = useState(1000000);
  const [investment, setInvestment] = useState(150000);

  const calculateTaxSaved = () => {
    // Simplified tax calculation for demonstration
    const taxWithoutInvestment =
      income > 1000000
        ? (income - 1000000) * 0.3 + 112500
        : (income - 500000) * 0.2 + 12500;
    const taxableIncomeAfterInvestment = Math.max(income - investment, 500000);
    const taxWithInvestment =
      taxableIncomeAfterInvestment > 1000000
        ? (taxableIncomeAfterInvestment - 1000000) * 0.3 + 112500
        : (taxableIncomeAfterInvestment - 500000) * 0.2 + 12500;
    return Math.round(Math.max(taxWithoutInvestment - taxWithInvestment, 0));
  };

  return (
    <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
      <h4 className="text-xl font-semibold mb-4 text-primary-800">
        Tax Saving Calculator
      </h4>
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

// Main HomePage Component
const HomePage = () => {
  const [activeCalculator, setActiveCalculator] = useState("mutualFunds");

  const testimonials = [
    {
      name: "Ananya Sharma",
      text: "Working with [Your Company Name] has been a game-changer. Their personalized approach helped me clarify my goals and set me on the path to financial freedom.",
    },
    {
      name: "Rajesh Patel",
      text: "I've seen my investments grow steadily over the years. Their expert advice and diverse portfolio options have truly made a difference.",
    },
    {
      name: "Priya Mehta",
      text: "The team's dedication to understanding my unique financial situation has been impressive. I feel confident about my financial future.",
    },
    {
      name: "Vikram Singh",
      text: "The wealth management strategies provided by the team have exceeded my expectations. I've achieved financial milestones I never thought possible.",
    },
    {
      name: "Neha Gupta",
      text: "Their innovative approach to financial planning has opened up new investment avenues for me. I'm grateful for their expertise and guidance.",
    },
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <StockTicker />
      <Hero
        title="Secure Your Financial Future with Wealth Management"
        subtitle="Expert wealth management solutions tailored to your needs"
        ctaText="Start Investing Today"
        ctaLink="/contact"
        height="40vh"
      />

      {/* Services Overview */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard
            icon={BarChart2}
            title="Systematic Investment Plans (SIPs)"
            description="Invest systematically and watch your wealth grow over time."
            link="/services#sip"
          />
          <ServiceCard
            icon={Shield}
            title="Insurance"
            description="Protect your family's future with our comprehensive insurance solutions."
            link="/services#insurance"
          />
          <ServiceCard
            icon={Users}
            title="Investment Products"
            description="Explore a wide range of investment options tailored to your needs."
            link="/services#investment"
          />
        </div>
      </section>

      {/* News Ticker */}
      <NewsTicker />

      {/* Interactive Calculators */}
      <section className="py-16 px-4 bg-primary-50">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
          Financial Calculators
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: "mutualFunds", icon: TrendingUp, label: "Mutual Funds" },
              { id: "fixedDeposits", icon: PiggyBank, label: "Fixed Deposits" },
              { id: "retirement", icon: Clock, label: "Retirement" },
              { id: "taxSaving", icon: Calculator, label: "Tax Saving" },
            ].map(({ id, icon: Icon, label }) => (
              <motion.button
                key={id}
                className={`px-4 py-2 rounded-full flex items-center ${
                  activeCalculator === id
                    ? "bg-primary-500 text-white"
                    : "bg-white text-primary-600"
                }`}
                onClick={() => setActiveCalculator(id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCalculator}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeCalculator === "mutualFunds" && <MutualFundCalculator />}
              {activeCalculator === "fixedDeposits" && (
                <FixedDepositCalculator />
              )}
              {activeCalculator === "retirement" && <RetirementCalculator />}
              {activeCalculator === "taxSaving" && <TaxSavingCalculator />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-secondary-50">
        <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
          What Our Clients Say
        </h2>
        <Slider {...testimonialSettings} className="max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-xl shadow-soft h-full flex flex-col justify-between">
                <p className="italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-right">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Expert Guidance
              </h3>
              <p>
                Our team of certified financial advisors is dedicated to helping
                you make informed decisions.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Customized Solutions
              </h3>
              <p>
                We understand that one size doesn't fit all; we tailor our
                products to meet your unique needs.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Technology-Driven
              </h3>
              <p>
                Utilize our state-of-the-art online platforms for seamless
                investing and portfolio tracking.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Transparent Processes
              </h3>
              <p>
                We believe in building trust through complete transparency in
                our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <Contact />

      {/* Regulatory Information */}
      <footer className="py-8 px-4 text-center text-sm text-neutral-600">
        <p>
          Investment in securities market are subject to market risks. Read all
          scheme related documents carefully before investing.
        </p>
        <p className="mt-2">
          © 2024 Pramesh Wealth. All rights reserved. SEBI Registration No:
          XXXXXXXXXX
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
