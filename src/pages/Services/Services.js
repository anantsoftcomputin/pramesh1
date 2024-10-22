import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart2,
  Shield,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SIP from "./services/SIP";
import Insurance from "./services/Insurance";
import InvestmentProducts from "./services/InvestmentProducts";
import FAQs from "../../components/common/FAQs";

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6 bg-white rounded-lg shadow-soft">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-primary-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Services = () => {
  const [activeSection, setActiveSection] = useState("sip");

  const services = [
    { id: "sip", name: "SIPs", icon: BarChart2 },
    { id: "insurance", name: "Insurance", icon: Shield },
    { id: "investment", name: "Investment Products", icon: Briefcase },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "sip":
        return (
          <>
            <SIP />
            <div className="mt-12">
              <FAQs category="sip" />
            </div>
          </>
        );
      case "insurance":
        return (
          <>
            <Insurance />
            <div className="mt-8">
              <ExpandableSection title="Life Insurance">
                <p className="mb-4">
                  Life is full of uncertainties, but your family's financial
                  security shouldn't be one of them. Our life insurance policies
                  provide a safety net that ensures your loved ones are
                  protected, no matter what life brings.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Pure Term Plan:</strong> High coverage at low
                    premiums, offering financial protection to your family in
                    your absence.
                  </li>
                  <li>
                    <strong>Whole Life Plan:</strong> Coverage that lasts a
                    lifetime, along with wealth accumulation benefits.
                  </li>
                  <li>
                    <strong>Endowment Plan:</strong> Combine insurance with
                    savings; get a lump sum on maturity or in case of unforeseen
                    events.
                  </li>
                  <li>
                    <strong>Unit-Linked Insurance Plans (ULIPs):</strong> Enjoy
                    the dual benefits of investment and insurance.
                  </li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="Health Insurance">
                <p className="mb-4">
                  Medical emergencies can be financially draining. Our
                  comprehensive health insurance plans ensure you receive the
                  best medical care without worrying about costs.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Individual Health Plans:</strong> Customized
                    coverage catering to your specific health needs.
                  </li>
                  <li>
                    <strong>Family Health Plans:</strong> One policy to protect
                    your entire family.
                  </li>
                  <li>
                    <strong>Senior Citizen Plans:</strong> Specially designed
                    for the healthcare needs of our elders.
                  </li>
                  <li>
                    <strong>Critical Illness Cover:</strong> Receive a lump sum
                    on diagnosis of serious illnesses, aiding in recovery
                    without financial stress.
                  </li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="General Insurance">
                <p className="mb-4">
                  Safeguard the assets you've worked hard to acquire. Our
                  general insurance products offer peace of mind against
                  unforeseen events.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Motor Insurance:</strong> Comprehensive cover for
                    cars and bikes, including third-party liabilities.
                  </li>
                  <li>
                    <strong>Home Insurance:</strong> Protect your home and
                    belongings from natural calamities, theft, and other risks.
                  </li>
                  <li>
                    <strong>Travel Insurance:</strong> Journey with confidence;
                    our plans cover medical emergencies, trip cancellations, and
                    baggage loss.
                  </li>
                  <li>
                    <strong>Personal Accident Insurance:</strong> Financial
                    protection against accidental injuries or disabilities.
                  </li>
                </ul>
              </ExpandableSection>
            </div>
            <div className="mt-12">
              <FAQs category="insurance" />
            </div>
          </>
        );
      case "investment":
        return (
          <>
            <InvestmentProducts />
            <div className="mt-8">
              <ExpandableSection title="Mutual Funds">
                <p className="mb-4">
                  Mutual funds are an excellent way to invest in a diversified
                  portfolio managed by expert fund managers.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Equity Funds:</strong> Aim for higher returns by
                    investing in stocks of companies across various sectors.
                  </li>
                  <li>
                    <strong>Debt Funds:</strong> Stability and steady income
                    through investments in bonds and money market instruments.
                  </li>
                  <li>
                    <strong>Hybrid Funds:</strong> Balance risk and reward with
                    a mix of equities and debts.
                  </li>
                  <li>
                    <strong>Index Funds:</strong> Invest in funds that replicate
                    market indices like NIFTY or SENSEX.
                  </li>
                  <li>
                    <strong>International Funds:</strong> Gain exposure to
                    global markets and diversify beyond domestic investments.
                  </li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="Fixed Deposits">
                <p className="mb-4">
                  Fixed deposits are the bedrock of a stable investment
                  portfolio.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Attractive Interest Rates:</strong> Enjoy
                    competitive rates that beat traditional savings accounts.
                  </li>
                  <li>
                    <strong>Flexible Tenures:</strong> Choose from short-term to
                    long-term deposits based on your financial goals.
                  </li>
                  <li>
                    <strong>Cumulative & Non-Cumulative Options:</strong> Opt
                    for periodic interest payouts or let your interest compound.
                  </li>
                  <li>
                    <strong>Tax Saver FD:</strong> Invest up to INR 1.5 lakh
                    with a 5-year lock-in period and avail tax benefits under
                    Section 80C.
                  </li>
                </ul>
              </ExpandableSection>
              <ExpandableSection title="Alternative Investments">
                <p className="mb-4">
                  Explore unique opportunities to diversify your investment
                  portfolio.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Real Estate Investment Trusts (REITs):</strong>{" "}
                    Invest in real estate properties without the need to
                    purchase physical property.
                  </li>
                  <li>
                    <strong>Gold Bonds:</strong> Secure investment in gold with
                    the added benefit of interest earnings.
                  </li>
                  <li>
                    <strong>Peer-to-Peer Lending:</strong> Earn higher returns
                    by lending directly to verified borrowers through our
                    platform.
                  </li>
                  <li>
                    <strong>Commodity Trading:</strong> Engage in trading
                    commodities like gold, silver, and agricultural products.
                  </li>
                </ul>
              </ExpandableSection>
            </div>
            <div className="mt-12">
              <FAQs category="investment" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Our Services
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === service.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-primary-600 hover:bg-primary-100"
              }`}
              onClick={() => setActiveSection(service.id)}
            >
              <service.icon className="w-5 h-5 mr-2" />
              {service.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-soft p-8 mb-16"
        >
          {renderContent()}
        </motion.div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Expert Guidance
              </h3>
              <p>
                Our team of certified financial advisors is dedicated to helping
                you make informed decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Customized Solutions
              </h3>
              <p>
                We understand that one size doesn't fit all; we tailor our
                products to meet your unique needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Technology-Driven
              </h3>
              <p>
                Utilize our state-of-the-art online platforms for seamless
                investing and portfolio tracking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Transparent Processes
              </h3>
              <p>
                We believe in building trust through complete transparency in
                our operations.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Take the First Step Towards Financial Excellence
            </h3>
            <p className="mb-6">
              Your journey to financial prosperity is just a click away. Reach
              out to us for a personalized consultation, and let's build a
              roadmap to achieve your financial dreams together.
            </p>
            <button className="bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
