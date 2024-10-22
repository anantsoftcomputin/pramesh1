import React from 'react';

const testimonials = [
  { name: 'Ananya Sharma', text: 'Working with Wealth Management has been a game-changer. Their personalized approach helped me clarify my goals and set me on the path to financial freedom.' },
  { name: 'Rajesh Patel', text: 'I\'ve been investing with Wealth Management for over 5 years now. Their expert advice and diverse portfolio options have significantly boosted my returns.' },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;