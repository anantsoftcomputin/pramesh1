import React from 'react';

const awards = [
  { year: '2022', title: 'Best Wealth Management Firm', organization: 'Financial Excellence Awards' },
  { year: '2021', title: 'Innovation in Financial Planning', organization: 'Fintech Innovation Summit' },
  { year: '2020', title: 'Customer Service Excellence', organization: 'National Banking Awards' },
];

const Awards = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Awards & Recognitions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-blue-600 font-semibold">{award.year}</p>
            <h3 className="text-xl font-bold mb-2">{award.title}</h3>
            <p>{award.organization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;