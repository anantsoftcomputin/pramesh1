import React from 'react';

const MissionVision = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Our Mission & Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p>To empower individuals and families to achieve financial freedom through expert guidance, innovative solutions, and unwavering commitment to their success.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p>To be India's most trusted wealth management partner, known for our integrity, expertise, and client-centric approach in helping people build and preserve wealth.</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;