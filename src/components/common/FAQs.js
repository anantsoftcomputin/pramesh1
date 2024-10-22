import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary-200 last:border-b-0">
      <button
        className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-primary-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-5"
          >
            <p className="text-primary-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = ({ category }) => {
  const faqData = {
    sip: [
      {
        question: "Why should I invest in a SIP?",
        answer: "SIPs offer several benefits: they instill financial discipline by encouraging regular investing, provide the advantage of rupee cost averaging which can lower your overall investment cost, and have the potential for significant long-term growth through the power of compounding. They also allow you to start investing with small amounts, making it accessible for most investors."
      },
      {
        question: "Can I modify my SIP amount?",
        answer: "Absolutely! One of the key advantages of SIPs is their flexibility. You can increase or decrease your investment amount to suit your financial situation. This can be done easily through your online account or by submitting a request to your fund house. However, keep in mind that consistency in SIP investments often yields better long-term results."
      },
      {
        question: "What happens if I miss a payment?",
        answer: "Missing a SIP payment doesn't attract any penalties. Your SIP will continue as usual from the next scheduled date. However, missing payments can impact your long-term wealth creation goals. If you foresee difficulty in maintaining your SIP, consider adjusting the amount rather than missing payments. Remember, the power of SIP lies in consistent, long-term investing."
      },
      {
        question: "How do I choose the right SIP for my goals?",
        answer: "Choosing the right SIP depends on various factors including your financial goals, investment horizon, and risk tolerance. Start by clearly defining your objectives (e.g., retirement, child's education). Then, consider your investment timeline and how much risk you're comfortable with. Our financial advisors can help you assess these factors and recommend SIPs that align with your specific needs and goals."
      }
    ],
    insurance: [
      {
        question: "How do I determine how much life insurance I need?",
        answer: "Determining the right amount of life insurance depends on several factors: your current income, debts, future financial obligations (like children's education), and your family's lifestyle needs. A common rule of thumb is to have coverage that's 10-15 times your annual income. However, for a more accurate assessment, consider using our insurance calculator or consulting with our financial advisors who can help tailor a plan to your specific situation."
      },
      {
        question: "What's the difference between term and whole life insurance?",
        answer: "Term life insurance provides coverage for a specific period (e.g., 10, 20, or 30 years) and pays out if you die during that term. It's generally more affordable but doesn't build cash value. Whole life insurance, on the other hand, provides lifelong coverage and includes an investment component that builds cash value over time. While more expensive, it offers the dual benefit of protection and savings. The choice depends on your specific needs, budget, and long-term financial strategy."
      },
      {
        question: "How does critical illness cover work?",
        answer: "Critical illness cover pays out a lump sum if you're diagnosed with a specific serious illness listed in the policy. This typically includes conditions like cancer, heart attack, or stroke. The payout can be used to cover medical expenses, replace lost income, or for any other purpose. It's designed to provide financial support when you need it most, allowing you to focus on recovery without worrying about financial strain."
      }
    ],
    investment: [
      {
        question: "What's the difference between active and passive mutual funds?",
        answer: "Active mutual funds are managed by professional fund managers who actively select investments with the goal of outperforming a benchmark index. They often have higher fees due to the active management. Passive funds, also known as index funds, aim to replicate the performance of a specific market index. They generally have lower fees and are considered less risky, but they don't attempt to beat the market. The choice between active and passive depends on your investment goals, risk tolerance, and belief in market efficiency."
      },
      {
        question: "How do I start investing in mutual funds?",
        answer: "Starting to invest in mutual funds is straightforward: 1) Determine your financial goals and risk tolerance. 2) Research different types of mutual funds that align with your objectives. 3) Choose a fund house or platform to invest through. 4) Complete the KYC (Know Your Customer) process. 5) Decide on a lump sum investment or start a SIP (Systematic Investment Plan). 6) Monitor your investments regularly. Our team can guide you through each step and help you make informed decisions based on your unique financial situation."
      },
      {
        question: "What are the tax implications of investing in mutual funds?",
        answer: "The tax implications of mutual fund investments depend on the type of fund and the duration of investment. For equity funds, gains are tax-free up to ₹1 lakh per year if held for more than one year (long-term capital gains). Beyond this, they're taxed at 10%. If held for less than a year, short-term capital gains are taxed at 15%. For debt funds, gains are added to your income and taxed as per your tax slab if held for less than three years. If held for more than three years, they're taxed at 20% with indexation benefits. ELSS (Equity Linked Savings Scheme) funds offer tax deductions under Section 80C of the Income Tax Act."
      }
    ]
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white rounded-2xl shadow-soft p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData[category].map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;