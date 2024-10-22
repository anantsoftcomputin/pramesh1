import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leaders = [
  {
    name: "Mr. Ramchandra R. Patel",
    position: "Founder & Managing Director",
    bio: "Mr. Ramchandra Patel is the Founder & Managing Director of Pramesh Wealth Pvt. Ltd. with over two decades of rich experience in the Equity, Mutual Fund & Financial Services Field.",
    details: [
      "Main driving force behind the success of Pramesh Wealth Pvt. Ltd.",
      "Sharp business acumen and entrepreneurial skills.",
      "Constantly challenges risk-taking abilities to bring unique benefits to clients.",
      "Core strength in analyzing upcoming market and trading trends.",
      "Believes in generous investment in infrastructure and employees.",
      "Key Responsibilities:",
      "• Formulating and implementing company policy",
      "• Directing strategy for profitable growth",
      "• Developing strategic operating plans",
      "• Implementing financial control systems",
      "• Ensuring performance standards are understood and owned",
      "• Maintaining operational performance",
      "• Representing the company to HNI and Ultra HNI Clients",
      "• Building and maintaining an effective executive team",
    ],
  },
  {
    name: "Mr. Ronak N. Bhatt",
    position: "Director",
    bio: "Mr. Ronak Bhatt is the Founder and Director of Pramesh Wealth Pvt. Ltd. with over one decade of rich experience in the Equity and Financial Services Field.",
    details: [
      "Assists the Managing Director in roles, duties, and focus areas",
      "Ensures proper implementation of various business policies",
      "Reviews and suggests changes according to evolving business environments",
      "Develops overseas potential NRI Clients",
    ],
  },
  {
    name: "Mr. Ashay J. Shah",
    position: "Director",
    bio: "Mr. Ashay J. Shah holds an MBA (Finance) Degree and is Director of Pramesh Wealth Pvt. Ltd. with over one and a half decades of experience in Mutual Fund, Equity, Stock Broking and other allied Financial Products.",
    details: [
      "Monitors and handles all branches of Pramesh Wealth Pvt. Ltd.",
      "Constantly updated with technology",
      "Experienced in leading teams, customer handling, and company operations",
      "Skilled in handling trading-related operations within the organization",
    ],
  },
];

const LeaderCard = ({ leader, isActive, onClick }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-soft overflow-hidden cursor-pointer transition-all duration-300 ${
        isActive ? "ring-2 ring-primary-500" : ""
      }`}
      onClick={onClick}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary-700">
          {leader.name}
        </h3>
        <p className="text-primary-600 mb-4">{leader.position}</p>
        <p className="text-gray-600">{leader.bio}</p>
      </div>
    </div>
  );
};

const LeaderDetails = ({ leader }) => {
  return (
    <div className="bg-white rounded-lg shadow-soft p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-primary-700">
        {leader.name} - Detailed Profile
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        {leader.details.map((detail, index) => (
          <li key={index} className="text-gray-600">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

const LeadershipTeam = () => {
  const [activeLeader, setActiveLeader] = useState(null);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-primary-800">
        Our Leadership Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {leaders.map((leader, index) => (
          <LeaderCard
            key={index}
            leader={leader}
            isActive={activeLeader === index}
            onClick={() =>
              setActiveLeader(activeLeader === index ? null : index)
            }
          />
        ))}
      </div>
      <AnimatePresence>
        {activeLeader !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LeaderDetails leader={leaders[activeLeader]} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LeadershipTeam;
